import { FeatureItemProps } from "@/lib/type";
import Image from "next/image";

export const EventFeatCard = ({ feature }: { feature: FeatureItemProps }) => (
  <div className="my-4 flex gap-4">
    <Image className="size-[64px]" src={feature.icon} alt="" />
    <p className="w-[320px] text-[16px] font-[400]">{feature.title}</p>
  </div>
);
