import { motion } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { Download, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Linkedin from "./assets/Linkedin.png";
import facebook from "./assets/facebook.png";
import cv from "./assets/cv.pdf";
import my from "./assets/ts.jpg";

const Hero = ({ darkMode }) => {
  const socialLinks = [
    { icon: VscGithub, link: "https://github.com/Saimum60", type: "icon" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/saimum60/", type: "img" },
    { icon: facebook, link: "https://www.facebook.com/saimum.chowdhury.334/", type: "img" },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center pt-24 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
           I'm{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Abu Sayed Saimum
            </span>
          </h1>

          {/* Type Animation */}
          <div className="text-2xl sm:text-3xl font-semibold mb-6 h-12">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1200,
                "React Developer",
                1200,
                "Problem Solver",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-orange-500"
            />
          </div>

          <p className={`max-w-lg mx-auto lg:mx-0 mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}>
            I build modern, high-performance web applications that transform
            ideas into real digital solutions. Focused on clean code,
            scalability, and user experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href={cv} download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-orange-500/30 transition-all"
              >
                <Download size={18} />
                Download CV
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold border-2 border-orange-500 ${
                  darkMode
                    ? "text-white hover:bg-orange-600"
                    : "text-gray-800 hover:bg-orange-500 hover:text-white"
                } transition-all`}
              >
                <Mail size={18} />
                Contact Me
              </motion.button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 justify-center lg:justify-start">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {item.type === "icon" ? (
                  <item.icon
                    size={32}
                    className={darkMode ? "text-white" : "text-gray-800"}
                  />
                ) : (
                  <img
                    src={item.icon}
                    alt="social"
                    className="w-8 h-8 object-contain"
                  />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur-3xl opacity-20 rounded-full"></div>

            <motion.img
              src={my}
              alt="Profile"
              className="relative w-72 sm:w-80 rounded-full object-cover border-4 border-orange-500 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;