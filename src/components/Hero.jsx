function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-white px-5 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Govind Rajeshkumar Pillai
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Full Stack Web Developer & Computer Science Student at VIT Chennai.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am a driven developer specializing in building scalable web
            applications. I focus on creating responsive frontend interfaces
            with React and engineering secure, efficient backend systems using
            Flask and Node.js.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            I am deeply passionate about continuous learning, long-term field
            specialization, and solving real-world problems through clean code
            and thoughtful architecture.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-teal-600 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href="https://github.com/Govindr06"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-teal-700 hover:decoration-teal-600"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/govind-rajeshkumar-pillai-b3bb49321"
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-teal-700 hover:decoration-teal-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside
          aria-label="Professional snapshot"
          className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
        >
          <div className="aspect-[4/3] rounded-lg bg-[linear-gradient(135deg,#0f172a_0%,#115e59_48%,#f59e0b_100%)] p-6 text-white">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-white/75">
                  Current Focus
                </p>
                <p className="mt-2 text-2xl font-bold">
                  Scalable full stack systems with React, Flask, Node.js, and
                  thoughtful backend architecture.
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-white/65">Current Role</dt>
                  <dd className="mt-1 font-semibold">Future Interns</dd>
                </div>
                <div>
                  <dt className="text-white/65">Education</dt>
                  <dd className="mt-1 font-semibold">VIT Chennai</dd>
                </div>
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
