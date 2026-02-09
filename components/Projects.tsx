
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Code2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl font-bold font-heading mb-4">Portfolio <span className="text-cyan-400">Showcase</span></h2>
          <p className="text-gray-400">Turning complex AI research into functional products.</p>
        </div>
        <button className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors group">
          <Terminal size={18} />
          <span className="font-bold">Explore All Code</span>
          <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all flex flex-col h-full relative"
          >
            {/* Minimalist Header instead of Image */}
            <div className="p-6 pb-0 flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                <Code2 size={20} />
              </div>
              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.link} className="p-2 glass rounded-lg hover:bg-cyan-500 hover:text-white transition-colors">
                  <Github size={16} />
                </a>
                <a href={project.link} className="p-2 glass rounded-lg hover:bg-purple-500 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-cyan-400/5 border border-cyan-400/10 text-cyan-400/70">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
                {project.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono tracking-tighter">REF: AI_MOD_{idx.toString().padStart(3, '0')}</span>
                <motion.a 
                  href={project.link}
                  whileHover={{ x: 5 }} 
                  className="flex items-center space-x-1 text-xs font-bold text-cyan-400 cursor-pointer"
                >
                  <span>Documentation</span>
                  <ExternalLink size={12} />
                </motion.a>
              </div>
            </div>
            
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
