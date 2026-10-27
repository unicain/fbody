import React from 'react';

interface FrequencyLogoProps {
  variant?: 'full' | 'mark' | 'horizontal';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
}

export const FrequencyLogo: React.FC<FrequencyLogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md',
  lightText = false,
}) => {
  // Dimensions scaling
  const scaleMap = {
    sm: { width: 140, height: 50, markSize: 36 },
    md: { width: 210, height: 75, markSize: 52 },
    lg: { width: 280, height: 100, markSize: 68 },
    xl: { width: 340, height: 120, markSize: 84 },
  };

  const { markSize } = scaleMap[size];

  // SVG Mark that mirrors the official Frequency Body logo
  const renderMark = () => (
    <svg
      viewBox="0 0 200 130"
      className="overflow-visible"
      style={{ width: markSize, height: markSize * 0.65 }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Arc Gradient: Cyan to Violet */}
        <linearGradient id="arcGradEditorial" x1="20" y1="20" x2="180" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7E22CE" />
        </linearGradient>

        {/* Pulse Line Gradient */}
        <linearGradient id="waveGradEditorial" x1="0" y1="100" x2="200" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
          <stop offset="25%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="75%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glowPinkEditorial" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Stopwatch Arc with Arrow Head */}
      <path
        d="M 68 82 A 46 46 0 0 1 65 65"
        stroke="#0284C7"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      <path
        d="M 72 45 A 46 46 0 1 1 135 78"
        stroke="url(#arcGradEditorial)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Arrow head */}
      <polygon
        points="132,68 147,78 130,86"
        fill="#7E22CE"
      />

      {/* Clock Hands: Hour and Minute */}
      <line
        x1="100"
        y1="52"
        x2="81"
        y2="33"
        stroke="#202126"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="100"
        y1="52"
        x2="135"
        y2="17"
        stroke="#202126"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Center Pivot Circles */}
      <circle cx="100" cy="52" r="5" fill="#202126" />
      <circle cx="100" cy="52" r="2.5" fill="#FFFFFF" />
      <circle cx="100" cy="62" r="3.5" fill="#2563EB" />

      {/* Heartbeat / Frequency Wave Line */}
      <path
        d="M 5 95 L 60 95 Q 67 95 72 98 L 78 93 L 83 99 L 90 91 L 96 102 L 102 89 L 108 102 L 114 92 L 120 98 L 126 94 L 132 99 L 138 92 L 145 95 L 195 95"
        stroke="url(#waveGradEditorial)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Glowing Energy Accent */}
      <circle
        cx="96"
        cy="91"
        r="4"
        fill="#EC4899"
        filter="url(#glowPinkEditorial)"
        opacity="0.85"
      />
      <circle cx="96" cy="91" r="2" fill="#FFFFFF" />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{renderMark()}</div>;
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        {renderMark()}
        <div className="flex flex-col">
          <span className="font-extrabold tracking-wider font-sans text-xl sm:text-2xl leading-none text-[#202126]">
            FREQUENCY BODY
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.28em] font-medium uppercase mt-0.5 text-[#5A6065]">
            EletroEstimulação
          </span>
        </div>
      </div>
    );
  }

  // Full stacked version
  return (
    <div className={`inline-flex flex-col items-center justify-center text-center select-none ${className}`}>
      {renderMark()}
      <div className="mt-1 flex flex-col items-center">
        <h1 className="font-sans font-bold tracking-[0.14em] text-xl sm:text-2xl lg:text-[26px] leading-tight text-[#202126]">
          FREQUENCY BODY
        </h1>
        <p className="text-[10px] sm:text-[11px] lg:text-xs tracking-[0.34em] font-medium uppercase mt-0.5 text-[#5A6065]">
          EletroEstimulação
        </p>
      </div>
    </div>
  );
};
