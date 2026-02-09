
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Network } from 'lucide-react';

const About: React.FC = () => {
  const interests = [
    { icon: <Brain />, title: 'Transformers', desc: 'Working with BERT, GPT, and ViT architectures.' },
    { icon: <Cpu />, title: 'AI Agents', desc: 'Building autonomous agents for task automation.' },
    { icon: <Database />, title: 'RAG Systems', desc: 'Optimizing retrieval for large-scale knowledge bases.' },
    { icon: <Network />, title: 'Computer Vision', desc: 'Real-time object detection and segmentation.' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold font-heading mb-6"
        >
          Decoding the <span className="text-cyan-400">Future</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          As an AI Engineer, I bridge the gap between theoretical research and production-grade applications. 
          I specialize in building intelligent systems that can see, hear, and understand the world through 
          complex architectures and optimized machine learning pipelines.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="p-8 glass rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg neon-glow">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold font-heading mb-3 text-white">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 glass rounded-3xl p-8 lg:p-12 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-6 text-cyan-400 italic">"The best way to predict the future is to build it."</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in AI started with a fascination for how machines could learn patterns from noise. 
              Today, I focus on end-to-end model development—from data engineering and training to fine-tuning 
              and production deployment.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Model Fine-tuning', 'Production AI', 'Scalable Pipelines'].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <p className="text-3xl font-bold font-heading text-white mb-1">15+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Projects Done</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <p className="text-3xl font-bold font-heading text-white mb-1">2+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Years Exp</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <p className="text-3xl font-bold font-heading text-white mb-1">95%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Accuracy Focus</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-white/5 text-center">
              <p className="text-3xl font-bold font-heading text-white mb-1">24/7</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Learning Mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
