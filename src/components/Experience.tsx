import { Award, Sparkles } from "lucide-react";
import { experiences } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 ${visible ? "reveal visible" : "reveal"}`}>
          <span className="text-xs font-bold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
            Journey
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl sm:text-5xl mb-4">
            Experience & Highlights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Beyond the code — the experiences that shaped my approach to building and collaborating.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-white/10 to-transparent sm:-translate-x-px" />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.2 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-8 ${
        isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
      } ${visible ? (isLeft ? "reveal-left visible" : "reveal-right visible") : isLeft ? "reveal-left" : "reveal-right"}`}
    >
      {/* Node */}
      <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 ring-4 ring-[#0a0a0f]" />
      </div>

      {/* Card */}
      <div className={`pl-16 sm:pl-0 sm:w-1/2 ${isLeft ? "sm:pr-12" : "sm:pl-12"}`}>
        <div className="glass rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center">
              <Award className="w-4 h-4 text-violet-400" />
            </div>
            <span className="text-[10px] font-mono text-gray-600">#{exp.hash}</span>
          </div>
          <h3 className="font-display font-bold text-white text-lg mb-2">{exp.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-violet-500/10 border border-violet-500/15 text-[11px] font-semibold text-violet-300"
              >
                <Sparkles className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer for other side */}
      <div className="hidden sm:block sm:w-1/2" />
    </div>
  );
}
