import { useState } from 'react';
import { ViewState } from '../types';
import { ChevronLeft, Target, TrendingUp, HandCoins } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function InvestmentsScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [success, setSuccess] = useState(false);

  const TopBar = () => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Invest & Save</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopBar />
      <div className="p-4 pt-6 space-y-4">
         
         <div className="bg-gradient-to-tr from-purple-800 to-indigo-600 text-white p-6 rounded-3xl shadow-lg relative overflow-hidden mb-6">
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-white/10 rounded-full"></div>
            <p className="text-purple-200 font-medium mb-1">Total Investments</p>
            <h2 className="text-4xl font-bold mb-4">₦250,000</h2>
            <div className="flex gap-2">
               <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md">+12.5% Returns</span>
            </div>
         </div>

         <AnimatePresence>
           {success ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-[2rem] text-center border border-neutral-100">
                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HandCoins size={40} />
                 </div>
                 <h2 className="text-2xl font-bold mb-2">Investment Added</h2>
                 <p className="text-neutral-500 mb-8 mx-auto">Your portfolio is growing. Keep it up!</p>
                 <button onClick={() => setSuccess(false)} className="w-full bg-neutral-800 text-white py-4 rounded-full font-bold">Continue</button>
              </motion.div>
           ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                 <h3 className="font-bold text-neutral-800 text-lg px-2">Opportunities</h3>
                 <InvestCard icon={<Target/>} title="Goal Savings" apy="8% APY" desc="Save for rent, school, or stock" color="purple" onClick={()=>setSuccess(true)} />
                 <InvestCard icon={<TrendingUp/>} title="SME Business Returns" apy="15% APY" desc="Invest in verified local merchants" color="emerald" onClick={()=>setSuccess(true)} />
                 <InvestCard icon={<HandCoins/>} title="Fixed Lock" apy="12% APY" desc="Lock funds for 6-12 months securely" color="blue" onClick={()=>setSuccess(true)} />
              </motion.div>
           )}
         </AnimatePresence>
      </div>
    </div>
  );
}

function InvestCard({ icon, title, desc, apy, color, onClick }: any) {
  const colorMap: any = {
    purple: 'bg-purple-100 text-purple-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    blue: 'bg-blue-100 text-blue-600'
  }
  return (
     <div className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-100 cursor-pointer active:scale-95 transition-transform" onClick={onClick}>
        <div className="flex items-center gap-4 mb-4">
           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap[color]}`}>
             {icon}
           </div>
           <div className="flex-1">
              <h4 className="font-bold text-lg text-neutral-800">{title}</h4>
              <p className="text-neutral-500 text-xs">{desc}</p>
           </div>
        </div>
        <div className="bg-neutral-50 p-4 rounded-2xl flex justify-between items-center">
           <span className="font-bold text-neutral-800 flex items-center gap-2"><TrendingUp size={16} className="text-green-500" /> {apy}</span>
           <span className="text-neutral-500 font-bold text-xs bg-white px-3 py-1 rounded-full shadow-sm">Invest Now</span>
        </div>
     </div>
  );
}
