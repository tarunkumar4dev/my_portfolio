import { motion } from "framer-motion";
import { FaCode, FaRobot, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FaCode className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Full-Stack Developer</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Aspiring Software Engineer with a strong foundation in full-stack development, AI/ML, and problem-solving. 
                Proficient in Java, Python, and JavaScript, with hands-on experience in building scalable web applications 
                and optimizing algorithms.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-cyan-100 text-cyan-600">
                  <FaRobot className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Tech Enthusiast</h3>
              </div>
              <p className="text-lg text-gray-700">
                I'm passionate about creating efficient solutions and continuously learning new technologies to stay at the 
                forefront of software development. My curiosity drives me to explore emerging trends in AI, cloud computing, 
                and decentralized systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'AI/ML', 'Cloud'].map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-blue-600 text-white">
              <FaLightbulb className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">My Philosophy</h3>
              <p className="text-gray-700">
                I believe in writing clean, maintainable code that solves real-world problems. With each project, 
                I aim to push boundaries while ensuring accessibility and performance. My goal is to create technology 
                that makes a positive impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;