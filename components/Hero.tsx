
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Sparkles size={14} />
            <span>Open to Opportunities</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Farrukh Mumtaz</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-heading text-gray-300 mb-8 font-light">
            AI Engineer | <span className="text-purple-400">ML Expert</span> | <span className="text-cyan-400">GenAI</span> | Computer Vision
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
            Building intelligent systems with Machine Learning, Deep Learning, and Generative AI. 
            Passionate about transforming data into actionable insights and creating autonomous systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300 neon-glow">
              View My Work
            </button>
            <button className="w-full sm:w-auto px-8 py-4 glass border border-white/10 rounded-xl font-bold text-white hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300">
              Download Resume
            </button>
          </div>
        </motion.div>
        
        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Geometric Decorations */}
            <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border-2 border-purple-500/20 rounded-full animate-reverse-spin-slow"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/40 p-2 glass neon-glow">
                <img 
                  src="https://github.com/Farrukhmumtaz/portfolio_website/blob/main/components/headshot_circle1.png" 
                  alt="Farrukh Mumtaz" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg border border-cyan-400/30 text-cyan-400 text-sm font-bold flex items-center space-x-2"
            >
              <span>PyTorch</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-1/2 -left-12 glass px-4 py-2 rounded-lg border border-purple-400/30 text-purple-400 text-sm font-bold flex items-center space-x-2"
            >
              <span>OpenCV</span>
            </motion.div>
            <motion.div 
              animate={{ x: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute bottom-4 right-10 glass px-4 py-2 rounded-lg border border-pink-400/30 text-pink-400 text-sm font-bold flex items-center space-x-2"
            >
              <span>LLMs</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-reverse-spin-slow {
          animation: reverse-spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
