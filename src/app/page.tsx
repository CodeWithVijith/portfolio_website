import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <section id="about" className="bg-red-300">
        <div className="container mx-auto py-24">
          <h1 className="text-4xl font-bold text-white">About Section</h1>
          <p className="text-lg text-white mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>
      <section id="skills" className="bg-blue-300">
        <div className="container mx-auto py-24">
          <h1 className="text-4xl font-bold text-white">Skills Section</h1>
          <p className="text-lg text-white mt-4">
            Here are some of my skills and expertise.
          </p>
        </div>
      </section>
      <section id="portfolio" className="bg-green-300">
        <div className="container mx-auto py-24">
          <h1 className="text-4xl font-bold text-white">Portfolio Section</h1>
          <p className="text-lg text-white mt-4">
            Check out my previous projects and works.
          </p>
        </div>
      </section>
      <section id="testimonial" className="bg-yellow-300">
        <div className="container mx-auto py-24">
          <h1 className="text-4xl font-bold text-white">Testimonial Section</h1>
          <p className="text-lg text-white mt-4">
            Hear what others have to say about me.
          </p>
        </div>
      </section>
    </div>
  );
}
