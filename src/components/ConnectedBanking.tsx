import LaptopMockup from './LaptopMockup';

const features = {
  left: [
    'Customer-On Boarding',
    'Managing deposits and withdrawals',
    'Transaction management',
    'Interest Calculation',
    'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
  ],
  right: [
    'CRM Activities',
    'Configuring New Banking Products',
    'Loan disbursal and Loan management',
    'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
  ],
};

const featureLabelClass =
  'font-archivo font-normal text-base leading-[1.3] tracking-normal text-n7-muted';

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-n7-blue flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={featureLabelClass}>{text}</span>
    </div>
  );
}

export default function ConnectedBanking() {
  return (
    <section id="connected-banking" className="relative py-24 bg-n7-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — KYC Dashboard */}
          <LaptopMockup
            src="/assets/kyc-dashboard.png"
            alt="KYC Dashboard"
            className="lg:justify-self-start lg:ml-[calc(min(0px,(100vw-1400px)/-2)-6rem)]"
          />

          {/* Right — Feature list */}
          <div className="lg:pl-10 xl:pl-16">
            <h2 className="font-archivo font-normal text-[27px] leading-[1.3] tracking-normal text-white mb-6 max-w-2xl line-clamp-2">
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>
            <p className="text-sm font-semibold text-white mb-6">What you will get:</p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              <div className="space-y-3">
                {features.left.map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </div>
              <div className="space-y-3">
                {features.right.map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
