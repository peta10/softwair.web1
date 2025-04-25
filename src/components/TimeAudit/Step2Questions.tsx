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
  // Debug check which questions are missing answers
  const unansweredQuestions = section.questions.filter(q => {
    const answer = answers[q.id];
    const isAnswered = 
      answer !== undefined && 
      answer !== null && 
      !(typeof answer === 'string' && answer.trim() === '') &&
      !(Array.isArray(answer) && answer.length === 0);
    
    if (!isAnswered) {
      console.log(`Question ${q.id} is missing an answer`);
    }
    
    return !isAnswered;
  });
  
  console.log('Unanswered questions:', unansweredQuestions.map(q => q.id));
  
  // All questions must have some answer
  return unansweredQuestions.length === 0;
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
  
  // Debug logging for the issue with timeEstimate questions
  console.log('Current section questions:', currentSection.questions);
  console.log('Current answers:', answers);
  console.log('canProceed value:', canProceed);

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
            {question.options?.map((option) => {
              const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(option);
              return (
                <OptionButton
                  key={option}
                  option={option}
                  isSelected={isSelected}
                  onClick={() => {
                    const currentSelection = Array.isArray(currentAnswer) ? [...currentAnswer] : [];
                    if (isSelected) {
                      // Remove option if already selected
                      const index = currentSelection.indexOf(option);
                      if (index > -1) {
                        currentSelection.splice(index, 1);
                      }
                    } else {
                      // Add option if not selected
                      currentSelection.push(option);
                    }
                    onAnswer(question.id, currentSelection);
                  }}
                />
              );
            })}
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
         
         // Debug log for this specific timeEstimate question
         console.log(`Question ${question.id} current answer:`, currentAnswer);
         
         return (
            <div className="space-y-4">
                <p className="text-sm text-[#99999A]">{`Select time spent ${unitLabel}`}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {timeOptions.map((option) => (
                    <OptionButton
                        key={option}
                        option={option}
                        isSelected={currentAnswer === option}
                        onClick={() => {
                          console.log(`Setting answer for ${question.id} to:`, option);
                          onAnswer(question.id, option);
                        }}
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
        
        <NavigationButton 
          onClick={() => {
            console.log('Finish button clicked, canProceed =', canProceed);
            onNext();
          }} 
          disabled={!canProceed}
        >
            {sectionIndex < totalSections - 1 ? 'Next Section' : 'Finish & Calculate'} 
        </NavigationButton>
      </div>
    </motion.div>
  );
}; 