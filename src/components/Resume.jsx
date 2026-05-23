import SectionHeading from './SectionHeading.jsx';

const timeline = [
  {
    period: 'Current',
    role: 'Intern - Full Stack Web Development',
    company: 'Future Interns',
    details:
      'Building full stack web development skills through project-focused work, with emphasis on React interfaces, backend integration, and production-minded implementation.',
  },
  {
    period: 'Expected Graduation: 2028',
    role: 'B.Tech Student',
    company: 'Vellore Institute of Technology (VIT), Chennai',
    details:
      'Studying computer science fundamentals while developing practical expertise in scalable web applications, clean architecture, and real-world problem solving.',
  },
];

const skills = [
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Flask',
  'Node.js',
  'PostgreSQL (Neon)',
  'Git',
  'JWT Authentication',
  'LangGraph',
  'REST APIs',
];

function Resume() {
  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="bg-slate-50 px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="resume-heading"
          eyebrow="Resume"
          title="Skills and Experience"
          description="A focused view of my current Future Interns experience, VIT Chennai education, and the technologies I use to build full stack applications."
        />

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div aria-label="Experience timeline" className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-slate-300 sm:left-6" />
            <ol className="space-y-8">
              {timeline.map((item) => (
                <li
                  key={`${item.role}-${item.period}`}
                  className="relative pl-12 sm:pl-16"
                >
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-50 bg-teal-600 sm:left-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </div>
                  <article
                    className={`rounded-lg border bg-white p-6 shadow-sm ${
                      item.company === 'Future Interns'
                        ? 'border-teal-300 ring-2 ring-teal-100'
                        : 'border-slate-200'
                    }`}
                  >
                    <p className="text-sm font-semibold text-teal-700">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {item.company}
                    </p>
                    {item.company === 'Future Interns' && (
                      <p className="mt-3 inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                        Current Internship
                      </p>
                    )}
                    <p className="mt-4 leading-7 text-slate-600">
                      {item.details}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          <aside
            aria-labelledby="skills-heading"
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 id="skills-heading" className="text-xl font-bold text-slate-950">
              Core Skills
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-6 leading-7 text-slate-600">
              I work across responsive frontend interfaces, secure API flows,
              authentication, database-backed features, and AI-assisted learning
              systems.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Resume;
