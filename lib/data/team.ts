import fbIcon from "@/assets/icons/fb.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
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

// Adhoc imports
import aaqibPhoto from "@/assets/team/adhoc/aaqib.png";
import amsanaaPhoto from "@/assets/team/adhoc/amsanaa.png";
import chathurangaPhoto from "@/assets/team/adhoc/chathuranga.png";
import dinuraPhoto from "@/assets/team/adhoc/dinura.png";
import madhawaPhoto from "@/assets/team/adhoc/madhawa.png";
import sanupaPhoto from "@/assets/team/adhoc/sanupa.png";
import shalithaPhoto from "@/assets/team/adhoc/shalitha.png";
import tehanPhoto from "@/assets/team/adhoc/tehan.png";
import umayaPhoto from "@/assets/team/adhoc/umaya.png";

// Others imports
import amilaPhoto from "@/assets/team/others/amila.png";
import dinilPhoto from "@/assets/team/others/dinil.png";
import induwaraPhoto from "@/assets/team/others/induwara.png";
import sachilaPhoto from "@/assets/team/others/sachila.png";
import sashikPhoto from "@/assets/team/others/sashik.png";
import taluniPhoto from "@/assets/team/others/taluni.png";
import vithurshikaPhoto from "@/assets/team/others/vithurshika.png";

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
  // Adhoc
  aaqibPhoto,
  amsanaaPhoto,
  chathurangaPhoto,
  dinuraPhoto,
  madhawaPhoto,
  sanupaPhoto,
  shalithaPhoto,
  tehanPhoto,
  umayaPhoto,
  // Others
  amilaPhoto,
  dinilPhoto,
  induwaraPhoto,
  sachilaPhoto,
  sashikPhoto,
  taluniPhoto,
  vithurshikaPhoto,
};

type SocialLink = { icon: typeof fbIcon; url: string };

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
          { icon: fbIcon, url: "https://www.facebook.com/share/1B5w91mSfz/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/sasanka-udana",
          },
        ],
      },
      {
        profileImg: teamPhotos.nipuniHPhoto,
        name: "Nipuni Herath",
        position: "Secretary",
        socials: [
          {
            icon: fbIcon,
            url: "https://www.facebook.com/nipuni.herath.381103",
          },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/nipuni-herath",
          },
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
          { icon: fbIcon, url: "https://www.facebook.com/malinda.kawshalya" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/malinda-kawshalya-270872267/",
          },
        ],
      },
      {
        profileImg: teamPhotos.nipuniKPhoto,
        name: "Nipuni Kulathunga",
        position: "Vice-Chairperson",
        socials: [
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.nabeelahPhoto,
        name: "Nabeelah Faumi",
        position: "Vice-Chairperson",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/nabeelah-ahamed-faumi",
          },
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
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.bosiluPhoto,
        name: "Bosilu Nisalitha",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "https://web.facebook.com/n1zzy.2k/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/bosilu-pupulewela-5a58a032b",
          },
        ],
      },
      {
        profileImg: teamPhotos.neeliaPhoto,
        name: "Neelia Makuloluwa",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/neelia-makuloluwa-5b7a34309",
          },
        ],
      },
      {
        profileImg: teamPhotos.yasiruPhoto,
        name: "Yasiru Dharmathilaka",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.sisilaPhoto,
        name: "Sisila Dhevasiri",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/1CvdHDRgye/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/sisila-dhevasiri/",
          },
        ],
      },
      {
        profileImg: teamPhotos.zaraPhoto,
        name: "Zahra Ismail",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/16xPWZ7yEF/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/zahra-ismail-428b42314/",
          },
        ],
      },
      {
        profileImg: teamPhotos.athsaraPhoto,
        name: "Athsara Fernando",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/athsara.fernando/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/athsara-fernando/",
          },
        ],
      },
      {
        profileImg: teamPhotos.shadurceyaPhoto,
        name: "Shadurceya Vasanthakumar",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/shadurceya-vasanthakumar",
          },
        ],
      },
      {
        profileImg: teamPhotos.kaveenPhoto,
        name: "Kaveen Amarasekara",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/17Yccmk13h/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/kaveen-amarasekara-1b1b3b211",
          },
        ],
      },
      {
        profileImg: teamPhotos.manuraPhoto,
        name: "Manura Anuhas",
        position: "coordinator",
        socials: [
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
    ],
  },
  adhoc: {
    members: [
      {
        profileImg: teamPhotos.amsanaaPhoto,
        name: "Amsanaa Senthilkumar",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/amsanaa-senthilkumar-0b66051aa/",
          },
        ],
      },
      {
        profileImg: teamPhotos.umayaPhoto,
        name: "Umaya Walpola",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/umaya-walpola-a24a31201",
          },
        ],
      },
      {
        profileImg: " ",
        name: "Senethya Maheli",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.aaqibPhoto,
        name: "Aaqib Mohideen",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/aaqibmohideen",
          },
        ],
      },
      {
        profileImg: teamPhotos.shalithaPhoto,
        name: "Shalitha Rathnayaka",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/1L3WFviF5s/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/shalitharathnayaka",
          },
        ],
      },
      {
        profileImg: teamPhotos.chathurangaPhoto,
        name: "Chathuranga Dayarathne",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/chathuranga-dayarathne-16b478292",
          },
        ],
      },
      {
        profileImg: teamPhotos.tehanPhoto,
        name: "Tehan Isum",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/tehan-isum-b28410306",
          },
        ],
      },
      {
        profileImg: teamPhotos.dinuraPhoto,
        name: "Dinura Sasmitha",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/1DPMuD1LB8/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/dinura-sasmitha-8a5815269",
          },
        ],
      },
      {
        profileImg: teamPhotos.madhawaPhoto,
        name: "Madhawa Aloka",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/1JpxsPVXfb/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/madhawa-aloka-707940271/",
          },
        ],
      },
      {
        profileImg: " ",
        name: "Anjana Pasindu",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Selvarajah Keshavanath",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
      {
        profileImg: " ",
        name: "Pamina Guruparan",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          { icon: linkedinIcon, url: "" },
        ],
      },
      {
        profileImg: teamPhotos.sanupaPhoto,
        name: "Sanupa Sanvidu",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/1AaGJnUfw5/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/sanupa-indigahawela-290479311",
          },
        ],
      },
      // Other Members added as Adhoc
      {
        profileImg: teamPhotos.amilaPhoto,
        name: "Amila Fernando",
        position: "AD HOC VOLUNTEERS",
        socials: [
          {
            icon: fbIcon,
            url: "https://www.facebook.com/amila.fernando.31924792",
          },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/amilashenalfernando",
          },
        ],
      },
      {
        profileImg: teamPhotos.dinilPhoto,
        name: "Dinil Thilakarathne",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/dinil-thilakarathne/",
          },
        ],
      },
      {
        profileImg: teamPhotos.induwaraPhoto,
        name: "Induwara Uthsara",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/induwa.uthsara/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/induwarauthsara/",
          },
        ],
      },
      {
        profileImg: teamPhotos.sachilaPhoto,
        name: "Sachila Chathnuka",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "https://www.facebook.com/share/19GDNKBPxU/" },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/sachila-chathnuka-1a5a42376",
          },
        ],
      },
      {
        profileImg: teamPhotos.sashikPhoto,
        name: "R. A. Sashik Thivanka",
        position: "AD HOC VOLUNTEERS",
        socials: [
          { icon: fbIcon, url: "" },
          {
            icon: linkedinIcon,
            url: "https://lk.linkedin.com/in/sashikdevx",
          },
        ],
      },
      {
        profileImg: teamPhotos.taluniPhoto,
        name: "P.A.Taluni Piyumika",
        position: "AD HOC VOLUNTEERS",
        socials: [
          {
            icon: fbIcon,
            url: "https://www.facebook.com/share/14S4jo8pT6v/?mibextid=wwXIfr",
          },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/taluni-piyumika-ba264639a",
          },
        ],
      },
      {
        profileImg: teamPhotos.vithurshikaPhoto,
        name: "Vithurshika",
        position: "AD HOC VOLUNTEERS",
        socials: [
          {
            icon: fbIcon,
            url: "https://www.facebook.com/profile.php?id=61551029880202",
          },
          {
            icon: linkedinIcon,
            url: "https://www.linkedin.com/in/vithurshika-rajkumar-351675381?trk=contact-info",
          },
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
      { icon: fbIcon, url: "https://www.facebook.com/share/1B5w91mSfz/" },
      { icon: linkedinIcon, url: "https://www.linkedin.com/in/sasanka-udana" },
    ],
  },
  {
    profileImg: teamPhotos.nipuniHPhoto,
    name: "Nipuni Herath",
    position: "Secretary",
    socials: [
      { icon: fbIcon, url: "https://www.facebook.com/nipuni.herath.381103" },
      { icon: linkedinIcon, url: "https://www.linkedin.com/in/nipuni-herath" },
    ],
  },
];
