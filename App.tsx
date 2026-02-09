
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0F1A] text-gray-100 selection:bg-cyan-500/30">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0F1A]"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 font-heading text-xl tracking-widest text-cyan-400"
              >
                INITIALIZING AI AGENT...
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <BackgroundEffects />
            <Navbar />
            <main>
              <section id="hero"><Hero /></section>
              <section id="about" className="py-20"><About /></section>
              <section id="skills" className="py-20"><Skills /></section>
              <section id="experience" className="py-20"><Experience /></section>
              <section id="projects" className="py-20"><Projects /></section>
              <section id="education" className="py-20"><Education /></section>
              <section id="contact" className="py-20"><Contact /></section>
            </main>
            <Footer />
            <ChatAssistant />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
