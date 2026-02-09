
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading mb-4">Academic <span className="text-cyan-400">Foundation</span></h2>
        <p className="text-gray-400">Formal training and recognition in Artificial Intelligence.</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative glass rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden"
        >
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 neon-glow">
              <GraduationCap size={32} />
            </div>

            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-2xl font-bold font-heading text-white">BS Artificial Intelligence</h3>
                <span className="px-4 py-1 rounded-full glass border border-cyan-400/30 text-cyan-400 text-xs font-bold">2022 — 2026</span>
              </div>
              <p className="text-xl text-gray-300 font-heading mb-4">Khwaja Fareed University, Pakistan</p>
              
              <div className="flex items-center text-gray-500 text-sm mb-8 space-x-2">
                <MapPin size={14} />
                <span>Rahim Yar Khan, Punjab</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-400">Dean’s Honor Award</h4>
                    <p className="text-sm text-gray-400">Recognized for outstanding academic performance and commitment to technical excellence.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {['Statistics', 'DL', 'Linear Algebra', 'Algorithms'].map(subject => (
                    <div key={subject} className="text-center py-2 glass rounded-lg text-xs text-gray-400 border border-white/5">
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
