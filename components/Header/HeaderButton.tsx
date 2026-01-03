import Image from "next/image";
import Icon from "@/assets/Register_Icon.png";
import { cn } from "@/lib/utils";

interface HeaderButtonProps {
  className?: string;
}

export default function HeaderButton({ className }: HeaderButtonProps) {
  return (
    <button
      className={cn(
        "relative hidden h-full items-center space-x-2 rounded-lg bg-white px-8 text-xl font-semibold text-orange-500 disabled:bg-white/90 disabled:cursor-not-allowed lg:flex",
        className,
      )}
      disabled={true}
    >
      <Image src={Icon} alt="Register Icon" width={24} height={24} />
      <span className="italic">Register Now</span>
    </button>
  );
}
