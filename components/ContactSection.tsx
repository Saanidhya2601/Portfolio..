"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  CheckCircle2,
  Phone,
  MapPin,
  GitFork,
  type LucideIcon,
} from "lucide-react";

const CONTACT_INFO: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: "saanidhyachauhan35@gmail.com",
    href: "mailto:saanidhyachauhan35@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 63954 32731",
    href: "tel:+916395432731",
  },
  { icon: MapPin, label: "Based in", value: "Dehradun, India" },
  {
    icon: GitFork,
    label: "GitHub",
    value: "@Saanidhya2601",
    href: "https://github.com/Saanidhya2601",
  },
];

export default function ContactSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 100, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(450px circle at ${mouseXSpring}px ${mouseYSpring}px, color-mix(in srgb, var(--color-signal) 14%, transparent), transparent 80%)`;

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:saanidhyachauhan35@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center px-4 py-20"
    >
      <div className="mb-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
          Get in touch
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
          Let&apos;s build something
        </h2>
      </div>

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-line bg-panel/60 shadow-2xl backdrop-blur-xl md:grid-cols-5"
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{ background: spotlight }}
        />
        <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />

        {/* Direct contact details */}
        <div className="relative z-10 flex flex-col justify-between gap-8 border-b border-line bg-white/[0.02] p-8 md:col-span-2 md:border-b-0 md:border-r">
          <div>
            <h3 className="font-display text-xl font-bold text-ink">
              Contact details
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Open to full-stack roles and challenging architectural problems.
              Reach out directly or send a message.
            </p>
          </div>
          <ul className="space-y-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white/[0.04] text-signal">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-faint">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-ink transition-colors hover:text-signal"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-ink">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Message form */}
        <div className="relative z-10 p-8 md:col-span-3 md:p-10">
          {isSubmitted ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-signal/10 text-signal">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-ink">Message ready!</h3>
              <p className="text-muted">
                Your email client should have opened — send it across and
                I&apos;ll reply shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="font-mono text-xs uppercase tracking-wider text-signal underline underline-offset-4 hover:text-signal-dim transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <Field
                  icon={<User className="h-4 w-4" />}
                  id="user-name"
                  type="text"
                  placeholder="Your name"
                  aria-label="Your name"
                  required
                  value={form.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />
                <Field
                  icon={<Mail className="h-4 w-4" />}
                  id="user-email"
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                  value={form.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
                <div className="relative">
                  <label htmlFor="user-message" className="sr-only">
                    Tell me about your project
                  </label>
                  <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-faint" />
                  <textarea
                    id="user-message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-white/5 py-3 pl-11 pr-4 text-ink placeholder-faint transition-all focus:border-signal focus:ring-1 focus:ring-signal/50 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-4 font-semibold text-void transition-all hover:bg-white hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-void"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

// Added explicit HTML attributes extending to support IDs and ARIA labels
function Field({
  icon,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
  id: string;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {props["aria-label"] || props.placeholder}
      </label>
      <div className="absolute left-4 top-3.5 text-faint">{icon}</div>
      <input
        id={id}
        {...props}
        className="w-full rounded-xl border border-line bg-white/5 py-3 pl-11 pr-4 text-ink placeholder-faint transition-all focus:border-signal focus:ring-1 focus:ring-signal/50 focus:outline-none"
      />
    </div>
  );
}
