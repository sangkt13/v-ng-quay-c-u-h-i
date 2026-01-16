
import React, { useState, useCallback } from 'react';
import Wheel from './components/Wheel';
import QuestionDisplay from './components/QuestionDisplay';
import { QUESTION_SETS, SPIN_DURATION, FULL_SPINS } from './constants';
import { WheelState } from './types';

const App: React.FC = () => {
  const [state, setState] = useState<WheelState>({
    isSpinning: false,
    rotation: 0,
    resultIndex: null,
  });
  const [showResult, setShowResult] = useState(false);

  const spinWheel = () => {
    if (state.isSpinning) return;

    setShowResult(false);
    
    // Choose a random index
    const newResultIndex = Math.floor(Math.random() * QUESTION_SETS.length);
    const sliceAngle = 360 / QUESTION_SETS.length;
    
    // Calculate new rotation
    // Add multiple full spins to rotation
    // The pointer is at the top (270 degrees in SVG circle starting from top)
    // To land on a slice, we need to calculate the offset
    const currentRotationBase = Math.floor(state.rotation / 360) * 360;
    const additionalRotation = (FULL_SPINS * 360);
    
    // We want the result to stop at the pointer (top: 0 degrees relative to start)
    // If resultIndex is 0, we want to stop between 0 and 90 degrees?
    // Actually, in our SVG, start is at -90 deg. 
    // To align index 'i' to the top pointer, we need the wheel to rotate by:
    // 360 - (index * sliceAngle + sliceAngle/2)
    const stopAt = 360 - (newResultIndex * sliceAngle + sliceAngle / 2);
    const newTotalRotation = currentRotationBase + additionalRotation + stopAt;

    setState(prev => ({
      ...prev,
      isSpinning: true,
      rotation: newTotalRotation,
      resultIndex: newResultIndex,
    }));

    // Reset spinning status after animation duration
    setTimeout(() => {
      setState(prev => ({ ...prev, isSpinning: false }));
    }, SPIN_DURATION);
  };

  const handleSpinEnd = useCallback(() => {
    setShowResult(true);
  }, []);

  const selectedSet = state.resultIndex !== null ? QUESTION_SETS[state.resultIndex] : null;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 flex flex-col items-center">
      <header className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
          Vòng Quay Câu Hỏi
        </h1>
        <p className="text-slate-500 font-medium text-lg">
          Chọn ngẫu nhiên 1 trong 4 tổ hợp câu hỏi thi vấn đáp
        </p>
      </header>

      <main className="max-w-2xl w-full flex flex-col items-center">
        {/* Wheel Container */}
        <div className="w-full flex justify-center mb-10">
          <Wheel 
            rotation={state.rotation} 
            isSpinning={state.isSpinning} 
            onSpinEnd={handleSpinEnd} 
          />
        </div>

        {/* Spin Button */}
        <button
          onClick={spinWheel}
          disabled={state.isSpinning}
          className={`
            px-12 py-4 rounded-full text-white font-bold text-xl shadow-xl transition-all active:scale-95
            ${state.isSpinning 
              ? 'bg-slate-300 cursor-not-allowed' 
              : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-200/50 transform hover:-translate-y-1'
            }
          `}
        >
          {state.isSpinning ? 'Đang quay...' : 'QUAY NGAY'}
        </button>

        {/* Legend */}
        {!showResult && !state.isSpinning && (
          <div className="mt-12 grid grid-cols-2 gap-4 w-full opacity-60">
            {QUESTION_SETS.map(set => (
              <div key={set.id} className="flex items-center gap-2 text-sm font-semibold">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: set.color }} />
                <span>{set.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Result Display */}
        <div className="w-full">
          <QuestionDisplay set={selectedSet} isVisible={showResult} />
        </div>
      </main>

      <footer className="mt-20 text-slate-400 text-sm flex flex-col items-center gap-2">
        <p>© 2024 - Ứng dụng hỗ trợ ôn tập Y Khoa</p>
        <div className="flex gap-4">
          <span className="bg-slate-200 px-3 py-1 rounded-full text-[10px] font-bold">YHHĐ</span>
          <span className="bg-slate-200 px-3 py-1 rounded-full text-[10px] font-bold">YHCT</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
