import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, Timer, DollarSign, Building, Home, Calculator, Briefcase, Monitor, 
  Dumbbell, Factory, Truck, Building2, HardHat, UtensilsCrossed, Hotel, 
  ShoppingBag, Scale, Stethoscope, GraduationCap 
} from 'lucide-react';
import { industries, Industry, Section, Question } from '../data/industryQuestionnaires';
import { useAnalytics } from '../hooks/useAnalytics';

const industryIcons = {
  'it-itsm': <Monitor className="w-6 h-6 flex-shrink-0" />,
  'fitness': <Dumbbell className="w-6 h-6 flex-shrink-0" />,
  'manufacturing': <Factory className="w-6 h-6 flex-shrink-0" />,
  'logistics': <Truck className="w-6 h-6 flex-shrink-0" />,
  'property-management': <Building2 className="w-6 h-6 flex-shrink-0" />,
  'construction': <HardHat className="w-6 h-6 flex-shrink-0" />,
  'restaurant': <UtensilsCrossed className="w-6 h-6 flex-shrink-0" />,
  'hospitality': <Hotel className="w-6 h-6 flex-shrink-0" />,
  'retail': <ShoppingBag className="w-6 h-6 flex-shrink-0" />,
  'legal': <Scale className="w-6 h-6 flex-shrink-0" />,
  'real-estate': <Home className="w-6 h-6 flex-shrink-0" />,
  'accounting': <Calculator className="w-6 h-6 flex-shrink-0" />,
  'finance': <DollarSign className="w-6 h-6 flex-shrink-0" />,
  'home-services': <Building className="w-6 h-6 flex-shrink-0" />,
  'healthcare': <Stethoscope className="w-6 h-6 flex-shrink-0" />,
  'education': <GraduationCap className="w-6 h-6 flex-shrink-0" />,
  'other': <Briefcase className="w-6 h-6 flex-shrink-0" />
};
import { useEmailSubmission } from '../hooks/useEmailSubmission';

interface FormData {
  industry: string;
  email: string;
  answers: Record<string, string | string[]>;
}

export function TimeAudit() {
  const { trackEvent } = useAnalytics();
  const { submitEmail, isSubmitting, error: submitError, success } = useEmailSubmission();
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    email: '',
    answers: {}
  });

  const selectedIndustryData = industries.find(i => i.id === selectedIndustry);
  const currentSectionData = selectedIndustryData?.sections[currentSection];

  const handleNext = () => {
    if (currentSection < (selectedIndustryData?.sections.length || 0) - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setStep(step + 1);
      if (step === 3) {
        setTimeout(() => setStep(5), 3000);
      }
    }
    window.scrollTo(0, 0);
  };

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }));
  };

  const canProceed = () => {
    if (!currentSectionData) return false;
    return currentSectionData.questions.every(q => 
      formData.answers[q.id] !== undefined && 
      (Array.isArray(formData.answers[q.id]) ? 
        (formData.answers[q.id] as string[]).length > 0 : 
        formData.answers[q.id] !== '')
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8">Step 1: Select Your Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <motion.button
                  key={industry.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setSelectedIndustry(industry.id);
                    setFormData({ industry: industry.id, email: '', answers: {} });
                    trackEvent('select_industry', { industry: industry.id });
                  }}
                  className={`p-4 rounded-xl text-left flex items-center gap-4 transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-[#00FF79] text-[#121316]'
                      : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10 text-white'
                  }`}
                >
                  {industryIcons[industry.id as keyof typeof industryIcons] || industryIcons.other}
                  <span>{industry.label}</span>
                </motion.button>
              ))}
            </div>
            {selectedIndustry && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleNext}
                className="mt-8 px-8 py-4 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 flex items-center gap-2"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8">{currentSectionData?.title || 'Industry Questions'}</h2>
            
            <div className="space-y-12">
              {currentSectionData?.questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="text-xl font-semibold">{question.text}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {question.options?.map((option) => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(question.id, option)}
                        className={`p-4 rounded-xl text-left transition-all duration-300 ${
                          formData.answers[question.id] === option
                            ? 'bg-[#00FF79] text-[#121316]'
                            : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10'
                        }`}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {canProceed() && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleNext}
                className="mt-8 px-8 py-4 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 flex items-center gap-2"
              >
                {currentSection < (selectedIndustryData?.sections.length || 0) - 1 ? 'Next Section' : 'Continue'} <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8">Step 3: Impact Analysis</h2>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Timer className="w-6 h-6 text-[#00FF79]" />
                  If you could automate your most time-consuming task, how much time would you save per week?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours'].map((option) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData(prev => ({ ...prev, timeSaved: option }))}
                      className={`p-4 rounded-xl text-center transition-all duration-300 ${
                        formData.timeSaved === option
                          ? 'bg-[#00FF79] text-[#121316]'
                          : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-[#00FF79]" />
                  How much do you estimate lost time is costing your business per month?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Less than $500', '$500 - $2,000', '$2,000 - $5,000', 'More than $5,000'].map((option) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFormData(prev => ({ ...prev, monthlyCost: option }))}
                      className={`p-4 rounded-xl text-center transition-all duration-300 ${
                        formData.monthlyCost === option
                          ? 'bg-[#00FF79] text-[#121316]'
                          : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {formData.timeSaved && formData.monthlyCost && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 flex justify-center"
              >
                <button
                  onClick={handleNext}
                  className="px-8 py-4 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 flex items-center gap-2"
                >
                  Calculate Your Results <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-8"
          >
            <div className="flex flex-col items-center justify-center gap-8">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-16 h-16 border-4 border-[#00FF79] border-t-transparent rounded-full"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl text-[#99999A]"
              >
                Analyzing your responses...
              </motion.div>
              <div className="flex gap-4 mt-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-[#00FF79]"
                    animate={{
                      y: [-10, 0, -10],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl font-bold mb-8">Your Time Audit Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#248AFF]/5 p-8 rounded-xl border border-[#248AFF]/20"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#00FF79]">Time Savings</h3>
                <p className="text-4xl font-bold mb-2">
                  {formData.timeSaved === 'Less than 5 hours' ? '20' :
                   formData.timeSaved === '5-10 hours' ? '40' :
                   formData.timeSaved === '10-20 hours' ? '80' : '100'}
                </p>
                <p className="text-[#99999A]">Hours Saved Monthly</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#248AFF]/5 p-8 rounded-xl border border-[#248AFF]/20"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#00FF79]">Cost Savings</h3>
                <p className="text-4xl font-bold mb-2">
                  ${formData.monthlyCost === 'Less than $500' ? '6,000' :
                    formData.monthlyCost === '$500 - $2,000' ? '24,000' :
                    formData.monthlyCost === '$2,000 - $5,000' ? '60,000' : '100,000'}
                </p>
                <p className="text-[#99999A]">Potential Yearly Savings</p>
              </motion.div>
            </div>
            <p className="text-xl text-[#99999A]">
              Based on your responses, we've calculated your potential time and cost savings through automation.
            </p>
            <div className="bg-[#248AFF]/5 p-8 rounded-xl space-y-6">
              <h3 className="text-xl font-semibold">Want to be the first to know when we have a solution?</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const handleSubmit = async () => {
                    if (!formData.email) return;
                    
                    await submitEmail('time-audit', formData.email, {
                      industry: formData.industry,
                      time_saved: formData.timeSaved,
                      cost_savings: formData.monthlyCost
                    });
                    
                    trackEvent('join_waitlist', {
                      industry: formData.industry,
                      time_saved: formData.timeSaved,
                      cost_savings: formData.monthlyCost
                    });
                  };
                  handleSubmit();
                }}
                className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#00FC61]"
                />
                <button
                  type="submit"
                  className={`px-8 py-3 bg-[#00FF79] rounded-xl text-[#121316] font-semibold hover:bg-[#00FF79]/90 transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                </button>
              </form>
              {submitError && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 mt-4"
                >
                  {submitError}
                </motion.p>
              )}
              {success && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#00FF79] mt-4"
                >
                  Thanks! We'll notify you when we launch.
                </motion.p>
              )}
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#121316] text-white pt-32">
      <div className="container mx-auto px-8 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
            Time Audit
          </h1>
          <p className="text-xl text-[#99999A] mb-12">
            Let's identify where your business is losing valuable time and calculate the potential savings from automation.
          </p>
          
          {renderStep()}
        </motion.div>
      </div>
    </div>
  );
}