import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
];

const PhotoPortfolio = () => {
  React.useEffect(() => {
    gsap.fromTo(
      '.gallery-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.gallery',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-bold tracking-tight text-brand-dark">
            PhotoNarrative
          </h1>
          <div className="flex space-x-6">
            {['Home', 'Portfolio', 'About', 'Contact'].map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                className="text-lg text-gray-600 hover:text-brand-dark transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center text-white"
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            Capturing Life, One Frame at a Time
          </h1>
          <p className="text-lg max-w-2xl mx-auto drop-shadow-lg">
            Welcome to PhotoNarrative – a showcase of moments frozen in time,
            where every picture tells a story.
          </p>
          <a
            href="#portfolio"
            className="px-6 py-3 bg-brand-dark text-white rounded-full text-lg shadow-lg hover:bg-opacity-90 transition"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">
            My Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gallery">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="gallery-item relative overflow-hidden rounded-lg shadow-lg group"
                style={{
                  height: '300px', // Fixed height
                }}
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    index % 2 === 0 ? 'translate-y-3' : '-translate-y-3'
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg">
                    View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80 }}
          >
            <img
              src="/api/placeholder/800/1200"
              alt="Photographer"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80 }}
          >
            <h2 className="text-4xl font-bold text-brand-dark">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am a professional photographer with a passion for storytelling.
              Every photograph is a reflection of my dedication to capturing
              life’s most beautiful moments.
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-brand-dark text-white rounded-full text-lg shadow-lg hover:bg-opacity-90 transition"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-lg">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-8">
            Contact Me
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <button
              type="submit"
              className="w-full bg-brand-dark text-white p-4 rounded-md hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PhotoPortfolio;
