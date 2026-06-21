import { motion } from 'motion/react';
import { ViewState } from '../types';
import { 
  Send, Received, ArrowDownToLine, Receipt, 
  Users, ShoppingBag, TrendingUp, ShieldCheck,
  Smartphone, CreditCard, Bell, ChevronRight
} from 'lucide-react';

export default function DashboardScreen({ navigate, balance, savings, trustScore }: { 
  navigate: (v: ViewState) => void,
  balance: number,
  savings: number,
  trustScore: number
}) {
  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      {/* Header Profile Section */}
      <div className="bg-green-700 text-white p-6 rounded-b-[2.5rem] shadow-lg sticky top-0 z-20">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center overflow-hidden border-2 border-white/30" onClick={() => navigate('identity')}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ade" alt="Profile" className="w-10 h-10 object-cover" />
            </div>
            <div>
              <p className="text-green-100 text-sm font-medium">Welcome back,</p>
              <h2 className="text-xl font-bold">Ade Oluwatobi</h2>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-amber-400 rounded-full"></span>
          </button>
        </div>

        {/* Hero Card */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-5 shadow-inner border border-white/10 mb-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
          
          <p className="text-green-100 text-sm mb-1 font-medium">Wallet Balance</p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold">₦{balance.toLocaleString('en-US', {minimumFractionDigits: 2})}</span>
            <button className="bg-white/20 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1">NGN <ChevronRight size={12}/></button>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/20">
            <div onClick={() => navigate('investments')} className="cursor-pointer active:opacity-70">
              <p className="text-green-200 text-xs mb-0.5">Savings</p>
              <p className="font-semibold text-sm">₦{savings.toLocaleString()}</p>
            </div>
            <div onClick={() => navigate('ajo')} className="cursor-pointer active:opacity-70">
              <p className="text-green-200 text-xs mb-0.5">Àjọ Total</p>
              <p className="font-semibold text-sm">₦120,000</p>
            </div>
            <div onClick={() => navigate('identity')} className="cursor-pointer active:opacity-70">
              <p className="text-green-200 text-xs mb-0.5">Trust Score</p>
              <div className="flex items-center gap-1 text-amber-300">
                <ShieldCheck size={14} />
                <p className="font-semibold text-sm">{trustScore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-5 mt-6">
        
        <h3 className="font-bold text-neutral-800 mb-4 text-lg">Quick Actions</h3>
        
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 mb-8">
          <ActionBtn icon={<Send size={24} />} label="Send" onClick={() => navigate('send-money')} color="bg-blue-100 text-blue-600" />
          <ActionBtn icon={<ArrowDownToLine size={24} />} label="Receive" onClick={() => navigate('receive-money')} color="bg-green-100 text-green-600" />
          <ActionBtn icon={<TrendingUp size={24} />} label="Save" onClick={() => navigate('investments')} color="bg-purple-100 text-purple-600" />
          <ActionBtn icon={<Receipt size={24} />} label="Pay Bills" onClick={() => navigate('utilities')} color="bg-amber-100 text-amber-600" />
          
          <ActionBtn icon={<Users size={24} />} label="Join Àjọ" onClick={() => navigate('ajo')} color="bg-pink-100 text-pink-600" />
          <ActionBtn icon={<ShoppingBag size={24} />} label="Shop" onClick={() => navigate('trade')} color="bg-orange-100 text-orange-600" />
          <ActionBtn icon={<ShieldCheck size={24} />} label="Insurance" onClick={() => navigate('insurance')} color="bg-teal-100 text-teal-600" />
          <ActionBtn icon={<Smartphone size={24} />} label="USSD" onClick={() => navigate('ussd')} color="bg-gray-200 text-gray-700" />
        </div>

        <div className="flex items-center justify-between mb-4 mt-2">
          <h3 className="font-bold text-neutral-800 text-lg">More Tools</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div onClick={() => navigate('merchant')} className="bg-white p-4 rounded-3xl shadow-sm border border-neutral-100 flex items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
              <StoreIcon />
            </div>
            <div>
              <p className="font-bold text-neutral-800">Merchant</p>
              <p className="text-xs text-neutral-500">Business tools</p>
            </div>
          </div>
          
          <div onClick={() => navigate('atm')} className="bg-white p-4 rounded-3xl shadow-sm border border-neutral-100 flex items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-600">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="font-bold text-neutral-800">ATM Cash</p>
              <p className="text-xs text-neutral-500">Cardless</p>
            </div>
          </div>
          
           <div onClick={() => navigate('diaspora')} className="bg-white p-4 rounded-3xl shadow-sm border border-neutral-100 flex items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
              <GlobeIcon />
            </div>
            <div>
              <p className="font-bold text-neutral-800">Diaspora</p>
              <p className="text-xs text-neutral-500">Global wallet</p>
            </div>
          </div>
          
          <div onClick={() => navigate('market-intel')} className="bg-white p-4 rounded-3xl shadow-sm border border-neutral-100 flex items-center gap-3 active:scale-95 transition-transform">
            <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600">
              <PieChartIcon />
            </div>
            <div>
              <p className="font-bold text-neutral-800">Market</p>
              <p className="text-xs text-neutral-500">Intelligence</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ActionBtn({ icon, label, onClick, color }: { icon: React.ReactNode, label: string, onClick: () => void, color: string }) {
  return (
    <div className="flex flex-col items-center gap-2" onClick={onClick}>
      <button className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm active:scale-90 transition-transform ${color}`}>
        {icon}
      </button>
      <span className="text-xs font-semibold text-neutral-700 text-center">{label}</span>
    </div>
  );
}

const StoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.04-4.04c.1-.1.22-.16.36-.16h11.2c.14 0 .26.06.36.16L22 7"/><path d="M22 7v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7"/><path d="M2 7h20"/><path d="M12 21v-9"/><path d="M7 21v-9"/><path d="M17 21v-9"/></svg>
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
const PieChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
