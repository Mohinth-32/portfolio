import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'HTML/CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express',
      'Python',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Linux'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Nebula glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-nebula-cyan/[0.06] blur-[180px]" />
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-nebula-purple/[0.04] blur-[160px]" />

      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Skills
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="text-gradient">toolkit</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            Technologies and tools I use to bring products to life.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + catIdx * 0.15 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-accent">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + catIdx * 0.15 + i * 0.06,
                    }}
                    className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-accent/30 hover:bg-accent/10 hover:text-white cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
