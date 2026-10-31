import Image from "next/image";

const row1Logos = [
  { src: "/partnerLogos/1.png", name: "Partner" },
  { src: "/partnerLogos/2.png", name: "Codimite" },
  { src: "/partnerLogos/3.png", name: "Gapstars" },
  { src: "/partnerLogos/4.png", name: "SLASSCOM" },
  { src: "/partnerLogos/5.png", name: "ACCELR" },
  { src: "/partnerLogos/6.png", name: "Bileeta" },
  { src: "/partnerLogos/7.png", name: "Trace" },
  { src: "/partnerLogos/8.png", name: "iVedha" },
  { src: "/partnerLogos/9.png", name: "Insighture" },
  { src: "/partnerLogos/10.png", name: "Surge" },
  { src: "/partnerLogos/11.png", name: "99x" },
];

const row2Logos = [
  { src: "/partnerLogos/12.png", name: "Zone24x7" },
  { src: "/partnerLogos/13.png", name: "LSEG" },
  { src: "/partnerLogos/14.png", name: "Nagarro" },
  { src: "/partnerLogos/15.png", name: "OREL IT" },
  { src: "/partnerLogos/16.png", name: "Sysco LABS" },
  { src: "/partnerLogos/17.png", name: "Veracity Group" },
  { src: "/partnerLogos/18.png", name: "Virtusa" },
  { src: "/partnerLogos/19.png", name: "Augustory" },
  { src: "/partnerLogos/20.png", name: "Altrium" },
  { src: "/partnerLogos/21.png", name: "Arcadea" },
];

export default function Partners() {
  return (
    <section className="section-gap-y container mx-auto flex flex-col gap-y-8 px-4">
      <h2 className="section-header">
        <span>Trusted by</span>
        <span className="text-primary"> Industry</span>
      </h2>

      <div className="partners-slider rounded-2xl bg-[#111] py-4">
        {/* Logos fade out at the card edges via a mask */}
        <div className="flex flex-col overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          {/* Row 1 - scrolls left */}
          <div className="flex h-32 overflow-hidden">
            <div className="marquee-track animate-marquee-left flex w-max items-center">
              {[...row1Logos, ...row1Logos].map(({ src, name }, i) => (
                <div key={i} className="mx-6 flex flex-shrink-0 items-center justify-center">
                  <Image
                    src={src}
                    alt={i < row1Logos.length ? `${name} logo` : ""}
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
              {[...row2Logos, ...row2Logos].map(({ src, name }, i) => {
                const is12 = src === "/partnerLogos/12.png";
                return (
                  <div key={i} className="mx-6 flex flex-shrink-0 items-center justify-center">
                    <Image
                      src={src}
                      alt={i < row2Logos.length ? `${name} logo` : ""}
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
