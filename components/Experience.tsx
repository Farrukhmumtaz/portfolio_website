
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading mb-4 text-gradient">Professional Journey</h2>
        <p className="text-gray-400 tracking-wide uppercase text-xs">Work History & Roles</p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-600 to-transparent transform -translate-x-1/2 hidden md:block"></div>

        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.company} className={`relative mb-16 flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#0B0F1A] transform -translate-x-1/2 z-10 hidden md:block neon-glow"></div>

            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`w-full md:w-[45%] glass p-8 rounded-3xl border border-white/5 hover:border-cyan-400/20 transition-all ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
            >
              <div className="flex items-center space-x-3 text-cyan-400 mb-2">
                <Briefcase size={18} />
                <span className="font-heading font-bold text-lg">{exp.role}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-4">{exp.company}</h3>
              
              <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-6 font-medium uppercase tracking-widest">
                <div className="flex items-center space-x-1"><Calendar size={14} /> <span>{exp.period}</span></div>
                <div className="flex items-center space-x-1"><MapPin size={14} /> <span>Remote / Pakistan</span></div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                    <span className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
