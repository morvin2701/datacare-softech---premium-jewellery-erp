import { Quote, Star } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

/**
 * Social proof — two counter-scrolling marquee rows of client quotes on the
 * premium navy surface. Pauses on hover; static columns under reduced motion
 * (handled globally by the animation-duration override).
 *
 * Quotes are real Google reviews of DataCare Softech (4.8/5, 250+ reviews),
 * lightly trimmed for length with obvious typos normalised.
 */

const testimonials = [
  {
    quote:
      'Finally I got the exact software solution for my retail jewellery business. Software is very easy to use for me and my staff, which eases us out of routine troubles in inventory and accounting management. Datacare manpower provides me the prompt service support which is the key feature.',
    name: 'Vishal Gundalia',
    role: 'Google Review',
  },
  {
    quote:
      "I've been using DataCare for the past few months, and it has completely transformed how I manage my jewelry business. The software is incredibly user-friendly and intuitive, which made the transition smooth even for my team who were not very tech-savvy at first.",
    name: 'Rajesh Sundesha',
    role: 'Google Review',
  },
  {
    quote:
      'One stop solution for all your accounting needs. With all my years of experience I tried and tested many, but trust me this one is spot on. Regular updates and back up service makes this solution stand out.',
    name: 'Jain Dips',
    role: 'Google Review',
  },
  {
    quote:
      "We've been using Datacare and we are extremely impressed with its simplicity and ease of operation. It's user-friendly and perfect for jewellery businesses. The best part is their exceptional service — always just a call away with prompt resolutions for any concerns.",
    name: 'Jay Ramani',
    role: 'Google Review',
  },
  {
    quote:
      "I am using Datacare software in my wholesale business for the last 13 years. I am very satisfied with the software & service — it's very user friendly and the support is totally appreciated.",
    name: 'Harsh Gold',
    role: 'Google Review',
  },
  {
    quote:
      "I've been thoroughly impressed with Datacare's exceptional value for money. Their tailored solutions have exceeded our expectations — an unbeatable combination of quality, affordability, and customer satisfaction!",
    name: 'Sagar Joshi',
    role: 'Google Review',
  },
  {
    quote:
      "The best jewellery accounting software! It's incredibly easy to use and has streamlined our operations. We're extremely satisfied with the exceptional support provided by the Datacare team. Highly recommended!",
    name: 'Sindhav ShivamSinh',
    role: 'Google Review',
  },
  {
    quote:
      "I've been in the jewelry business for over a decade, and I can confidently say that DataCare Softech has been a game-changer for my business. From day one, it has exceeded my expectations in every aspect.",
    name: 'Hiren Panchasara',
    role: 'Google Review',
  },
  {
    quote:
      'This IT firm consistently delivers exceptional results. Their team is knowledgeable, responsive, and goes above and beyond to ensure our systems run smoothly. Highly recommended!',
    name: 'Nikunj Dave',
    role: 'Google Review',
  },
  {
    quote:
      'Working with DataCare Softech has been a fantastic experience. They took the time to understand our business needs and provided custom solutions that have significantly improved our data processes.',
    name: 'Thumar Shreyash',
    role: 'Google Review',
  },
];

const rowA = testimonials.slice(0, 5);
const rowB = testimonials.slice(5);

function QuoteCard({ item }) {
  return (
    <figure className="card-surface-dark flex w-[20rem] shrink-0 flex-col p-6 sm:w-[24rem]">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
          <Quote size={16} />
        </span>
        <span className="flex gap-0.5 text-gold" aria-label="5 star rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-current" />
          ))}
        </span>
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-navy-line pt-4">
        <p className="text-sm font-bold text-white">{item.name}</p>
        <p className="mt-0.5 text-xs text-white/50">{item.role}</p>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({ items, reverse = false }) {
  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy to-transparent sm:w-32" />
      <div
        className={`flex w-max gap-5 py-1 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused] motion-reduce:animate-none`}
      >
        {[...items, ...items].map((item, i) => (
          <QuoteCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="ambient-navy relative overflow-hidden pb-6 pt-8 md:pb-8 md:pt-10">
      <div className="section-container">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted on the"
          highlight="shop floor"
          description="From single showrooms to multi-country chains — hear it from the jewellers who run their business on Datacare."
          dark
        />

        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-pill border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold-muted">
            <span className="flex gap-0.5 text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-current" />
              ))}
            </span>
            4.8 / 5 · 250+ Google reviews
          </span>
        </div>
      </div>

      <div className="mt-14 space-y-5">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}
