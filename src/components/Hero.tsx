import { useEffect, useState } from "react";
import { ArrowDown, Cpu, Wifi, Code, Gamepad2 } from "lucide-react";

const ROLES = [
  "Robotics & Embedded Systems Developer",
  "IoT Engineer",
  "Web Developer",
  "Game Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 35);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  const orbitIcons = [
    { Icon: Cpu, color: "text-violet-400", delay: "0s" },
    { Icon: Wifi, color: "text-cyan-400", delay: "-1.5s" },
    { Icon: Code, color: "text-emerald-400", delay: "-3s" },
    { Icon: Gamepad2, color: "text-amber-400", delay: "-4.5s" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-20">
        {/* Orbit ring with icons */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-white/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
          {/* Center monogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-display font-extrabold text-white text-xl glow-purple">
              HC
            </div>
          </div>
          {/* Orbiting icons */}
          {orbitIcons.map(({ Icon, color, delay }, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-6 h-6 -ml-3 -mt-3 animate-spin-slow"
              style={{ animationDelay: delay }}
            >
              <div className="w-6 h-6 flex items-center justify-center" style={{ transform: `rotate(${i * 90}deg) translateY(-64px) rotate(-${i * 90}deg)` }}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-gray-300">Available for new projects</span>
        </div>

        <h1 className="font-display font-extrabold text-white text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.05] mb-4">
          Hi, I'm <span className="text-gradient">Hirwa Christian</span>
        </h1>

        <div className="h-9 mb-6 flex items-center justify-center">
          <p className="text-lg sm:text-xl font-semibold text-gray-400 font-display">
            {text}
            <span className="animate-blink text-violet-400">|</span>
          </p>
        </div>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          I build intelligent systems that bridge the physical and digital worlds — from
          embedded robotics and IoT networks to full-stack web platforms and interactive games.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-bold text-sm hover:shadow-xl hover:shadow-violet-500/30 transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl border border-white/15 text-white font-bold text-sm hover:bg-white/5 hover:border-white/25 transition-all"
          >
            Let's Collaborate
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
