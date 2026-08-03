import { useState } from "react";
import { ExternalLink, Github, Star, Circle, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";

const CATEGORIES = ["All", "Web Platform", "Web App", "AI / IoT", "Healthcare"];

const STATUS_CONFIG: Record<Project["status"], { label: string; color: string }> = {
  shipped: { label: "Shipped", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  "in-progress": { label: "In Progress", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  concept: { label: "Concept", color: "text-gray-400 bg-white/5 border-white/10" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.1 });
  const statusCfg = STATUS_CONFIG[project.status];

  return (
    <article
      ref={ref}
      className={`group relative glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 ${
        visible ? "reveal-scale visible" : "reveal-scale"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}

    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
      />

      <div className="p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-white text-lg transition-transform group-hover:scale-110"
              style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}10)`, border: `1px solid ${project.accent}30` }}
            >
              {project.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-lg leading-tight">{project.name}</h3>
              <span className="text-xs text-gray-500 font-semibold">{project.category}</span>
            </div>
          </div>
          {project.featured && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Featured</span>
            </div>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm font-semibold text-violet-300 mb-3">{project.tagline}</p>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-semibold text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold ${statusCfg.color}`}
          >
            <Circle className="w-1.5 h-1.5 fill-current" />
            {statusCfg.label}
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
              aria-label={`View ${project.name} on GitHub`}
            >
              <Github className="w-4 h-4" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"
                aria-label={`Visit ${project.name} live site`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `inset 0 0 60px ${project.accent}08` }}
      />
    </article>
  );
}

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-12 ${visible ? "reveal visible" : "reveal"}`}>
          <span className="text-xs font-bold text-violet-400 uppercase tracking-[0.2em] mb-3 block">
            Portfolio
          </span>
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl sm:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Real projects from my GitHub — each one solving a distinct problem across different domains.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                filter === cat
                  ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/20"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/chrishirwa123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-bold text-sm hover:border-violet-500/30 transition-all group"
          >
            <Github className="w-4 h-4" />
            See all repositories on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
