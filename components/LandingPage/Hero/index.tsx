export default function Hero() {
  return (
    <div className="relative flex min-h-[calc(100svh-100px)] w-full items-center overflow-hidden lg:min-h-[calc(100svh-122px)]">
      <div className="relative z-10 mx-auto flex w-[95%] max-w-7xl flex-col gap-y-4 px-6 lg:gap-y-8">
        <div className="font-elemental-end flex flex-col gap-y-2 text-2xl text-white lg:gap-y-6 lg:text-5xl">
          <span>ONE TEAM. </span>
          <span className="text-primary">Igniting minds.</span>
          <span>LIMITLESS POSSIBILITIES.</span>
        </div>
        <div className="w-full text-base text-balance text-white lg:max-w-[55ch]">
          <p>
            AI-Driven Sri Lanka is an initiative by IEEE Young Professionals Sri
            Lanka formed in 2020 that strives to bridge the gap between
            undergraduates and graduates of the AI Industry. Our tech programs
            are equipped with the latest AI technologies, research and trends to
            inspire tech enthusiasts to transform tomorrow's world by bringing
            their ideas into a reality.
          </p>
        </div>
      </div>
    </div>
  );
}
