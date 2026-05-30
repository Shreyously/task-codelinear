import Button from './Button';
import LaptopMockup from './LaptopMockup';
import { CB7WatermarkIcon } from './icons/CB7WatermarkIcon';
import ArrowLink from './ArrowLink';

export default function CoreBanking() {
  return (
    <section
      id="core-banking"
      className="relative isolate py-24 bg-n7-dark min-h-[680px] lg:min-h-[760px]"
    >
      <CB7WatermarkIcon />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight mb-6">
              A complete cloud-based<br />core banking.
            </h2>
            <p className="font-archivo font-normal text-base text-n7-muted leading-[1.3] tracking-normal mb-8 max-w-md">
              Faster time to market with our cloud-based core banking services
            </p>
            <Button href="#contact" variant="primary" size="lg" className="mb-4" textSize="text-[15px]" width="w-[210px]">
              request demo
            </Button>
            <div className="mt-4">
              <ArrowLink
                href="#"
                className="text-[#00B4FD] text-[14px] font-chivo font-normal leading-[1.3] tracking-[0] uppercase"
                underlineClassName="bg-n7-cyan"
              >
                Learn More
              </ArrowLink>
            </div>
          </div>

          {/* Right — AML Dashboard mockup */}
          <LaptopMockup
            src="/assets/aml-dashboard.png"
            alt="AML Dashboard"
            className="lg:justify-self-end lg:mr-[calc(min(0px,(100vw-1400px)/-2)-6rem)]"
          />
        </div>
      </div>
    </section>
  );
}
