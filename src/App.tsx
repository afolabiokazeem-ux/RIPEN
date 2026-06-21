import { useState } from 'react';
import { ViewState } from '../types';
import LandingScreen from './screens/LandingScreen';
import DashboardScreen from './screens/DashboardScreen';
import WalletScreen from './screens/WalletScreen';
import AjoScreen from './screens/AjoScreen';
import USSDScreen from './screens/USSDScreen';
import UtilityScreen from './screens/UtilityScreen';
import ATMScreen from './screens/ATMScreen';
import MerchantScreen from './screens/MerchantScreen';
import IdentityScreen from './screens/IdentityScreen';
import DiasporaScreen from './screens/DiasporaScreen';
import TradeScreen from './screens/TradeScreen';
import InsuranceScreen from './screens/InsuranceScreen';
import InvestmentsScreen from './screens/InvestmentsScreen';
import MarketIntelScreen from './screens/MarketIntelScreen';
import StoryModeScreen from './screens/StoryModeScreen';
import BottomNav from './components/BottomNav';
import AIAssistant from './components/AIAssistant';

const WalletPlaceholder = ({ title, nav }: any) => (
  <div className="flex-1 flex items-center justify-center flex-col p-6 text-center">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-neutral-500 mb-8">This module will be built shortly.</p>
    <button onClick={() => nav('dashboard')} className="bg-green-600 text-white px-6 py-3 rounded-full font-bold">Back to Dashboard</button>
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  
  const [balance] = useState(854200.50);
  const [savings] = useState(250000);
  const [trustScore] = useState(850);

  const navigate = (view: ViewState) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 'landing': return <LandingScreen navigate={navigate} />;
      case 'dashboard': return <DashboardScreen navigate={navigate} balance={balance} savings={savings} trustScore={trustScore} />;
      case 'story-mode': return <StoryModeScreen navigate={navigate} />;
      
      case 'wallet': return <WalletScreen navigate={navigate} view="wallet" />;
      case 'send-money': return <WalletScreen navigate={navigate} view="send-money" />;
      case 'receive-money': return <WalletScreen navigate={navigate} view="receive-money" />;
      case 'cross-border': return <WalletScreen navigate={navigate} view="cross-border" />;
      case 'ussd': return <USSDScreen navigate={navigate} />;
      case 'utilities': return <UtilityScreen navigate={navigate} />;
      case 'atm': return <ATMScreen navigate={navigate} />;
      case 'ajo': return <AjoScreen navigate={navigate} />;
      case 'merchant': return <MerchantScreen navigate={navigate} trustScore={trustScore} />;
      
      case 'identity': return <IdentityScreen navigate={navigate} trustScore={trustScore} />;
      case 'diaspora': return <DiasporaScreen navigate={navigate} />;
      case 'trade': return <TradeScreen navigate={navigate} />;
      case 'insurance': return <InsuranceScreen navigate={navigate} />;
      case 'investments': return <InvestmentsScreen navigate={navigate} />;
      case 'market-intel': return <MarketIntelScreen navigate={navigate} />;
      
      case 'community': return <AjoScreen navigate={navigate} />;
      case 'profile': return <IdentityScreen navigate={navigate} trustScore={trustScore} />;
      
      default: return <LandingScreen navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-[100dvh] bg-neutral-900 flex justify-center w-full font-sans text-neutral-900 selection:bg-green-200">
      <div className="w-full max-w-md bg-white min-h-[100dvh] relative overflow-x-hidden flex flex-col shadow-2xl">
         
         <div className="flex-1 flex flex-col relative w-full h-full">
           {renderView()}
         </div>
         
         <AIAssistant navigate={navigate} currentView={currentView} />
         <BottomNav navigate={navigate} currentView={currentView} />
         
      </div>
    </div>
  );
}
