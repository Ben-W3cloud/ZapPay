export type TransactionType = 'send' | 'receive' | 'deposit';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  counterparty: string;
  status: 'completed' | 'pending' | 'failed';
  timestamp: string;
  note?: string;
}

export interface Balance {
  available: number;
  currency: 'USD';
  walletAddress: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  tier: 'Starter' | 'Plus' | 'Premium';
}

export interface SendPayload {
  recipient: string;
  amount: number;
  note?: string;
}

export interface DepositPayload {
  amount: number;
  source: string;
}