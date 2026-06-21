import { ViewState } from '../types';
import { ChevronLeft, Fingerprint, ShieldCheck, HandCoins, Building2, UserCircle } from 'lucide-react';

export default function IdentityScreen({ navigate, trustScore=850 }: { navigate: (v: ViewState) => void, trustScore?: number }) {
  const TopBar = () => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">AU Identity</h1>
    </div>
  );

  const ScoreGauge = ({ title, score, max, icon, color }: { title: string, score: number, max: number, icon: any, color: string }) => (
    <div className="bg-white p-5 rounded-3xl shadow-sm border border-neutral-100 mb-4">
      <div className="flex justify-between items-start mb-4">
         <div className="flex items-center gap-3">
           <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
           <p className="font-bold text-neutral-800">{title}</p>
         </div>
         <p className="font-black text-xl text-neutral-800">{score} <span className="text-sm font-medium text-neutral-400">/ {max}</span></p>
      </div>
      <div className="h-3 w-full bg-neutral-100 rounded-full overflow-hidden">
         <div className={`h-full rounded-full transition-all duration-1000 ${color.replace('bg-', 'bg-')}`} style={{ width: `${(score/max)*100}%`, backgroundColor: 'currentColor' }}></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <TopBar />
      
      <div className="p-4 flex flex-col items-center pt-8">
         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-100 mb-4 relative">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ade" alt="Profile" className="w-[88px] h-[88px] rounded-full object-cover" />
             <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white">
                <ShieldCheck size={14} />
             </div>
         </div>
         <h2 className="text-2xl font-bold text-neutral-800 mb-1">Ade Oluwatobi</h2>
         
         <div className="bg-neutral-800 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-mono text-lg shadow-sm mb-4">
           <Fingerprint size={20} className="text-green-400" /> AU-00012345
         </div>
         
         <p className="text-sm text-neutral-500 max-w-[240px] text-center mb-10">Your AU-ID is your universal digital passport across Africa.</p>

         <div className="w-full">
            <ScoreGauge title="Trust Score" score={trustScore} max={1000} icon={<ShieldCheck size={20}/>} color="text-green-500 bg-green-50" />
            <ScoreGauge title="Savings Consistency" score={92} max={100} icon={<HandCoins size={20}/>} color="text-blue-500 bg-blue-50" />
            <ScoreGauge title="Credit Rating" score={780} max={850} icon={<Building2 size={20}/>} color="text-indigo-500 bg-indigo-50" />
            <ScoreGauge title="Merchant Reputation" score={4.9} max={5.0} icon={<UserCircle size={20}/>} color="text-amber-500 bg-amber-50" />
         </div>
         
         <div className="mt-4 bg-emerald-50 text-emerald-800 p-4 rounded-2xl text-sm font-medium border border-emerald-100 flex gap-3 text-left w-full">
            <ShieldCheck size={24} className="shrink-0 text-emerald-600" />
            <p>Your identity and scores are decentralized and strictly yours. They empower you to secure loans globally.</p>
         </div>
      </div>
    </div>
  );
}
