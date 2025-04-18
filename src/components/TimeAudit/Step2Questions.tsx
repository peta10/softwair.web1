import { motion } from 'framer-motion';
import { OptionButton } from './OptionButton';
import { NavigationButton } from './NavigationButton';
import { Section, Question } from '../../data/industryQuestionnaires';

interface Step2Props {
  currentSection: Section;
  sectionIndex: number;
  totalSections: number;
  answers: Record<string, string | string[]>;
  onAnswer: (questionId: string, answer: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step2Questions: React.FC<Step2Props> = ({
  currentSection,
  sectionIndex,
  totalSections,
  answers,
  onAnswer,
  onNext,
  onBack
}) => {
  const canProceed = currentSection.questions.every(q => 
    answers[q.id] !== undefined && 
    (Array.isArray(answers[q.id]) ? 
      (answers[q.id] as string[]).length > 0 : 
      answers[q.id] !== '')
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">{currentSection.title}</h2>
        <div className="text-[#99999A] mt-2 sm:mt-0">
          Section {sectionIndex + 1} of {totalSections}
        </div>
      </div>
      
      <div className="space-y-12">
        {currentSection.questions.map((question) => (
          <div key={question.id} className="space-y-4">
            <h3 className="text-xl font-semibold">{question.text}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {question.options?.map((option) => (
                <OptionButton
                  key={option}
                  option={option}
                  isSelected={answers[question.id] === option}
                  onClick={() => onAnswer(question.id, option)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <NavigationButton 
          onClick={onBack}
          direction="back"
        >
          Back
        </NavigationButton>
        
        {canProceed && (
          <NavigationButton onClick={onNext}>
            {sectionIndex < totalSections - 1 ? 'Next Section' : 'Continue'}
          </NavigationButton>
        )}
      </div>
    </motion.div>
  );
}; 