import { useEffect, useState } from "react";
import { Cpu, Wifi, Code, Gamepad2 } from "lucide-react";
import { skillGroups } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

const ICONS: Record<string, typeof Cpu> = {
  cpu: Cpu,
  wifi: Wifi,
  code: Code,
  gamepad: Gamepad2,
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const [width, setWidth] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.3 });

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(t);
    }
  }, [visible, level, delay]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-300">{name}</span>
        <span className="text-xs font-bold text-gray-500">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 ${visible ? "reveal visible" : "reveal"}`}>
          <span className="text-xs font-bold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
            Capabilities
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl sm:text-5xl mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            A versatile toolkit spanning four core disciplines — from silicon to screen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => {
            const Icon = ICONS[group.icon] || Cpu;
            return (
              <SkillCard key={group.key} group={group} Icon={Icon} index={idx} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  Icon,
  index,
}: {
  group: typeof skillGroups[0];
  Icon: typeof Cpu;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 sm:p-8 hover:border-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 ${
        visible ? "reveal-scale visible" : "reveal-scale"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-violet-400" />
        </div>
        <h3 className="font-display font-bold text-white text-lg">{group.label}</h3>
      </div>
      <div className="space-y-5">
        {group.skills.map((skill, i) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} />
        ))}
      </div>
    </div>
  );
}
