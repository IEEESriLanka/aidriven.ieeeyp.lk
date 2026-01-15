import svg from "@/assets/bg-svg.svg";
import Image from "next/image";

export default function BgSvg() {
  return (
    <div className="absolute min-h-[120vh] w-screen overflow-clip">
      <div className="absolute top-0 -right-[20%] h-full w-full">
        <Image
          src={svg}
          alt=""
          className="h-[120vh] w-full scale-155 object-cover opacity-50"
        />
      </div>
    </div>
  );
}
