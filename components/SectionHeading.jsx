export default function SectionHeading({ eyebrow, title, intro, align = 'center', dark = false, as: Tag = 'h2', id }) {
  const center = align === 'center';
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`} data-reveal>
      {eyebrow ? (
        <p className={`eyebrow ${center ? 'justify-center' : ''} ${dark ? '!text-gold-light' : ''}`}>{eyebrow}</p>
      ) : null}
      <Tag id={id} className={`h2 mt-4 ${dark ? '!text-white' : ''}`}>
        {title}
      </Tag>
      {intro ? <p className={`lead mt-5 ${dark ? '!text-white/65' : ''}`}>{intro}</p> : null}
    </div>
  );
}
