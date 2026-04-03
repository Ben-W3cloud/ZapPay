import type { Balance } from '../types';

interface BalanceCardProps {
  balance: Balance | null;
  loading?: boolean;
}

export function BalanceCard({ balance, loading = false }: BalanceCardProps) {
  return (
    <section className="rounded-card bg-brand-900 p-6 text-white shadow-card">
      <p className="text-sm text-white/70">Available Balance</p>
      <h2 className="mt-2 text-3xl font-bold">
        {loading || !balance ? '...' : `${balance.currency} ${balance.available.toFixed(2)}`}
      </h2>
      <p className="mt-3 text-xs text-white/70">Wallet: {balance?.walletAddress ?? 'Loading wallet...'}</p>
    </section>
  );
}

