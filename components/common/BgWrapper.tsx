export default function BackgroundWrapper({
  children,
}: React.PropsWithChildren) {
  return (
    <div
      className="body-gradient"
      style={{ "--_angle": "100deg" } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
