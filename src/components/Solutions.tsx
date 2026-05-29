const solutions = [
  {
    icon: (
      <svg className="w-10 h-10 text-n7-cyan" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="10" /><path d="M24 4v8M24 36v8M4 24h8M36 24h8M8.7 8.7l5.6 5.6M33.7 33.7l5.6 5.6M8.7 39.3l5.6-5.6M33.7 14.3l5.6-5.6" />
      </svg>
    ),
    title: 'Core Banking CB7',
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    tag: '',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-n7-cyan" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 12l12-8 12 8M12 36l12 8 12-8M4 24h40M24 4v40" /><path d="M12 12l12 12 12-12M12 36l12-12 12 12" />
      </svg>
    ),
    title: 'Digital Banking N7',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: '',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-n7-cyan" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8l16 16M24 24l16-16M8 40l16-16M24 24l16 16" /><rect x="18" y="18" width="12" height="12" rx="2" />
      </svg>
    ),
    title: 'Open Banking',
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    tag: '',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-n7-cyan" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="14" r="10" /><circle cx="14" cy="34" r="8" /><circle cx="34" cy="34" r="8" />
      </svg>
    ),
    title: 'Loan Origination System',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: 'NBFC',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-n7-cyan" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4l-10 10 10 10M34 4l10 10-10 10M14 24l-10 10 10 10M34 24l10 10-10 10" />
      </svg>
    ),
    title: 'Loan Management System',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: 'NBFC',
  },
];

import Button from './Button';

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 bg-n7-dark">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-n7-cyan/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1fr_3.5fr] gap-40">
          {/* Left heading */}
          <div>
            <h2 className="font-archivo text-3xl md:text-[37px] font-light text-white leading-tight mb-8">
              <span className="md:block md:whitespace-nowrap">All of our solutions are</span>
              <span className="md:block md:whitespace-nowrap">tailor-made to your needs</span>
            </h2>
            <Button href="#contact" variant="secondary" size="lg" textSize="text-[15px]" width="w-[226px]">
              request demo
            </Button>
          </div>

          {/* Right grid */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 lg:pl-36">
            {solutions.map((s, i) => (
              <div key={i} className="group">
                <div className="mb-4 flex items-start gap-3">
                  {s.icon}
                  {s.tag && (
                    <span className="font-archivo text-xs text-n7-muted font-medium tracking-wider uppercase mt-1">{s.tag}</span>
                  )}
                </div>
                <h3 className="font-archivo text-[22px] font-normal leading-[1.2] tracking-[0] text-white mb-3">{s.title}</h3>
                <p className="text-sm text-n7-muted leading-relaxed mb-4">{s.desc}</p>
                <a href="#" className="relative inline-flex items-center gap-2 text-[#00B4FD] text-[14px] font-chivo font-normal leading-[1.3] tracking-[0] uppercase text-right">
                  <span>Learn More</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-n7-cyan transition-all duration-300 group-hover:w-full" />
                  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
