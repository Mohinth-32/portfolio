import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory, Stripe payments, and an admin dashboard built with Next.js and PostgreSQL.',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    github: '#',
    live: '#',
  },
  {
    title: 'AI Chat Interface',
    description:
      'A conversational AI interface with streaming responses, markdown rendering, and persistent chat history powered by OpenAI.',
    tags: ['React', 'Node.js', 'OpenAI', 'WebSockets'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    github: '#',
    live: '#',
  },
  {
    title: 'Finance Dashboard',
    description:
      'Interactive analytics dashboard with real-time data visualization, expense tracking, and predictive insights.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    github: '#',
    live: '#',
  },
  {
    title: 'Social Media App',
    description:
      'A modern social platform with real-time messaging, post feeds, stories, and notification systems built for scale.',
    tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Nebula glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-nebula-purple/[0.06] blur-[180px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-nebula-blue/[0.04] blur-[160px]" />

      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Projects
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Featured <span className="text-gradient">work</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            A selection of projects that showcase my skills and passion.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="glass group relative overflow-hidden rounded-2xl transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />

                {/* Floating action buttons */}
                <div className="absolute right-4 top-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white/80 transition-colors hover:bg-accent hover:text-white"
                    aria-label="View source code"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white/80 transition-colors hover:bg-accent hover:text-white"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-neutral-600 transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.04] px-3 py-1 text-xs font-medium text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
