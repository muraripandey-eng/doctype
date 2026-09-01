interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
    custom: '',
  };

  const selectedSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center justify-center ${selectedSize} ${className}`} id="dti-logo-container">
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
        <defs>
          <pattern
            id="diagonal-stripes-logo"
            width="4"
            height="4"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" strokeWidth="1.5" />
          </pattern>
          <filter id="logo-shadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.12" />
          </filter>
        </defs>
        
        {/* Outer thin black circle outline */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="3"
        />
        
        {/* Inner logo symbols grouping */}
        <g filter="url(#logo-shadow)" className="select-none pointer-events-none">
          {/* 'd' symbol - Solid, geometric sans-serif */}
          <text
            x="25"
            y="59"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="26"
            fontWeight="800"
            fill="currentColor"
            textAnchor="middle"
          >
            d
          </text>
          
          {/* Left half of 'T' - Solid Fill */}
          <path
            d="M 37 31 L 50 31 L 50 72 L 44 72 L 44 39 L 37 39 Z"
            fill="currentColor"
          />
          
          {/* Right half of 'T' - Striped Texture Fill */}
          <path
            d="M 50 31 L 63 31 L 63 39 L 56 39 L 56 72 L 50 72 Z"
            fill="url(#diagonal-stripes-logo)"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          
          {/* 'i' symbol - Elegant serif style with circular dot */}
          <text
            x="75"
            y="59"
            fontFamily="Georgia, serif"
            fontSize="26"
            fontWeight="700"
            fill="currentColor"
            textAnchor="middle"
          >
            i
          </text>
        </g>
      </svg>
    </div>
  );
}
