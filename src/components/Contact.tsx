import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, MessageCircle, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hirwachristian@gmail.com", href: "mailto:hirwachristian@gmail.com" },
    { icon: Phone, label: "Phone", value: "+250 7XX XXX XXX", href: "tel:+250700000000" },
    { icon: MapPin, label: "Location", value: "Kigali, Rwanda", href: null },
  ];

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/chrishirwa123" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/250700000000" },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 ${visible ? "reveal visible" : "reveal"}`}>
          <span className="text-xs font-bold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
            Get in Touch
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl sm:text-5xl mb-4">
            Let's Build Something
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Have a project in mind? Whether it's robotics, IoT, web, or game development — I'm always open to a good conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info side */}
          <div className={visible ? "reveal-left visible" : "reveal-left"}>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-violet-500/20 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">{info.label}</p>
                      <p className="text-sm font-bold text-white">{info.value}</p>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} className="block">{content}</a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-gray-400 hover:text-white hover:border-violet-500/30 transition-all text-sm font-semibold"
                  >
                    <Icon className="w-4 h-4" />
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Form side */}
          <div className={visible ? "reveal-right visible" : "reveal-right"}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${
                  sent
                    ? "bg-emerald-500 text-white"
                    : "bg-gradient-to-r from-violet-600 to-violet-500 text-white hover:shadow-xl hover:shadow-violet-500/30 hover:scale-[1.02]"
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
