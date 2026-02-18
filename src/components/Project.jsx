import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import proj1 from "../assets/project.png";
import proj2 from "../assets/project1.png";
import proj3 from "../assets/project3.png";

const Project = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Grocify E-Commerce",
      desc: "Premium electronics, fashion, and lifestyle shopping experience.",
      tags: ["React", "Redux", "API", "Firebase"],
      live: "https://grocify-one.vercel.app/",
      image: proj2,
    },
    {
      id: 2,
      title: "Innovate",
      desc: "Modern educational web app with clean UI and structured architecture.",
      tags: ["React", "Tailwind", "JavaScript"],
      live: "https://inovet.vercel.app/",
      image: proj1,
    },
    {
      id: 3,
      title: "Shopping",
      desc: "Modern shopping platform with state management & dynamic UI.",
      tags: ["React", "Redux", "JavaScript"],
      live: "https://gggg-gamma-silk.vercel.app/",
      image: proj3,
    },
  ];

  return (
    <section
      id="project"
      className={`py-24 px-4 ${
        darkMode ? "bg-gradient-to-b from-gray-900 to-black" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== Section Title ===== */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className={`mt-4 text-base max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real-world applications built with performance, scalability & UI excellence.
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              <div
                className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border transition-all duration-500
                ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 bg-orange-500 text-white rounded-full hover:scale-110 transition"
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-sm mb-4 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Mobile Optimized View All Button ===== */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/Saimum60"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-4 rounded-full 
            bg-gradient-to-r from-orange-500 to-yellow-500 
            text-white font-semibold text-base
            hover:shadow-xl hover:shadow-orange-500/30 
            transition-all duration-300 hover:scale-105"
          >
            <FaGithub />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;