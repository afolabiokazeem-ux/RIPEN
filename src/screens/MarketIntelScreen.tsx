import { ViewState } from '../types';
import { ChevronLeft, BarChart3, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function MarketIntelScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  const TopBar = () => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Market Intel</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopBar />
      <div className="p-4 space-y-4 pt-6">

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100">
           <div className="flex items-center justify-between mb-6">
              <p className="font-bold text-neutral-700">Market Activity</p>
              <Activity size={20} className="text-emerald-500" />
           </div>
           {/* Mock Bar Chart */}
           <div className="flex items-end gap-2 h-32 w-full mb-2">
              <div className="flex-1 bg-emerald-100 rounded-t-xl h-[40%]"><div className="w-full bg-emerald-500 rounded-t-xl h-full animate-[pulse_2s_ease-in-out_infinite]"></div></div>
              <div className="flex-1 bg-emerald-100 rounded-t-xl h-[60%]"><div className="w-full bg-emerald-500 rounded-t-xl h-full animate-[pulse_2s_ease-in-out_infinite_0.2s]"></div></div>
              <div className="flex-1 bg-emerald-100 rounded-t-xl h-[30%]"><div className="w-full bg-emerald-500 rounded-t-xl h-full animate-[pulse_2s_ease-in-out_infinite_0.4s]"></div></div>
              <div className="flex-1 bg-emerald-100 rounded-t-xl h-[80%]"><div className="w-full bg-emerald-500 rounded-t-xl h-full animate-[pulse_2s_ease-in-out_infinite_0.6s]"></div></div>
              <div className="flex-1 bg-emerald-100 rounded-t-xl h-[50%]"><div className="w-full bg-emerald-500 rounded-t-xl h-full animate-[pulse_2s_ease-in-out_infinite_0.8s]"></div></div>
              <div className="flex-1 bg-emerald-100 rounded-t-xl h-[100%]"><div className="w-full bg-emerald-500 rounded-t-xl h-full animate-[pulse_2s_ease-in-out_infinite_1s]"></div></div>
           </div>
           <p className="text-xs text-neutral-400 text-center">Trade volume across AU network</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100">
           <div className="flex items-center justify-between mb-4">
              <p className="font-bold text-neutral-700">Trending Commodities</p>
              <BarChart3 size={20} className="text-indigo-500" />
           </div>
           <div className="space-y-4 mt-6">
              <TrendRow name="Rice (50kg)" price="₦64,000" trend="+5.2%" color="text-green-500" />
              <TrendRow name="Cement (Bag)" price="₦7,200" trend="-1.5%" color="text-rose-500" />
              <TrendRow name="Solar Panels" price="₦145,000" trend="+12.0%" color="text-green-500" />
              <TrendRow name="Cocoa Beans" price="₵450" trend="+2.1%" color="text-green-500" />
           </div>
        </div>

      </div>
    </div>
  );
}

function TrendRow({ name, price, trend, color }: any) {
  return (
    <div className="flex justify-between items-center text-sm border-b border-neutral-50 pb-2 last:border-0 last:pb-0">
       <span className="font-semibold text-neutral-800">{name}</span>
       <div className="text-right">
         <p className="font-bold">{price}</p>
         <p className={`text-xs font-bold ${color}`}>{trend}</p>
       </div>
    </div>
  );
}
