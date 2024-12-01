import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const images = [
 '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const NavBar = () => (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center text-2xl font-bold text-brand-dark">
          <Camera className="mr-2" /> PhotoNarrative
        </div>
        <div className="flex space-x-6">
          {["home", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`capitalize text-sm tracking-wider ${
                activeSection === section
                  ? "text-brand-dark font-semibold"
                  : "text-gray-600"
              } hover:text-brand-dark transition-colors`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-brand-dark">
          Capturing Life, Frame by Frame
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          An artistic journey through the lens of imagination.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src={img}
              alt={`Portfolio photograph ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-4 left-4 text-white font-medium">
                Photograph {index + 1}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-brand-dark">About Ankur Katiyar</h2>
        <p className="mt-4 text-gray-600 text-lg">
          Turning fleeting moments into timeless stories, one frame at a time.
        </p>
      </div>
      <div className="md:flex gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <blockquote className="text-xl italic text-gray-500 border-l-4 border-brand-dark pl-4">
            "Photography is not just an art; it’s a way of feeling, of touching, of loving."
          </blockquote>
          <p className="text-gray-700 leading-relaxed">
            Hi, I’m <span className="text-brand-dark font-semibold">Ankur Katiyar</span>, 
            a passionate photographer with a love for capturing life in its purest form. 
            My journey began with a simple camera and a big dream, and today, every click 
            is a celebration of art and emotion.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Over the years, I have mastered the art of storytelling through my lens, 
            creating visuals that resonate with hearts and evoke cherished memories. 
            Whether it’s a serene landscape or an expressive portrait, each frame speaks volumes.
          </p>
          <button className="mt-4 bg-brand-dark text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
            Explore My Work
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="max-w-xs">
            <img
              src="/2.png"
              alt="Ankur Katiyar"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
  

  const ContactPage = () => (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-brand-dark mb-6">Get in Touch</h2>
      <p className="text-gray-700 text-lg mb-8">
        Have a project in mind? Let’s create something amazing together. Feel
        free to reach out on WhatsApp!
      </p>
      <a
        href="https://wa.me/+919926706601"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-dark text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
      >
        Contact on WhatsApp
      </a>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-brand-dark">
      <NavBar />
      <div className="pt-20">{renderContent()}</div>
    </div>
  );
}

export default App;
