'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { submitDemoRequest } from '@/lib/formService';

const types = ['Retail showroom', 'Wholesale', 'Manufacturing', 'Multi-branch chain', 'Imitation / Silver', 'Other'];
const empty = { name: '', phone: '', city: '', business: types[0], message: '' };

export default function DemoForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    if (form.name.trim().length < 2) return setError('Please enter your name.');
    if (digits.length < 10) return setError('Please enter a valid mobile number.');
    setError('');
    setStatus('loading');
    const res = await submitDemoRequest(form);
    if (res.success) {
      setStatus('success');
      setForm(empty);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'demo_form_submit', business_type: form.business });
      if (typeof window.gtag === 'function') window.gtag('event', 'demo_form_submit', { business_type: form.business });
    } else {
      setStatus('idle');
      setError(res.message);
    }
  };

  const input =
    'w-full rounded-xl border border-line bg-ivory px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition focus:border-gold focus:bg-white focus:outline-none focus:ring-4 focus:ring-gold/15';

  if (status === 'success') {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center text-center" role="status">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
          <CheckCircle2 size={40} aria-hidden="true" />
        </span>
        <p className="mt-6 font-display text-3xl text-ink">Thank you!</p>
        <p className="mt-2 max-w-sm text-ink-muted">Your demo request has been received. A member of our team will call you shortly.</p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-6">
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">Name *</label>
          <input id="name" name="name" autoComplete="name" required value={form.name} onChange={set} className={input} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">Mobile *</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={form.phone} onChange={set} className={input} placeholder="10-digit mobile number" />
        </div>
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-semibold text-ink">City</label>
          <input id="city" name="city" autoComplete="address-level2" value={form.city} onChange={set} className={input} placeholder="e.g. Ahmedabad" />
        </div>
        <div>
          <label htmlFor="business" className="mb-1.5 block text-sm font-semibold text-ink">Business type</label>
          <select id="business" name="business" value={form.business} onChange={set} className={input}>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">Message</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={set} className={input} placeholder="Tell us about your shop — counters, branches, software you use today…" />
      </div>
      {error ? (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>
      ) : null}
      <button type="submit" disabled={status === 'loading'} className="btn-gold w-full !min-h-[3.25rem] text-base disabled:opacity-70">
        {status === 'loading' ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
        {status === 'loading' ? 'Sending…' : 'Book My Free Demo'}
      </button>
      <p className="text-center text-xs text-ink-faint">We only use your number to arrange your demo. No spam.</p>
    </form>
  );
}
