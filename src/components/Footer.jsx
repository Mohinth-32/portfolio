import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-dark-950/80 backdrop-blur-md px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Left */}
        <div className="flex items-center gap-1.5 text-sm text-neutral-500">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-gradient font-semibold">mohin.dev</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline-flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500" /> and React
          </span>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2.5 text-neutral-600 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
