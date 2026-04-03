import { ActionButtons } from '../components/ActionButtons';
import { BalanceCard } from '../components/BalanceCard';
import { TransactionItem } from '../components/TransactionItem';
import { useBalance } from '../hooks/useBalance';
import { useTransactions } from '../hooks/useTransactions';

export function DashboardPage() {
  const { balance, loading: balanceLoading, error: balanceError } = useBalance();
  const { transactions, loading: transactionsLoading, error: transactionsError } = useTransactions();
  const recentTransactions = transactions.slice(0, 3);

  return (
    <div className="space-y-6">
      <section>
        <h2 className="mb-3 text-2xl font-bold text-slate-800">Dashboard</h2>
        <BalanceCard balance={balance} loading={balanceLoading} />
        {balanceError && <p className="mt-2 text-sm text-rose-600">{balanceError}</p>}
      </section>

      <section>
        <h3 className="mb-3 text-lg font-semibold text-slate-700">Quick Actions</h3>
        <ActionButtons />
      </section>

      <section>
        <h3 className="mb-3 text-lg font-semibold text-slate-700">Recent Transactions</h3>
        <div className="space-y-3">
          {transactionsLoading && <p className="text-slate-500">Loading transactions...</p>}
          {transactionsError && <p className="text-sm text-rose-600">{transactionsError}</p>}
          {!transactionsLoading &&
            !transactionsError &&
            recentTransactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
        </div>
      </section>
    </div>
  );
}

