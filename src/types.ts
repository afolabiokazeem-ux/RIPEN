export type ViewState = 
  | 'landing' 
  | 'dashboard'
  | 'wallet'
  | 'send-money'
  | 'receive-money'
  | 'cross-border'
  | 'ussd'
  | 'utilities'
  | 'atm'
  | 'ajo'
  | 'merchant'
  | 'identity'
  | 'diaspora'
  | 'trade'
  | 'insurance'
  | 'investments'
  | 'market-intel'
  | 'story-mode'
  | 'community'
  | 'profile';

export interface AppContextType {
  navigate: (view: ViewState) => void;
  balance: number;
  savings: number;
  trustScore: number;
}
