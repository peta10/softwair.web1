import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { BackgroundGradient } from '../components/ui/background-gradient';
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  number: number;
  title: string;
  description: string;
  active: boolean;
  onNext: () => void;
  isLast: boolean;
  cardRef: (element: HTMLDivElement | null) => void;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ number, title, description, active, onNext, isLast, cardRef }) => {
  return (
    <BackgroundGradient 
      containerClassName={cn(
        "rounded-lg mb-8 mx-auto",
        "w-full",
        "max-w-[600px]",
        active ? 'opacity-100' : 'opacity-50 hover:opacity-100',
        "transition-opacity duration-500"
      )}
      className="rounded-lg p-0"
      animate={active}
    >
      <div 
        className={cn(
          "relative z-10 rounded-lg",
        )}
        style={{ 
          backgroundColor: '#1a1b1f',
          border: '1px solid rgba(60, 60, 100, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          width: '100%',
          position: 'relative',
        }}
        ref={cardRef}
      >
        <div className="p-6 relative z-10" style={{ backgroundColor: '#1a1b1f', borderRadius: 'inherit' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium" style={{ color: '#00ff79' }}>
              {number < 10 ? `0${number}` : number}
            </div>
            {!isLast && active && (
              <button 
                onClick={onNext}
                className="flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110"
                style={{ 
                  backgroundColor: 'rgba(0, 255, 121, 0.1)',
                  border: '1px solid rgba(0, 255, 121, 0.3)'
                }}
              >
                <ArrowRight size={18} style={{ color: '#00ff79' }} />
              </button>
            )}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400">
            {description}
          </p>
          
          {!isLast && active && (
            <div className="relative h-12 mt-4">
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-px h-full animate-pulse"
                style={{ 
                  background: 'linear-gradient(to bottom, #00ff79, transparent)'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </BackgroundGradient>
  );
};

interface Step {
  number: number;
  title: string;
  description: string;
}

const InteractiveProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    setIsVisible(true);
    // Initialize refs array with the number of steps
    cardRefs.current = cardRefs.current.slice(0, 4);
  }, []);

  const steps: Step[] = [
    {
      number: 1,
      title: "Problem Discovery Audit",
      description: "We identify all your pain points and time-wasters through our comprehensive audit, which helps us understand your unique business challenges."
    },
    {
      number: 2,
      title: "Custom Solution Plan",
      description: "We create a detailed wireframe and proposal tailored specifically to solve your business challenges, showing you exactly how the solution will work."
    },
    {
      number: 3,
      title: "Development",
      description: "Our expert developers build your custom solution with ongoing communication throughout the process, ensuring everything meets your expectations."
    },
    {
      number: 4,
      title: "Launch & Support",
      description: "We deliver your solution and provide ongoing maintenance and support to ensure it grows with your business and continues to save you time."
    }
  ];

  const nextStep = (): void => {
    if (activeStep < steps.length) {
      const nextStepIndex = activeStep; // Because activeStep is 1-indexed and we're about to increment it
      setActiveStep(activeStep + 1);
      
      // Scroll to the next card using built-in smooth scroll
      setTimeout(() => {
        const cardElement = cardRefs.current[nextStepIndex];
        if (cardElement) {
          cardElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' // Changed from 'center' to 'nearest'
          });
        }
      }, 100); // Keep a small delay for state update
    }
  };

  const resetSteps = (): void => {
    setActiveStep(1);
    // Scroll back to the first card
    setTimeout(() => {
      if (cardRefs.current[0]) {
        cardRefs.current[0].scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' // Changed from 'center' to 'nearest'
        });
      }
    }, 100);
  };

  return (
    <div className="w-full py-16 px-4 relative" style={{ 
      backgroundColor: '#1a1b1f',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow effect */}
      <div 
        className="absolute w-full h-full opacity-30 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 121, 0.15), transparent 60%)',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      />
      
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4" 
            style={{ 
              backgroundColor: 'rgba(0, 255, 121, 0.1)', 
              color: '#00ff79',
              border: '1px solid rgba(0, 255, 121, 0.3)'
            }}>
            Our Process
          </div>
          <h2 className="text-4xl font-bold mb-3 text-white">Our Process,</h2>
          <h3 className="text-4xl font-bold mb-6 text-gray-400">Step by Step</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            From the initial proposal to the final product at your hand.
            A clear view of what you can expect at every stage!
          </p>
          {activeStep > 1 && (
            <button 
              onClick={resetSteps}
              className="text-sm font-medium py-2 px-4 rounded-lg transition-all duration-300"
              style={{ 
                color: '#00ff79',
                border: '1px solid rgba(0, 255, 121, 0.3)',
                backgroundColor: 'rgba(0, 255, 121, 0.05)'
              }}
            >
              Start Over
            </button>
          )}
        </div>
        
        {/* Process Cards */}
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {steps.slice(0, activeStep).map((step, index) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              active={index === activeStep - 1}
              onNext={nextStep}
              isLast={step.number === steps.length}
              cardRef={(el) => cardRefs.current[index] = el}
            />
          ))}
          
          {/* Progress indicator */}
          <div className="flex justify-center items-center mt-8 mb-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="mx-1 rounded-full transition-all duration-300"
                style={{ 
                  width: index < activeStep ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: index < activeStep ? '#00ff79' : 'rgba(60, 60, 100, 0.3)',
                  boxShadow: index < activeStep ? '0 0 10px rgba(0, 255, 121, 0.4)' : 'none'
                }}
              />
            ))}
          </div>
          
          {/* Step counter */}
          <div className="text-center text-gray-400 text-sm mb-12">
            Step {activeStep} of {steps.length}
          </div>
          
          {/* Partner label */}
          <div className="text-center">
            <p className="text-gray-400 text-sm italic">Your all-in-one automation partner.</p>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300" 
            style={{ 
              backgroundColor: '#00ff79', 
              boxShadow: '0 0 20px rgba(0, 255, 121, 0.3)'
            }}>
            Start Your Problem Discovery Audit →
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveProcessFlow;