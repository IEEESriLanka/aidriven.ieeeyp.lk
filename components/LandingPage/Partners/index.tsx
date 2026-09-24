import Image from "next/image";

const row1Logos = [
  "/partnerLogos/1.png",
  "/partnerLogos/2.png",
  "/partnerLogos/3.png",
  "/partnerLogos/4.png",
  "/partnerLogos/5.png",
  "/partnerLogos/6.png",
  "/partnerLogos/7.png",
  "/partnerLogos/8.png",
  "/partnerLogos/9.png",
  "/partnerLogos/10.png",
  "/partnerLogos/11.png",
];

const row2Logos = [
  "/partnerLogos/12.png",
  "/partnerLogos/13.png",
  "/partnerLogos/14.png",
  "/partnerLogos/15.png",
  "/partnerLogos/16.png",
  "/partnerLogos/17.png",
  "/partnerLogos/18.png",
  "/partnerLogos/19.png",
  "/partnerLogos/20.png",
  "/partnerLogos/21.png",
];

export default function Partners() {
  return (
    <section className="py-24 bg-[#0A0103] border-t border-outline-variant/30 relative">
      <div className="max-w-screen-2xl mx-auto px-margin-mobile md:px-margin mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#24040B] border border-primary-container/40 text-primary uppercase font-label-mono-xs text-label-mono-xs tracking-widest mb-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="">LEGACY PARTNERS</span>
            </div>
            <h2 className="text-xl md:text-3xl font-headline-xl font-bold text-white uppercase tracking-tight">
              OUR PREVIOUS PARTNERS
            </h2>
          </div>
          <p className="text-xs text-on-surface-variant font-body-sm leading-relaxed whitespace-normal md:whitespace-nowrap text-left md:text-right mt-4 md:mt-0">
            These incredible organizations have supported our journey as partners in our previous events.
          </p>
        </div>
      </div>

      <div className="partners-slider relative mt-8">
        {/* Dark pill container */}
        <div className="overflow-hidden bg-transparent border border-white/7 py-2 flex flex-col">
          {/* Row 1 - scrolls left */}
          <div className="flex h-32 overflow-hidden">
            <div className="marquee-track animate-marquee-left flex w-max items-center">
              {[...row1Logos, ...row1Logos].map((src, i) => (
                <div key={i} className="mx-6 flex flex-shrink-0 items-center justify-center">
                  <Image
                    src={src}
                    alt="Partner logo"
                    width={480}
                    height={192}
                    className="h-48 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls right */}
          <div className="flex h-32 overflow-hidden">
            <div className="marquee-track animate-marquee-right flex w-max items-center">
              {[...row2Logos, ...row2Logos].map((src, i) => {
                const is12 = src === "/partnerLogos/12.png";
                return (
                  <div key={i} className="mx-6 flex flex-shrink-0 items-center justify-center">
                    <Image
                      src={src}
                      alt="Partner logo"
                      width={is12 ? 552 : 480}
                      height={is12 ? 208 : 192}
                      className={`${is12 ? "h-52" : "h-48"} w-auto object-contain`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Left fade edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#0A0103] to-transparent" />
        {/* Right fade edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#0A0103] to-transparent" />
      </div>
    </section>
  );
}
