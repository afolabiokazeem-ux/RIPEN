import { useState } from 'react';
import { ViewState } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Fingerprint, Wallet, HandCoins, Building2, Globe2, PartyPopper } from 'lucide-react';

export default function StoryModeScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Meet Ade, a Trader",
      desc: "Ade sells provisions in Lagos. He creates an AU-Wallet purely on his phone without visiting a bank.",
      icon: <Wallet size={48} />
    },
    {
      title: "Universal Identity",
      desc: "He receives an AU-ID. His trust score is tracked securely. It works anywhere in Africa.",
      icon: <Fingerprint size={48} />
    },
    {
      title: "Community Savings",
      desc: "He joins his local Market Àjọ, securely contributing ₦5,000 daily. His turns are guaranteed.",
      icon: <HandCoins size={48} />
    },
    {
      title: "Credit Growth",
      desc: "Because of his solid trust score and Àjọ history, he easily qualifies for a business loan.",
      icon: <Building2 size={48} />
    },
    {
      title: "Cross-Border Trade",
      desc: "Ade imports goods directly from Ghana using Escrow, paying in Naira while they receive Cedis directly.",
      icon: <Globe2 size={48} />
    }
  ];

  return (
    <div className="min-h-screen bg-green-900 text-white flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute top-[10%] right-[10%] w-[200px] h-[200px] bg-emerald-500 rounded-full blur-[100px]" />
         <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-amber-500 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-sm px-6 h-[80vh] flex flex-col items-center">
        
        <AnimatePresence mode="wait">
           {step < steps.length ? (
              <motion.div 
                key={step} 
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -50 }}
                className="flex flex-col items-center flex-1 justify-center text-center w-full"
              >
                <div className="w-32 h-32 bg-white/10 rounded-[2.5rem] flex items-center justify-center mb-8 text-amber-400 border border-white/20 shadow-2xl backdrop-blur-sm">
                  {steps[step].icon}
                </div>
                <h2 className="text-3xl font-bold mb-4">{steps[step].title}</h2>
                <p className="text-green-100 text-lg leading-relaxed">{steps[step].desc}</p>
              </motion.div>
           ) : (
              <motion.div 
                key="success" 
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="flex flex-col items-center flex-1 justify-center text-center w-full"
              >
                <div className="w-32 h-32 bg-amber-400 text-green-900 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                  <PartyPopper size={48} />
                </div>
                <h2 className="text-4xl font-bold mb-4">African Economic OS</h2>
                <p className="text-green-100 text-lg leading-relaxed mb-12">One transparent, trust-based network empowering a billion voices.</p>
                
                <button onClick={() => navigate('dashboard')} className="w-full bg-white text-green-900 font-bold py-5 rounded-2xl shadow-xl active:scale-95 transition-transform text-lg">
                  Explore AU-Wallet
                </button>
              </motion.div>
           )}
        </AnimatePresence>

        {step < steps.length && (
           <div className="w-full mb-8">
             <div className="flex justify-center gap-2 mb-8">
                {steps.map((_, i) => (
                  <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-amber-400' : 'w-2 bg-white/20'}`} />
                ))}
             </div>
             <button onClick={() => setStep(s => s + 1)} className="w-full bg-amber-400 text-green-900 font-bold py-5 rounded-2xl shadow-xl active:scale-95 transition-transform text-lg">
               Continue
             </button>
             <button onClick={() => navigate('dashboard')} className="w-full mt-4 bg-transparent text-green-200 font-bold py-3 rounded-2xl active:scale-95 transition-transform">
               Skip Tutorial
             </button>
           </div>
        )}

      </div>
    </div>
  );
}
