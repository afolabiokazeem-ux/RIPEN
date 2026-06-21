import { ViewState } from '../types';
import { ChevronLeft, Store, ShieldCheck, TrendingUp, HandCoins, CalendarDays, ExternalLink, Award } from 'lucide-react';

export default function MerchantScreen({ navigate, trustScore=850 }: { navigate: (v: ViewState) => void, trustScore?: number }) {
  const TopBar = () => (
    <div className="flex items-center gap-4 p-4 bg-indigo-900 text-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">Merchant Profile</h1>
    </div>
  );

  return (
    <div className="min-h-screen bg-indigo-50 pb-20">
      <TopBar />
      
      {/* Cover Profile */}
      <div className="bg-indigo-900 text-white p-6 pb-12 rounded-b-[3rem] relative shadow-lg">
         <div className="flex items-center gap-4 relative z-10">
            <div className="w-20 h-20 bg-white flex items-center justify-center rounded-2xl shadow-xl overflow-hidden text-indigo-900 p-2 border-2 border-indigo-400">
              <Store size={40} />
            </div>
            <div>
               <h2 className="text-2xl font-bold">Mama Ngozi Provisions</h2>
               <p className="text-indigo-200 flex items-center gap-1 font-medium mt-1">
                 <ShieldCheck size={16} className="text-emerald-400" /> Verified Merchant
               </p>
               <p className="text-indigo-300 text-sm mt-1">AU-0023412 • Open 5 Years</p>
            </div>
         </div>
      </div>

      <div className="px-4 -mt-6 relative z-20 space-y-4">
        
        {/* Trust Score & Loan Eligibility Card */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-neutral-100">
           <div className="flex items-start justify-between mb-4">
              <div>
                 <p className="text-neutral-500 font-medium mb-1">Trust Score</p>
                 <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-indigo-950">{trustScore}</span>
                    <span className="text-sm font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded">Excellent</span>
                 </div>
              </div>
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                 <TrendingUp size={24} />
              </div>
           </div>

           <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-indigo-600 rounded-full w-[85%]"></div>
           </div>

           <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
              <div className="flex items-center gap-3 text-emerald-800 mb-2">
                 <HandCoins size={20} />
                 <span className="font-bold">Eligible for Business Loan</span>
              </div>
              <p className="text-emerald-600 text-sm mb-3">Based on your sales volume and trust score, you qualify for up to ₦500,000.</p>
              <button className="bg-emerald-600 text-white font-bold leading-none py-3 px-4 rounded-xl text-sm hover:bg-emerald-700 active:scale-95 transition-all w-full text-center">
                 Review Offer
              </button>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white p-5 rounded-3xl shadow-sm border border-neutral-100">
             <div className="text-indigo-600 mb-3"><CalendarDays size={24}/></div>
             <p className="text-neutral-500 text-sm font-medium mb-1">Sales Volume</p>
             <p className="font-bold text-xl text-neutral-800">₦2.4M <span className="text-xs text-neutral-400 font-medium font-sans">/mo</span></p>
           </div>
           
           <div className="bg-white p-5 rounded-3xl shadow-sm border border-neutral-100">
             <div className="text-amber-500 mb-3"><Award size={24}/></div>
             <p className="text-neutral-500 text-sm font-medium mb-1">Customer Rating</p>
             <p className="font-bold text-xl text-neutral-800">4.9 <span className="text-xs text-neutral-400 font-medium font-sans">/ 5.0</span></p>
           </div>
        </div>

        <div className="bg-white rounded-3xl p-1 shadow-sm border border-neutral-100">
           <button className="w-full flex items-center justify-between p-4 active:bg-neutral-50 rounded-2xl transition-colors text-left" onClick={() => alert('Opening Payment QR Scanner')}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-xl">
                  <ScanLineIcon />
                </div>
                <div>
                   <p className="font-bold text-neutral-800">Accept Payment</p>
                   <p className="text-xs text-neutral-500">Show QR or enter amount</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-neutral-300" />
           </button>
           
           <div className="h-px w-[calc(100%-2rem)] mx-auto bg-neutral-100"></div>
           
           <button className="w-full flex items-center justify-between p-4 active:bg-neutral-50 rounded-2xl transition-colors text-left" onClick={() => navigate('trade')}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-50 text-orange-600 flex items-center justify-center rounded-xl">
                  <Store size={20} />
                </div>
                <div>
                   <p className="font-bold text-neutral-800">Trade Passport</p>
                   <p className="text-xs text-neutral-500">Show supply history to partners</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-neutral-300" />
           </button>
        </div>

      </div>
    </div>
  );
}

const ScanLineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>
