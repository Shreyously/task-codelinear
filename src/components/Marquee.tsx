import WaveHandIcon from './icons/WaveHandIcon';
import MarqueeStarIcon from './icons/MarqueeStarIcon';
import CB7Icon from './icons/CB7Icon';
import N7Icon from './icons/N7Icon';

export default function Marquee() {
  return (
    <section className="bg-[#FFFFFF] py-4 sm:py-5 overflow-hidden">
      <div className="flex w-max whitespace-nowrap animate-scroll-left md:[animation-duration:120s]">
        {[...Array(6)].map((_, rep) => (
          <div key={rep} className="flex items-center gap-4 sm:gap-10 mx-4 sm:mx-10 shrink-0">
            {/* Sequence 1: Say 👋 to the new way of banking ✳ CB7 ✳ */}
            <span className="text-2xl sm:text-3xl md:text-5xl text-black font-bold">Say</span>
            <WaveHandIcon className="h-[2.7em] sm:h-[3.2em] md:h-[4.2em] w-auto wave-hand-emoji inline-block align-middle shrink-0" />
            <span className="text-2xl sm:text-3xl md:text-5xl text-black font-bold">to the new way of banking</span>
            <MarqueeStarIcon className="h-[2.1em] sm:h-[2.5em] md:h-[3.2em] w-auto inline-block align-middle shrink-0" />
            <CB7Icon className="h-[1.9em] sm:h-[2.2em] md:h-[2.8em] w-auto inline-block align-middle shrink-0 text-n7-blue" />
            <MarqueeStarIcon className="h-[2.1em] sm:h-[2.5em] md:h-[3.2em] w-auto inline-block align-middle shrink-0" />

            {/* Sequence 2: Say 👋 to the new way of banking ✳ N7 ✳ */}
            <span className="text-2xl sm:text-3xl md:text-5xl text-black font-bold">Say</span>
            <WaveHandIcon className="h-[2.7em] sm:h-[3.2em] md:h-[4.2em] w-auto wave-hand-emoji inline-block align-middle shrink-0" />
            <span className="text-2xl sm:text-3xl md:text-5xl text-black font-bold">to the new way of banking</span>
            <MarqueeStarIcon className="h-[2.1em] sm:h-[2.5em] md:h-[3.2em] w-auto inline-block align-middle shrink-0" />
            <N7Icon className="h-[1.9em] sm:h-[2.2em] md:h-[2.8em] w-auto inline-block align-middle shrink-0 text-n7-blue" />
            <MarqueeStarIcon className="h-[2.1em] sm:h-[2.5em] md:h-[3.2em] w-auto inline-block align-middle shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
