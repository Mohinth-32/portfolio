import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh', href: '#' },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1XXX-XXXXXX',
    href: 'tel:+8801000000000',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire this to an API / email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Nebula glow */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-[400px] w-[500px] rounded-full bg-nebula-blue/[0.06] blur-[180px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-0 h-[300px] w-[400px] rounded-full bg-nebula-pink/[0.04] blur-[160px]" />

      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-400">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 lg:col-span-2"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass group flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.1]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-neutral-300">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass space-y-5 rounded-2xl p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-300 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-300 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-all duration-300 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 disabled:opacity-50"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
              <Send
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
