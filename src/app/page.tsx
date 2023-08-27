import React from 'react';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <section id="hero" className="bg-primary text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">
          I'm a passionate developer with expertise in creating awesome web applications.
        </p>
        <button className="bg-white text-primary py-2 px-4 rounded-full text-lg font-medium">
          Get Started
        </button>
      </div>
    </section>
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
