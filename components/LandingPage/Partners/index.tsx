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
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h1 className="section-header">
        <span>Trusted by</span>
        <span className="text-primary"> Industry</span>
      </h1>

      <div className="partners-slider rounded-2xl bg-[#111] py-4">
        {/* Logos fade out at the card edges via a mask */}
        <div className="flex flex-col overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
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
      </div>
    </section>
  );
}
