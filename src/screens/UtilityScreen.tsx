import { useState } from 'react';
import { ViewState } from '../types';
import { ChevronLeft, Zap, Droplet, Wifi, Tv, GraduationCap, HeartPulse, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function UtilityScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [selectedUtility, setSelectedUtility] = useState<string | null>(null);
  const [step, setStep] = useState(0);

  const TopBar = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => {
        if (step > 0) {
          setStep(0);
          setSelectedUtility(null);
        } else {
          navigate('dashboard');
        }
      }} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );

  const utilities = [
    { id: 'power', icon: <Zap size={32} />, label: 'Electricity', color: 'bg-amber-100 text-amber-600' },
    { id: 'water', icon: <Droplet size={32} />, label: 'Water', color: 'bg-blue-100 text-blue-600' },
    { id: 'internet', icon: <Wifi size={32} />, label: 'Internet', color: 'bg-purple-100 text-purple-600' },
    { id: 'tv', icon: <Tv size={32} />, label: 'Cable TV', color: 'bg-rose-100 text-rose-600' },
    { id: 'school', icon: <GraduationCap size={32} />, label: 'School Fees', color: 'bg-teal-100 text-teal-600' },
    { id: 'hospital', icon: <HeartPulse size={32} />, label: 'Hospital', color: 'bg-red-100 text-red-600' },
  ];

  if (step === 1) {
    return (
      <div className="min-h-screen bg-white">
        <TopBar title={`Pay ${selectedUtility}`} />
        <div className="p-6">
          <div className="bg-neutral-50 rounded-3xl p-6 mb-8 text-center border border-neutral-100">
            <p className="text-neutral-500 mb-2">Provider / Meter Number</p>
            <input type="text" placeholder="Enter Details" className="w-full text-center bg-transparent text-2xl font-bold outline-none mb-4 placeholder-neutral-300 border-b-2 border-neutral-200 focus:border-green-500 pb-2 transition-colors" />
            
            <p className="text-neutral-500 mb-2 mt-6">Amount to Pay</p>
            <div className="flex justify-center items-center text-4xl font-bold text-green-700">
              <span className="text-2xl mr-1">₦</span>
              <input autoFocus type="number" placeholder="0" className="w-32 bg-transparent outline-none text-center" />
            </div>
          </div>
          <button onClick={() => setStep(2)} className="w-full bg-green-600 text-white font-bold h-16 rounded-full text-lg shadow-lg active:scale-[0.98] transition-transform">
            Confirm Payment
          </button>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
       <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
         <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
           <CheckSquare size={48} />
         </motion.div>
         <h2 className="text-3xl font-bold mb-2 text-center text-neutral-800">Payment Successful!</h2>
         <p className="text-neutral-500 text-center mb-12">Your utility token will be sent via SMS.</p>
         
         <div className="w-full bg-neutral-50 p-6 rounded-3xl border border-neutral-100 border-dashed mb-8 flex flex-col space-y-3">
           <div className="flex justify-between font-mono text-sm"><span className="text-neutral-500">Receipt No:</span><span className="font-bold">TX-99882</span></div>
           <div className="flex justify-between font-mono text-sm"><span className="text-neutral-500">Service:</span><span className="font-bold">{selectedUtility}</span></div>
           <div className="flex justify-between font-mono text-sm"><span className="text-neutral-500">Token:</span><span className="font-bold text-green-600">4431-2290-X12</span></div>
         </div>

         <button onClick={() => navigate('dashboard')} className="w-full bg-neutral-100 text-neutral-800 font-bold h-16 rounded-full text-lg">Back to Home</button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <TopBar title="Pay Bills & Utilities" />
      <div className="p-4 grid grid-cols-2 gap-4">
        {utilities.map(u => (
          <motion.div 
            whileTap={{ scale: 0.95 }}
            key={u.id}
            onClick={() => {
              setSelectedUtility(u.label);
              setStep(1);
            }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center justify-center text-center gap-4 cursor-pointer"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${u.color}`}>
              {u.icon}
            </div>
            <span className="font-bold text-neutral-700">{u.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
