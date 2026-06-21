import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ChevronRight, Mic } from 'lucide-react';
import { ViewState } from '../types';

export default function AIAssistant({ navigate, currentView }: { navigate: (v: ViewState) => void, currentView: ViewState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello! I'm your AU Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  if (currentView === 'landing') return null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    
    // Simulated responses
    setTimeout(() => {
      let response = "I can help with that. What else would you like to know?";
      const lower = userMsg.toLowerCase();
      
      if (lower.includes('save') || lower.includes('invest')) {
        response = "To save money, you can join an Àjọ or use our fixed savings. Let me show you.";
        setTimeout(() => navigate('investments'), 2000);
      } else if (lower.includes('ajo') || lower.includes('group')) {
        response = "Àjọ is our community savings group. You can join your local market or family group right here!";
        setTimeout(() => navigate('ajo'), 2000);
      } else if (lower.includes('ghana') || lower.includes('send') || lower.includes('cross-border')) {
        response = "Yes, AU-Wallet supports cross-border transfers across Africa easily. I'll take you to the cross-border tool.";
        setTimeout(() => navigate('cross-border'), 2000);
      } else if (lower.includes('loan') || lower.includes('credit')) {
        response = "You can apply for a business loan in the Merchant module based on your Trust Score.";
        setTimeout(() => navigate('merchant'), 2000);
      }

      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-20 right-4 w-12 h-12 bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-green-700 active:scale-95 transition-all"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 h-[60vh] bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[60] flex flex-col w-full max-w-md mx-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">AU Assistant</h3>
                  <p className="text-xs text-neutral-500">Always here to help</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-green-600 text-white rounded-tr-sm' : 'bg-neutral-100 text-neutral-800 rounded-tl-sm'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-neutral-100">
              <div className="flex gap-2">
                <button className="h-12 w-12 flex items-center justify-center bg-neutral-100 text-neutral-600 rounded-full shrink-0">
                  <Mic size={20} />
                </button>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..." 
                    className="w-full h-12 bg-neutral-100 rounded-full pl-4 pr-12 outline-none text-sm focus:ring-2 focus:ring-green-500/20"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-2 top-2 h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
                {[ "How do I save?", "How do I join Àjọ?", "Send money to Ghana" ].map(q => (
                  <button key={q} onClick={() => setInput(q)} className="whitespace-nowrap px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium shrink-0">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
