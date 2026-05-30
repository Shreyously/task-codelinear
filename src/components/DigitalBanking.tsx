import Button from './Button';
import { DigitalBankingOrbitIcon } from './icons/DigitalBankingOrbitIcon';
import { DigitalBankingN7Watermark } from './icons/DigitalBankingN7Watermark';
import { DigitalBankingRight7Watermark } from './icons/DigitalBankingRight7Watermark';
import { FeatureBlock } from './DigitalBankingParts';
import ArrowLink from './ArrowLink';

export default function DigitalBanking() {
  return (
    <section id="digital-banking" className="relative z-10 pt-20 sm:pt-28 lg:pt-40 pb-0 bg-[#E9F4F9] overflow-x-clip overflow-y-visible">
      {/* Decorative circles */}
      <div className="deco-circle hidden md:block w-[600px] h-[600px] -right-[10%] top-[5%] opacity-30 border-gray-300/30" />
      <div className="deco-circle hidden md:block w-[400px] h-[400px] -left-[5%] bottom-[10%] opacity-20 border-gray-300/30" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 lg:space-y-40">

        {/* ─── Section 1: Hero — title | phone | compliance ─── */}
        <div className="relative">
          <DigitalBankingOrbitIcon className="hidden lg:block" />

          <div className="pointer-events-none absolute left-[2%] top-[-8%] z-0 hidden h-[min(92vw,610px)] w-[min(112vw,1030px)] select-none sm:block lg:left-[7%] lg:top-[-18%]">
            <DigitalBankingN7Watermark />
            <div className="absolute inset-x-0 top-[38%] bottom-0 bg-[linear-gradient(to_bottom,rgba(233,244,249,0)_0%,rgba(233,244,249,0.82)_28%,#E9F4F9_52%,#E9F4F9_100%)]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 items-start">
            {/* Col 1 — Title & CTA */}
            <div className="min-w-0">
              <h2 className="font-archivo font-normal text-[36px] sm:text-[40px] xl:text-[53px] leading-[120%] tracking-[0] text-gray-900 mb-4">
                Digital banking<br />out-of-the-box
              </h2>
              <p className="text-gray-500 text-sm xl:text-base mb-8 max-w-md leading-relaxed">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>
              <Button 
                href="#contact" 
                variant="primary" 
                size="lg" 
                className="mb-4 hover:shadow-[0_0_15px_rgba(255,255,255,1)]" 
                textSize="text-[14px]" 
                width="w-full sm:w-[210px]"
                hoverBgColor="hover:bg-[#E2F0F6]"
              >
                request demo
              </Button>
              <br />
              <ArrowLink
                href="#"
                className="text-n7-blue text-xs font-semibold tracking-wider uppercase mt-2"
                underlineClassName="bg-n7-blue"
                iconColor="#2563eb"
              >
                Learn More
              </ArrowLink>
            </div>

            {/* Col 2 — Phone 1 */}
            <div className="flex justify-center min-w-0">
              <img src="/assets/iphone-p1.png" alt="Digital Banking App" className="w-56 sm:w-64 lg:w-72 drop-shadow-2xl" />
            </div>

            {/* Col 3 — Fully compliant */}
            <FeatureBlock
              className="min-w-0 lg:max-w-[320px] lg:justify-self-start"
              title="Fully compliant with regulatory requirement"
              description="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank&apos;s operational-risk protocols and procedures."
              items={['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core']}
              iconSize="w-6 h-6"
              checkSize="w-3.5 h-3.5"
            />
          </div>
        </div>

        {/* ─── Section 2: No legacy IT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 items-center">
          <div className="hidden lg:block" aria-hidden />

          <FeatureBlock
            className="order-2 min-w-0 max-w-[360px] lg:order-none lg:max-w-[285px] lg:justify-self-center"
            title="No legacy IT systems"
            description="Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance."
            items={['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO']}
          />

          {/* Phone 2 */}
          <div className="order-1 flex justify-center lg:order-none lg:justify-self-start">
            <img src="/assets/iphone-p2.png" alt="Profile Settings" className="w-56 sm:w-64 drop-shadow-2xl" />
          </div>
        </div>

        {/* ─── Section 3: No traditional branches ─── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 items-center pb-24">
          <DigitalBankingRight7Watermark className="hidden lg:block" />

          <div className="hidden lg:block" aria-hidden />

          {/* Phone 3 */}
          <div className="relative z-30 flex justify-center min-w-0">
            <img src="/assets/iphone-p3.png" alt="User Profile" className="w-60 sm:w-72 drop-shadow-2xl" />
          </div>

          {/* No traditional branches */}
          <FeatureBlock
            className="relative z-30 min-w-0 max-w-[360px] lg:max-w-[285px] lg:justify-self-start lg:mt-16 lg:ml-8"
            title="No traditional branches"
            description="Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience."
            items={['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable']}
          />
        </div>
      </div>
    </section>
  );
}
