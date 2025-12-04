import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import MathText from './MathText';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onSelect: (questionId: number, optionId: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (questionId: number) => void;
  showResult?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  onSelect,
  isFavorite,
  onToggleFavorite,
  showResult = false
}) => {
  const isCorrect = selectedOptionId === question.correctOptionId;
  const [showExplanation, setShowExplanation] = useState(false);

  // Reset explanation visibility when question changes or when result is reset
  useEffect(() => {
    if (!showResult) {
      setShowExplanation(false);
    }
  }, [showResult, question.id]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-4 transition-all">
      {/* Question Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="text-lg font-medium text-slate-800 dark:text-slate-100 flex-1 mr-4">
          <span className="text-primary font-bold mr-2">{question.id}.</span>
          <MathText text={question.content} />
        </div>
        <button
          onClick={() => onToggleFavorite(question.id)}
          className={`p-2 rounded-full transition-colors ${
            isFavorite ? 'text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' : 'text-slate-300 hover:text-slate-400'
          }`}
          aria-label="收藏"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isFavorite ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => {
          let optionStyle = "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50";
          
          if (selectedOptionId === option.id) {
             optionStyle = "border-primary bg-blue-50 dark:bg-blue-900/20 text-primary";
             if (showResult && !isCorrect) {
               optionStyle = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-600";
             }
          }
          
          if (showResult && option.id === question.correctOptionId) {
            optionStyle = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600";
          }

          return (
            <div
              key={option.id}
              onClick={() => !showResult && onSelect(question.id, option.id)}
              className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${optionStyle}`}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-full border mr-3 text-sm font-bold shrink-0 ${
                selectedOptionId === option.id || (showResult && option.id === question.correctOptionId)
                  ? 'border-current' 
                  : 'border-slate-300 text-slate-500'
              }`}>
                {option.label}
              </div>
              <div className="text-sm md:text-base flex-1">
                <MathText text={option.content} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Result & Explanation */}
      {showResult && (
        <div className="mt-4 animate-fadeIn">
          <div className={`p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-3 ${
            isCorrect ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
          }`}>
            <div className="flex items-center font-bold">
              {isCorrect ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>回答正确</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                  <span>正确答案: {question.correctOptionId}</span>
                </>
              )}
            </div>
            
            <button 
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all w-full sm:w-auto flex items-center justify-center"
            >
              {showExplanation ? '收起解析' : '查看详细解析'}
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transform transition-transform ${showExplanation ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {showExplanation && (
            <div className="mt-4 p-5 bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 animate-fadeIn">
              <div className="font-bold text-lg mb-3 flex items-center border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-xl mr-2">💡</span> 解题思路与步骤
              </div>
              <div className="whitespace-pre-line leading-relaxed text-base">
                <MathText text={question.explanation} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;