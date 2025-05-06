import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiAmazon,
  SiTensorflow,
  SiOpencv,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

const TechButton = ({ name }: { name: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    "React.js": <SiReact className="text-[#61DAFB]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    "Python": <SiPython className="text-[#3776AB]" />,
    "Java": <FaJava className="text-[#007396]" />,
    "TailwindCSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "MySQL": <SiMysql className="text-[#4479A1]" />,
    "Firebase": <SiFirebase className="text-[#FFCA28]" />,
    "AWS": <SiAmazon className="text-[#232F3E]" />,
    "TensorFlow": <SiTensorflow className="text-[#FF6F00]" />,
    "OpenCV": <SiOpencv className="text-[#5C3EE8]" />,
    "NLP": <TbBrandOpenai className="text-[#412991]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Git": <SiGit className="text-[#F05032]" />,
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all flex items-center gap-2 border border-gray-100"
    >
      <span className="text-xl">{iconMap[name]}</span>
      <span className="font-medium text-gray-700">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    "React.js", "Node.js", "JavaScript", "Python", "Java",
    "TailwindCSS", "MongoDB", "MySQL", "Firebase", "AWS",
    "TensorFlow", "OpenCV", "NLP", "Docker", "Git"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          My Skills
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <TechButton key={skill} name={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;