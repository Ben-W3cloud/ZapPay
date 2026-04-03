import type { Transaction } from '../types';

interface TransactionItemProps {
  transaction: Transaction;
}

const badgeByStatus = {
  completed: 'bg-emerald-100 text-emerald-700',
  pending: 'bg-amber-100 text-amber-700',
  failed: 'bg-rose-100 text-rose-700',
};

const signedAmount = (transaction: Transaction) =>
  transaction.type === 'send' ? `- $${transaction.amount.toFixed(2)}` : `+ $${transaction.amount.toFixed(2)}`;

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <article className="rounded-card border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-semibold capitalize text-slate-800">
            {transaction.type} {transaction.type === 'deposit' ? 'funds' : transaction.type === 'send' ? 'to' : 'from'}{' '}
            {transaction.counterparty}
          </p>
          <p className="text-sm text-slate-500">{new Date(transaction.timestamp).toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className={`font-bold ${transaction.type === 'send' ? 'text-rose-600' : 'text-emerald-600'}`}>
            {signedAmount(transaction)}
          </p>
          <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${badgeByStatus[transaction.status]}`}>
            {transaction.status}
          </span>
        </div>
      </div>
      {transaction.note && <p className="mt-2 text-sm text-slate-600">Note: {transaction.note}</p>}
    </article>
  );
}

