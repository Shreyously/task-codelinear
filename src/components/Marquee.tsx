export default function Marquee() {
  const items = ['Say', '👋', 'to the new way of banking', '✳', 'CB7'];

  return (
    <section className="bg-[#FFFFFF] py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll-left">
        {[...Array(4)].map((_, rep) => (
          <div key={rep} className="flex items-center gap-10 mx-10 shrink-0">
            {items.map((item, i) =>
              item === '👋' ? (
                <span key={i} className="text-2xl md:text-3xl font-light wave-hand-emoji">
                  👋
                </span>
              ) : (
                <span
                  key={i}
                  className={`text-2xl md:text-3xl font-light ${
                    item === 'CB7'
                      ? 'text-n7-blue font-semibold'
                      : item === '✳'
                      ? ''
                      : 'text-gray-800'
                  }`}
                >
                  {item}
                </span>
              )
            )}
            <span className="text-2xl md:text-3xl text-gray-300 mx-6">✳</span>
          </div>
        ))}
      </div>
    </section>
  );
}
