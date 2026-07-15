'use client';

import { useState } from 'react';
import {
  User,
  Phone,
  AtSign,
  MapPin,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  Mail,
  Building2,
  Clock,
} from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { submitContactForm } from '../lib/formService';
import { COMPANY } from '../lib/data/site';

const fields = [
  { name: 'name', label: 'Name', type: 'text', icon: User, required: true, placeholder: 'Your full name' },
  { name: 'phone', label: 'Phone Number', type: 'tel', icon: Phone, required: true, placeholder: 'Your phone number' },
  { name: 'email', label: 'Email Address', type: 'email', icon: AtSign, required: false, placeholder: 'your.email@example.com (optional)' },
  { name: 'city', label: 'City', type: 'text', icon: MapPin, required: false, placeholder: 'Your city (optional)' },
];

const initialState = { name: '', phone: '', email: '', city: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');
    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setStatus('success');
        setFeedback('Thank you! Our team will get back to you shortly.');
        setForm(initialState);
      } else {
        setStatus('error');
        setFeedback(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setFeedback('A network error occurred. Please try again.');
    }
  };

  const inputClass =
    'w-full rounded-xl border border-line bg-ivory px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold/30';

  return (
    <section id="contact" className="bg-ivory-deep pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24">
      <div className="section-container">
        <SectionHeading
          index="08"
          eyebrow="Get In Touch"
          title="Let's discuss your"
          highlight="Jewellery ERP needs"
          description="Reach out for inquiries, support, or to schedule a personalised demo of our premium platform."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal className="rounded-card border border-line bg-white p-8 shadow-card lg:p-10">
            <h3 className="flex items-center gap-3 text-xl font-bold text-ink">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold-dark ring-1 ring-gold/20">
                <Send size={18} />
              </span>
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink"
                    >
                      <field.icon size={15} className="text-gold-dark" />
                      {field.label}
                      {field.required ? (
                        <span className="text-gold-dark" aria-hidden="true">
                          *
                        </span>
                      ) : null}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={form[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      placeholder={field.placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  <MessageSquare size={15} className="text-gold-dark" />
                  Message
                  <span className="text-gold-dark" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your requirements..."
                  className={inputClass}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={status === 'loading'}
                icon={
                  status === 'loading'
                    ? () => <Loader2 size={18} className="animate-spin" />
                    : status === 'success'
                      ? CheckCircle2
                      : Send
                }
              >
                {status === 'loading'
                  ? 'Sending...'
                  : status === 'success'
                    ? 'Message Sent'
                    : 'Send Message'}
              </Button>

              {feedback ? (
                <p
                  role="status"
                  className={`rounded-xl px-4 py-3 text-center text-sm font-medium ${
                    status === 'success'
                      ? 'bg-gold/10 text-gold-dark'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </Reveal>

          {/* Info sidebar */}
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-card border border-line bg-white p-8 shadow-card">
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold-dark ring-1 ring-gold/20">
                  <Mail size={18} />
                </span>
                Email Us
              </h3>
              <a
                href={`mailto:${COMPANY.email}`}
                className="mt-4 inline-block text-sm font-semibold text-link transition-colors hover:text-gold-dark"
              >
                {COMPANY.email}
              </a>
            </div>

            <div className="rounded-card border border-line bg-white p-8 shadow-card">
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold-dark ring-1 ring-gold/20">
                  <Building2 size={18} />
                </span>
                Our Branches
              </h3>
              <div className="mt-5 space-y-5 text-sm text-ink-muted">
                <div>
                  <p className="flex items-center gap-2 font-semibold text-ink">
                    <MapPin size={15} className="text-gold-dark" /> India
                  </p>
                  <p className="mt-1.5 leading-relaxed">{COMPANY.indiaAddress}</p>
                </div>
                <div className="border-t border-line pt-5">
                  <p className="flex items-center gap-2 font-semibold text-ink">
                    <MapPin size={15} className="text-gold-dark" /> Dubai, UAE
                  </p>
                  <p className="mt-1.5 leading-relaxed">{COMPANY.dubaiAddress}</p>
                </div>
              </div>
            </div>

            <div className="rounded-card border border-line bg-white p-8 shadow-card">
              <h3 className="flex items-center gap-3 text-lg font-bold text-ink">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold-dark ring-1 ring-gold/20">
                  <Clock size={18} />
                </span>
                Working Hours
              </h3>
              <div className="mt-4 space-y-2 text-sm text-ink-muted">
                <p>{COMPANY.hours.weekdays}</p>
                <p>{COMPANY.hours.sunday}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
