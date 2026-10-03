import { MessageCircle, Phone, X } from 'lucide-react';
import Avatar from './Avatar';
import { dubaiTeam, teamLeaders, teamMembers, telHref, waHref } from '@/lib/site';

function PersonRow({ person }) {
  return (
    <li className="flex min-w-0 items-center gap-3 rounded-2xl border border-line bg-white p-3 transition hover:border-gold/60 hover:shadow-card">
      <Avatar person={person} size={44} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-ink">{person.name}</p>
        <p className="truncate text-xs text-ink-faint">{person.role}</p>
      </div>
      <a
        href={telHref(person.phone)}
        data-person={person.name}
        className="dlg-call inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition hover:border-gold hover:text-gold-dark"
        aria-label={`Call ${person.name} on ${person.phone}`}
        title={person.phone}
      >
        <Phone size={17} aria-hidden="true" />
      </a>
      <a
        href={waHref(person.phone)}
        target="_blank"
        rel="noopener noreferrer"
        data-person={person.name}
        className="dlg-wa inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-[#0F7A40] transition hover:border-[#0F7A40]"
        aria-label={`WhatsApp ${person.name}`}
      >
        <MessageCircle size={17} aria-hidden="true" />
      </a>
    </li>
  );
}

function Group({ title, people, shuffle = true }) {
  const list = people.filter((p) => p.phone);
  return (
    <div>
      <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">{title}</p>
      <ul data-shuffle={shuffle ? '' : undefined} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {list.map((p) => (
          <PersonRow key={p.name} person={p} />
        ))}
      </ul>
    </div>
  );
}

export default function ContactDialog() {
  return (
    <dialog
      id="team-directory"
      aria-labelledby="team-directory-title"
      className="team-dialog m-auto max-h-[88vh] w-[min(46rem,calc(100vw-1.5rem))] max-w-none overflow-hidden rounded-3xl bg-ivory p-0 text-ink shadow-lift backdrop:bg-navy/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex max-h-[88vh] flex-col">
        <div className="dark-surface relative px-6 py-6 text-white">
          <p className="eyebrow !text-gold-light">Talk to our team</p>
          <p id="team-directory-title" className="mt-2 font-display text-2xl">
            Choose whom you’d like to call or WhatsApp
          </p>
          <p className="mt-1 text-sm text-white/60">Every member of our team handles sales and service. Mon–Sat, 10 AM – 7 PM.</p>
          <form method="dialog">
            <button
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </form>
        </div>
        <div className="min-w-0 space-y-7 overflow-y-auto overflow-x-hidden px-4 py-6 sm:px-6">
          <Group title="Team leaders" people={teamLeaders} />
          <Group title="Dubai – Datacare Softech FZCO" people={dubaiTeam} shuffle={false} />
          <Group title="Sales & service team – India" people={teamMembers} />
        </div>
      </div>
    </dialog>
  );
}
