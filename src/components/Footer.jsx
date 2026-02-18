import { FaFacebookF, FaGithub, FaHeart, FaLinkedinIn } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative border-t ${
        darkMode ? "border-gray-700 bg-gradient-to-b from-black to-gray-900" 
                 : "border-gray-200 bg-gradient-to-b from-gray-100 to-white"
      }`}
    >
      <div className="container mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Saimum.dev
            </h2>
            <p className={`mt-2 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Building modern, scalable & user-friendly web applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/Saimum60"
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/in/saimum60/"
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/saimum.chowdhury.334/"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 flex items-center justify-center rounded-full 
                backdrop-blur-lg border transition-all duration-300 
                hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30
                ${
                  darkMode
                    ? "bg-white/10 border-white/20 text-white hover:bg-orange-500"
                    : "bg-black/5 border-black/10 text-gray-700 hover:bg-orange-500 hover:text-white"
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`my-8 h-px ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © {currentYear} All rights reserved.
          </p>

          <p className={`flex items-center gap-2 mt-3 md:mt-0 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Made with <FaHeart className="text-red-500 animate-pulse" /> by
            <span className="text-orange-500 font-semibold">
              Abu Sayed Saimum
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;