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

import type { ValProps, ContactDetailProps, MemberDetailProps } from './types';

export const coreValuesData: ValProps[] = [
    { img: handshakeImg, title: "collaboration", text: "Connect with AI enthusiasts and industry professionals to amplify your learning experience." },
    { img: tipImg, title: "innovation", text: "Embrace a culture that fuels innovative thinking and explores cutting-edge AI technologies." },
    { img: awardImg, title: "excellence", text: "Experience AI education and training at its finest, where excellence is not just a goal but a standard." },
    { img: personLight, title: "empowerment", text: "Gain the skills and knowledge needed to thrive in the dynamic landscape of the AI industry." },
];

export const contactDetailsData: ContactDetailProps[] = [
    { icon: phoneIcon, title: "phone number", val: "+94717190257" },
    { icon: locationIcon, title: "location", val: "Colombo, Sri Lanka" },
    { icon: commentIcon, title: "drop us a line", val: "aidrivensrilanka@gmail.com" },
];

export const memberDetailsData: MemberDetailProps[] = [
    {
        icon: memberPhoto,
        title: "Nisal Mihiranga",
        val: "Program Lead",
        socials: [
            { icon: instaIcon, url: "" },
            { icon: linkedinIcon, url: "" },
            { icon: whatsappIcon, url: "" },
        ],
    },
    {
        icon: memberPhoto,
        title: "Nisal Mihiranga",
        val: "Program Lead",
        socials: [
            { icon: instaIcon, url: "" },
            { icon: linkedinIcon, url: "" },
            { icon: whatsappIcon, url: "" },
        ],
    },
];