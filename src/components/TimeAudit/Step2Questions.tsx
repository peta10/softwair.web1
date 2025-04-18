import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Info } from 'lucide-react';

import { OptionButton } from './OptionButton';
import { NavigationButton } from './NavigationButton';
import { Section, Question as QuestionType } from '../../data/industryQuestionnaires';
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Step2Props {
  currentSection: Section;
  sectionIndex: number;
  totalSections: number;
  answers: Record<string, any>;
  onAnswer: (questionId: string, answer: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const checkSectionCompletion = (section: Section, answers: Record<string, any>): boolean => {
  return section.questions.every(q => {
    const answer = answers[q.id];
    if (answer === undefined || answer === null) return false;
    if (q.type === 'multiple' && Array.isArray(answer) && answer.length === 0) return false;
    if (typeof answer === 'string' && answer.trim() === '') return false;
    if (q.type === 'timeEstimate' && (answer?.value === undefined || answer?.unit === undefined)) return false;
    return true;
  });
};

export const Step2Questions: React.FC<Step2Props> = ({
  currentSection,
  sectionIndex,
  totalSections,
  answers,
  onAnswer,
  onNext,
  onBack
}) => {
  const canProceed = checkSectionCompletion(currentSection, answers);

  const renderQuestionInput = (question: QuestionType) => {
    const currentAnswer = answers[question.id];

    switch (question.type) {
      case 'single':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options?.map((option) => (
              <OptionButton
                key={option}
                option={option}
                isSelected={currentAnswer === option}
                onClick={() => onAnswer(question.id, option)}
              />
            ))}
          </div>
        );
        
      case 'multiple':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options?.map((option) => (
              <div key={option} className="flex items-center space-x-3 bg-[#248AFF]/5 hover:bg-[#248AFF]/10 p-4 rounded-xl transition-all duration-300">
                <Checkbox
                  id={`${question.id}-${option}`}
                  checked={Array.isArray(currentAnswer) && currentAnswer.includes(option)}
                  onCheckedChange={(checked) => {
                    const currentSelection = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
                    if (checked) {
                      currentSelection.push(option);
                    } else {
                      const index = currentSelection.indexOf(option);
                      if (index > -1) {
                        currentSelection.splice(index, 1);
                      }
                    }
                    onAnswer(question.id, currentSelection);
                  }}
                  className="border-white/30 data-[state=checked]:bg-[#00FF79] data-[state=checked]:text-[#121316]"
                />
                <Label 
                    htmlFor={`${question.id}-${option}`} 
                    className="text-white font-medium cursor-pointer select-none"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );

      case 'scale':
        return (
           <RadioGroup
                defaultValue={currentAnswer}
                onValueChange={(value) => onAnswer(question.id, value)}
                className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4"
            >
                {question.options?.map((option, index) => (
                <Label 
                    key={option}
                    htmlFor={`${question.id}-${index}`}
                    className={`flex flex-col items-center justify-center space-y-2 rounded-xl p-4 transition-all duration-300 cursor-pointer ${ 
                        currentAnswer === option 
                        ? 'bg-[#00FF79] text-[#121316] border-[#00FF79]' 
                        : 'bg-[#248AFF]/5 hover:bg-[#248AFF]/10 text-white border border-transparent'
                    }`}
                >
                    <RadioGroupItem 
                        value={option} 
                        id={`${question.id}-${index}`} 
                        className="sr-only"
                    />
                    
                    <span className="text-2xl font-bold">{option.match(/^\d+/)?.[0] || index + 1}</span> 
                    <span className="text-center text-sm">{option.replace(/^\d+ \((.*)\)/, '$1').replace(/^\d+ /, '')}</span> 
                </Label>
                ))}
            </RadioGroup>
        );

      case 'text':
        return (
          <Textarea
            value={currentAnswer || ''}
            onChange={(e) => onAnswer(question.id, e.target.value)}
            placeholder={question.tooltip || "Your detailed answer..."}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-[#00FC61] min-h-[100px]"
          />
        );
        
      case 'timeEstimate':
         const timeOptions = 
            question.timeOptions?.hoursPerDay || 
            question.timeOptions?.hoursPerWeek || 
            question.timeOptions?.hoursPerMonth ||
            ['N/A'];
         const unitLabel = 
            question.timeOptions?.hoursPerDay ? 'Per Day' :
            question.timeOptions?.hoursPerWeek ? 'Per Week' :
            question.timeOptions?.hoursPerMonth ? 'Per Month' :
            '';
         return (
            <div className="space-y-4">
                <p className="text-sm text-[#99999A]">{`Select time spent ${unitLabel}`}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {timeOptions.map((option) => (
                    <OptionButton
                        key={option}
                        option={option}
                        isSelected={currentAnswer === option}
                        onClick={() => onAnswer(question.id, option)} 
                    />
                    ))}
                </div>
             </div>
         );

      default:
        return <p className="text-red-500">Unsupported question type: {question.type}</p>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">{currentSection.title}</h2>
          {currentSection.description && (
            <p className="text-[#99999A] mt-2 max-w-2xl">{currentSection.description}</p>
          )}
        </div>
        <div className="text-[#99999A] mt-4 sm:mt-0 flex-shrink-0">
          Section {sectionIndex + 1} of {totalSections}
        </div>
      </div>
      
      <TooltipProvider>
        <div className="space-y-12">
          {currentSection.questions.map((question) => (
            <div key={question.id} className="space-y-4 border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                {question.text}
                {question.tooltip && (
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-[#99999A] cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1a1b1e] border border-white/20 text-white p-3 max-w-xs">
                      <p>{question.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </h3>
              {renderQuestionInput(question)}
            </div>
          ))}
        </div>
      </TooltipProvider>

      <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8">
        <NavigationButton 
          onClick={onBack}
          direction="back"
        >
          Back
        </NavigationButton>
        
        <NavigationButton onClick={onNext} disabled={!canProceed}>
            {sectionIndex < totalSections - 1 ? 'Next Section' : 'Finish & Calculate'} 
        </NavigationButton>
      </div>
    </motion.div>
  );
}; 