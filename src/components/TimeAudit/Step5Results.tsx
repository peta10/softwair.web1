import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavigationButton } from './NavigationButton';
import { 
    BusinessSize, 
    Role, 
    Question as QuestionType, 
    Section as SectionType,
    industries // Import industries to access question definitions if needed
} from '../../data/industryQuestionnaires'; // Assuming types are exported
import { Button } from '../ui/button'; // For sharing options
import { Download, Share2, CalendarPlus, Send } from 'lucide-react';

// Define the expected structure of formData passed to this component
interface FormData {
  industry: string;
  businessSize: BusinessSize | '';
  role: Role | '';
  email: string;
  answers: Record<string, any>; 
  // Include other demographics if needed for results calculation
  department?: string;
  yearsInRole?: string;
  region?: string;
  techLandscape?: string;
}

interface Step5Props {
  formData: FormData;
  onSetEmail: (email: string) => void;
  onSubmitEmail: () => Promise<void>; // No params needed, uses formData
  isSubmitting: boolean;
  submitError: string | null;
  success: boolean;
  onBack: () => void;
  onReset: () => void;
}

// --- Placeholder Calculation Logic --- 
// TODO: Refine this significantly. Needs access to question definitions
// and more sophisticated logic based on markdown requirements.
const calculateResults = (formData: FormData) => {
    let totalHoursManual = 0;
    let potentialHoursAutomated = 0;
    let topTasks: { text: string, id: string, hours: number }[] = [];
    let automationScore = 0;

    // Find the selected industry data to potentially get question text
    // Note: This is inefficient; ideally, pass questions or pre-process results
    const industryData = industries.find(i => i.id === formData.industry);
    const allQuestions: Record<string, QuestionType> = {};
    industries.forEach(ind => ind.sections.forEach(sec => sec.questions.forEach(q => allQuestions[q.id] = q)));

    Object.entries(formData.answers).forEach(([key, value]) => {
        const question = allQuestions[key];
        if (question?.type === 'timeEstimate' && typeof value === 'string') { // Assuming simplified timeEstimate storage
             const match = value.match(/(\d+)-?(\d+)?/); 
             if (match) {
                 const avgHours = match[2] ? (parseInt(match[1]) + parseInt(match[2])) / 2 : parseInt(match[1]);
                 // Crude assumption: value represents hours per week
                 totalHoursManual += avgHours; 
                 potentialHoursAutomated += avgHours * 0.7; // Simple 70% potential
                 topTasks.push({ text: question.text || key, id: key, hours: avgHours });
             }
        }
        // Add logic for other question types influencing the score if needed
    });

    topTasks.sort((a, b) => b.hours - a.hours);
    topTasks = topTasks.slice(0, 3);

    automationScore = Math.min(100, Math.round(potentialHoursAutomated * 2.5)); // Adjusted arbitrary scaling

    const estimatedHourlyRate = formData.role === 'owner' || formData.role === 'c-suite' ? 100 : formData.role === 'director' || formData.role === 'manager' ? 75 : 50;
    const potentialYearlySavings = potentialHoursAutomated * 52 * estimatedHourlyRate; // Weekly hours * 52 * rate

    return {
        totalHoursManual: totalHoursManual.toFixed(1),
        potentialHoursAutomated: potentialHoursAutomated.toFixed(1),
        automationScore,
        topTasks,
        potentialYearlySavings: potentialYearlySavings.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }),
    };
};

// --- Component ---
export const Step5Results: React.FC<Step5Props> = ({
  formData,
  onSetEmail,
  onSubmitEmail,
  isSubmitting,
  submitError,
  success,
  onBack,
  onReset
}) => {

  const results = calculateResults(formData); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    await onSubmitEmail(); 
  };

  const getRoleSpecificTitle = () => {
      switch(formData.role) {
          case 'owner': return "Owner's Automation Opportunity";
          case 'c-suite': return "Executive Efficiency Analysis";
          case 'director': return "Director's Productivity Potential";
          case 'manager': return "Manager's Time Savings Report";
          case 'contributor': return "Personal Workflow Optimization";
          default: return "Your Time Audit Results";
      }
  };

  const getScoreDescription = (score: number) => {
      if (score >= 80) return "Excellent potential for significant time and cost savings through automation.";
      if (score >= 60) return "Strong opportunities identified for streamlining workflows and improving efficiency.";
      if (score >= 40) return "Moderate potential for automation in key areas. Focus on the top tasks identified.";
      return "Some automation potential exists, but focus may be needed on specific high-impact tasks.";
  };
  
  // TODO: Implement actual sharing/download/scheduling actions
  const handleDownloadSummary = () => { console.log("Download summary clicked"); };
  const handleScheduleConsultation = () => { console.log("Schedule consultation clicked"); };
  const handleShareResults = () => { console.log("Share results clicked"); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">{getRoleSpecificTitle()}</h2>
      
      {/* Visual Calculator Placeholder */} 
      <div className="bg-[#248AFF]/5 p-8 rounded-xl border border-[#248AFF]/20 mb-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#00FF79]">Automation Opportunity Score</h3>
          <p className="text-6xl font-bold mb-2 text-white">{results.automationScore} <span className="text-3xl">/ 100</span></p>
          <p className="text-[#99999A] max-w-md mx-auto">{getScoreDescription(results.automationScore)}</p>
          {/* TODO: Implement the visual liquid container based on business size */} 
          <div className="mt-6 h-10 w-full max-w-md mx-auto bg-white/10 rounded-full overflow-hidden border border-white/20">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00FC61] to-[#00FF79] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${results.automationScore}%` }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
          </div>
      </div>

      {/* Results Breakdown */} 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#248AFF]/5 p-8 rounded-xl border border-[#248AFF]/20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#00FF79]">Potential Time Savings</h3>
          <p className="text-4xl font-bold mb-2">{results.potentialHoursAutomated}</p>
          <p className="text-[#99999A]">Hours / Week</p>
          <p className="text-sm text-[#777778] mt-2">(Based on {results.totalHoursManual} estimated manual hours)</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#248AFF]/5 p-8 rounded-xl border border-[#248AFF]/20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#00FF79]">Estimated Cost Savings</h3>
          <p className="text-4xl font-bold mb-2">{results.potentialYearlySavings}</p>
          <p className="text-[#99999A]">Potential Yearly Savings</p>
           <p className="text-sm text-[#777778] mt-2">(Based on estimated role value)</p>
        </motion.div>
      </div>

      {/* Top Tasks for Automation */} 
      <div className="bg-[#248AFF]/5 p-8 rounded-xl border border-[#248AFF]/20 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#00FF79]">Top Automation Opportunities</h3>
          {results.topTasks.length > 0 ? (
              <ul className="space-y-4">
                {results.topTasks.map((task) => (
                    // Attempt to find original question text for better display
                    <li key={task.id} className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0 last:pb-0">
                        <span className="text-white capitalize">{task.text.replace(/-/g, ' ')}</span> 
                        <span className="text-[#99999A] text-sm font-mono">({task.hours.toFixed(1)} hrs/wk)</span>
                    </li>
                ))}
              </ul>
          ) : (
              <p className="text-center text-[#99999A]">No specific high-time tasks identified based on input.</p>
          )}
          {/* TODO: Add industry-specific recommendations */} 
      </div>

      {/* Role Specific Message */} 
       <p className="text-xl text-[#99999A] text-center">
        {formData.role === 'owner' || formData.role === 'c-suite' ? 
            "Leveraging automation can free up significant strategic time and drive substantial ROI."
        : formData.role === 'director' || formData.role === 'manager' ?
            "Automating these key tasks can boost team productivity and streamline operations."
        : "Focusing on automating repetitive tasks can enhance your personal productivity and job satisfaction."
        }
      </p>

      {/* Email Submission / Call to Action */} 
      <div className="bg-[#248AFF]/5 p-8 rounded-xl space-y-6 mt-12">
        <h3 className="text-xl font-semibold text-center">Get Your Full Report & Next Steps</h3>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => onSetEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#00FC61]"
            aria-label="Email address"
          />
          <button
            type="submit"
            className={`px-8 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 flex items-center gap-2 ${ // Added flex
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4" /> {/* Added Icon */} 
            {isSubmitting ? 'Submitting...' : 'Send Report'}
          </button>
        </form>
        {submitError && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 mt-4 text-center"
          >
            {submitError}
          </motion.p>
        )}
        {success && (
          <motion.div className="text-center space-y-4">
             <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#00FF79] mt-4"
              >
                Thanks! Your personalized report is on its way.
              </motion.p>
              {/* Sharing Options - Appear after successful submission */} 
              <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-white/10">
                   <Button 
                      variant="outline" 
                      onClick={handleDownloadSummary}
                      className="bg-transparent border-[#00FF79] text-[#00FF79] hover:bg-[#00FF79]/10 hover:text-[#00FF79]"
                   >
                      <Download className="w-4 h-4 mr-2" /> Download Summary
                  </Button>
                  <Button 
                      variant="outline" 
                      onClick={handleScheduleConsultation}
                      className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                      <CalendarPlus className="w-4 h-4 mr-2" /> Schedule Consultation
                  </Button>
                   <Button 
                      variant="outline" 
                      onClick={handleShareResults}
                      className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                      <Share2 className="w-4 h-4 mr-2" /> Share Results
                  </Button>
              </div>
          </motion.div>
        )}
      </div>
      
       {/* Navigation */} 
      <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8">
        <NavigationButton 
          onClick={onBack}
          direction="back"
        >
          Back to Questions
        </NavigationButton>
        
        <NavigationButton onClick={onReset}>
          Start Over
        </NavigationButton>
      </div>
    </motion.div>
  );
}; 