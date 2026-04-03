import { FormEvent, useState } from 'react';
import { Modal } from '../components/Modal';
import { starkzap } from '../services/starkzap';

export function DepositPage() {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('Bank Transfer');
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      await starkzap.deposit({ amount: Number(amount), source });
      setMessage(`Deposit request for $${Number(amount).toFixed(2)} created from ${source}.`);
      setAmount('');
      setModalOpen(true);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Deposit failed.');
      setModalOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <h2 className="text-2xl font-bold text-slate-800">Deposit Funds</h2>
      <form onSubmit={onSubmit} className="space-y-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="amount">
            Deposit Amount (USD)
          </label>
          <input
            id="amount"
            required
            type="number"
            min="1"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="source">
            Source
          </label>
          <select
            id="source"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-brand-500"
          >
            <option>Bank Transfer</option>
            <option>Debit Card</option>
            <option>Employer Payroll</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-brand-500 px-4 py-2 font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? 'Creating deposit...' : 'Deposit'}
        </button>
      </form>

      <Modal isOpen={modalOpen} title="Deposit Status" onClose={() => setModalOpen(false)}>
        <p className="text-slate-700">{message}</p>
      </Modal>
    </div>
  );
}

