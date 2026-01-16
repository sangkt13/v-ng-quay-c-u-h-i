
import React, { useRef, useEffect } from 'react';
import { QUESTION_SETS } from '../constants';

interface WheelProps {
  rotation: number;
  isSpinning: boolean;
  onSpinEnd: () => void;
}

const Wheel: React.FC<WheelProps> = ({ rotation, isSpinning, onSpinEnd }) => {
  const wheelRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!isSpinning && rotation !== 0) {
      // Small timeout to allow the transition to finish before showing the result
      const timer = setTimeout(() => {
        onSpinEnd();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isSpinning, rotation, onSpinEnd]);

  const renderSlices = () => {
    const sliceAngle = 360 / QUESTION_SETS.length;
    return QUESTION_SETS.map((set, index) => {
      const startAngle = index * sliceAngle;
      const endAngle = (index + 1) * sliceAngle;
      
      // Calculate coordinates for SVG arc
      const x1 = 200 + 180 * Math.cos((Math.PI * (startAngle - 90)) / 180);
      const y1 = 200 + 180 * Math.sin((Math.PI * (startAngle - 90)) / 180);
      const x2 = 200 + 180 * Math.cos((Math.PI * (endAngle - 90)) / 180);
      const y2 = 200 + 180 * Math.sin((Math.PI * (endAngle - 90)) / 180);

      const pathData = `M 200 200 L ${x1} ${y1} A 180 180 0 0 1 ${x2} ${y2} Z`;

      return (
        <g key={set.id}>
          <path
            d={pathData}
            fill={set.color}
            stroke="#ffffff"
            strokeWidth="2"
          />
          <text
            x="200"
            y="60"
            fill="white"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
            transform={`rotate(${startAngle + sliceAngle / 2}, 200, 200)`}
          >
            {set.title}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
      {/* Pointer */}
      <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-10 bg-red-600 clip-path-polygon" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
      </div>

      <svg
        ref={wheelRef}
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-2xl transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.15, 1)"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <circle cx="200" cy="200" r="190" fill="#ffffff" stroke="#e2e8f0" strokeWidth="8" />
        {renderSlices()}
        {/* Center hub */}
        <circle cx="200" cy="200" r="25" fill="#ffffff" stroke="#e2e8f0" strokeWidth="5" />
        <circle cx="200" cy="200" r="15" fill="#334155" />
      </svg>
    </div>
  );
};

export default Wheel;
