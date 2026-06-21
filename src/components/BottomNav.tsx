import { Home, Wallet, Store, Users, UserCircle } from 'lucide-react';
import { ViewState } from '../types';

export default function BottomNav({ currentView, navigate }: { currentView: ViewState, navigate: (v: ViewState) => void }) {
  if (currentView === 'landing' || currentView === 'story-mode') return null;

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-neutral-100 flex justify-between px-6 py-3 pb-safe z-50">
      <NavItem icon={<Home size={24} />} label="Home" active={currentView === 'dashboard'} onClick={() => navigate('dashboard')} />
      <NavItem icon={<Wallet size={24} />} label="Wallet" active={currentView === 'wallet'} onClick={() => navigate('wallet')} />
      <NavItem icon={<Store size={24} />} label="Trade" active={currentView === 'trade'} onClick={() => navigate('trade')} />
      <NavItem icon={<Users size={24} />} label="Community" active={currentView === 'community'} onClick={() => navigate('ajo')} />
      <NavItem icon={<UserCircle size={24} />} label="Profile" active={currentView === 'profile'} onClick={() => navigate('identity')} />
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 ${active ? 'text-primary-600' : 'text-neutral-400'}`}>
      <div className={active ? 'text-green-600' : 'text-neutral-400'}>{icon}</div>
      <span className={`text-[10px] font-medium ${active ? 'text-green-600' : 'text-neutral-400'}`}>{label}</span>
    </button>
  );
}
