import { useState } from 'react';
import { motion } from 'framer-motion';
import { NavigationButton } from './NavigationButton';

interface Step5Props {
  timeSaved: string;
  monthlyCost: string;
  industry: string;
  email: string;
  onSetEmail: (email: string) => void;
  onSubmitEmail: (industry: string, email: string, data: object) => Promise<void>;
  isSubmitting: boolean;
  submitError: string | null;
  success: boolean;
  onBack: () => void;
  onReset: () => void;
}

export const Step5Results: React.FC<Step5Props> = ({
  timeSaved,
  monthlyCost,
  industry,
  email,
  onSetEmail,
  onSubmitEmail,
  isSubmitting,
  submitError,
  success,
  onBack,
  onReset
}) => {
  const getTimeSavingsValue = () => {
    switch (timeSaved) {
      case 'Less than 5 hours': return '20';
      case '5-10 hours': return '40';
      case '10-20 hours': return '80';
      case 'More than 20 hours': return '100';
      default: return '0';
    }
  };

  const getCostSavingsValue = () => {
    switch (monthlyCost) {
      case 'Less than $500': return '6,000';
      case '$500 - $2,000': return '24,000';
      case '$2,000 - $5,000': return '60,000';
      case 'More than $5,000': return '100,000';
      default: return '0';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    await onSubmitEmail(industry, email, {
      time_saved: timeSaved,
      cost_savings: monthlyCost
    });
  };

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
          <p className="text-4xl font-bold mb-2">{getTimeSavingsValue()}</p>
          <p className="text-[#99999A]">Hours Saved Monthly</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#248AFF]/5 p-8 rounded-xl border border-[#248AFF]/20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#00FF79]">Cost Savings</h3>
          <p className="text-4xl font-bold mb-2">${getCostSavingsValue()}</p>
          <p className="text-[#99999A]">Potential Yearly Savings</p>
        </motion.div>
      </div>
      <p className="text-xl text-[#99999A]">
        Based on your responses, we've calculated your potential time and cost savings through automation.
      </p>
      <div className="bg-[#248AFF]/5 p-8 rounded-xl space-y-6">
        <h3 className="text-xl font-semibold">Want to be the first to know when we have a solution?</h3>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => onSetEmail(e.target.value)}
            className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:border-[#00FC61]"
            aria-label="Email address"
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
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <NavigationButton 
          onClick={onBack}
          direction="back"
        >
          Back
        </NavigationButton>
        
        {success && (
          <NavigationButton onClick={onReset}>
            Start Over
          </NavigationButton>
        )}
      </div>
    </motion.div>
  );
}; 