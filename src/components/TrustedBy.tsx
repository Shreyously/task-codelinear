import React from 'react';
import ShellsIcon from './icons/ShellsIcon';
import SmartFinderIcon from './icons/SmartFinderIcon';
import ZoomerrIcon from './icons/ZoomerrIcon';
import ArtVenueIcon from './icons/ArtVenueIcon';
import KontrastrIcon from './icons/KontrastrIcon';
import WavesMarathonIcon from './icons/WavesMarathonIcon';

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

const logoClass = "h-[16px] md:h-[18px] w-auto flex-shrink-0 object-contain";

const defaultBrands: BrandItem[] = [
  { name: 'SHELLS', logoElement: <ShellsIcon className={logoClass} /> },
  { name: 'SmartFinder', logoElement: <SmartFinderIcon className={logoClass} /> },
  { name: 'Zoomerr', logoElement: <ZoomerrIcon className={logoClass} /> },
  { name: 'ArtVenue', logoElement: <ArtVenueIcon className={logoClass} /> },
  { name: 'kontrastr', logoElement: <KontrastrIcon className={logoClass} /> },
  { name: 'WAVESMARATHON', logoElement: <WavesMarathonIcon className={logoClass} /> },
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
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 opacity-60">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center align-middle">
            {brand.logoElement ? (
              brand.logoElement
            ) : brand.logoUrl ? (
              <img src={brand.logoUrl} alt={`${brand.name} logo`} className="h-[16px] md:h-[18px] object-contain flex-shrink-0" />
            ) : (
              <div className="h-[16px] md:h-[18px] w-[16px] md:w-[18px] rounded bg-n7-muted/30 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
