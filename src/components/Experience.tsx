import { motion } from "framer-motion";
import { FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Full Stack Web Developer",
      company: "Beast Hybrid",
      duration: "Oct 2023 - Oct 2024",
      icon: <FaLaptopCode className="text-blue-500 text-2xl" />,
      bullets: [
        "Developed and optimized interactive student dashboards with React.js and D3.js for real-time data visualization, improving user engagement by 40%",
        "Collaborated with cross-functional teams including UX designers and product managers to create intuitive, user-friendly interfaces",
        "Implemented RESTful APIs using Node.js and Express, reducing API response time by 30%",
        "Optimized application performance through code splitting and lazy loading, decreasing load times by 25%"
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "D3.js"]
    },
    {
      title: "Python & Basic ML Tutor",
      company: "Chanakya Institute of Education",
      duration: "Jul 2022 - Present",
      icon: <FaChalkboardTeacher className="text-blue-500 text-2xl" />,
      bullets: [
        "Created comprehensive introductory programming tutorials covering Python fundamentals, data structures, and algorithms",
        "Mentored 90+ students in programming fundamentals with a 95% student satisfaction rate",
        "Developed customized learning paths for students based on their skill levels and career goals",
        "Conducted hands-on machine learning workshops using scikit-learn and TensorFlow"
      ],
      tech: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          Professional Journey
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-lg text-blue-600 font-medium mt-1">{exp.company}</p>
                  
                  <ul className="mt-4 space-y-2 text-gray-700">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;