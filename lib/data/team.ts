import instaIcon from "@/assets/icons/fb.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import whatsappIcon from "@/assets/icons/whatsapp.png";
import athsaraPhoto from "@/assets/team/athsara.png";
import bosiluPhoto from "@/assets/team/bosilu.png";
import himanPhoto from "@/assets/team/himan.png";
import kaveenPhoto from "@/assets/team/kaveen.png";
import malindaPhoto from "@/assets/team/malinda.png";
import manuraPhoto from "@/assets/team/manura.png";
import nabeelahPhoto from "@/assets/team/nabeelah.png";
import neeliaPhoto from "@/assets/team/neelia.png";
import nipuniHPhoto from "@/assets/team/nipuni_h.png";
import nipuniKPhoto from "@/assets/team/nipuni_k.png";
import sasankaPhoto from "@/assets/team/sasanka.png";
import shadurceyaPhoto from "@/assets/team/shadurceya.png";
import sisilaPhoto from "@/assets/team/sisila.png";
import subajananiPhoto from "@/assets/team/subajanani.png";
import yasiruPhoto from "@/assets/team/yasiru.png";
import zaraPhoto from "@/assets/team/zara.png";
import type { MemberDetailProps } from "../type";

export const teamPhotos = {
  athsaraPhoto,
  bosiluPhoto,
  himanPhoto,
  kaveenPhoto,
  malindaPhoto,
  manuraPhoto,
  nabeelahPhoto,
  neeliaPhoto,
  nipuniHPhoto,
  nipuniKPhoto,
  sasankaPhoto,
  shadurceyaPhoto,
  sisilaPhoto,
  subajananiPhoto,
  yasiruPhoto,
  zaraPhoto,
};

type SocialLink = { icon: typeof instaIcon; url: string };

type TeamMember = {
  profileImg: MemberDetailProps["profileImg"];
  name: string;
  position: string;
  socials: SocialLink[];
};

type TeamSection = {
  members: TeamMember[];
};

export const TeamDetails: {
  main: TeamSection;
  secondary: TeamSection;
  third: TeamSection;
  adhoc: TeamSection;
} = {
  main: {
    members: [
      {
        profileImg: teamPhotos.sasankaPhoto,
        name: "Sasanka Premaratne",
        position: "Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.nipuniHPhoto,
        name: "Nipuni Herath",
        position: "Secretary",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
    ],
  },
  secondary: {
    members: [
      {
        profileImg: teamPhotos.malindaPhoto,
        name: "Malinda Kawshalya",
        position: "Vice-Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.nipuniKPhoto,
        name: "Nipuni Kulathunga",
        position: "Vice-Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.nabeelahPhoto,
        name: "Nabeelah Faumi",
        position: "Vice-Chairperson",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
    ],
  },
  third: {
    members: [
      {
        profileImg: teamPhotos.himanPhoto,
        name: "Himan Withana",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.bosiluPhoto,
        name: "Bosilu Nisalitha",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.neeliaPhoto,
        name: "Neelia Makuloluwa",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.yasiruPhoto,
        name: "Yasiru Dharmathilaka",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.sisilaPhoto,
        name: "Sisila Dhevasiri",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.zaraPhoto,
        name: "Zahra Ismail",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.athsaraPhoto,
        name: "Athsara Fernando",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.shadurceyaPhoto,
        name: "Shadurceya Vasanthakumar",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.kaveenPhoto,
        name: "Kaveen Amarasekara",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.manuraPhoto,
        name: "Manura Anuhas",
        position: "coordinator",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
    ],
  },
  adhoc: {
    members: [
      {
        profileImg: " ",
        name: "Amsanaa Senthilkumar",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Umaya Walpola",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Senethya Maheli",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Aaqib Mohideen",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Shalitha Rathnayaka",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Chathuranga Dayarathne",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Tehan Isum",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Dinura Sasmitha",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Madhawa Aloka",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Anjana Pasindu",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Selvarajah Keshavanath",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Pamina Guruparan",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Sanupa Sanvidu",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: instaIcon, url: "" },
          { icon: linkedinIcon, url: "" },
          { icon: whatsappIcon, url: "" },
        ],
      },
    ],
  },
};


// contact us page 
export const memberDetailsData: MemberDetailProps[] = [
  {
    profileImg: teamPhotos.sasankaPhoto,
    name: "Sasanka Premarathne",
    position: "Chairperson",
    socials: [
      { icon: instaIcon, url: "" },
      { icon: linkedinIcon, url: "" },
      { icon: whatsappIcon, url: "" },
    ],
  },
  {
    profileImg: teamPhotos.nipuniHPhoto,
    name: "Nipuni Herath",
    position: "Secretary",
    socials: [
      { icon: instaIcon, url: "" },
      { icon: linkedinIcon, url: "" },
      { icon: whatsappIcon, url: "" },
    ],
  },
];
