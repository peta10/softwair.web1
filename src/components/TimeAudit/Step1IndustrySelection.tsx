import { motion } from 'framer-motion';
import { OptionButton } from './OptionButton';
import { NavigationButton } from './NavigationButton';
import { Industry } from '../../data/industryQuestionnaires';
import { ReactNode } from 'react';

interface Step1Props {
  industries: Industry[];
  selectedIndustry: string;
  onIndustrySelect: (industryId: string) => void;
  onNext: () => void;
  industryIcons: Record<string, ReactNode>;
}

export const Step1IndustrySelection: React.FC<Step1Props> = ({
  industries,
  selectedIndustry,
  onIndustrySelect,
  onNext,
  industryIcons
}) => {
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
            onClick={() => onIndustrySelect(industry.id)}
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
        <div className="flex justify-between">
          <div /> {/* Empty div for spacing */}
          <NavigationButton onClick={onNext}>
            Continue
          </NavigationButton>
        </div>
      )}
    </motion.div>
  );
}; 