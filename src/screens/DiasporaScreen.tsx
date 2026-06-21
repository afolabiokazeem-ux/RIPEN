import { useState } from 'react';
import { ViewState } from '../types';
import { ChevronLeft, Globe2, Briefcase, GraduationCap, HeartPulse, SendHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DiasporaScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [step, setStep] = useState(0);

  const TopBar = () => (
    <div className="flex items-center gap-4 p-4 border-b border-white/10 bg-indigo-950 text-white sticky top-0 z-10">
      <button onClick={() => step > 0 ? setStep(0) : navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Diaspora Direct</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-indigo-950 text-white">
      <TopBar />
      
      {step === 0 && (
         <div className="p-6 pt-8">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-3xl flex items-center justify-center mb-6">
              <Globe2 size={40} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Fund Home directly.</h2>
            <p className="text-indigo-200 mb-10 max-w-[280px]">Skip the Middlemen. Send funds directly to schools, hospitals, or local businesses from anywhere.</p>

            <div className="space-y-4">
              <ActionCard icon={<GraduationCap/>} title="Pay School Fees" desc="Pay directly to African Universities" color="bg-blue-500/20 text-blue-400" onClick={() => setStep(1)} />
              <ActionCard icon={<HeartPulse/>} title="Hospital Bills" desc="Settle family medical bills instantly" color="bg-rose-500/20 text-rose-400" onClick={() => setStep(1)} />
              <ActionCard icon={<Briefcase/>} title="Fund Local Trader" desc="Provide inventory capital to SMEs" color="bg-amber-500/20 text-amber-400" onClick={() => setStep(1)} />
              <ActionCard icon={<SendHorizontal/>} title="Standard Remittance" desc="Send directly to AU-Wallet" color="bg-emerald-500/20 text-emerald-400" onClick={() => setStep(1)} />
            </div>
         </div>
      )}

      {step === 1 && (
         <div className="p-6 pt-12 flex flex-col items-center flex-1 min-h-[calc(100vh-80px)]">
            <h2 className="text-2xl font-bold text-center mb-2">Direct Payment Setup</h2>
            <p className="text-indigo-200 text-center mb-8">Enter the AU-ID of the institution or person.</p>
            
            <div className="w-full bg-white/10 p-6 rounded-3xl border border-white/10 mb-8 backdrop-blur-sm">
               <input type="text" placeholder="AU-ID e.g. AU-092281" className="w-full bg-black/20 text-white px-4 py-4 rounded-xl outline-none mb-4 font-mono uppercase focus:ring-2 focus:ring-emerald-500 transition-all border border-white/5" />
               <div className="flex justify-between items-center text-sm font-medium mb-1">
                 <span className="text-indigo-300">Amount (GBP)</span>
                 <span className="text-emerald-400">£1 = 2,150 NGN</span>
               </div>
               <input type="number" placeholder="Enter £ Amount" className="w-full bg-black/20 text-2xl font-bold text-white px-4 py-4 rounded-xl outline-none border border-white/5" />
            </div>
            
            <div className="mt-auto w-full">
              <button onClick={() => setStep(2)} className="w-full bg-emerald-500 text-indigo-950 font-bold h-16 rounded-full text-lg shadow-lg active:scale-[0.98] transition-transform">
                Send Direct Match
              </button>
            </div>
         </div>
      )}

      {step === 2 && (
         <div className="p-6 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
            <div className="w-full bg-emerald-500 text-indigo-950 p-8 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
               <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-sm">
                 <Globe2 size={40} />
               </motion.div>
               <h2 className="text-3xl font-bold mb-2">Payment Routed!</h2>
               <p className="text-emerald-900 font-medium mb-8">Funds securely escrowed directly to destination. Zero delay.</p>
               <button onClick={() => navigate('dashboard')} className="w-full bg-indigo-950 text-white font-bold h-14 rounded-full text-lg active:scale-95 transition-transform">
                 Return Home
               </button>
            </div>
         </div>
      )}
    </div>
  );
}

function ActionCard({ icon, title, desc, color, onClick }: any) {
  return (
    <div onClick={onClick} className="bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-3xl flex items-center gap-4 cursor-pointer active:scale-95 transition-transform">
       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}>
         {icon}
       </div>
       <div>
         <h4 className="font-bold text-lg">{title}</h4>
         <p className="text-indigo-300 text-sm">{desc}</p>
       </div>
    </div>
  );
}
