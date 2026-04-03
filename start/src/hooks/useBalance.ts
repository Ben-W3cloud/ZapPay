import { useEffect, useState } from 'react';
import type { Balance } from '../types';
import { api } from '../services/api';

interface UseBalanceResult {
  balance: Balance | null;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

export function useBalance(): UseBalanceResult {
  const [balance, setBalance] = useState<Balance | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getBalance();
      setBalance(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load balance');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void refresh();
  }, []);

  return { balance, loading, error, refresh };
}