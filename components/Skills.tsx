
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell 
} from 'recharts';
import { CORE_SKILLS, FRAMEWORKS } from '../constants';

const Skills: React.FC = () => {
  const radarData = CORE_SKILLS.map(s => ({ subject: s.name, A: s.level, fullMark: 100 }));
  const barData = FRAMEWORKS.map(f => ({ name: f.name, rating: f.rating }));

  const COLORS = ['#00E5FF', '#8B5CF6', '#F472B6', '#FBBF24', '#34D399'];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading mb-4">Technical <span className="text-purple-400">Weaponry</span></h2>
        <p className="text-gray-400">Quantitative visualization of my core AI & ML capabilities.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Core Expertise Radar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-3xl border border-white/5 h-[450px]"
        >
          <h3 className="text-xl font-bold font-heading mb-6 text-center text-cyan-400">Core Expertise</h3>
          <ResponsiveContainer width="100%" height="90%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Skill Level"
                dataKey="A"
                stroke="#00E5FF"
                fill="#00E5FF"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Frameworks Bar Chart */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-3xl border border-white/5 h-[450px]"
        >
          <h3 className="text-xl font-bold font-heading mb-6 text-center text-purple-400">Top Frameworks</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={barData} layout="vertical">
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={100} 
                tick={{ fill: '#9CA3AF', fontSize: 13 }} 
                axisLine={false} 
                tickLine={false}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ background: '#111827', border: '1px solid #374151', borderRadius: '8px' }}
              />
              <Bar dataKey="rating" radius={[0, 4, 4, 0]} barSize={20}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Floating Skill Icons / Icons Grid */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {['PyTorch', 'TensorFlow', 'Hugging Face', 'FastAPI', 'AWS', 'Docker', 'OpenCV', 'Scikit-learn'].map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 229, 255, 0.1)' }}
            className="px-6 py-3 glass rounded-xl border border-white/5 text-gray-300 font-medium transition-all"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
