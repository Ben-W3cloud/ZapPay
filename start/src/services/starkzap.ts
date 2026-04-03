import type { DepositPayload, SendPayload } from '../types';
import { api } from './api';

export const starkzap = {
  async send(payload: SendPayload) {
    return api.sendMoney(payload);
  },

  async deposit(payload: DepositPayload) {
    return api.createDeposit(payload);
  },

  async getReceiveAddress() {
    const balance = await api.getBalance();
    return balance.walletAddress;
  },
};