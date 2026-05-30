import {
  CoreBankingIcon,
  DigitalBankingIcon,
  OpenBankingIcon,
  LoanOriginationIcon,
  LoanManagementIcon,
} from './icons/SolutionsIcons';
import ArrowLink from './ArrowLink';
import Button from './Button';

const solutions = [
  {
    icon: <CoreBankingIcon />,
    title: 'Core Banking CB7',
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    tag: '',
  },
  {
    icon: <DigitalBankingIcon />,
    title: 'Digital Banking N7',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: '',
  },
  {
    icon: <OpenBankingIcon />,
    title: 'Open Banking',
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    tag: '',
  },
  {
    icon: <LoanOriginationIcon />,
    title: 'Loan Origination System',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: 'NBFC',
  },
  {
    icon: <LoanManagementIcon />,
    title: 'Loan Management System',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: 'NBFC',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 bg-n7-dark">
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
                <div className="mb-4 flex items-center justify-between">
                  {s.icon}
                  {s.tag && (
                    <span className="font-archivo text-sm text-n7-muted font-medium tracking-wider uppercase">{s.tag}</span>
                  )}
                </div>
                <h3 className="font-archivo text-[22px] font-normal leading-[1.2] tracking-[0] text-white mb-3">{s.title}</h3>
                <p className="text-sm text-n7-muted leading-relaxed mb-4">{s.desc}</p>
                <ArrowLink
                  href="#"
                  className="text-[#00B4FD] text-[14px] font-chivo font-normal leading-[1.3] tracking-[0] uppercase text-right"
                  underlineClassName="bg-n7-cyan"
                >
                  Learn More
                </ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
