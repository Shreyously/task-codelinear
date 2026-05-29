const footerSolutions = [
  'Core Banking CB7',
  'Digital Banking N7',
  'Open Banking',
  'Loan Origination System',
  'Loan Management System',
  'Digital Transformation',
];

const footerBanking = [
  'About Us',
  'Solutions',
  'Contact',
  'Company',
  'Careers',
  'Insights',
  'Core Team',
  'Brand Center',
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M1 7h11M8 3l4 4-4 4"
      stroke="#00B4FE"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[#0a1a24]"
      style={{ background: '#010D13' }}
    >
      {/* Top glow ellipse */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '1440px',
          height: '557px',
          borderRadius: '50%',
          background:
            'linear-gradient(to bottom, rgba(0,180,254,0.05), rgba(0,58,206,0.05))',
          filter: 'blur(200px)',
        }}
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-12 pt-20 pb-10">
        {/* Main content with N7 on left spanning both rows */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* N7 Large Logo — spans both address and links rows */}
          <div className="lg:w-[480px] shrink-0 relative overflow-visible">
            <div
              className="font-archivo font-medium leading-none select-none relative gradient-text"
              style={{
                fontSize: '380px',
                lineHeight: '0.68',
              }}
            >
              N7
            </div>
          </div>

          {/* Right side: addresses on top, links below */}
          <div className="flex-1 lg:pl-8">
            {/* Location columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-24">
              {/* London */}
              <div className="max-w-[220px]">
                <h4
                  className="font-archivo font-medium text-base mb-4"
                  style={{ color: '#E9F4F9' }}
                >
                  London
                </h4>
                <p
                  className="font-archivo text-base leading-[1.3]"
                  style={{ color: 'rgba(233,244,249,0.7)' }}
                >
                  Linktia Infosystems Ltd – CB7,
                  <br />
                  26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
                </p>
              </div>

              {/* Dubai */}
              <div className="max-w-[220px]">
                <h4
                  className="font-archivo font-medium text-base mb-4"
                  style={{ color: '#E9F4F9' }}
                >
                  Dubai
                </h4>
                <p
                  className="font-archivo text-base leading-[1.3]"
                  style={{ color: 'rgba(233,244,249,0.7)' }}
                >
                  Linktia Infosystems Ltd –<br />
                  CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes
                  Towers, Dubai, United Arab Emirates
                </p>
              </div>

              {/* India (labeled London in Figma) */}
              <div className="max-w-[220px]">
                <h4
                  className="font-archivo font-medium text-base mb-4"
                  style={{ color: '#E9F4F9' }}
                >
                  London
                </h4>
                <p
                  className="font-archivo text-base leading-[1.3]"
                  style={{ color: 'rgba(233,244,249,0.7)' }}
                >
                  Linktia Infosystems Ltd –<br />
                  CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra,
                  411041, India
                </p>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-10 mb-16">
            {/* Solutions */}
            <div>
              <h4
                className="font-archivo font-medium text-base mb-4"
                style={{ color: '#E9F4F9' }}
              >
                Solutions
              </h4>
              <ul className="space-y-2.5">
                {footerSolutions.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-archivo text-base flex items-center gap-3.5 group transition-colors hover:brightness-125"
                      style={{ color: 'rgba(233,244,249,0.7)' }}
                    >
                      <span>{item}</span>
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* N7 Banking */}
            <div>
              <h4
                className="font-archivo font-medium text-base mb-4"
                style={{ color: '#E9F4F9' }}
              >
                N7 Banking
              </h4>
              <ul className="space-y-2.5">
                {footerBanking.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-archivo text-base flex items-center gap-3.5 group transition-colors hover:brightness-125"
                      style={{ color: 'rgba(233,244,249,0.7)' }}
                    >
                      <span>{item}</span>
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Socials */}
            <div>
              <h4
                className="font-archivo font-medium text-base mb-4"
                style={{ color: '#E9F4F9' }}
              >
                Our Socials
              </h4>
              <ul className="space-y-2.5">
                {['LinkedIn', 'X'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-archivo text-base flex items-center gap-3.5 group transition-colors hover:brightness-125"
                      style={{ color: 'rgba(233,244,249,0.7)' }}
                    >
                      <span>{item}</span>
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>{/* close right-side wrapper */}
        </div>{/* close outer flex */}

        {/* Copyright bar */}
        <div className="pt-8 mt-8">
          <p
            className="font-archivo text-sm leading-relaxed"
            style={{ color: 'rgba(233,244,249,0.35)' }}
          >
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
            Commercial Brand] — [Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}
