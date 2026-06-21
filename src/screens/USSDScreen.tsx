import { useState } from 'react';
import { ViewState } from '../types';
import { Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function USSDScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [ussdAction, setUssdAction] = useState<string>('');
  const [ussdLevel, setUssdLevel] = useState<number>(0);
  const [ussdInput, setUssdInput] = useState<string>('*123#');

  const handleDial = () => {
    if (ussdInput === '*123#') {
      setUssdLevel(1);
    }
  };

  const handleOption = (val: string) => {
    if (ussdLevel === 1) {
      if (val === '1') setUssdAction('Send Money');
      if (val === '2') setUssdAction('Check Balance');
      if (val === '3') setUssdAction('Save Money');
      if (val === '4') setUssdAction('Join Àjọ');
      setUssdLevel(2);
    } else if (ussdLevel === 2) {
      setUssdLevel(3);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col pt-12 items-center text-white relative">
      <div className="absolute top-4 left-4 text-white p-2 bg-neutral-800 rounded-full cursor-pointer z-50" onClick={() => navigate('dashboard')}>
        Back
      </div>

      <div className="flex-1 w-full max-w-sm flex flex-col items-center justify-center px-4">
        
        <p className="text-center text-neutral-400 mb-8 max-w-xs">AU-Wallet works completely offline on basic phones via USSD.</p>

        {ussdLevel === 0 && (
          <div className="w-full">
            <input 
              type="text" 
              value={ussdInput}
              onChange={(e) => setUssdInput(e.target.value)}
              className="w-full bg-transparent text-center text-5xl font-mono tracking-widest outline-none mb-12 text-green-400"
            />
            <button onClick={handleDial} className="w-20 h-20 bg-green-600 rounded-full mx-auto flex items-center justify-center hover:bg-green-500 active:scale-95 transition-transform shadow-lg shadow-green-900/50">
              <Phone size={32} fill="currentColor" />
            </button>
          </div>
        )}

        <AnimatePresence>
          {ussdLevel > 0 && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full bg-[#E5E5E5] text-black rounded-sm border-2 border-neutral-300 shadow-2xl overflow-hidden font-mono text-sm max-w-[280px]"
            >
              <div className="bg-black text-white px-2 py-1 flex justify-between text-xs">
                 <span>Carrier</span>
                 <span>12:00</span>
              </div>
              <div className="p-4 bg-white min-h-[200px] flex flex-col">
                {ussdLevel === 1 && (
                  <div className="whitespace-pre-line leading-relaxed flex-1">
                    Welcome to AU-Wallet.
                    1. Send Money
                    2. Check Balance
                    3. Save Money
                    4. Join Àjọ
                    5. Buy Airtime
                    6. Pay Bills
                  </div>
                )}
                {ussdLevel === 2 && (
                  <div className="whitespace-pre-line leading-relaxed flex-1">
                    {ussdAction}
                    Please enter amount or recipient details:
                  </div>
                )}
                {ussdLevel === 3 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <CheckCircle2 size={32} className="text-green-600 mb-2" />
                    Transaction Successful.
                    You will receive an SMS confirmation shortly.
                  </div>
                )}

                {ussdLevel < 3 && (
                   <div className="flex gap-2 mt-4 pt-4 border-t border-dashed border-neutral-300">
                     <input type="text" className="flex-1 border border-black p-1 text-center font-mono outline-none" onChange={(e) => setUssdInput(e.target.value)} value={ussdLevel === 1 ? "" : ussdInput} placeholder="Reply" />
                     <button onClick={() => handleOption(ussdLevel === 1 ? '1' : '0')} className="bg-black text-white px-4 font-bold active:bg-neutral-800">Send</button>
                   </div>
                )}
                {ussdLevel === 3 && (
                   <div className="mt-4 pt-4 border-t border-dashed border-neutral-300 flex justify-center">
                     <button onClick={() => setUssdLevel(0)} className="bg-black text-white px-6 py-2 font-bold active:bg-neutral-800">Dismiss</button>
                   </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
