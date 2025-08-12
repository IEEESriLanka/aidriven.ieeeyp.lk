import { socialLinks } from "@/lib/data";
import Image from "next/image";
import Logo from "@/assets/footerLogo.png";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-transparent p-4 text-center text-white">
      <div className="flex w-full items-center justify-end">
        <Image
          src={Logo}
          alt="AIDSL Logo"
          width={150}
          height={50}
          className="mb-4"
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <p>© Copyright 2025 AI Driven Sri Lanka. All rights reserved.</p>
        <ul>
          {socialLinks.map((link, index) => (
            <li key={index} className="mx-2 inline">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.icon}
                  alt={link.name}
                  className="inline-block h-6 w-6"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
