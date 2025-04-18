import { motion } from 'framer-motion';
import { Timer, DollarSign } from 'lucide-react';
import { NavigationButton } from './NavigationButton';
import { QuestionGroup } from './QuestionGroup';

interface Step3Props {
  timeSaved: string | undefined;
  monthlyCost: string | undefined;
  onSetTimeSaved: (value: string) => void;
  onSetMonthlyCost: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step3ImpactAnalysis: React.FC<Step3Props> = ({
  timeSaved,
  monthlyCost,
  onSetTimeSaved,
  onSetMonthlyCost,
  onNext,
  onBack
}) => {
  const timeOptions = ['Less than 5 hours', '5-10 hours', '10-20 hours', 'More than 20 hours'];
  const costOptions = ['Less than $500', '$500 - $2,000', '$2,000 - $5,000', 'More than $5,000'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold mb-8">Step 3: Impact Analysis</h2>
      
      <div className="space-y-12">
        <QuestionGroup
          question="If you could automate your most time-consuming task, how much time would you save per week?"
          options={timeOptions}
          selectedOption={timeSaved || null}
          onSelect={onSetTimeSaved}
          icon={<Timer className="w-6 h-6" />}
        />

        <QuestionGroup
          question="How much do you estimate lost time is costing your business per month?"
          options={costOptions}
          selectedOption={monthlyCost || null}
          onSelect={onSetMonthlyCost}
          icon={<DollarSign className="w-6 h-6" />}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <NavigationButton 
          onClick={onBack}
          direction="back"
        >
          Back
        </NavigationButton>
        
        {timeSaved && monthlyCost && (
          <NavigationButton onClick={onNext}>
            Calculate Your Results
          </NavigationButton>
        )}
      </div>
    </motion.div>
  );
}; 