import { useEffect, useState } from 'react';
import { starkzap } from '../services/starkzap';

export function ReceivePage() {
  const [address, setAddress] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    void starkzap.getReceiveAddress().then(setAddress);
  }, []);

  const copyAddress = async () => {
    if (!address) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <h2 className="text-2xl font-bold text-slate-800">Receive Money</h2>
      <section className="rounded-card border border-slate-200 bg-white p-6 shadow-card">
        <p className="text-sm text-slate-500">Your wallet receive address</p>
        <p className="mt-2 break-all rounded-lg bg-slate-50 p-3 font-mono text-sm text-slate-700">
          {address || 'Loading address...'}
        </p>
        <button
          type="button"
          onClick={copyAddress}
          className="mt-4 rounded-lg bg-brand-500 px-4 py-2 font-semibold text-white transition hover:bg-brand-600"
        >
          {copied ? 'Copied' : 'Copy Address'}
        </button>
      </section>
    </div>
  );
}

