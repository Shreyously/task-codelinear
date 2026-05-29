import Button from './Button';

export default function CoreBanking() {
  return (
    <section
      id="core-banking"
      className="relative isolate py-24 bg-n7-dark min-h-[680px] lg:min-h-[760px]"
    >
      <svg
        className="absolute inset-0 z-0 h-full w-full pointer-events-none select-none"
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMinYMid meet"
        aria-hidden
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
          x="-90"
          y="380"
          fill="none"
          stroke="url(#core-banking-cb7-gradient)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
          fontSize="620"
          fontFamily="Archivo, sans-serif"
          fontWeight="600"
          letterSpacing="28"
          dominantBaseline="middle"
        >
          CB7
        </text>
      </svg>

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
            <div className="group mt-4">
              <a
                href="#"
                className="relative inline-flex items-center gap-2 text-[#00B4FD] text-[14px] font-chivo font-normal leading-[1.3] tracking-[0] uppercase"
              >
                <span>Learn More</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-n7-cyan transition-all duration-300 group-hover:w-full" />
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — AML Dashboard mockup */}
          <div className="relative lg:justify-self-end lg:mr-[calc(min(0px,(100vw-1400px)/-2)-2rem)]">
            <div className="w-[700px] h-[500px] rounded-xl overflow-hidden shadow-2xl border border-n7-border/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="/assets/aml-dashboard.png"
                alt="AML Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
