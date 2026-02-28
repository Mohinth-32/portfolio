import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.025, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const heading = "Hi, I'm Mohin";
  const tagline =
    'I craft elegant digital experiences — blending design with engineering to build products people love.';

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Nebula glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-nebula-blue/[0.08] blur-[180px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[500px] rounded-full bg-nebula-purple/[0.06] blur-[150px]" />
        <div className="absolute top-1/2 right-0 h-[300px] w-[400px] rounded-full bg-nebula-cyan/[0.05] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[200px] w-[300px] rounded-full bg-nebula-pink/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-neutral-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-nebula-cyan animate-pulse" />
          <span className="font-mono">Available for work</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={sentence}
          initial="hidden"
          animate="visible"
          className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl"
        >
          {heading.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className={
                char === 'M' ||
                char === 'o' ||
                char === 'h' ||
                char === 'i' ||
                char === 'n'
                  ? 'text-gradient'
                  : ''
              }
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl"
        >
          {tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/25 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-neutral-300 ring-1 ring-white/[0.08] transition-all duration-300 hover:bg-white/[0.04] hover:text-white hover:ring-white/[0.15]"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-14 flex items-center justify-center gap-5"
        >
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-3 text-neutral-500 transition-all duration-300 hover:bg-white/[0.05] hover:text-white hover:scale-110"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-neutral-600"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
