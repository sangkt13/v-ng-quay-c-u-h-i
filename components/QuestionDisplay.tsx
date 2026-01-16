
import React from 'react';
import { QuestionSet } from '../types';

interface QuestionDisplayProps {
  set: QuestionSet | null;
  isVisible: boolean;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ set, isVisible }) => {
  if (!set) return null;

  return (
    <div className={`mt-8 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div 
          className="p-4 text-white font-bold text-center text-xl uppercase tracking-wider"
          style={{ backgroundColor: set.color }}
        >
          {set.title}
        </div>
        <div className="p-6 space-y-6">
          {set.questions.map((q, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span 
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                style={{ backgroundColor: set.color }}
              >
                {idx + 1}
              </span>
              <p className="text-slate-700 leading-relaxed font-medium pt-1">
                {q}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionDisplay;
