import Image from "next/image";

import aboutImage from "@/assets/aboutImageContainer.png";
import {
  contactDetailsData,
  coreValuesData,
  memberDetailsData,
} from "@/utils/aboutUs/data";
import { ContactCard, MemberCard, ValueCard } from "@/components/AboutUs/Cards";
import Form from "@/components/AboutUs/Form";

const Page = () => {
  return (
    <div className="font-poppins mx-[auto] flex flex-col items-center justify-center gap-[102px] px-[40px] pt-[201px] text-white md:w-[1064px] md:px-0">
      {/* about */}
      <div className="flex w-full flex-col justify-center gap-16 rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.08)_0%,rgba(58,53,49,0.08)_48.56%,rgba(52,47,42,0.08)_100%)] px-6 py-8 md:flex-row">
        <div className="flex justify-center">
          <Image src={aboutImage} alt=" " className="h-[220px] w-[190px]" />
        </div>
        <div className="flex w-full flex-col gap-[20px] md:w-[667px]">
          <p className="font-elemental-end text-center text-[32px] md:text-left">
            ABOUT <span className="text-primary">AIDSL</span>
          </p>
          <p className="text-[14px] text-white">
            AI-Driven Sri Lanka is an initiative launched in 2020 by IEEE Young
            Professionals Sri Lanka to empower young individuals in Sri Lanka
            with an analytical background and a keen interest in the field of
            Artificial Intelligence (AI). We offer technology programs
            incorporating the latest advancements, research, and trends in AI.
            Our aim is to inspire technology enthusiasts to bring their ideas to
            life and positively impact the future.
          </p>
        </div>
      </div>

      {/* story */}
      <div className="flex w-full flex-col gap-[40px]">
        <div>
          <p className="font-elemental-end text-center text-[32px] md:text-left">
            <span className="text-primary">OUR STORY</span> IS ABOUT BUILDING AI{" "}
            <span className="text-primary">
              {" "}
              STRONG AI <br /> COMMUNITY
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.40)_0%,rgba(58,53,49,0.40)_48.56%,rgba(52,47,42,0.40)_100%)] md:flex-row md:gap-[65px]">
          <div className="text-primary text-[32px]">Mission</div>
          <div className="w-full px-[40px] py-[35px] text-[14px] md:w-[746px]">
            Our mission is to bridge the gap between undergraduates and
            graduates in the AI industry by offering comprehensive AI education,
            practical skills, and a supportive community through a holistic
            approach that includes bootcamps, technical awareness sessions,
            community engagements, and mentorship programs, thereby fostering a
            thriving AI ecosystem in Sri Lanka.
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.40)_0%,rgba(58,53,49,0.40)_48.56%,rgba(52,47,42,0.40)_100%)] md:flex-row md:gap-[65px]">
          <div className="text-primary text-[32px]">Vision</div>
          <div className="w-full px-[40px] py-[35px] text-[14px] md:w-[746px]">
            Empowering Sri Lankan Youth with AI Excellence.
          </div>
        </div>
      </div>

      {/* core values */}
      <div className="flex w-full flex-col gap-[32px]">
        <div>
          <p className="font-elemental-end text-center text-[32px] md:text-left">
            OUR <span className="text-primary">CORE VALUES</span>
          </p>
          <p className="px-[40px] py-[40px] text-[14px]">
            Our core values shape our identity, guiding us to empower AI
            enthusiasts, fosterinnovation, pursue excellence, and thrive through
            collective collaboration.
          </p>
        </div>
        <div className="flex flex-col items-center gap-[20px] md:flex-row">
          {coreValuesData.map((val) => (
            <ValueCard
              key={val.title}
              img={val.img}
              text={val.text}
              title={val.title}
            />
          ))}
        </div>
      </div>

      {/* contact form */}
      <div className="flex w-full flex-col gap-[80px]">
        <div className="font-elemental-end text-primary text-center text-[32px] uppercase md:text-left">
          <p>
            Get in touch <span className="text-white">and let&apos;s</span>{" "}
            collaborate
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>

      {/* contact + team */}
      <div className="flex w-full flex-col-reverse justify-center gap-[64px] md:flex-row">
        <div className="mx-auto flex flex-col gap-[40px]">
          {contactDetailsData.map((dets) => (
            <ContactCard key={dets.title} contactDetail={dets} />
          ))}
        </div>

        <div className="flex w-full flex-col justify-center gap-[16px]">
          <p className="text-center text-[20px] uppercase">
            Connect with a member of our team
          </p>
          <div className="flex flex-col justify-center gap-[20px] md:flex-row">
            {memberDetailsData.map((dets, i) => (
              <MemberCard key={i} member={dets} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
