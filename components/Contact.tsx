
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-heading mb-4">Get in <span className="text-gradient">Touch</span></h2>
        <p className="text-gray-400">Available for collaboration, freelance, or full-time roles.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="glass p-8 rounded-3xl border border-white/5">
            <h3 className="text-2xl font-bold font-heading mb-6 flex items-center space-x-3">
              <MessageSquare className="text-cyan-400" />
              <span>Let's talk AI</span>
            </h3>
            <p className="text-gray-400 mb-8">
              Whether you have a question about my projects or want to discuss the latest in GenAI, I'm always open to connecting.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:farrukh@example.com" className="flex items-center space-x-4 group p-4 glass rounded-2xl hover:border-cyan-400/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-white transition-all">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                  <p className="text-gray-200">farrukhmumtaz.ai@gmail.com</p>
                </div>
              </a>
              
              <div className="flex space-x-4">
                <a href="#" className="flex-1 flex items-center justify-center space-x-3 p-4 glass rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all text-gray-300">
                  <Github size={20} />
                  <span className="font-bold">GitHub</span>
                </a>
                <a href="#" className="flex-1 flex items-center justify-center space-x-3 p-4 glass rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all text-gray-300">
                  <Linkedin size={20} />
                  <span className="font-bold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-8 rounded-3xl border border-white/5"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
              <input 
                type="text" 
                placeholder="AI Project Collaboration" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
              <textarea 
                rows={4}
                placeholder="How can I help you?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white shadow-xl flex items-center justify-center space-x-2 hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all">
              <span>Send Intelligence</span>
              <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
