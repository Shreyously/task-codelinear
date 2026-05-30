import React from 'react';

interface PaperlessCTAWatermarkIconProps extends React.SVGProps<SVGSVGElement> {
  text?: string;
}

export function PaperlessCTAWatermarkIcon({ text = 'CB7', className = '', ...props }: PaperlessCTAWatermarkIconProps) {
  const isN7 = text === 'N7';

  return (
    <svg
      className={className}
      viewBox="0 0 1150 427"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient
          id="paperless-cta-watermark-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="20"
          x2="980"
          y2="390"
        >
          <stop offset="0%" stopColor="#00B4FD" />
          <stop offset="100%" stopColor="#003ACE" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y={isN7 ? '390' : '360'}
        fill="none"
        stroke={isN7 ? 'url(#paperless-cta-watermark-gradient)' : '#0061B8'}
        strokeWidth={isN7 ? '1.59' : '1.2'}
        fontSize={isN7 ? '560' : '470'}
        fontFamily="Archivo, sans-serif"
        fontWeight="600"
        letterSpacing={isN7 ? '12' : '20'}
        opacity={isN7 ? '0.48' : '0.42'}
      >
        {text}
      </text>
    </svg>
  );
}
