import Button from './Button';
import TrustedBy from './TrustedBy';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-n7-dark">
      {/* Background solid */}
      <div className="absolute inset-0 bg-n7-dark" />


      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="font-archivo font-medium text-[38px] leading-[1.1] sm:text-[46px] md:text-[54px] lg:text-[67px] lg:leading-[80.4px] text-[#E9F4F9] tracking-[0] mb-6 max-w-[608px]">
              The new foundation of modern banking
            </h1>
            <p className="font-sans text-base md:text-lg text-[#E9F4F9]/80 max-w-[450px] mb-10 leading-relaxed">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[14px] sm:gap-[20px]">
              {/* Primary Button */}
              <Button href="#contact" variant="primary" size="lg" textSize="text-[15px]" width="w-full sm:w-[210px]">
                request demo
              </Button>
              {/* Secondary Button */}
              <Button href="#contact" variant="secondary" size="lg" textSize="text-[15px]" width="w-full sm:w-[210px]">
                contact us
              </Button>
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative hidden lg:block [perspective:1000px]">
            {/* Main image — woman with phone (Frame 114) */}
            <div className="relative w-full max-w-[650px] ml-auto transition-all duration-500 ease-out transform-gpu hover:[transform:rotateY(-8deg)_rotateX(4deg)] hover:scale-[1.03]">
              {/* Glowing Background Gradient */}
              <div
                className="absolute pointer-events-none rounded-full"
                style={{
                  width: '398.87px',
                  height: '398.87px',
                  background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
                  filter: 'blur(100px)',
                  backdropFilter: 'blur(100px)',
                  WebkitBackdropFilter: 'blur(100px)',
                  opacity: 0.5,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}
              />
              <img
                src="/assets/hero-woman.png"
                alt="Woman using N7 banking app"
                className="relative z-10 w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <TrustedBy />
      </div>
    </section>
  );
}
