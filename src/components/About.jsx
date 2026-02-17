import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import ab from '../assets/about.png';

const About = ({ darkMode }) => {
  const [inView, setInView] = useState(false);

  // Optional: detect when section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const top = aboutSection.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      className={`min-h-[100dvh] overflow-hidden flex items-center justify-center px-4 sm:px-6`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <img
              src={ab}
              alt="About Image"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                h-95 sm:h-105 md:h-120 lg:h-135 xl:h-150 w-auto object-contain z-10
                drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        {/* Right: Text & Stats */}
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6
            text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
          >
            About Me
          </h1>
          <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed
            bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm
            ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I’m a Frontend Developer passionate about building functional, visually appealing web applications. I specialize in React, Redux, and Tailwind CSS, focusing on solving real-world problems, collaborating with teams, and continuously learning.
          </p>

          {/* Stats with CountUp */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                {inView && <CountUp end={12} duration={2} />}+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Education
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                {inView && <CountUp end={6} duration={2} />}+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Months Experience
              </div>
            </div>
            <div className="text-center" data-aos="zoom-in" data-aos-delay="600">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                {inView && <CountUp end={30} duration={2} />}+
              </div>
              <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Projects Completed
              </div>
            </div>
          </div>

          <button 
            className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer 
              ${darkMode ? 'text-white bg-orange-500/10' : 'text-gray-800 bg-white/90'}`}
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;