import { motion } from 'motion/react';
import { ViewState } from '../types';
import { PlayCircle, Compass, Wallet } from 'lucide-react';

export default function LandingScreen({ navigate }: { navigate: (v: ViewState) => void }) {
  return (
    <div className="min-h-screen bg-green-900 text-white flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] bg-green-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[300px] h-[300px] bg-amber-500 rounded-full blur-[100px]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 relative text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-white/10 rounded-3xl p-5 backdrop-blur-md border border-white/20 mb-8"
        >
          <div className="w-full h-full bg-gradient-to-tr from-green-400 to-amber-400 rounded-xl flex items-center justify-center shadow-lg">
            <span className="font-bold text-2xl text-green-900">AU</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold tracking-tight mb-4"
        >
          AU-Wallet
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-green-100 font-medium mb-12 max-w-[280px]"
        >
          One Wallet. One Identity. One Africa.
        </motion.p>

        <div className="w-full space-y-4">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('dashboard')}
            className="w-full bg-amber-400 text-green-950 font-bold text-lg py-4 rounded-2xl shadow-lg hover:bg-amber-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Wallet size={24} />
            Open Wallet
          </motion.button>
          
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => navigate('dashboard')}
            className="w-full bg-white/10 backdrop-blur-md text-white font-semibold text-lg py-4 rounded-2xl border border-white/20 hover:bg-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Compass size={24} />
            Explore Features
          </motion.button>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => navigate('story-mode')}
            className="w-full bg-transparent text-green-200 font-semibold text-lg py-4 rounded-2xl hover:bg-white/5 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <PlayCircle size={24} />
            Watch Demo Journey
          </motion.button>
        </div>
      </div>
    </div>
  );
}
