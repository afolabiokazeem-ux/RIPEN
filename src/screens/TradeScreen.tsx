import { useState } from 'react';
import { ViewState } from '../types';
import { ChevronLeft, Box, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TradeScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const [tab, setTab] = useState<'buy'|'sell'>('buy');
  const [escrow, setEscrow] = useState(false);

  const TopBar = () => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Trade Marketplace</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopBar />
      <div className="p-4">

        <div className="flex bg-neutral-200/50 p-1 rounded-full mb-6 relative">
           <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm transition-all duration-300 ${tab === 'buy' ? 'left-1' : 'left-[calc(50%+2px)]'}`}></div>
           <button onClick={()=>setTab('buy')} className={`flex-1 py-3 text-sm font-bold relative z-10 transition-colors ${tab === 'buy' ? 'text-neutral-900' : 'text-neutral-500'}`}>I want to Buy</button>
           <button onClick={()=>setTab('sell')} className={`flex-1 py-3 text-sm font-bold relative z-10 transition-colors ${tab === 'sell' ? 'text-neutral-900' : 'text-neutral-500'}`}>I want to Sell</button>
        </div>

        {escrow ? (
           <div className="bg-white p-6 rounded-[2rem] shadow-sm text-center py-12">
             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={40} />
             </motion.div>
             <h2 className="text-2xl font-bold mb-2">Funds in Escrow</h2>
             <p className="text-neutral-500 mb-8 max-w-xs mx-auto">Payment is securely locked until goods are delivered and verified by you.</p>
             <button onClick={() => setEscrow(false)} className="bg-green-600 text-white font-bold px-8 py-4 rounded-full w-full">Track Delivery</button>
           </div>
        ) : (
          <div className="space-y-4">
             <TradeItem supplier="Alaba Electronics" location="Lagos, NG" item="Solar Panels 200W" price="₦145,000" trusted onBuy={() => setEscrow(true)} />
             <TradeItem supplier="Kano Agros" location="Kano, NG" item="Bags of Rice (50kg)" price="₦65,000" trusted onBuy={() => setEscrow(true)} />
             <TradeItem supplier="Accra Textiles" location="Accra, GH" item="Kente Cloth Bundles" price="₵2,500" trusted={false} onBuy={() => setEscrow(true)} />
          </div>
        )}
      </div>
    </div>
  );
}

function TradeItem({ supplier, location, item, price, trusted, onBuy }: any) {
  return (
    <div className="bg-white p-4 rounded-[2rem] shadow-sm border border-neutral-100">
       <div className="flex justify-between items-start mb-4">
         <div>
           <h4 className="font-bold text-neutral-800 text-lg flex items-center gap-1">{supplier} {trusted && <CheckCircle2 size={16} className="text-blue-500" />}</h4>
           <p className="text-xs text-neutral-500 flex items-center gap-1"><MapPin size={12}/> {location}</p>
         </div>
         <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center text-neutral-400">
           <Box size={24} />
         </div>
       </div>
       <div className="bg-neutral-50 p-3 rounded-2xl mb-4 flex justify-between items-center">
         <span className="font-medium text-neutral-700">{item}</span>
         <span className="font-bold text-lg">{price}</span>
       </div>
       <div className="flex gap-2">
         <button onClick={onBuy} className="flex-1 bg-neutral-900 text-white font-bold py-3 rounded-xl hover:bg-neutral-800 transition-colors">Buy with Escrow</button>
       </div>
    </div>
  );
}
