import type {
  ContactDetailProps,
  MemberDetailProps,
  ValProps,
} from "@/lib/type";
import Image from "next/image";

const Parellelo = () => (
  <svg
    width="158"
    height="90"
    viewBox="0 0 158 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 -z-10"
  >
    <path
      d="M8.13477 0.838379H140.217C143.979 0.838379 147.16 3.62663 147.652 7.35693L157.31 80.4995C157.903 84.9926 154.406 88.981 149.874 88.981H17.8643C14.1046 88.9807 10.9265 86.1971 10.4307 82.4702L0.700195 9.32764C0.102183 4.83223 3.59975 0.838379 8.13477 0.838379Z"
      fill="url(#paint0_linear_442_5122)"
      stroke="url(#paint1_linear_442_5122)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_442_5122"
        x1="79"
        y1="0.338379"
        x2="79"
        y2="89.4812"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.394231" stopColor="#EA421E" />
        <stop offset="0.884615" stopColor="#9D2107" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_442_5122"
        x1="61.807"
        y1="0.33838"
        x2="113.273"
        y2="85.5217"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#808080" />
        <stop offset="0.408654" stopColor="#191919" />
        <stop offset="0.677885" stopColor="#191919" />
        <stop offset="1" stopColor="#808080" />
      </linearGradient>
    </defs>
  </svg>
);

export const ContactCard = ({
  contactDetail,
}: {
  contactDetail: ContactDetailProps;
}) => (
  <div className="flex gap-[20px]">
    <div className="border-primary size-[64px] rounded-full border-1 p-[12px]">
      <Image className="m-auto size-[40px]" src={contactDetail.icon} alt="" />
    </div>
    <div className="flex flex-col gap-[7px]">
      <p className="text-[20px] uppercase">{contactDetail.title}</p>
      <p className="text-[16px] font-[300]">{contactDetail.val}</p>
    </div>
  </div>
);

export const ValueCard = ({ img, title, text }: ValProps) => (
  <>
    <div className="container flex h-[380px] flex-col items-center justify-center gap-[24px] rounded-[4px_24px] bg-[linear-gradient(180deg,rgba(52,47,42,0.32)_0%,rgba(58,53,49,0.32)_51.44%,rgba(69,65,61,0.32)_100%)] px-[19px] py-[24px]">
      <div className="py-[12px]">
        <Image src={img} className="size-[80px] object-cover" alt={title} />
      </div>
      <div className="font-elemental-end text-[20px] tracking-[1px] uppercase">
        {title}
      </div>
      <div className="text-center text-[16px]">{text}</div>
    </div>
  </>
);

export const MemberCard = ({ member }: { member: MemberDetailProps }) => (
  <div className="flex flex-col items-center justify-center gap-[20px]">
    <div className="relative z-0">
      <Image
        src={member.icon}
        className="z-30 h-[162px] w-[100px] object-cover"
        alt=""
      />
      <Parellelo />
    </div>
    <p className="font-elemental-end text-[20px]">{member.title}</p>
    <p className="text-[16px]">{member.val}</p>
    <div className="flex gap-[16px]">
      {member.socials.map((social, i) => (
        <a key={i} href={social.url}>
          <div className="size-[36px] rounded-[6px]">
            <Image src={social.icon} alt="" />
          </div>
        </a>
      ))}
    </div>
  </div>
);
