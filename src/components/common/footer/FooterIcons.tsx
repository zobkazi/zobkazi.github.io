import React from "react";
import Link from "next/link";
import { socialLinks } from "@/contexts/socialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className=" px-4 md:px-8 flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center space-x-4">
          {socialLinks.map(({ name, icon: Icon, link }) => (
            <Link
              key={name}
              href={link}
              aria-label={name}
              className="shadow-lg shadow-gray-500/50 p-2 rounded-full dark:text-gray-700 hover:text-gray-400"
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
