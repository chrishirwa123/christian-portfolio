import { useReveal } from "../hooks/useReveal";

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const stats = [
    { value: "5+", label: "Projects Shipped" },
    { value: "4", label: "Disciplines" },
    { value: "100%", label: "Commitment" },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${visible ? "reveal visible" : "reveal"}`}>
          {/* Profile picture placeholder */}
          <div className="reveal-left">
            <div className={`relative ${visible ? "reveal-left visible" : "reveal-left"}`}>
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-3xl border border-white/5" />
                <div className="absolute -inset-2 rounded-3xl border border-violet-500/10" />
                {/* Placeholder */}
                <div className="relative w-full h-full rounded-3xl glass overflow-hidden flex flex-col items-center justify-center gap-4 group cursor-pointer">
                  {/* Replace this block with: <img src="/profile.jpg" alt="Hirwa Christian" className="w-full h-full object-cover" /> */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
                    <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-gray-500">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Add Profile Photo
                  </p>
                  <p className="text-[11px] text-gray-600 max-w-[200px] text-center leading-relaxed">
                    Replace this placeholder with your photo in <code className="text-violet-400">src</code>
                  </p>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                    <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Multi-Disciplinary</p>
                    <p className="text-[10px] text-gray-500">Engineer & Builder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={visible ? "reveal-right visible" : "reveal-right"}>
            <span className="text-xs font-bold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
              About Me
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-6 leading-tight">
              Building across hardware, software & everything in between.
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Hirwa Christian</span> — a
                multi-disciplinary developer working at the intersection of robotics, embedded
                systems, IoT, web, and game development. I thrive on turning complex ideas into
                working products, whether that means programming a microcontroller, designing a
                database, or shipping a full web platform.
              </p>
              <p>
                My projects range from <span className="text-white font-semibold">GigBoard</span>, a
                full-stack freelance marketplace, to <span className="text-white font-semibold">AgriMind</span>,
                an AI assistant for farmers, and the <span className="text-white font-semibold">Mother Monitoring System</span> for
                maternal healthcare. I believe in building technology that solves real problems for real people.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center">
                  <p className="font-display font-extrabold text-2xl text-white">{s.value}</p>
                  <p className="text-xs text-gray-500 font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
