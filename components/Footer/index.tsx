import { socialLinks } from "@/lib/data";
import Image from "next/image";
import Logo from "@/assets/footerLogo.png";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0d0d0d] text-white">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-center lg:justify-start">
          <Image
            src={Logo}
            alt="AIDSL Logo"
            width={200}
            className="h-auto"
          />
        </div>

        <p className="text-center text-sm text-white/70 lg:text-left">
          © Copyright 2026 AI Driven Sri Lanka. All rights reserved.
        </p>

        <ul className="flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-80"
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  className="h-10 w-10"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
