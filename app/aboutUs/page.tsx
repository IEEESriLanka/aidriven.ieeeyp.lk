import Image from 'next/image';

import aboutImage from '@/assets/aboutImageContainer.png';
import { contactDetailsData, coreValuesData, memberDetailsData } from '@/utils/aboutUs/data';
import { ContactCard, MemberCard, ValueCard } from '@/components/AboutUs/Cards';
import Form from '@/components/AboutUs/Form';

const Page = () => {
    return (
        <div className="font-poppins pt-[201px] mx-[auto] container text-white items-center  justify-center flex flex-col gap-[102px] px-[10px] md:px-[40px] lg:px-[80px]">
            {/* about */}
            <div className="flex flex-col md:flex-row container justify-center py-8 px-6 gap-16 rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.08)_0%,rgba(58,53,49,0.08)_48.56%,rgba(52,47,42,0.08)_100%)]">
                <div className="flex justify-center">
                    <Image src={aboutImage} alt=" " className="w-auto h-[220px] object-contain" />
                </div>
                <div className="flex flex-col container gap-[20px] ">
                    <p className="font-elemental-end text-[32px] text-center md:text-left">
                        ABOUT <span className="text-primary">AIDSL</span>
                    </p>
                    <p className="text-white text-[14px] ">
                        AI-Driven Sri Lanka is an initiative launched in 2020 by IEEE Young Professionals Sri Lanka to empower young individuals in Sri Lanka with an analytical background and a keen interest in the field of Artificial Intelligence (AI). We offer technology programs incorporating the latest advancements, research, and trends in AI. Our aim is to inspire technology enthusiasts to bring their ideas to life and positively impact the future.
                    </p>
                </div>
            </div>

            <div className="flex flex-col container gap-[40px] ">
                <div>
                    <p className="font-elemental-end text-[32px] text-center md:text-left">
                        <span className="text-primary">OUR STORY</span> IS ABOUT BUILDING AI <span className="text-primary"> STRONG AI <br /> COMMUNITY</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.40)_0%,rgba(58,53,49,0.40)_48.56%,rgba(52,47,42,0.40)_100%)] justify-center items-center md:gap-[65px] px-[40px] pt-4">
                    <div className="text-[32px] text-primary">Mission</div>
                    <div className="text-[14px] py-[35px] container px-[40px]">
                        Our mission is to bridge the gap between undergraduates and graduates in the AI industry by offering comprehensive AI education, practical skills, and a supportive community through a holistic approach that includes bootcamps, technical awareness sessions, community engagements, and mentorship programs, thereby fostering a thriving AI ecosystem in Sri Lanka.
                    </div>
                </div>

                <div className="flex flex-col md:flex-row rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.40)_0%,rgba(58,53,49,0.40)_48.56%,rgba(52,47,42,0.40)_100%)] justify-center items-center  md:gap-[65px] px-[40px] pt-4">
                    <div className="text-[32px] text-primary">Vision</div>
                    <div className="text-[14px] py-[35px] container px-[40px] ">Empowering Sri Lankan Youth with AI Excellence.</div>
                </div>
            </div>

            <div className="flex flex-col container gap-[32px]">
                <div>
                    <p className="font-elemental-end text-[32px]  text-center md:text-left">
                        OUR <span className="text-primary">CORE VALUES</span>
                    </p>
                    <p className="text-[14px] py-[40px] px-[40px]">
                        Our core values shape our identity, guiding us to empower AI enthusiasts, fosterinnovation, pursue excellence, and thrive through collective collaboration. 
                    </p>
                </div>
                <div className="flex flex-col container lg:grid lg:grid-cols-4 gap-[30px] md:gap-[20px] lg:gap-[10px] px-[20px] md:px-[10px] lg:px-0 items-center">
                    {coreValuesData.map((val) => (
                        <ValueCard key={val.title} img={val.img} text={val.text} title={val.title} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-[80px] container">
                <div className="text-[32px] font-elemental-end text-primary uppercase  text-center md:text-left">
                    <p>
                        Get in touch <span className="text-white">and let's</span> collaborate
                    </p>
                </div>
                <div>
                    <Form />
                </div>
            </div>

            <div className="container flex md:flex-row flex-col-reverse gap-[64px] justify-center">
                <div className="flex flex-col gap-[40px] mx-auto">
                    {contactDetailsData.map((dets) => (
                        <ContactCard key={dets.title} contactDetail={dets} />
                    ))}
                </div>

                <div className="flex flex-col gap-[16px] justify-center container">
                    <p className="uppercase text-[20px] text-center">Connect with a member of our team</p>
                    <div className="flex flex-col md:flex-row gap-[20px] justify-center">
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
