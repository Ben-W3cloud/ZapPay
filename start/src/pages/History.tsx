import { TransactionItem } from '../components/TransactionItem';
import { useTransactions } from '../hooks/useTransactions';

export function HistoryPage() {
  const { transactions, loading, error } = useTransactions();

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold text-slate-800">Transaction History</h2>
      <section className="space-y-3">
        {loading && <p className="text-slate-500">Loading history...</p>}
        {error && <p className="text-sm text-rose-600">{error}</p>}
        {!loading &&
          !error &&
          transactions.map((transaction) => <TransactionItem key={transaction.id} transaction={transaction} />)}
      </section>
    </div>
  );
}

