import React from "react";
import Image from "next/image";
import welcomeImage from "../../../public/welcome.png";
import heroImage from "../../../public/heroImage.png";
import Button from "../Button";
import Link from "next/link";
import viewPortfolioIcon from "../../../public/viewPortfolio.svg";
import instagramIcon from "../../../public/instagram.svg";
import linkedinIcon from "../../../public/linkedin.svg";
import facebookIcon from "../../../public/facebook.svg";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="bg-white text-black py-20">
      <div className="container mx-auto flex flex-col md:flex-row ">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 flex flex-col justify-center">
          <div className="w-2/3 mb-4">
            <Image src={welcomeImage} alt="Welcome Image" className="w-28" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="block text-5xl mb-2 text-black">
              I have &nbsp;
              <span className="font-bold text-primary">
                Creative Frontend Development
              </span>
              &nbsp; Experience
            </span>
            <span className="block text-xl mt-12">
              <span className="text-black font-normal">
                I&rsquo;m <span className="font-bold">Vijith Shekha</span>, a skilled
                Frontend Developer. Over the past &nbsp;
                <span className="font-bold">3 years</span>, I&rsquo;ve been dedicated
                to assisting businesses in addressing their challenges through
                my proficiency in frontend development.
              </span>
            </span>
            <span className="block text-lg mt-8 text-primary">
              Let&rsquo;s Craft Your Next Vision into Reality.
            </span>
            <div className="mt-8 space-x-4 flex">
              <Button variant="primary">Contact Me</Button>
              <Link
                href="#portfolio"
                className="flex items-center text-base font-medium"
              >
                View Portfolio
                <Image
                  src={viewPortfolioIcon}
                  alt="View Portfolio"
                  className="w-5 h-5 ml-1"
                />
              </Link>
            </div>
          </h1>
        </div>
        <div className="md:w-1/2 md:pl-8 flex items-center justify-center">
          <div className="w-2/3">
            <Image src={heroImage} alt="Hero Image" layout="responsive" />
          </div>
        </div>
        <div className="pt-20 flex flex-col items-center w-10">
          <div className="rotate-90 w-32 text-center text-primary font-bold mt-10 z-0">
            <p>Follow me on &colon;</p>
          </div>
          <div className="w-[0.03125rem] bg-primary h-[4rem] mt-20 mb-10"></div>
          <div className="flex space-y-2 flex-col ">
            <Link
              href="https://www.facebook.com/VIJITHSHEKHAVIJI/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebookIcon} alt="Facebook" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vijithshekha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/codewithvijith/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagramIcon} alt="Instagram" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
