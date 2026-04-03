import { FormEvent, useState } from 'react';
import { Modal } from '../components/Modal';
import { starkzap } from '../services/starkzap';

export function SendPage() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    try {
      await starkzap.send({ recipient, amount: Number(amount), note });
      setResultMessage(`Payment of $${Number(amount).toFixed(2)} sent to ${recipient}.`);
      setModalOpen(true);
      setRecipient('');
      setAmount('');
      setNote('');
    } catch (error) {
      setResultMessage(error instanceof Error ? error.message : 'Failed to send payment.');
      setModalOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <h2 className="text-2xl font-bold text-slate-800">Send Money</h2>
      <form onSubmit={onSubmit} className="space-y-4 rounded-card border border-slate-200 bg-white p-5 shadow-card">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="recipient">
            Recipient
          </label>
          <input
            id="recipient"
            required
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
            placeholder="name or wallet address"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="amount">
            Amount (USD)
          </label>
          <input
            id="amount"
            required
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0.00"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-brand-500"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="note">
            Note (optional)
          </label>
          <textarea
            id="note"
            rows={3}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-brand-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-brand-500 px-4 py-2 font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? 'Sending...' : 'Send Payment'}
        </button>
      </form>

      <Modal isOpen={modalOpen} title="Send Status" onClose={() => setModalOpen(false)}>
        <p className="text-slate-700">{resultMessage}</p>
      </Modal>
    </div>
  );
}

