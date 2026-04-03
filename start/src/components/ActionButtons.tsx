import { Link } from 'react-router-dom';

export function ActionButtons() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <Link
        to="/send"
        className="rounded-card border border-slate-200 bg-white px-4 py-4 text-center font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
      >
        Send Money
      </Link>
      <Link
        to="/receive"
        className="rounded-card border border-slate-200 bg-white px-4 py-4 text-center font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
      >
        Receive Money
      </Link>
      <Link
        to="/deposit"
        className="rounded-card border border-slate-200 bg-white px-4 py-4 text-center font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
      >
        Deposit Funds
      </Link>
    </div>
  );
}

