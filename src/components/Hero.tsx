import Button from './Button';
import TrustedBy from './TrustedBy';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-n7-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-n7-darker via-n7-dark to-[#0d1a2d]" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />

      {/* Decorative circles */}
      <div className="deco-circle w-[500px] h-[500px] top-[10%] left-[-5%] opacity-30" />
      <div className="deco-circle w-[700px] h-[700px] top-[20%] left-[-10%] opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-8 pt-40 pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="font-archivo font-medium text-[40px] md:text-[54px] lg:text-[67px] lg:leading-[80.4px] text-[#E9F4F9] tracking-[-0.67px] mb-6 max-w-[608px]">
              The new foundation of modern banking
            </h1>
            <p className="font-sans text-base md:text-lg text-[#E9F4F9]/80 max-w-[450px] mb-10 leading-relaxed">
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
            <div className="flex flex-wrap gap-[20px]">
              {/* Primary Button */}
              <Button href="#contact" variant="primary" size="lg" textSize="text-[15px]" width="w-[210px]">
                request demo
              </Button>
              {/* Secondary Button */}
              <Button href="#contact" variant="secondary" size="lg" textSize="text-[15px]" width="w-[210px]">
                contact us
              </Button>
            </div>
          </div>

          {/* Right — hero image with floating cards */}
          <div className="relative hidden lg:block">
            {/* Main image — woman with phone */}
            <div className="relative w-full max-w-lg ml-auto">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/assets/hero-woman.png"
                  alt="Woman using N7 banking app"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating dashboard card — top right */}
              <div className="glass-card absolute -top-4 -right-8 p-4 w-56 z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">TK</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Toni Kross</p>
                    <p className="text-[10px] text-green-500">Good Morning</p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" /></svg>
                </div>
                <p className="text-[10px] text-gray-500 mb-0.5">Total balance</p>
                <p className="text-lg font-bold text-blue-600">$42,295.00 USD</p>
                <div className="flex gap-4 mt-3">
                  {['Fund Transfer', 'Add Money', 'More'].map((label, i) => (
                    <div key={i} className="text-center">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-1">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      </div>
                      <span className="text-[8px] text-gray-500">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating recent activity card — bottom left */}
              <div className="glass-card absolute -bottom-8 -left-12 p-4 w-52 z-10">
                <p className="text-xs font-semibold text-gray-800 mb-2">Recent activity</p>
                <div className="flex gap-1.5 mb-3">
                  {['This Day', 'This Week', 'This Month', '6 Month'].map((tab, i) => (
                    <span
                      key={i}
                      className={`text-[8px] px-2 py-0.5 rounded-full ${i === 1
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-500'
                        }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-gray-700">To Jin · Work</p>
                      <p className="text-[8px] text-gray-400">12 Jun 2022</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-red-500">-$59</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <TrustedBy />
      </div>
    </section>
  );
}
