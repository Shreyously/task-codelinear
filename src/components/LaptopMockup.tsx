import React from 'react';

interface LaptopMockupProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function LaptopMockup({ src, alt = 'Laptop Mockup', className = '' }: LaptopMockupProps) {
  return (
    <div className={`relative mx-auto w-full max-w-[651.67px] pb-[4.6%] sm:min-w-[0] ${className}`}>
      {/* Laptop Screen Frame */}
      <div
        className="relative aspect-[651.67/432] w-full overflow-hidden shadow-2xl p-[2.15%] pb-[3.05%]"
        style={{
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
        className="absolute bottom-0 left-1/2 h-[7%] w-full -translate-x-1/2 pointer-events-none sm:w-[117.54%]"
        style={{
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
