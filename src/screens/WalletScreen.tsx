import { motion } from 'motion/react';
import { ViewState } from '../types';
import { ChevronLeft, ArrowRight, ArrowDownLeft, ArrowUpRight, Globe, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function WalletScreen({ navigate, view }: { navigate: (v: ViewState) => void, view: 'wallet' | 'send-money' | 'receive-money' | 'cross-border' }) {
  const [currency, setCurrency] = useState('NGN');
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState('');
  
  const balances: Record<string, number> = {
    'NGN': 854200.50,
    'USD': 450.00,
    'GHS': 2100.00,
    'KES': 15400.00
  };

  const TopBar = ({ title }: { title: string }) => (
    <div className="flex items-center gap-4 p-4 border-b border-neutral-100 bg-white sticky top-0 z-10">
      <button onClick={() => navigate('dashboard')} className="w-10 h-10 flex items-center justify-center bg-neutral-100 rounded-full hover:bg-neutral-200">
        <ChevronLeft size={24} />
      </button>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );

  if (view === 'wallet') {
    return (
      <div className="min-h-screen bg-neutral-50 pb-24">
        <TopBar title="My Wallets" />
        <div className="p-4 space-y-4">
          {Object.entries(balances).map(([curr, bal]) => (
            <div key={curr} className="bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                  ${curr === 'NGN' ? 'bg-green-100 text-green-700' : 
                    curr === 'USD' ? 'bg-blue-100 text-blue-700' : 
                    curr === 'GHS' ? 'bg-amber-100 text-amber-700' : 
                    'bg-purple-100 text-purple-700'}`}>
                  {curr}
                </div>
                <div>
                  <p className="font-bold text-lg">{bal.toLocaleString()}</p>
                  <p className="text-sm text-neutral-500">{curr} Wallet</p>
                </div>
              </div>
              <ChevronLeft className="rotate-180 text-neutral-300" />
            </div>
          ))}
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button onClick={() => navigate('send-money')} className="bg-green-600 text-white rounded-2xl p-4 font-bold flex flex-col items-center gap-2">
              <ArrowUpRight size={24} /> Send
            </button>
            <button onClick={() => navigate('receive-money')} className="bg-green-100 text-green-700 rounded-2xl p-4 font-bold flex flex-col items-center gap-2">
              <ArrowDownLeft size={24} /> Receive
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'send-money') {
    return (
      <div className="min-h-screen bg-white">
        <TopBar title="Send Money" />
        {step === 0 ? (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Who are you sending to?</h2>
            <div className="space-y-4">
              <div className="bg-neutral-50 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-neutral-100" onClick={() => setStep(1)}>
                <div className="w-12 h-12 bg-green-200 text-green-800 rounded-full flex items-center justify-center font-bold">M</div>
                <div><p className="font-bold">Mama Joy Traders</p><p className="text-sm text-neutral-500">AU-0023412</p></div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-neutral-100" onClick={() => setStep(1)}>
                <div className="w-12 h-12 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold">T</div>
                <div><p className="font-bold">Tunde Shop</p><p className="text-sm text-neutral-500">AU-0099411</p></div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:bg-neutral-100" onClick={() => navigate('cross-border')}>
                <div className="w-12 h-12 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center font-bold"><Globe size={24}/></div>
                <div><p className="font-bold">Cross-Border Transfer</p><p className="text-sm text-neutral-500">Send to Ghana, Kenya...</p></div>
              </div>
            </div>
            <div className="mt-8 relative">
              <input type="text" placeholder="Enter AU-ID or Phone Number" className="w-full bg-neutral-100 h-14 rounded-full px-6 focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
          </div>
        ) : step === 1 ? (
          <div className="p-6 flex flex-col h-[calc(100vh-80px)]">
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="text-neutral-500 font-medium mb-2">Sending to Mama Joy Traders</p>
              <div className="flex items-center text-5xl font-bold text-green-700">
                <span className="text-2xl mr-1">₦</span>
                <input autoFocus type="number" placeholder="0" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-[150px] bg-transparent outline-none text-center" />
              </div>
            </div>
            <button onClick={() => setStep(2)} className="w-full bg-green-600 text-white font-bold h-14 rounded-full text-lg mb-8" disabled={!amount}>Confirm Transfer</button>
          </div>
        ) : (
          <div className="p-6 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
               <CheckCircle2 size={48} />
             </motion.div>
             <h2 className="text-3xl font-bold mb-2">Success!</h2>
             <p className="text-neutral-500 text-center mb-8">You sent ₦{amount} to Mama Joy Traders.</p>
             <button onClick={() => navigate('dashboard')} className="bg-neutral-100 text-neutral-800 font-bold px-8 py-4 rounded-full">Back to Home</button>
          </div>
        )}
      </div>
    );
  }

  if (view === 'cross-border') {
    return (
      <div className="min-h-screen bg-white">
        <TopBar title="Cross-Border Transfer" />
        {step === 0 ? (
          <div className="p-6 flex flex-col h-[calc(100vh-80px)]">
            <h2 className="text-2xl font-bold mb-6">Send to Ghana</h2>
            
            <div className="bg-neutral-50 rounded-3xl p-6 mb-4 border border-neutral-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-neutral-500">You send</span>
                <div className="bg-white border rounded-lg px-3 py-1 font-bold flex gap-2 items-center">NGN</div>
              </div>
              <div className="flex items-center text-4xl font-bold mb-4">
                <span className="text-xl mr-1">₦</span>
                <input type="number" placeholder="0" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-transparent outline-none" />
              </div>
              
              <div className="h-px w-full bg-neutral-200 my-4 relative">
                <div className="absolute left-1/2 -ml-4 -mt-4 w-8 h-8 rounded-full bg-white border flex items-center justify-center">
                  <ArrowDownLeft size={16} />
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <span className="text-neutral-500">They receive</span>
                <div className="bg-amber-100 text-amber-800 rounded-lg px-3 py-1 font-bold flex gap-2 items-center border border-amber-200">GHS</div>
              </div>
              <div className="text-4xl font-bold text-amber-600">
                <span className="text-xl mr-1">₵</span>{(Number(amount) * 0.015).toFixed(2) || '0.00'}
              </div>
            </div>
            
            <div className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl mb-auto font-medium text-sm flex gap-3 items-center">
              <Globe size={20} className="shrink-0" /> Exchange Rate: 1 NGN = 0.015 GHS. Processed instantly via AU Network.
            </div>
            
            <button onClick={() => setStep(1)} className="w-full bg-green-600 text-white font-bold h-14 rounded-full text-lg mb-8" disabled={!amount}>Continue</button>
          </div>
        ) : (
           <div className="p-6 flex flex-col items-center justify-center h-[calc(100vh-80px)]">
             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
               <CheckCircle2 size={48} />
             </motion.div>
             <h2 className="text-3xl font-bold mb-2">Transfer Successful</h2>
             <p className="text-neutral-500 text-center mb-8">Kwame received ₵{(Number(amount) * 0.015).toFixed(2)} instantly.</p>
             <button onClick={() => navigate('dashboard')} className="bg-neutral-100 text-neutral-800 font-bold px-8 py-4 rounded-full">Back to Home</button>
          </div>
        )}
      </div>
    );
  }

  if (view === 'receive-money') {
    return (
      <div className="min-h-screen bg-white">
        <TopBar title="Receive Money" />
        <div className="p-6 flex flex-col items-center pt-12">
          <div className="w-64 h-64 bg-neutral-100 rounded-3xl p-4 flex items-center justify-center border-2 border-neutral-200 shadow-sm relative overflow-hidden mb-6">
            <img src={"https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=AU-00012345"} alt="QR Code" className="w-full h-full mix-blend-multiply" />
          </div>
          <h2 className="text-2xl font-bold mb-1">Ade Oluwatobi</h2>
          <p className="text-xl text-neutral-500 font-mono tracking-wide mb-8">AU-00012345</p>
          
          <button className="bg-green-100 text-green-700 w-full h-14 rounded-full font-bold text-lg hover:bg-green-200 active:scale-95 transition-all">
            Share My Code
          </button>
        </div>
      </div>
    )
  }

  return null;
}
