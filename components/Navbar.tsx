
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 border-b border-white/5 shadow-2xl backdrop-blur-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-heading font-bold text-white shadow-lg neon-glow">
            FM
          </div>
          <span className="font-heading text-xl font-bold tracking-tight hidden sm:inline-block">
            Farrukh <span className="text-cyan-400">Mumtaz</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Socials & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="https://github.com/Farrukhmumtaz" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/farrukh-ai-developer/" target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          <a
            href="https://drive.google.com/file/d/1kyLEjWw3S9cAtF32WgQ3dV34HDekRxx0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 glass border border-white/10 rounded-xl font-bold text-white hover:bg-white/5 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          />
          <button className="flex items-center space-x-2 px-5 py-2 rounded-full glass border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 font-medium text-sm">
            <Download size={16} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2 text-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-heading text-gray-300 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex items-center space-x-4">
                <a href="https://github.com/Farrukhmumtaz" className="p-2 glass rounded-full"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/farrukh-ai-developer/" className="p-2 glass rounded-full"><Linkedin size={20} /></a>
                <a href="mailto:farrukhmumtaz.ai@gmail.com" className="p-2 glass rounded-full"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
