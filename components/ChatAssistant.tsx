
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([
    { role: 'ai', text: "Hello! I'm Farrukh's AI Twin. How can I help you today? You can ask me about his projects, skills, or even just say hi!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Initialize Gemini API client
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Use Gemini 3 Flash for quick and responsive chat
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are Farrukh's AI Twin, a virtual representative of Farrukh Mumtaz. 
          Your goal is to answer questions about Farrukh's background, projects, and expertise as an AI Engineer.
          
          Knowledge base:
          - Role: AI Engineer | ML Expert.
          - Core Skills: Python (90%), ML (85%), Deep Learning (80%), Computer Vision (85%), NLP/GenAI (80%).
          - Projects: AI Twin System (voice cloning, RAG), YOLO Detection, Multi-Agent LLM systems.
          - Experience: AI Intern at Aixon (2025-Present), working on ViT and YOLO.
          - Education: BS AI at Khwaja Fareed University (2022-2026).
          
          Guidelines:
          - Be professional, witty, and concise.
          - Always mention Farrukh in the third person.
          - If a visitor asks about hiring, tell them Farrukh is open to opportunities and suggest using the contact form below.`,
        },
      });

      const aiText = response.text || "I'm processing that... but my neural networks are momentarily silent. Please ask again!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I hit a snag in my processing. Please try again or reach out to Farrukh directly!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? '64px' : '500px'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass w-80 sm:w-96 rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center text-white neon-glow">
                  <Bot size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white font-heading">AI Twin</span>
                  <span className={`text-[10px] ${isTyping ? 'text-purple-400' : 'text-cyan-400'} transition-colors`}>
                    {isTyping ? 'Analyzing...' : 'Online'}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Chat Area */}
                <div 
                  ref={scrollRef}
                  className="flex-grow p-4 overflow-y-auto space-y-4 max-h-[350px] scrollbar-thin scrollbar-thumb-white/10"
                >
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-br-none shadow-lg' 
                          : 'glass border border-white/5 text-gray-300 rounded-bl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="glass border border-white/5 p-3 rounded-2xl rounded-bl-none">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-white/5">
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask about Farrukh's work..."
                      disabled={isTyping}
                      className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 disabled:opacity-50"
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={isTyping || !inputValue.trim()}
                      className="p-2 bg-cyan-500 rounded-xl text-white hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className={`w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white shadow-2xl neon-glow transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Bot size={28} />
      </motion.button>
    </div>
  );
};

export default ChatAssistant;
