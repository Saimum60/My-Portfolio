import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import proj1 from '../assets/project.png'
import proj2 from '../assets/project1.png'
import proj3 from '../assets/project3.png'

const Project = ({ darkMode }) => {
  const project = [
    {
      id: 1,
      title: "Grocify E-Commerce ",
      desc: "Premium electronics, fashion, and lifestyle shopping experience.",
      tags: ["React", "Redux","Api", "Firebase"],
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
      id: 2,
      title: "Shopping",
      desc: "Modern educational web app with clean UI and structured architecture.",
      tags: ["React", "Redux", "JavaScript"],
      
      live: "https://gggg-gamma-silk.vercel.app/",
      image: proj3,
    },
  ];

  return (
    <section
      id="project"
      className={`py-24 px-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== Section Title ===== */}
        <div className="text-center mb-14">
  <h2
    className={`text-4xl font-bold ${
      darkMode ? "text-white" : "text-gray-900"
    }`}
  >
    My{" "}
    <span
      className={`bg-gradient-to-r ${
        darkMode
          ? "from-orange-400 to-yellow-400"
          : "from-orange-500 to-yellow-500"
      } bg-clip-text text-transparent`}
    >
      Projects
    </span>
  </h2>

  <p
    className={`mt-3 text-base ${
      darkMode ? "text-gray-400" : "text-gray-600"
    }`}
  >
    Selected works showcasing creativity & problem solving
  </p>
</div>

        {/* ===== Projects Grid ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden border backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl
                ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-200"
                }`}
            >
              {/* ===== Image ===== */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4">
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 text-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* ===== Content ===== */}
              <div className="p-6">
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.desc}
                </p>

                {/* ===== Tags ===== */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== View All Button ===== */}
        <div className="text-center mt-16">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            <FaGithub />
            View All Projects
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;