
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center font-heading font-bold text-white shadow-lg neon-glow mb-4">
            FM
          </div>
          <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
            Farrukh Mumtaz — Designing and deploying the next generation of intelligent systems.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <Heart size={14} className="text-pink-500 fill-pink-500" /> using React & Tailwind
          </p>
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Farrukh Mumtaz. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-widest font-bold">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-widest font-bold">Terms</a>
          <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors text-sm uppercase tracking-widest font-bold">Resume</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
