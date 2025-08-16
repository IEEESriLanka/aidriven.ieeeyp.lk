import React from 'react'
import Image, { StaticImageData } from 'next/image';
import aboutImage from '@/assets/aboutImageContainer.png';
import handshakeImg from '@/assets/aboutUs/Handshake.png';
import personLight from '@/assets/aboutUs/Person Lightning.png';
import tipImg from '@/assets/aboutUs/tips_and_updates.png';
import awardImg from '@/assets/aboutUs/Award 2.png';
import phoneIcon from '@/assets/aboutUs/phone.png';
import locationIcon from '@/assets/aboutUs/place.png';
import commentIcon from '@/assets/aboutUs/chat.png';
import memberPhoto from '@/assets/aboutUs/mem1.png';
import instaIcon from "@/assets/icons/fb.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import whatsappIcon from "@/assets/icons/whatsapp.png";

interface ValProps {
    img: StaticImageData, title: string, text: string
}

interface DetailProp {
    contactDetail: { icon: StaticImageData, title: string, val: string, socials?: { icon: StaticImageData, url: string }[] }
}

const Parellelo = () => (
    <svg width="158" height="90" viewBox="0 0 158 90" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0  -z-10'>
        <path d="M8.13477 0.838379H140.217C143.979 0.838379 147.16 3.62663 147.652 7.35693L157.31 80.4995C157.903 84.9926 154.406 88.981 149.874 88.981H17.8643C14.1046 88.9807 10.9265 86.1971 10.4307 82.4702L0.700195 9.32764C0.102183 4.83223 3.59975 0.838379 8.13477 0.838379Z" fill="url(#paint0_linear_442_5122)" stroke="url(#paint1_linear_442_5122)" />
        <defs>
            <linearGradient id="paint0_linear_442_5122" x1="79" y1="0.338379" x2="79" y2="89.4812" gradientUnits="userSpaceOnUse">
                <stop offset="0.394231" stopColor="#EA421E" />
                <stop offset="0.884615" stopColor="#9D2107" />
            </linearGradient>
            <linearGradient id="paint1_linear_442_5122" x1="61.807" y1="0.33838" x2="113.273" y2="85.5217" gradientUnits="userSpaceOnUse">
                <stop stopColor="#808080" />
                <stop offset="0.408654" stopColor="#191919" />
                <stop offset="0.677885" stopColor="#191919" />
                <stop offset="1" stopColor="#808080" />
            </linearGradient>
        </defs>
    </svg>
)

const coreValues = [
    { img: handshakeImg, title: "collaboration", text: "Connect with AI enthusiasts and industry professionals to amplify your learning experience." },
    { img: tipImg, title: "innovation", text: "Embrace a culture that fuels innovative thinking and explores cutting-edge AI technologies." },
    { img: awardImg, title: "excellence", text: "Experience AI education and training at its finest, where excellence is not just a goal but a standard." },
    { img: personLight, title: "empowerment", text: "Gain the skills and knowledge needed to thrive in the dynamic landscape of the AI industry." },
]

const contactDetails = [
    { icon: phoneIcon, title: "phone number", val: "+94717190257" },
    { icon: locationIcon, title: "location", val: "Colombo, Sri Lanka" },
    { icon: commentIcon, title: "drop us a line", val: "aidrivensrilanka@gmail.com" },
]


const ContactCard = ({ contactDetail }: DetailProp) => (
    <div className='flex gap-[20px]' key={contactDetail.title}>
        <div className='size-[64px] rounded-full border-1 border-primary p-[12px]'><Image className="size-[40px] m-auto" src={contactDetail.icon} alt="" /></div>
        <div className="flex flex-col gap-[7px]">
            <p className='uppercase text-[20px]'>{contactDetail.title}</p>
            <p className=' text-[16px] font-[300]'>{contactDetail.val}</p>
        </div>
    </div>
)

const ValueCard = ({ img, title, text }: ValProps) => (
    <div key={title} className="h-[320px] w-[250px] bg-[linear-gradient(180deg,rgba(52,47,42,0.32)_0%,rgba(58,53,49,0.32)_51.44%,rgba(69,65,61,0.32)_100%)] flex flex-col gap-[24px] items-center justify-center px-[19px] py-[24px] rounded-[4px_24px]">
        <div className='py-[12px]'><Image src={img} className='size-[80px] object-cover' alt={title} /></div>
        <div className='text-[20px] font-elemental-end  uppercase tracking-[1px]'>{title}</div>
        <div className='text-[16px] text-center'>{text}</div>
    </div>
)

const memberDetails = [
    {
        icon: memberPhoto, title: "Nisal Mihiranga", val: "Program Lead", socials: [
            { icon: instaIcon, url: "" },
            { icon: linkedinIcon, url: "" },
            { icon: whatsappIcon, url: "" }
        ]
    },
    {
        icon: memberPhoto, title: "Nisal Mihiranga", val: "Program Lead", socials: [
            { icon: instaIcon, url: "" },
            { icon: linkedinIcon, url: "" },
            { icon: whatsappIcon, url: "" }
        ]
    },
]

const MemberCard = ({ contactDetail }: DetailProp) => (
    <div className='flex flex-col gap-[20px] items-center justify-center'>
        <div className='relative z-0'>
            <Image src={contactDetail.icon} className='w-[100px] h-[162px] object-cover z-30' alt='' />
            <Parellelo />
        </div>
        <p className='font-elemental-end text-[20px]'>{contactDetail.title}</p>
        <p className=' text-[16px]'>{contactDetail.val}</p>
        <div className="flex gap-[16px]">{contactDetail.socials?.map((social) => (
            <a href={social.url}>
                <div className='size-[36px] rounded-[6px]'><Image src={social.icon} alt='' /></div>
            </a>
        ))}</div>
    </div>
)

const Form = () => {

    const inputStyle = "p-[15.8px_24.8px_17.4px_24.8px] rounded-[8px] border-1 border-primary justify-center w-full bg-[#191919] text-[14px] text-white focus:outline-none focus:border-2 ";
    const labelStyle = "flex text-[16px] font-[500]"
    const Star = () => (
        <div className="text-[16px] text-primary">*</div>
    )

    return (
        <div className='flex flex-col py-[40px] w-full md:w-[846px] px-[44px] bg-[#45413DCC] rounded-[4px_24px] gap-[20px]'>
            <p className='uppercase font-elemental-end text-[20px] text-white'>contact us</p>

            <div className="flex flex-col md:flex-row justify-between w-full gap-[20px] md:gap-[100px]">
                <div className='w-full flex flex-col gap-[20px]'>
                    <label className={labelStyle} htmlFor="fname">First Name<Star /></label>
                    <input name="fname" type="text" className={inputStyle} placeholder='First name here' required />
                </div>
                <div className='w-full flex flex-col gap-[20px]'>
                    <label className={labelStyle} htmlFor="lname">Last Name<Star /></label>
                    <input name="lname" type="text" className={inputStyle} placeholder='Last name here' required />
                </div>
            </div>

            <div className='w-full flex flex-col gap-[20px]'>
                <label className={labelStyle} htmlFor="fname">Email Address<Star /></label>
                <input name="email" type="email" className={inputStyle} placeholder='Add email' required />
            </div>

            <div className='w-full flex flex-col gap-[20px]'>
                <label className={labelStyle} htmlFor="fname">Comments/Questions</label>
                <textarea className={`${inputStyle} h-[180px]`} placeholder='Comments' />
            </div>
            <button className="cursor-pointer bg-[linear-gradient(180deg,#EA421E_39.42%,#9D2107_88.46%)] rounded-[8px] text-center h-[44px] w-[174px] text-white place-content-center hover:bg-[linear-gradient(0deg,#EA421E_39.42%,#9D2107_88.46%)] hover:transition-colors hover:duration-700">Send Message</button>

        </div>
    )
}

const page = () => {
    return (
        <div className='pt-[201px] mx-[auto] md:w-[1064px] text-white items-center  justify-center flex flex-col gap-[102px] px-[40px] md:px-0'>
            <div className="flex flex-col md:flex-row w-full justify-center py-8 px-6 gap-16 rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.08)_0%,rgba(58,53,49,0.08)_48.56%,rgba(52,47,42,0.08)_100%)]">
                <div className="flex justify-center">
                    <Image src={aboutImage} alt=" " className='w-[190px] h-[220px]' />
                </div>
                <div className="flex flex-col w-full md:w-[667px] gap-[20px] ">
                    <p className='font-elemental-end text-[32px] text-center md:text-left'>ABOUT <span className='text-primary'>AIDSL</span></p>
                    <p className='text-white '>AI-Driven Sri Lanka is an initiative launched in 2020 by IEEE Young Professionals Sri Lanka to empower young individuals in Sri Lanka with an analytical background and a keen interest in the field of Artificial Intelligence (AI). We offer technology programs incorporating the latest advancements, research, and trends in AI. Our aim is to inspire technology enthusiasts to bring their ideas to life and positively impact the future.</p>
                </div>
            </div>

            <div className="flex flex-col w-full gap-[40px] ">
                <div>
                    <p className='font-elemental-end text-[32px] text-center md:text-left'><span className='text-primary'>OUR STORY</span> IS ABOUT BUILDING AI <span className='text-primary'> STRONG AI <br /> COMMUNITY</span></p>
                </div>

                <div className="flex flex-col md:flex-row rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.40)_0%,rgba(58,53,49,0.40)_48.56%,rgba(52,47,42,0.40)_100%)] justify-center items-center md:gap-[65px] ">
                    <div className='text-[32px] text-primary'>Mission</div>
                    <div className="text-[14px] py-[35px] md:w-[746px] w-full px-[40px]">Our mission is to bridge the gap between undergraduates and graduates in the AI industry by offering comprehensive AI education, practical skills, and a supportive community through a holistic approach that includes bootcamps, technical awareness sessions, community engagements, and mentorship programs, thereby fostering a thriving AI ecosystem in Sri Lanka.</div>
                </div>

                <div className="flex flex-col md:flex-row rounded-[4px_44px] bg-[linear-gradient(180deg,rgba(69,65,61,0.40)_0%,rgba(58,53,49,0.40)_48.56%,rgba(52,47,42,0.40)_100%)] justify-center items-center  md:gap-[65px] ">
                    <div className='text-[32px] text-primary'>Vision</div>
                    <div className="text-[14px] py-[35px] md:w-[746px] w-full px-[40px] ">Empowering Sri Lankan Youth with AI Excellence.</div>
                </div>


            </div>

            <div className="flex flex-col w-full gap-[32px]">
                <div><p className='font-elemental-end text-[32px]  text-center md:text-left'>OUR <span className='text-primary'>CORE VALUES</span></p>
                    <p className='text-[14px] py-[40px] px-[40px]'>Our core values shape our identity, guiding us to empower AI enthusiasts, fosterinnovation, pursue excellence, and thrive through collective <br /> collaboration. </p></div>
                <div className="flex flex-col md:flex-row gap-[20px] items-center">
                    {coreValues.map((val) => (
                        <ValueCard key={val.text} img={val.img} text={val.text} title={val.title} />
                    ))

                    }
                </div>
            </div>

            <div className="flex flex-col gap-[80px] w-full">
                <div className='text-[32px] font-elemental-end text-primary uppercase  text-center md:text-left'>
                    <p>Get in touch <span className='text-white'>and let's</span> collaborate</p>
                </div>
                <div>
                    <Form />
                </div>
            </div>

            <div className='w-full flex md:flex-row flex-col-reverse gap-[64px] justify-center'>
                <div className='flex flex-col gap-[40px] mx-auto'>{contactDetails.map((dets) => (
                    <ContactCard key={dets.title} contactDetail={dets} />
                ))}</div>

                <div className='flex flex-col gap-[16px] justify-center w-full'>
                    <p className='uppercase text-[20px] text-center'>Connect with a member of our team</p>
                    <div className='flex flex-col md:flex-row gap-[20px] justify-center'>
                        {memberDetails.map((dets) => (
                            <MemberCard contactDetail={dets} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page