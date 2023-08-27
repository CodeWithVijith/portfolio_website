import Link from "next/link";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Header: React.FC = () => {
  const navigationLinks = [
    { sectionId: "about", text: "About" },
    { sectionId: "skills", text: "Skills" },
    { sectionId: "portfolio", text: "Portfolio" },
    { sectionId: "testimonial", text: "Testimonial" },
  ];

  return (
    <header className="sticky top-0 bg-white py-4 flex justify-between items-center z-10 px-44">
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Your Logo" width={150} height={40} />
        </Link>
      </div>
      <nav className="space-x-4">
        {navigationLinks.map((link) => (
          <Link
            key={link.sectionId}
            href={`#${link.sectionId}`}
            passHref
            className="text-black text-lg font-medium hover:text-primary relative group"
          >
            {link.text}
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-1000 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
      <div>
        <Button variant="secondary">Download CV</Button>
      </div>
    </header>
  );
};

export default Header;
