import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function DigitalBankingRight7Watermark({ className = '', ...props }: IconProps) {
  return (
    <svg
      className={`pointer-events-none absolute right-[-670px] bottom-0 z-20 h-[1580px] w-[1220px] select-none overflow-visible opacity-[0.24] ${className}`}
      viewBox="0 0 1200 1260"
      fill="none"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient id="digital-banking-right-n7-gradient" x1="0" y1="0" x2="900" y2="650" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B4FD" />
          <stop offset="1" stopColor="#003ACE" />
        </linearGradient>
      </defs>
      <text
        x="40"
        y="1800"
        fill="none"
        stroke="url(#digital-banking-right-n7-gradient)"
        strokeWidth="1.35"
        fontSize="1500"
        fontFamily="Archivo, sans-serif"
        fontWeight="600"
        letterSpacing="8"
      >
        7
      </text>
    </svg>
  );
}
