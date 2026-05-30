import React from 'react';

interface LaptopMockupProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function LaptopMockup({ src, alt = 'Laptop Mockup', className = '' }: LaptopMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Laptop Screen Frame */}
      <div
        className="relative overflow-hidden shadow-2xl pt-[14px] px-[14px] pb-[20px]"
        style={{
          width: '651.67px',
          height: '432px',
          background: 'linear-gradient(#0D0F12, #0D0F12) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box',
          border: '1.05px solid transparent',
          borderTopLeftRadius: '15.77px',
          borderTopRightRadius: '15.77px',
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px',
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-t-[8px]"
        />
      </div>

      {/* Laptop Base (Keyboard stand) */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '765.94px',
          height: '30.3px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '420px',
          background: 'linear-gradient(#16191E, #16191E) padding-box, linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%) border-box',
          border: '1.05px solid transparent',
          borderTopLeftRadius: '5.26px',
          borderTopRightRadius: '5.26px',
          borderBottomRightRadius: '14.72px',
          borderBottomLeftRadius: '14.72px',
          zIndex: 20
        }}
      />
    </div>
  );
}
