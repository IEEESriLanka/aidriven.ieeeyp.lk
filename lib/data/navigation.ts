import { HeaderDropDown } from "@/components/Header/HeaderDropDown";
import type { NavItem } from "../type";

export const navItems: NavItem[] = [
  {
    type: "link",
    href: "/",
    label: "Home",
  },
  {
    type: "dropdown",
    component: HeaderDropDown,
  },
  {
    type: "link",
    href: "/our-team",
    label: "Our Team",
  },
  {
    type: "link",
    href: "/about-us",
    label: "About Us",
  },
];
