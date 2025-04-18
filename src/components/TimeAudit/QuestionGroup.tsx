import { ReactNode } from 'react';
import { OptionButton } from './OptionButton';

interface QuestionGroupProps {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
  icon?: ReactNode;
}

export const QuestionGroup: React.FC<QuestionGroupProps> = ({
  question,
  options,
  selectedOption,
  onSelect,
  icon
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        {icon && <span className="text-[#00FF79]">{icon}</span>}
        {question}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <OptionButton
            key={option}
            option={option}
            isSelected={selectedOption === option}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}; 