import { useState } from 'react';
import Button from './Button';

const insights = [
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How to transition from a traditional to a digital bank',
    author: 'David Grohl',
    date: '17/08/24',
  },
];

const caseStudies = [
  {
    tag: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    brand: 'Zoomerr',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    brand: 'Zoomerr',
  },
  {
    tag: 'GETTING STARTED',
    title: 'How we help brand reach out to more people',
    brand: 'Zoomerr',
  },
];

export default function Insights() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section id="insights" className="relative py-24 bg-n7-dark overflow-hidden">
      {/* Left-side gradient glow near Insights button */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '300px',
          top: '250px',
          width: '420px',
          height: '420px',
          background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
          backdropFilter: 'blur(200px)',
          borderRadius: '50%',
          opacity: 0.25,
          filter: 'blur(100px)',
        }}
      />
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid lg:grid-cols-[1.5fr_2.5fr] gap-24 items-start mb-20">
          <div>
            <h2 className="font-archivo font-normal text-[37px] text-white leading-[120%] tracking-[-0.01em] mb-6">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <Button href="#" variant="secondary" size="badge">
              Insights
            </Button>
          </div>

          {/* Right column containing all cards aligned to the right half */}
          <div className="space-y-6 max-w-[670px] w-full lg:justify-self-end">
            {/* Featured article */}
            <div className="grid md:grid-cols-2 gap-6 bg-[#01141B] border border-n7-border rounded-[18px] p-6 lg:h-[318px] w-full items-center">
              <div className="rounded-xl overflow-hidden h-48 md:h-full w-full">
                <img src="/assets/blog-pattern.png" alt="Blog" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-chivo font-medium text-[12px] text-[#2490BB] leading-[130%] tracking-[0] uppercase mb-3 block">Getting Started</span>
                <h3 className="font-archivo font-normal text-[27px] text-white leading-[120%] tracking-[0] mb-3">
                  How to transition from a traditional to a digital bank
                </h3>
                <p className="font-archivo font-normal text-[14px] text-[#64A8C4] leading-[130%] tracking-[0] mb-4">David Grohl &nbsp;&nbsp; 17/08/24</p>
                <Button href="#" variant="readMore" size="readMore">
                  Read More
                </Button>
              </div>
            </div>

            {/* Smaller insight cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {insights.slice(0, 2).map((item, i) => (
                <div key={i} className="bg-[#01141B] border border-n7-border rounded-[18px] p-6 lg:h-[318px] flex flex-col justify-between w-full">
                  <div>
                    <span className="font-chivo font-medium text-[12px] text-[#2490BB] leading-[130%] tracking-[0] uppercase mb-3 block">{item.tag}</span>
                    <h3 className="font-archivo font-normal text-[27px] text-white leading-[120%] tracking-[0] mb-3">{item.title}</h3>
                    <p className="font-archivo font-normal text-[14px] text-[#64A8C4] leading-[130%] tracking-[0] mb-4">{item.author} &nbsp;&nbsp; {item.date}</p>
                  </div>
                  <Button href="#" variant="readMore" size="readMore">
                    Read More
                  </Button>
                </div>
              ))}
            </div>

            <div className="group text-right pt-4">
              <a
                href="#"
                className="relative inline-flex items-center gap-2 text-[#00B4FD] text-[14px] font-chivo font-normal leading-[1.3] tracking-[0] uppercase pb-0.5"
              >
                <span>Read All Insights</span>
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
        </div>

        {/* Case Studies */}
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-12">Our Case Studies</h2>

        <div className="relative max-w-[1015px] mx-auto">
          {/* Back card (exact copy, positioned behind) */}
          <div
            className="absolute grid md:grid-cols-[1fr_1fr] gap-8 bg-[#01141B] border border-n7-border rounded-xl overflow-hidden opacity-40"
            style={{
              left: '-100px',
              right: '-100px',
              top: '48px',
              bottom: '140px',
              zIndex: 1,
            }}
          >
            <div className="relative">
              <img
                src="/assets/blog-pattern.png"
                alt="Case study"
                className="absolute object-cover"
                style={{
                  height: 'calc(100% - 40px)',
                  width: 'auto',
                  aspectRatio: '421.5 / 381.5',
                  top: '20px',
                  left: '24px',
                  borderRadius: '11.43px'
                }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-chivo font-medium text-[12px] text-[#2490BB] leading-[130%] tracking-[0] uppercase mb-3 block">{caseStudies[currentSlide].tag}</span>
              <h3 className="font-archivo font-normal text-[43px] text-white leading-[120%] tracking-[0] w-[423px] h-[156px] mb-4">{caseStudies[currentSlide].title}</h3>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded bg-green-500/30" />
                <span className="font-roboto font-bold text-[22.51px] text-n7-muted leading-[110%] tracking-[0] w-[88px] h-[25px] flex items-center">{caseStudies[currentSlide].brand}</span>
              </div>
              <Button href="#" variant="readMore" size="readMoreLg" tabIndex={-1}>
                Read More
              </Button>
            </div>
          </div>

          {/* Main case study card */}
          <div
            className="grid md:grid-cols-[1fr_1fr] gap-8 bg-[#01141B] border border-n7-border rounded-xl overflow-hidden h-[448px]"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <div className="relative">
              <img
                src="/assets/blog-pattern.png"
                alt="Case study"
                className="absolute object-cover"
                style={{
                  width: '421.5px',
                  height: '381.5px',
                  top: '25.5px',
                  left: '24px',
                  borderRadius: '11.43px'
                }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-chivo font-medium text-[12px] text-[#2490BB] leading-[130%] tracking-[0] uppercase mb-3 block">{caseStudies[currentSlide].tag}</span>
              <h3 className="font-archivo font-normal text-[43px] text-white leading-[120%] tracking-[0] w-[423px] h-[156px] mb-4">{caseStudies[currentSlide].title}</h3>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-5 h-5 rounded bg-green-500/30" />
                <span className="font-roboto font-bold text-[22.51px] text-n7-muted leading-[110%] tracking-[0] w-[88px] h-[25px] flex items-center">{caseStudies[currentSlide].brand}</span>
              </div>
              <Button href="#" variant="readMore" size="readMoreLg">
                Read More
              </Button>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              variant="arrow"
              size="arrow"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Button>
            <div className="flex gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all ${i === currentSlide ? 'w-6 bg-n7-cyan' : 'w-2 bg-n7-border'}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <Button
              onClick={() => setCurrentSlide(Math.min(caseStudies.length - 1, currentSlide + 1))}
              variant="arrow"
              size="arrow"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Button>
          </div>

          <div className="group text-right mt-4">
            <a
              href="#"
              className="relative inline-flex items-center gap-2 text-[#00B4FD] text-[14px] font-chivo font-normal leading-[1.3] tracking-[0] uppercase pb-0.5"
            >
              <span>View All</span>
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
      </div>
    </section>
  );
}
