import React from 'react';

export interface BrandItem {
  name: string;
  logoUrl?: string; // Optional image URL for logo
  logoElement?: React.ReactNode; // Optional custom react element/SVG for logo
}

export interface TrustedByProps {
  title?: string;
  brands?: BrandItem[];
  className?: string;
}

const defaultBrands: BrandItem[] = [
  { name: 'SHELLS' },
  { name: 'SmartFinder' },
  { name: 'Zoomerr' },
  { name: 'ArtVenue' },
  { name: 'kontrastr' },
  { name: 'WAVESMARATHON' },
];

export default function TrustedBy({
  title = 'Trusted By:',
  brands = defaultBrands,
  className = '',
}: TrustedByProps) {
  return (
    <div className={`mt-24 lg:mt-32 ${className}`}>
      <p className="font-roboto font-bold text-[13.8px] text-n7-muted leading-[1.1] tracking-[0] mb-4">
        {title}
      </p>
      <div className="flex flex-wrap items-center gap-8 opacity-60">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center gap-2 align-middle">
            {brand.logoElement ? (
              brand.logoElement
            ) : brand.logoUrl ? (
              <img src={brand.logoUrl} alt={`${brand.name} logo`} className="w-5 h-5 object-contain flex-shrink-0" />
            ) : (
              <div className="w-5 h-5 rounded bg-n7-muted/30 flex-shrink-0" />
            )}
            <span className="font-roboto font-bold text-[13.8px] text-n7-muted leading-[1.1] tracking-[0] align-middle select-none">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
