import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewWorkClick = () => {
    window.open("https://github.com/tarunkumar4dev", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated sunlight background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(255, 255, 255, 0.8) 0%,
              rgba(200, 216, 255, 0.5) 20%,
              rgba(178, 190, 255, 0.3) 40%,
              transparent 70%
            ),
            linear-gradient(to bottom right, #f0f4ff, #f9f0ff)
          `
        }}
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, x: Math.random() * 100 - 50, opacity: 0 }}
          animate={{ 
            y: [0, Math.random() * 100 - 50, 0],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hey! I'm <span className="text-blue-600">Tarun Kumar</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Full Stack Developer
            </span>
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -right-4 top-0 text-blue-400"
            >
              |
            </motion.span>
          </span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          I specialize in crafting <span className="font-medium text-blue-600">high-performance</span>,{' '}
          <span className="font-medium text-purple-600">responsive</span>, and visually stunning web applications. 
          With expertise in{' '}
          <span className="font-medium text-blue-500">Java</span>,{' '}
          <span className="font-medium text-yellow-500">Python</span>, and{' '}
          <span className="font-medium text-yellow-400">JavaScript</span>, I build seamless user experiences.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewWorkClick}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;