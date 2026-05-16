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
  "/partnerLogos/1.png",
];

export default function Partners() {
  return (
    <section className="section-gap-y container mx-auto px-4">
      <h1 className="section-header">
        <span>Our</span>
        <span className="text-primary"> Partners</span>
      </h1>

      <div className="partners-slider relative mt-8">
        {/* White pill container */}
        <div className="overflow-hidden rounded-2xl bg-white py-6 shadow-lg flex flex-col gap-y-4">
          {/* Row 1 — scrolls left */}
          <div className="flex overflow-hidden">
            <div className="marquee-track animate-marquee-left flex w-max items-center">
              {[...row1Logos, ...row1Logos].map((src, i) => (
                <div key={i} className="mx-6 flex flex-shrink-0 items-center justify-center">
                  <Image
                    src={src}
                    alt="Partner logo"
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="flex overflow-hidden">
            <div className="marquee-track animate-marquee-right flex w-max items-center">
              {[...row2Logos, ...row2Logos].map((src, i) => (
                <div key={i} className="mx-6 flex flex-shrink-0 items-center justify-center">
                  <Image
                    src={src}
                    alt="Partner logo"
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left fade edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 rounded-l-2xl bg-gradient-to-r from-white to-transparent" />
        {/* Right fade edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 rounded-r-2xl bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
