import { useState, useEffect, ReactNode, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Dumbbell, Factory, Truck, Building2, HardHat, UtensilsCrossed, Hotel, 
  ShoppingBag, Scale, Home, Calculator, DollarSign, Building, Briefcase,
  Stethoscope, GraduationCap, Package, Shield, Megaphone, Code
} from 'lucide-react';
import { 
    industries, 
    getRelevantQuestions, 
    businessSizes, 
    userRoles,
    BusinessSize,
    Role,
    Section
} from '../data/industryQuestionnaires';
import { useAnalytics } from '../hooks/useAnalytics';
import { useEmailSubmission } from '../hooks/useEmailSubmission';

// Import step components
import { Step1Demographics } from '../components/TimeAudit/Step1Demographics';
import { Step2Questions } from '../components/TimeAudit/Step2Questions';
import { Step3ImpactAnalysis } from '../components/TimeAudit/Step3ImpactAnalysis';
import { Step4Loading } from '../components/TimeAudit/Step4Loading';
import { Step5Results } from '../components/TimeAudit/Step5Results';
import { ProgressIndicator } from '../components/TimeAudit/ProgressIndicator';

const industryIcons: Record<string, ReactNode> = {
  'it-itsm': <Monitor className="w-6 h-6 flex-shrink-0" />,
  'software-dev': <Code className="w-6 h-6 flex-shrink-0" />,
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
  'insurance': <Shield className="w-6 h-6 flex-shrink-0" />,
  'marketing': <Megaphone className="w-6 h-6 flex-shrink-0" />,
  'other': <Briefcase className="w-6 h-6 flex-shrink-0" />
};

interface FormData {
  industry: string;
  businessSize: BusinessSize | '';
  role: Role | '';
  department?: string;
  yearsInRole?: string;
  region?: string;
  techLandscape?: string;
  email: string;
  answers: Record<string, any>;
}

const TOTAL_STEPS = 4;

export function TimeAudit() {
  const { trackEvent } = useAnalytics();
  const { submitEmail, isSubmitting, error: submitError, success } = useEmailSubmission();
  const [step, setStep] = useState(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    businessSize: '',
    role: '',
    email: '',
    answers: {}
  });

  const { industry: selectedIndustryData, sections: relevantSections } = useMemo(() => {
    if (formData.industry && formData.role && formData.businessSize) {
        return getRelevantQuestions(formData.industry, formData.role, formData.businessSize);
    }
    return { industry: undefined, sections: [] };
  }, [formData.industry, formData.role, formData.businessSize]);

  const currentSectionData = relevantSections[currentSectionIndex];
  
  useEffect(() => {
      setCurrentSectionIndex(0);
  }, [relevantSections]);

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => setStep(4), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = () => {
    if (step === 1) {
       if (formData.industry && formData.role && formData.businessSize) {
            setStep(2);
            setCurrentSectionIndex(0);
            window.scrollTo(0, 0);
       } else {
           console.error("Please complete all demographic selections.");
       }
    } else if (step === 2) {
      if (currentSectionIndex < relevantSections.length - 1) {
        setCurrentSectionIndex(prev => prev + 1);
        window.scrollTo(0, 0);
      } else {
        setStep(3);
        window.scrollTo(0, 0);
        trackEvent('complete_questions', { industry: formData.industry, role: formData.role, size: formData.businessSize });
      }
    }
  };

  const handleBack = () => {
    if (step === 2) {
        if (currentSectionIndex > 0) {
            setCurrentSectionIndex(prev => prev - 1);
        } else {
            setStep(1);
        }
    } else if (step === 4) {
        setStep(2);
        setCurrentSectionIndex(relevantSections.length - 1);
    }
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setStep(1);
    setCurrentSectionIndex(0);
    setFormData({
      industry: '',
      businessSize: '',
      role: '',
      email: '',
      answers: {}
    });
    window.scrollTo(0, 0);
  };

  const handleDemographicChange = (field: keyof FormData, value: string) => {
      setFormData(prev => ({
          ...prev,
          [field]: value,
      }));
      if (field === 'industry') trackEvent('select_industry', { industry: value });
      if (field === 'role') trackEvent('select_role', { role: value });
      if (field === 'businessSize') trackEvent('select_size', { size: value });
  };

  const handleAnswer = (questionId: string, answer: any) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answer
      }
    }));
  };

  const handleSetEmail = (email: string) => {
    setFormData(prev => ({ ...prev, email }));
  };

  const handleSubmitEmail = async () => {
    if (!formData.email || !formData.industry || !formData.role || !formData.businessSize) return; 
    
    const submissionData = {
        industry: formData.industry,
        role: formData.role,
        businessSize: formData.businessSize,
        department: formData.department,
        yearsInRole: formData.yearsInRole,
        region: formData.region,
        techLandscape: formData.techLandscape,
        answers: formData.answers
    };

    await submitEmail('time-audit-v2', formData.email, submissionData);
    
    trackEvent('join_waitlist', { 
        industry: formData.industry, 
        role: formData.role, 
        size: formData.businessSize 
    });
  };

  const renderStepComponent = () => {
    switch (step) {
      case 1:
        return (
          <Step1Demographics
            industries={industries}
            businessSizes={businessSizes}
            userRoles={userRoles}
            formData={formData}
            onDemographicChange={handleDemographicChange}
            onNext={handleNext}
            industryIcons={industryIcons}
          />
        );

      case 2:
        if (!currentSectionData) {
           return <div>Loading questions...</div>; 
        }
        return (
          <Step2Questions
            key={`${currentSectionData.title}-${currentSectionIndex}`}
            currentSection={currentSectionData}
            sectionIndex={currentSectionIndex}
            totalSections={relevantSections.length}
            answers={formData.answers}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onBack={handleBack}
          />
        );

      case 3:
        return <Step4Loading />; 

      case 4:
        return (
          <Step5Results
            formData={formData}
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
          {step === 1 && (
              <>            
                <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#00FC61] to-[#248AFF] bg-clip-text text-transparent">
                    Unlock Your Business Potential: Time Audit
                </h1>
                <p className="text-xl text-[#99999A] mb-6">
                    Discover high-value automation opportunities tailored to your business. This 5-10 minute audit will analyze your operations and provide personalized insights to help you save time and boost productivity.
                </p>
                 <p className="text-md text-[#777778] mb-12">
                    Let's start by understanding your business context.
                 </p>
              </>
          )}
          
          {step > 1 && step < 4 && (
            <ProgressIndicator 
              currentStep={step -1 }
              totalSteps={TOTAL_STEPS -1}
            />
          )}
          
          <AnimatePresence mode="wait">
            {renderStepComponent()}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}