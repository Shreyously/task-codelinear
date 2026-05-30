import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function CB7WatermarkIcon({ className = '', ...props }: IconProps) {
  return (
    <svg
      className={`absolute inset-0 z-0 h-full w-full pointer-events-none select-none ${className}`}
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden
      {...props}
    >
      <defs>
        <linearGradient
          id="core-banking-cb7-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="60"
          x2="0"
          y2="700"
        >
          <stop offset="0%" stopColor="#3d8fc4" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#1e5a8a" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0a1628" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <text
        x="-70"
        y="380"
        fill="none"
        stroke="url(#core-banking-cb7-gradient)"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
        fontSize="620"
        fontFamily="Archivo, sans-serif"
        fontWeight="600"
        letterSpacing="95"
        dominantBaseline="middle"
      >
        CB7
      </text>
    </svg>
  );
}
