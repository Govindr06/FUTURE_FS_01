import SectionHeading from './SectionHeading.jsx';

const projects = [
  {
    title: 'StudyGraph',
    category: 'AI Learning Platform',
    description:
      "A personalized AI teaching platform that breaks down complex concepts based on a user's desired study timeline.",
    tags: ['Flask', 'LangGraph', 'Grok API', 'HTML', 'CSS', 'JS', 'Neon'],
  },
  {
    title: 'University Event Dashboard',
    category: 'Role-Based Dashboard',
    description:
      'A comprehensive role-based dashboard for administrators to manage event logistics and for students to securely register for confirmed events.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'JSON'],
  },
];

function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-white px-5 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="portfolio-heading"
          eyebrow="Portfolio"
          title="Selected Projects"
          description="Project work spanning AI-powered education tools, secure event registration flows, and role-based web application interfaces."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`h-44 ${
                  index === 0
                    ? 'bg-[linear-gradient(135deg,#0f172a,#14b8a6)]'
                    : 'bg-[linear-gradient(135deg,#7c2d12,#f59e0b)]'
                }`}
                aria-hidden="true"
              >
                <div className="flex h-full items-end p-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {project.description}
                </p>
                <ul
                  aria-label={`${project.title} technologies`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
