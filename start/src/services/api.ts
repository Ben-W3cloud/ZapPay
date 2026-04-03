import type { Balance, DepositPayload, SendPayload, Transaction, UserProfile } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';
const USE_MOCK = (import.meta.env.VITE_USE_MOCK_DATA ?? 'true') === 'true';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockBalance: Balance = {
  available: 5420.44,
  currency: 'USD',
  walletAddress: 'zap_0x7af4f1f9bbd9cd31f74a39a9d84f2e3',
};

const mockProfile: UserProfile = {
  id: 'user_001',
  fullName: 'Ari Johnson',
  email: 'ari@zappay.app',
  phone: '+1 (555) 987-1122',
  tier: 'Plus',
};

const mockTransactions: Transaction[] = [
  {
    id: 'tx_1001',
    type: 'send',
    amount: 125.0,
    counterparty: 'Mia Carter',
    status: 'completed',
    timestamp: '2026-04-02T15:24:00.000Z',
    note: 'Invoice settlement',
  },
  {
    id: 'tx_1002',
    type: 'receive',
    amount: 310.7,
    counterparty: 'Luma Works',
    status: 'completed',
    timestamp: '2026-04-01T10:12:00.000Z',
    note: 'Consulting payout',
  },
  {
    id: 'tx_1003',
    type: 'deposit',
    amount: 600.0,
    counterparty: 'Bank of Atlantic',
    status: 'pending',
    timestamp: '2026-03-30T22:01:00.000Z',
  },
  {
    id: 'tx_1004',
    type: 'send',
    amount: 42.5,
    counterparty: 'RideLink',
    status: 'completed',
    timestamp: '2026-03-29T06:33:00.000Z',
  },
];

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  async getBalance(): Promise<Balance> {
    if (USE_MOCK) {
      await wait(300);
      return mockBalance;
    }
    return request<Balance>('/wallet/balance');
  },

  async getTransactions(): Promise<Transaction[]> {
    if (USE_MOCK) {
      await wait(350);
      return mockTransactions;
    }
    return request<Transaction[]>('/transactions/history');
  },

  async getProfile(): Promise<UserProfile> {
    if (USE_MOCK) {
      await wait(200);
      return mockProfile;
    }
    return request<UserProfile>('/profile/me');
  },

  async sendMoney(payload: SendPayload): Promise<{ success: boolean; id: string }> {
    if (USE_MOCK) {
      await wait(500);
      return { success: true, id: `tx_${Date.now()}` };
    }
    return request('/transactions/send', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  async createDeposit(payload: DepositPayload): Promise<{ success: boolean; id: string }> {
    if (USE_MOCK) {
      await wait(500);
      return { success: true, id: `tx_${Date.now()}` };
    }
    return request('/wallet/deposit', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
