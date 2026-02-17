import { motion } from "framer-motion";
import cm from "../assets/contact.png";

const Contact = ({ darkMode }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const fname = formData.get("firstname");
        const lname = formData.get("lastname");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        const whatsappNumber = "8801566068310";

        const text = `
Hello! 👋
Name: ${fname} ${lname}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section
            id="contact"
            className={`py-20 transition-colors duration-500 ${darkMode ? "bg-gray-900" : "bg-gray-50"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-gray-800"
                        }`}>
                        Get In{" "}
                        <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className={`mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}>
                        Let’s build something amazing together.
                    </p>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <img
                            src={cm}
                            alt="Contact"
                            className="w-sm md:w-full object-contain"
                        />
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`p-8 rounded-2xl shadow-xl backdrop-blur-lg border ${darkMode
                            ? "bg-gray-800/80 border-gray-700"
                            : "bg-white/80 border-gray-200"
                            }`}
                    >
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <input
                                name="firstname"
                                type="text"
                                placeholder="First Name"
                                required
                                className="input-style"
                            />
                            <input
                                name="lastname"
                                type="text"
                                placeholder="Last Name"
                                required
                                className="input-style"
                            />
                        </div>

                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            className="input-style mb-4"
                        />

                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="input-style mb-4"
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="input-style mb-6 resize-none"
                        />

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full py-3 font-semibold text-white rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-orange-500/30 transition-all"
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>

            {/* Reusable Input Styling */}
            <style>
                {`
          .input-style {
            width: 100%;
            padding: 12px 14px;
            border-radius: 12px;
            border: 1px solid #d1d5db;
            background-color: ${darkMode ? "#374151" : "#fff7ed"};
            color: ${darkMode ? "white" : "#1f2937"};
            transition: all 0.3s ease;
          }
          .input-style:focus {
            outline: none;
            border-color: #f97316;
            box-shadow: 0 0 0 3px rgba(249,115,22,0.2);
          }
        `}
            </style>
        </section>
    );
};

export default Contact;