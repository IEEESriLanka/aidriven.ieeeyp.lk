import fbIcon from "@/assets/icons/fb.png";
import linkedinIcon from "@/assets/icons/linkedin.png";

// 2026 team imports
import geenothPhoto from "@/assets/team-2026/Geenoth Viksura.png";
import hirushiPhoto from "@/assets/team-2026/Hirushi Gamage.png";
import kaushikaPhoto from "@/assets/team-2026/Kaushika Dissanayake.png";
import lohansaPhoto from "@/assets/team-2026/Lohansa Munasinghe.png";
import linukPhoto from "@/assets/team-2026/Linuk Perera.png";
import dinaraPhoto from "@/assets/team-2026/Dinara Thareen.png";
import hirushaPhoto from "@/assets/team-2026/Hirusha Perera.png";
import thulanyaPhoto from "@/assets/team-2026/6.png";
import tharinduNimsaraPhoto from "@/assets/team-2026/Tharindu Nimsara.png";
import mitharaPhoto from "@/assets/team-2026/Mithara Mallikaarachchi.png";
import heshanPhoto from "@/assets/team-2026/Heshan Ranasinghe.png";
import elishaPhoto from "@/assets/team-2026/Elisha Perera.png";
import chathuminaPhoto from "@/assets/team-2026/Chathumina Kalatuwage.png";
import thevinuPhoto from "@/assets/team-2026/Thevinu Premathilaka.png";
import manulaPhoto from "@/assets/team-2026/Manula Thejan.png";
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
import gimanthaPhoto from "@/assets/team/gimantha.png";

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
  gimanthaPhoto,
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
      {
        profileImg: teamPhotos.gimanthaPhoto,
        name: "Gimantha Induwara",
        position: "AD HOC VOLUNTEERS",
        socials: [
          {
            icon: fbIcon,
            url: "",
          },
          {
            icon: linkedinIcon,
            url: "",
          },
        ],
      },
    ],
  },
};

export const Team2026Details: {
  main: TeamSection;
  secondary: TeamSection;
  third: TeamSection;
} = {
  main: {
    members: [
      {
        profileImg: geenothPhoto,
        name: "Geenoth Viksura",
        position: "Chairperson",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/geenoth-viksura/" },
        ],
      },
      {
        profileImg: hirushiPhoto,
        name: "Hirushi Gamage",
        position: "Secretary",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/hirushi-gamage-b912a9265" },
        ],
      },
    ],
  },
  secondary: {
    members: [
      {
        profileImg: kaushikaPhoto,
        name: "Kaushika Dissanayake",
        position: "Vice-Chairperson",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/anuda-kaushika" },
        ],
      },
      {
        profileImg: lohansaPhoto,
        name: "Lohansa Munasinghe",
        position: "Vice-Chairperson",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/lohansa-munasinghe-5691961b5/" },
        ],
      },
      {
        profileImg: linukPhoto,
        name: "Linuk Perera",
        position: "Vice-Chairperson",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/linukperera" },
        ],
      },
    ],
  },
  third: {
    members: [
      {
        profileImg: dinaraPhoto,
        name: "Dinara Thareen",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/dinara-thareen/" },
        ],
      },
      {
        profileImg: manulaPhoto,
        name: "Manula Thejan",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/manula-thejan-90b8172b8/" },
        ],
      },
      {
        profileImg: thulanyaPhoto,
        name: "Thulanya Dewasurendra",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/thulanya-dewasurendra-80a712344/" },
        ],
      },
      {
        profileImg: tharinduNimsaraPhoto,
        name: "Tharindu Nimsara",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/tharindu-nimsara-waidyathilake-578a112a0" },
        ],
      },
      {
        profileImg: mitharaPhoto,
        name: "Mithara Mallikaarachchi",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/mithara-mallikaarachchi-05622735a" },
        ],
      },
      {
        profileImg: heshanPhoto,
        name: "Heshan Ranasinghe",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/heshan-ranasinghe-988b00290" },
        ],
      },
      {
        profileImg: elishaPhoto,
        name: "Elisha Perera",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/elisha-perera" },
        ],
      },
      {
        profileImg: chathuminaPhoto,
        name: "Chathumina Kalatuwage",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/chathumina-k-077808249/" },
        ],
      },
      {
        profileImg: thevinuPhoto,
        name: "Thevinu Premathilaka",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/thevinu-premathilaka-49583a269" },
        ],
      },
      {
        profileImg: hirushaPhoto,
        name: "Hirusha Perera",
        position: "Coordinator",
        socials: [
          { icon: linkedinIcon, url: "https://www.linkedin.com/in/hirusha-perera-487432341" },
        ],
      },
    ],
  },
};

// contact us page
export const memberDetailsData: MemberDetailProps[] = [
  {
    profileImg: geenothPhoto,
    name: "Geenoth Viksura",
    position: "Chairperson",
    socials: [
      { icon: linkedinIcon, url: "https://www.linkedin.com/in/geenoth-viksura/" },
    ],
  },
  {
    profileImg: hirushiPhoto,
    name: "Hirushi Gamage",
    position: "Secretary",
    socials: [
      { icon: linkedinIcon, url: "https://www.linkedin.com/in/hirushi-gamage-b912a9265" },
    ],
  },
];
