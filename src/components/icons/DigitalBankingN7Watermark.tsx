import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function DigitalBankingN7Watermark({ className = '', ...props }: IconProps) {
  return (
    <svg
      className={`h-full w-full opacity-[0.42] ${className}`}
      viewBox="0 0 900 400"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient id="digital-banking-n7-gradient" x1="0" y1="0" x2="900" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00B4FD" />
          <stop offset="100%" stopColor="#003ACE" />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="72%"
        textAnchor="middle"
        fill="none"
        stroke="url(#digital-banking-n7-gradient)"
        strokeWidth="1.35"
        fontSize="470"
        fontFamily="Archivo, sans-serif"
        fontWeight="600"
        letterSpacing="8"
      >
        N7
      </text>
    </svg>
  );
}
