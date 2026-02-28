import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable solutions',
  },
  {
    icon: Palette,
    title: 'Design Eye',
    desc: 'Pixel-perfect implementation of designs',
  },
  {
    icon: Rocket,
    title: 'Performance',
    desc: 'Optimized for speed and user experience',
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            A bit about <span className="text-gradient">me</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-neutral-400">
              I'm a passionate full-stack developer with a love for creating
              beautiful, functional, and user-centered digital experiences. With
              a strong foundation in both front-end and back-end technologies, I
              bring ideas to life through clean code and thoughtful design.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-neutral-400">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or experimenting with
              creative design concepts. I believe the best products come from
              the intersection of engineering excellence and design sensibility.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-10">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Built' },
                { value: '10+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-1">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="glass group flex items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
