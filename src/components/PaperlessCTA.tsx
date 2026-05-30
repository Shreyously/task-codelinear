import Button from './Button';
import { PaperlessCTAWatermarkIcon } from './icons/PaperlessCTAWatermarkIcon';

type PaperlessCTAProps = {
  background?: 'dark' | 'light';
  text?: string;
  noBackground?: boolean;
};

export default function PaperlessCTA({ background = 'dark', text = 'CB7', noBackground = false }: PaperlessCTAProps) {
  const sectionBackground = noBackground ? 'bg-transparent' : (background === 'light' ? 'bg-[#E9F4F9]' : 'bg-[#000D12]');
  const isN7 = text === 'N7';
  const watermarkClass = isN7
    ? 'absolute top-[-16%] right-[-48%] z-0 h-[124%] w-[1120px] max-w-none pointer-events-none select-none md:right-[-38%] lg:right-[-33%]'
    : 'absolute top-[-32%] left-[28%] z-0 h-[142%] w-[1150px] max-w-none pointer-events-none select-none md:left-[29%]';
  const watermarkLayerClass = 'absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[27px]';

  return (
    <section className={`relative ${sectionBackground} py-20 overflow-hidden`}>
      {!noBackground && background === 'light' && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.16] bg-[linear-gradient(100.92deg,#00CFFD_35.49%,#0015CE_82.38%)] [mask-image:radial-gradient(ellipse_95%_130%_at_0%_100%,#000_0%,rgba(0,0,0,0.55)_42%,transparent_78%)]"
          aria-hidden
        />
      )}
      <div className="relative z-30 mx-auto w-[calc(100%-2rem)] max-w-[1340px]">
        <div className={`relative isolate min-h-[427px] ${noBackground ? 'py-16' : 'overflow-hidden rounded-[27px] bg-[linear-gradient(99.21deg,#031E2A_-12.22%,#000D12_59.26%)] px-8 py-16 md:px-[65px]'} lg:flex lg:items-center lg:justify-between lg:gap-14`}>
          {!noBackground && (
            <div className={watermarkLayerClass}>
              {/* Soft, highly-blurred backdrop glow blob */}
              <div className="absolute -left-[5%] top-[15%] w-[480px] h-[320px] rounded-full bg-[#00B4FD]/12 blur-[120px] pointer-events-none z-0" />
              <PaperlessCTAWatermarkIcon
                text={text}
                className={watermarkClass}
              />
              <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-[#000D12] via-[#000D12]/75 to-transparent pointer-events-none z-10" />
            </div>
          )}

          <div className="relative z-10 max-w-[590px]">
            <h2 className="font-archivo text-[42px] font-normal leading-[1.28] tracking-normal text-[#E9F4F9] md:text-[52px] md:leading-[1.25]">
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className="mt-8 max-w-[510px] font-archivo text-base font-normal leading-[1.3] tracking-normal text-[#B8C7CE]">
              {text} helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div className="relative z-10 mt-12 flex flex-wrap gap-10 lg:mt-0 lg:mr-[39px] lg:flex-nowrap">
            <Button href="#contact" variant="secondary" size="lg" textSize="text-[15px]" width="w-[208px]">
              contact us
            </Button>
            <Button href="#contact" variant="primary" size="lg" textSize="text-[15px]" width="w-[210px]">
              request demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
