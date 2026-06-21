import { useState } from 'react';
import { ViewState } from '../types';
import { ChevronLeft, ShieldCheck, Heart, Umbrella, Zap, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function InsuranceScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [active, setActive] = useState<string | null>(null);

  const TopBar = () => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Insurance</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <TopBar />
      <div className="p-4 pt-6 space-y-4">
         
         <div className="bg-sky-100 text-sky-800 p-5 rounded-3xl mb-4 flex gap-4 items-center border border-sky-200">
            <ShieldCheck size={32} className="shrink-0 text-sky-600" />
            <p className="text-sm font-medium">Protect your health and business securely. Easy claims via AU-Wallet.</p>
         </div>

         <AnimatePresence>
           {active ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-[2rem] text-center border border-neutral-100">
                 <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckSquare size={40} />
                 </div>
                 <h2 className="text-2xl font-bold mb-2">Coverage Active</h2>
                 <p className="text-neutral-500 mb-8 max-w-[200px] mx-auto">Your premium of ₦2,000/mo was successfully deducted.</p>
                 <button onClick={() => setActive(null)} className="w-full bg-neutral-800 text-white py-4 rounded-full font-bold">Done</button>
              </motion.div>
           ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                 <PolicyCard icon={<Heart/>} title="Health Insurance" price="₦2,000 / mo" desc="Covers family hospital visits, malaria tests" color="rose" onActivate={()=>setActive('health')} />
                 <PolicyCard icon={<Zap/>} title="Business Insurance" price="₦5,000 / mo" desc="Fire, theft cover for your market stall" color="amber" onActivate={()=>setActive('business')} />
                 <PolicyCard icon={<Umbrella/>} title="Weather Insurance" price="₦1,500 / mo" desc="Protects harvest for farmer cooperatives" color="sky" onActivate={()=>setActive('weather')} />
              </motion.div>
           )}
         </AnimatePresence>

      </div>
    </div>
  );
}

function PolicyCard({ icon, title, desc, price, color, onActivate }: any) {
  const colorMap: any = {
    rose: 'bg-rose-100 text-rose-600',
    amber: 'bg-amber-100 text-amber-600',
    sky: 'bg-sky-100 text-sky-600'
  }
  return (
     <div className="bg-white rounded-3xl p-5 shadow-sm border border-neutral-100 flex flex-col gap-4">
        <div className="flex items-center gap-4">
           <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorMap[color]}`}>
             {icon}
           </div>
           <div className="flex-1">
              <h4 className="font-bold text-lg text-neutral-800">{title}</h4>
              <p className="text-neutral-500 text-xs">{desc}</p>
           </div>
        </div>
        <div className="bg-neutral-50 p-3 rounded-2xl flex justify-between items-center px-4">
           <span className="font-bold text-lg">{price}</span>
           <button onClick={onActivate} className="bg-green-600 text-white font-bold py-2 px-4 rounded-xl shadow-sm active:scale-95 transition-transform text-sm">Activate</button>
        </div>
     </div>
  );
}
