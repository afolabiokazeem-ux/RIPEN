import { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { ChevronLeft, CreditCard, Lock, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ATMScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => {
        setCode(Math.floor(10000000 + Math.random() * 90000000).toString());
        setStep(2);
      }, 1500);
    }
  }, [step]);

  const TopBar = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar title="Cardless Withdrawal" />
      
      {step === 0 && (
        <div className="p-6 pt-12 flex flex-col items-center">
          <div className="w-24 h-24 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center mb-8 rotate-12 shadow-sm border border-rose-200">
            <CreditCard size={48} />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-center">Withdraw at any ATM</h2>
          <p className="text-center text-neutral-500 mb-10 max-w-xs">No card needed. Generates a secure token you can enter at any authorized bank ATM across Africa.</p>

          <div className="w-full bg-white rounded-3xl p-6 shadow-sm border border-neutral-100 mb-8">
            <p className="text-neutral-500 mb-4 text-center">Enter amount to withdraw</p>
            <div className="flex justify-center items-center text-4xl font-bold text-slate-800">
              <span className="text-2xl mr-1">₦</span>
              <input type="number" placeholder="10000" value={amount} onChange={(e)=>setAmount(e.target.value)} className="w-32 bg-transparent outline-none text-center" />
            </div>
            
            <div className="flex justify-center gap-2 mt-6">
              {[5000, 10000, 20000].map(val => (
                <button key={val} onClick={() => setAmount(val.toString())} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-semibold text-sm hover:bg-slate-200 shadow-sm border border-slate-200">
                  ₦{val.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => setStep(1)} disabled={!amount} className="w-full bg-slate-900 text-white font-bold h-16 rounded-full text-lg shadow-xl shadow-slate-900/20 active:scale-[0.98] transition-transform">
            Generate Code
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-16 h-16 border-4 border-slate-200 border-t-slate-900 rounded-full mb-6"
          />
          <h2 className="text-2xl font-bold text-slate-800">Generating Secure Token...</h2>
          <p className="text-slate-500 mt-2">Connecting to ATM network</p>
        </div>
      )}

      {step === 2 && (
        <div className="p-6 pt-12 flex flex-col items-center text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
            <Lock size={40} />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Your Withdrawal Code</h2>
          <p className="text-slate-500 mb-8 max-w-xs">Enter this 8-digit code and your phone number at any configured ATM.</p>

          <div className="bg-white border-2 border-dashed border-slate-300 w-full rounded-3xl p-8 mb-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
             <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-2">Secret Code</p>
             <p className="text-5xl font-mono tracking-widest font-bold text-slate-800">{code}</p>
             <p className="text-rose-500 text-sm mt-6 font-medium flex items-center justify-center gap-1">Expires in 30:00 minutes</p>
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-2xl text-sm font-medium border border-blue-100 w-full mb-8 flex gap-3 text-left">
             <CheckCircle size={20} className="shrink-0 text-blue-500" />
             Code works at GTB, Zenith, Absa, standard Bank, and all AU-Partner ATMs.
          </div>

          <button onClick={() => navigate('dashboard')} className="w-full bg-slate-900 text-white font-bold h-16 rounded-full text-lg shadow-xl shadow-slate-900/20 active:scale-[0.98] transition-transform">
            Done
          </button>
        </div>
      )}
    </div>
  );
}
