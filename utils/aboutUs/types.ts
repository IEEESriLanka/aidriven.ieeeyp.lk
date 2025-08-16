import type { StaticImageData } from "next/image";

type ImgSrc = StaticImageData | string;

export interface ValProps {
    img: ImgSrc;
    title: string;
    text: string;
}

export interface ContactDetailProps {
    icon: ImgSrc;
    title: string;
    val: string;
}

export interface MemberDetailProps {
    icon: ImgSrc;
    title: string;
    val: string;
    socials: { icon: ImgSrc; url: string }[];
}