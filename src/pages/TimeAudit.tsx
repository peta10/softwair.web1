import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Dumbbell, Factory, Truck, Building2, HardHat, UtensilsCrossed, Hotel, 
  ShoppingBag, Scale, Home, Calculator, DollarSign, Building, Briefcase,
  Stethoscope, GraduationCap
} from 'lucide-react';
import { industries } from '../data/industryQuestionnaires';
import { useAnalytics } from '../hooks/useAnalytics';
import { useEmailSubmission } from '../hooks/useEmailSubmission';

// Import our new components
import { Step1IndustrySelection } from '../components/TimeAudit/Step1IndustrySelection';
import { Step2Questions } from '../components/TimeAudit/Step2Questions';
import { Step3ImpactAnalysis } from '../components/TimeAudit/Step3ImpactAnalysis';
import { Step4Loading } from '../components/TimeAudit/Step4Loading';
import { Step5Results } from '../components/TimeAudit/Step5Results';
import { ProgressIndicator } from '../components/TimeAudit/ProgressIndicator';

const industryIcons: Record<string, ReactNode> = {
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

// Define stricter types for the form data
interface FormData {
  industry: string;
  email: string;
  answers: Record<string, string | string[]>;
  timeSaved?: string;
  monthlyCost?: string;
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
  
  // Reset form when changing industries
  useEffect(() => {
    if (selectedIndustry) {
      setCurrentSection(0);
    }
  }, [selectedIndustry]);
  
  // Move to results screen after "calculating"
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => setStep(5), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = () => {
    if (currentSection < (selectedIndustryData?.sections.length || 0) - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      setStep(prev => prev + 1);
      // Reset to top of page for better UX
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    } else if (step > 1) {
      setStep(prev => prev - 1);
      // If going back to industry questions, set to the last section
      if (step === 3 && selectedIndustryData) {
        setCurrentSection(selectedIndustryData.sections.length - 1);
      }
    }
    // Reset to top of page for better UX
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedIndustry('');
    setCurrentSection(0);
    setFormData({
      industry: '',
      email: '',
      answers: {}
    });
    window.scrollTo(0, 0);
  };

  const handleIndustrySelect = (industryId: string) => {
    setSelectedIndustry(industryId);
    setFormData(prev => ({ 
      ...prev, 
      industry: industryId,
      answers: {} // Reset answers when industry changes
    }));
    trackEvent('select_industry', { industry: industryId });
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }));
  };

  const handleTimeSaved = (value: string) => {
    setFormData(prev => ({ ...prev, timeSaved: value }));
  };

  const handleMonthlyCost = (value: string) => {
    setFormData(prev => ({ ...prev, monthlyCost: value }));
  };

  const handleSetEmail = (email: string) => {
    setFormData(prev => ({ ...prev, email }));
  };

  const handleSubmitEmail = async (industry: string, email: string, data: object) => {
    await submitEmail('time-audit', email, {
      industry,
      ...data
    });
    
    trackEvent('join_waitlist', {
      industry,
      ...data
    });
  };

  // Function to render appropriate step component
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1IndustrySelection
            industries={industries}
            selectedIndustry={selectedIndustry}
            onIndustrySelect={handleIndustrySelect}
            onNext={handleNext}
            industryIcons={industryIcons}
          />
        );

      case 2:
        if (!selectedIndustryData || !selectedIndustryData.sections[currentSection]) {
          return null; // Guard against invalid data
        }
        return (
          <Step2Questions
            currentSection={selectedIndustryData.sections[currentSection]}
            sectionIndex={currentSection}
            totalSections={selectedIndustryData.sections.length}
            answers={formData.answers}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onBack={handleBack}
          />
        );

      case 3:
        return (
          <Step3ImpactAnalysis
            timeSaved={formData.timeSaved}
            monthlyCost={formData.monthlyCost}
            onSetTimeSaved={handleTimeSaved}
            onSetMonthlyCost={handleMonthlyCost}
            onNext={handleNext}
            onBack={handleBack}
          />
        );

      case 4:
        return <Step4Loading />;

      case 5:
        return (
          <Step5Results
            timeSaved={formData.timeSaved || ''}
            monthlyCost={formData.monthlyCost || ''}
            industry={formData.industry}
            email={formData.email}
            onSetEmail={handleSetEmail}
            onSubmitEmail={handleSubmitEmail}
            isSubmitting={isSubmitting}
            submitError={submitError}
            success={success}
            onBack={handleBack}
            onReset={handleReset}
          />
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
          
          {/* Progress indicator only shown for steps 1-3 and 5 */}
          {step !== 4 && (
            <ProgressIndicator 
              currentStep={step <= 3 ? step : 4} 
              totalSteps={4} 
            />
          )}
          
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}