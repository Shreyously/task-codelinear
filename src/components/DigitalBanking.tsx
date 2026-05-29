import Button from './Button';

export default function DigitalBanking() {
  return (
    <section id="digital-banking" className="relative z-10 pt-40 pb-0 bg-[#E9F4F9] overflow-x-clip overflow-y-visible">
      {/* Decorative circles */}
      <div className="deco-circle w-[600px] h-[600px] -right-[10%] top-[5%] opacity-30 border-gray-300/30" />
      <div className="deco-circle w-[400px] h-[400px] -left-[5%] bottom-[10%] opacity-20 border-gray-300/30" />

      <div className="max-w-[1400px] mx-auto px-8 space-y-40">
        {/* Three-column hero — title | phone | compliance */}
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-[-245px] top-[255px] z-0 h-[1246px] w-[480px] select-none"
            viewBox="0 0 480 1246"
            fill="none"
            aria-hidden
          >
            <path
              opacity="0.2"
              d="M33.1956 538.126C157.377 601.232 237.949 728.515 238.029 870.85H237.969L237.976 871.356C240.81 1073.92 65.8693 1249.57 -139.259 1244.61H-139.264C-285.886 1242.87 -412.648 1158.07 -473.278 1030.19C-187.523 1092.73 87.3893 823.433 33.1956 538.126ZM-553.623 271.374C-613.841 504.571 -451.604 753.94 -216.27 794.709L-216.228 794.717H-216.178C-169.085 803.771 -117.259 804.8 -69.5662 797.271C-182.753 1003.3 -492.941 1044.04 -655.307 871.771L-655.318 871.758L-655.331 871.747L-657.436 869.78C-746.094 786.212 -776.69 661.764 -757.045 545.701C-737.3 429.048 -666.814 320.939 -553.623 271.374ZM41.5647 242.412C158.756 221.114 285.41 251.802 371.906 343.775L371.917 343.787L371.929 343.799C459.239 425.168 491.549 545.77 475.56 659.528C459.614 772.976 395.641 879.547 290.372 933.562C309.803 804.157 266.597 670.64 179.924 578.621L177.864 576.449C77.0354 466.629 -86.0167 417.205 -231.416 451.885C-182.687 336.575 -75.2986 263.651 41.5647 242.412ZM-508.657 372.146C-509.425 -5.98137 -0.871364 -142.183 187.751 185.001C-106.877 121.604 -384.639 410.676 -312.147 701.036C-431.945 636.28 -508.657 511.425 -508.657 372.146Z"
              stroke="url(#digital-banking-left-orbit-gradient)"
            />
            <defs>
              <linearGradient
                id="digital-banking-left-orbit-gradient"
                x1="-465.784"
                y1="-1313.1"
                x2="907.438"
                y2="-906.258"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
          </svg>

          <div className="pointer-events-none absolute left-[7%] top-[-18%] z-0 h-[min(92vw,610px)] w-[min(112vw,1030px)] select-none">
            <svg
              className="h-full w-full opacity-[0.42]"
              viewBox="0 0 900 400"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <linearGradient id="digital-banking-n7-gradient" x1="0" y1="0" x2="900" y2="400" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00B4FD" />
                  <stop offset="100%" stopColor="#003ACE" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="72%"
                textAnchor="middle"
                fill="none"
                stroke="url(#digital-banking-n7-gradient)"
                strokeWidth="1.35"
                fontSize="470"
                fontFamily="Archivo, sans-serif"
                fontWeight="600"
                letterSpacing="8"
              >
                N7
              </text>
            </svg>
            <div className="absolute inset-x-0 top-[38%] bottom-0 bg-[linear-gradient(to_bottom,rgba(233,244,249,0)_0%,rgba(233,244,249,0.82)_28%,#E9F4F9_52%,#E9F4F9_100%)]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 items-start">
            {/* 1. Digital banking title */}
            <div className="min-w-0">
              <h2 className="font-archivo font-normal text-[40px] xl:text-[53px] leading-[120%] tracking-[-0.53px] text-gray-900 mb-4">
                Digital banking<br />out-of-the-box
              </h2>
              <p className="text-gray-500 text-sm xl:text-base mb-8 max-w-md leading-relaxed">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>
              <Button href="#contact" variant="primary" size="lg" className="mb-4" textSize="text-[14px]" width="w-[210px]">
                request demo
              </Button>
              <br />
              <a href="#" className="inline-flex items-center gap-2 text-n7-blue text-xs font-semibold tracking-wider uppercase hover:gap-3 transition-all border-b border-n7-blue/40 pb-0.5 mt-2">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            {/* 2. Phone frame */}
            <div className="flex justify-center min-w-0">
              <div className="relative w-64 shrink-0 sm:w-72">
                <div className="rounded-[2.75rem] bg-[#1a1a1a] p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-[2.35rem] bg-white">
                    {/* User header */}
                    <div className="p-5 pb-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">TK</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800">Toni Kross</p>
                          <p className="text-xs text-green-500">Good Morning</p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" /></svg>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 mb-4">$42,295.00 USD</p>
                      {/* Quick actions */}
                      <div className="flex justify-between px-2 mb-4">
                        {[
                          { icon: '↗', label: 'Fund Transfer' },
                          { icon: '⏱', label: 'Add Money' },
                          { icon: '⊞', label: 'More' },
                        ].map((a, i) => (
                          <div key={i} className="text-center">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-1 text-lg">{a.icon}</div>
                            <span className="text-[10px] text-gray-500">{a.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Recent activity */}
                    <div className="px-5 pb-4">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Recent activity</p>
                      <div className="flex gap-2 mb-3">
                        {['This Day', 'This Week', 'This Month', '6 Month'].map((t, i) => (
                          <span key={i} className={`text-[10px] px-2.5 py-1 rounded-full ${i === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>{t}</span>
                        ))}
                      </div>
                      {[
                        { name: 'To Jin · Work', date: '12 Jun 2022', amount: '-$59', color: 'blue' },
                        { name: 'From Google · Salary', date: '10 Jun 2022', amount: '+$859', color: 'blue' },
                        { name: 'To David · Work', date: '7 Jun 2022', amount: '-$479', color: 'purple' },
                        { name: 'From Google · Bonus', date: '10 Jun 2022', amount: '+$859', color: 'blue' },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full bg-${tx.color}-100 flex items-center justify-center`}>
                              <svg className={`w-4 h-4 text-${tx.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tx.amount.startsWith('+') ? "M7 11l5-5m0 0l5 5m-5-5v12" : "M17 13l-5 5m0 0l-5-5m5 5V6"} />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-700">{tx.name}</p>
                              <p className="text-[10px] text-gray-400">{tx.date}</p>
                            </div>
                          </div>
                          <span className={`text-xs font-semibold ${tx.amount.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>{tx.amount}</span>
                        </div>
                      ))}
                    </div>
                    {/* Bottom nav */}
                    <div className="flex justify-around py-3 border-t border-gray-100">
                      {['Home', 'Card', 'Transaction', 'Profile'].map((n, i) => (
                        <div key={i} className="text-center">
                          <svg className={`w-5 h-5 mx-auto mb-0.5 ${i === 0 ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                              i === 0 ? "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" :
                                i === 1 ? "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" :
                                  i === 2 ? "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" :
                                    "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            } />
                          </svg>
                          <span className={`text-[9px] ${i === 0 ? 'text-blue-600' : 'text-gray-400'}`}>{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Fully compliant */}
            <div className="min-w-0 lg:max-w-[320px] lg:justify-self-start">
              <h3 className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-900 mb-4">
                Fully compliant with regulatory requirement
              </h3>
              <p className="font-archivo text-base font-normal leading-[1.3] tracking-normal text-gray-500 mb-8">
                The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank&apos;s operational-risk protocols and procedures.
              </p>
              <div className="space-y-4">
                {['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-n7-blue flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* No legacy IT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 items-center">
          <div className="hidden lg:block" aria-hidden />

          <div className="min-w-0 max-w-[320px] lg:max-w-[285px] lg:justify-self-center">
            <h3 className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-900 mb-4">No legacy IT systems</h3>
            <p className="font-archivo text-base font-normal leading-[1.3] tracking-normal text-gray-500 mb-8">
              Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <div className="space-y-4">
              {['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-n7-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone — profile */}
          <div className="flex justify-center lg:justify-self-start">
            <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl border border-gray-200 w-64">
              <div className="p-4 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">TK</div>
                <p className="text-base font-semibold text-gray-800">Toni Kross</p>
                <p className="text-xs text-gray-400 mb-4">tonikross@gmail.com</p>
                <div className="border-t border-gray-100" />
                {['Profile setting', 'Setting', 'Support', 'Sign out'].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                          i === 0 ? "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" :
                            i === 1 ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" :
                              i === 2 ? "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" :
                                "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        } />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                ))}
              </div>
              {/* Bottom nav */}
              <div className="flex justify-around py-3 border-t border-gray-100 mt-2">
                {['Home', 'Card', 'Transaction', 'Profile'].map((n, i) => (
                  <div key={i} className="text-center">
                    <svg className={`w-5 h-5 mx-auto mb-0.5 ${i === 3 ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                        i === 0 ? "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" :
                          i === 1 ? "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" :
                            i === 2 ? "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" :
                              "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      } />
                    </svg>
                    <span className={`text-[9px] ${i === 3 ? 'text-blue-600' : 'text-gray-400'}`}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* No traditional branches */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 xl:gap-12 items-center pb-24">
          <svg
            className="pointer-events-none absolute right-[-670px] bottom-0 z-20 h-[1580px] w-[1220px] select-none overflow-visible opacity-[0.24]"
            viewBox="0 0 1200 1260"
            fill="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="digital-banking-right-n7-gradient" x1="0" y1="0" x2="900" y2="650" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00B4FD" />
                <stop offset="1" stopColor="#003ACE" />
              </linearGradient>
            </defs>
            <text
              x="40"
              y="1800"
              fill="none"
              stroke="url(#digital-banking-right-n7-gradient)"
              strokeWidth="1.35"
              fontSize="1500"
              fontFamily="Archivo, sans-serif"
              fontWeight="600"
              letterSpacing="8"
            >
              7
            </text>
          </svg>

          {/* Column 1: Spacer */}
          <div className="hidden lg:block" aria-hidden />

          {/* Column 2: Phone container (aligns with Phone 1) */}
          <div className="relative z-30 flex justify-center min-w-0">
            <div className="w-72 rounded-[2.75rem] bg-[#1a1a1a] p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2.35rem] bg-white">
                <div className="p-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">TK</div>
                  <p className="text-base font-semibold text-gray-800">Toni Kross</p>
                  <p className="text-xs text-gray-400 mb-4">tonikross@gmail.com</p>
                  <div className="border-t border-gray-100" />
                  {['Profile setting', 'Setting', 'Support', 'Sign out'].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                            i === 0 ? "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" :
                              i === 1 ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" :
                                i === 2 ? "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" :
                                  "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          } />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  ))}
                </div>
                <div className="flex justify-around py-3 border-t border-gray-100 mt-2">
                  {['Home', 'Card', 'Transaction', 'Profile'].map((n, i) => (
                    <div key={i} className="text-center">
                      <svg className={`w-5 h-5 mx-auto mb-0.5 ${i === 3 ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                          i === 0 ? "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" :
                            i === 1 ? "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" :
                              i === 2 ? "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" :
                                "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        } />
                      </svg>
                      <span className={`text-[9px] ${i === 3 ? 'text-blue-600' : 'text-gray-400'}`}>{n}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Text container (aligns with Text 1) */}
          <div className="relative z-30 min-w-0 max-w-[320px] lg:max-w-[285px] lg:justify-self-start">
            <h3 className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-900 mb-4">No traditional branches</h3>
            <p className="font-archivo text-base font-normal leading-[1.3] tracking-normal text-gray-500 mb-8">
              Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
            </p>
            <div className="space-y-4">
              {['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adoptable and Scalable'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-n7-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="font-archivo text-base font-medium leading-[1.3] tracking-normal text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
