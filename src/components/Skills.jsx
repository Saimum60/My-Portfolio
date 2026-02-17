import { motion } from "framer-motion";

const Skills = ({ darkMode }) => {

  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      level: 70,
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      name: "React",
      icon: "https://cdn.simpleicons.org/react/61DAFB",
      level: 90,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      level: 90,
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      name: "Framer Motion",
      icon: "https://cdn.simpleicons.org/framer/0055FF",
      level: 70,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Firebase",
      icon: "https://cdn.simpleicons.org/firebase/FFCA28",
      level: 60,
      gradient: "from-orange-400 to-yellow-500",
    },
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs/000000",
      level: 60,
      gradient: "from-gray-700 to-black",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
      level: 55,
      gradient: "from-blue-600 to-blue-800",
    },
    {
      name: "HTML5",
      icon: "https://cdn.simpleicons.org/html5/06B6D4",
      level: 95,
      gradient: "from-orange-600 to-orange-800",
    },
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
            My{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            Technologies I use to build modern, fast and responsive web
            applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-2xl shadow-lg ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              } hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 p-3 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}>
                  {skill.name}
                </h3>
              </div>

              {/* Progress */}
              <div className="flex justify-between mb-2 text-sm">
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Proficiency
                </span>
                <span className="font-semibold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                  {skill.level}%
                </span>
              </div>

              <div className={`w-full h-3 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;