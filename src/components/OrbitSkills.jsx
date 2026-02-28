/**
 * OrbitSkills.jsx
 * ──────────────────────────────────────────────────────
 * "Orbit Skills Galaxy" — a visually impressive animated
 * hero-section where skill logos orbit a central profile
 * image like planets around a star.
 *
 * Architecture:
 *   Section → header + galaxy container
 *   Galaxy  → center profile + orbit rings (visual) + orbit layers (animated)
 *   Each orbit layer rotates; each skill counter-rotates to stay upright.
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Skills data ─────────────────────────────────────── */
const skills = [
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    orbit: 1,
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    orbit: 1,
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    orbit: 1,
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    orbit: 1,
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    orbit: 1,
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    orbit: 1,
  },

  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    orbit: 2,
  },
  {
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    orbit: 2,
  },
  {
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    orbit: 2,
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    orbit: 2,
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    orbit: 2,
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    orbit: 2,
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    orbit: 2,
  },

  {
    name: 'Linux',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    orbit: 3,
  },
  {
    name: 'n8n',
    icon: 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/svg/n8n.svg',
    orbit: 3,
  },
  {
    name: 'Nginx',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
    orbit: 3,
  },
  {
    name: "Let's Encrypt",
    icon: 'https://cdn.simpleicons.org/letsencrypt/ffffff',
    orbit: 3,
  },
  {
    name: 'JWT',
    icon: 'https://cdn.simpleicons.org/jsonwebtokens/ffffff',
    orbit: 3,
  },
];

/* ── Group skills by orbit layer ─────────────────────── */
const orbitGroups = [
  skills.filter((s) => s.orbit === 1),
  skills.filter((s) => s.orbit === 2),
  skills.filter((s) => s.orbit === 3),
];

/* ── Orbit animation class pairs ─────────────────────── */
const orbitAnimations = [
  { orbit: 'animate-orbit-cw-fast', counter: 'animate-orbit-ccw-fast' }, // inner  — 15s CW
  { orbit: 'animate-orbit-ccw-med', counter: 'animate-orbit-cw-med' }, // middle — 25s CCW
  { orbit: 'animate-orbit-cw-slow', counter: 'animate-orbit-ccw-slow' }, // outer  — 40s CW
];

/* ── Responsive breakpoint configs ───────────────────── */
const breakpoints = [
  {
    max: 480,
    radii: [80, 145, 0],
    iconOuter: 40,
    iconInner: 22,
    showOrbit3: false,
    profileSize: 80,
  },
  {
    max: 640,
    radii: [95, 165, 235],
    iconOuter: 42,
    iconInner: 24,
    showOrbit3: true,
    profileSize: 88,
  },
  {
    max: 768,
    radii: [115, 200, 285],
    iconOuter: 46,
    iconInner: 26,
    showOrbit3: true,
    profileSize: 96,
  },
  {
    max: 1024,
    radii: [135, 230, 325],
    iconOuter: 50,
    iconInner: 28,
    showOrbit3: true,
    profileSize: 108,
  },
  {
    max: Infinity,
    radii: [165, 275, 385],
    iconOuter: 56,
    iconInner: 30,
    showOrbit3: true,
    profileSize: 120,
  },
];

/* ── Orbit ring decorative colors ───────────────────── */
const ringStyles = [
  'border-nebula-cyan/[0.08]',
  'border-nebula-purple/[0.06]',
  'border-nebula-pink/[0.04]',
];

/* ================================================================ */
/*  Component                                                       */
/* ================================================================ */

export default function OrbitSkills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  /* Responsive config based on viewport width */
  const [cfg, setCfg] = useState(breakpoints[breakpoints.length - 1]);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      setCfg(
        breakpoints.find((bp) => vw < bp.max) ||
          breakpoints[breakpoints.length - 1]
      );
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* Galaxy container size — enough room for outer orbit + icons */
  const outerRadius = cfg.showOrbit3 ? cfg.radii[2] : cfg.radii[1];
  const galaxySize = outerRadius * 2 + cfg.iconOuter + 24;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24"
    >
      {/* ── Background ambient glows ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-nebula-blue/[0.06] blur-[200px]" />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-nebula-purple/[0.05] blur-[180px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-nebula-cyan/[0.04] blur-[160px]" />
      </div>

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 mb-12 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Skills
        </span>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          My <span className="text-gradient">Galaxy</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-neutral-400">
          Technologies orbiting my development universe.
        </p>
      </motion.div>

      {/* ── Galaxy container ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="orbit-galaxy relative z-10 flex-shrink-0"
        style={{
          width: galaxySize,
          height: galaxySize,
          maxWidth: '100%',
          maxHeight: '90vh',
        }}
      >
        {/* ── Orbit rings (decorative circles) ── */}
        {cfg.radii.map((radius, i) => {
          if (!radius || (i === 2 && !cfg.showOrbit3)) return null;
          return (
            <div
              key={`ring-${i}`}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${ringStyles[i]}`}
              style={{ width: radius * 2, height: radius * 2 }}
              aria-hidden
            />
          );
        })}

        {/* ── Center profile image ── */}
        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <div
            className="animate-pulse-glow rounded-full bg-gradient-to-br from-nebula-cyan via-accent to-nebula-purple p-[3px]"
            style={{ width: cfg.profileSize, height: cfg.profileSize }}
          >
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-dark-950">
              {/* Fallback initial — hidden when image loads */}
              <span
                className="text-gradient font-bold select-none"
                style={{ fontSize: cfg.profileSize * 0.35 }}
              >
                M
              </span>
              {/* Profile image — replace src with your own photo */}
              <img
                src="/src/assets/blued.png"
                alt="Mohin"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          {/* Glow ring behind profile */}
          <div
            className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-2xl"
            style={{ width: cfg.profileSize, height: cfg.profileSize }}
            aria-hidden
          />
        </div>

        {/* ── Orbit layers ── */}
        {orbitGroups.map((groupSkills, orbitIdx) => {
          const radius = cfg.radii[orbitIdx];
          if (!radius || (orbitIdx === 2 && !cfg.showOrbit3)) return null;
          const { orbit: orbitAnim, counter: counterAnim } =
            orbitAnimations[orbitIdx];
          const diameter = radius * 2;

          return (
            /* Centering wrapper — uses margin so transform is free for rotation */
            <div
              key={`orbit-layer-${orbitIdx}`}
              className="absolute left-1/2 top-1/2"
              style={{
                width: diameter,
                height: diameter,
                marginLeft: -radius,
                marginTop: -radius,
              }}
            >
              {/* Rotating orbit layer */}
              <div
                className={`orbit-anim ${orbitAnim}`}
                style={{
                  width: diameter,
                  height: diameter,
                  willChange: 'transform',
                }}
              >
                {groupSkills.map((skill, skillIdx) => {
                  const angle = (360 / groupSkills.length) * skillIdx;
                  const halfIcon = cfg.iconOuter / 2;

                  return (
                    <div
                      key={skill.name}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `rotate(${angle}deg) translateX(${radius}px)`,
                      }}
                    >
                      {/* Counter-rotation animation — keeps icon upright */}
                      <div
                        className={`orbit-anim ${counterAnim}`}
                        style={{ willChange: 'transform' }}
                      >
                        {/* Static counter-rotate for initial angle + centering offset */}
                        <div
                          style={{
                            transform: `rotate(${-angle}deg)`,
                            marginLeft: -halfIcon,
                            marginTop: -halfIcon,
                          }}
                        >
                          <SkillIcon
                            skill={skill}
                            size={cfg.iconOuter}
                            imgSize={cfg.iconInner}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

/* ================================================================ */
/*  SkillIcon — individual skill bubble with hover & tooltip        */
/* ================================================================ */

function SkillIcon({ skill, size, imgSize }) {
  return (
    <div className="group/skill relative cursor-pointer">
      {/* Icon circle */}
      <div
        className="flex items-center justify-center rounded-full border border-white/[0.08] bg-dark-800/90 shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-300 group-hover/skill:scale-[1.3] group-hover/skill:border-accent/40 group-hover/skill:bg-dark-700/95 group-hover/skill:shadow-accent/25 group-hover/skill:shadow-xl"
        style={{ width: size, height: size }}
      >
        <img
          src={skill.icon}
          alt={skill.name}
          loading="lazy"
          draggable="false"
          className="pointer-events-none drop-shadow-md"
          style={{ width: imgSize, height: imgSize }}
        />
      </div>

      {/* Tooltip — appears on hover */}
      <div className="pointer-events-none absolute left-1/2 -bottom-9 z-50 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover/skill:opacity-100 group-hover/skill:-translate-y-0.5">
        <span className="whitespace-nowrap rounded-lg border border-white/[0.08] bg-dark-800 px-2.5 py-1 text-[11px] font-medium text-neutral-200 shadow-xl">
          {skill.name}
        </span>
      </div>
    </div>
  );
}
