function SectionHeading({ id, eyebrow, title, description, inverted = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.2em] ${
          inverted ? 'text-teal-300' : 'text-teal-700'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-3xl font-bold sm:text-4xl ${
          inverted ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 ${
          inverted ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
