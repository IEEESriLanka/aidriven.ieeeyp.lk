import BgSvg from "../BgSvg";

export default function BackgroundWrapper({
  children,
}: React.PropsWithChildren) {
  return (
    <div
      className="relative body-gradient"
      style={{ "--_angle": "100deg" } as React.CSSProperties}
    >
      <BgSvg />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
