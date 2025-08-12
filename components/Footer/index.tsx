import { socialLinks } from "@/lib/data";
import Image from "next/image";
import Logo from "@/assets/footerLogo.png";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-transparent p-4 py-6 text-center text-white">
      <div className="flex w-full items-center justify-end">
        <Image
          src={Logo}
          alt="AIDSL Logo"
          width={220}
          className="mb-4 h-auto"
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <p>© Copyright 2025 AI Driven Sri Lanka. All rights reserved.</p>
        <ul className="flex space-x-2">
          {socialLinks.map((link, index) => (
            <li key={index} className="inline">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.icon}
                  alt={link.name}
                  className="inline-block h-12 w-12"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
