import { useState } from "react";
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  Sliders,
  Wand2,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick } from "@/utils/sound";
import ValorantRoastWidget from "./ValorantRoastWidget";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedPhotoEnhancerMode, setSelectedPhotoEnhancerMode] = useState<string>("High Detail");

  const categories = ["All", "AI/ML", "Web App", "Game/Fun", "Group & Systems"];

  const filteredProjects =
    filter === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  const enhancerModes = [
    { name: "Soft Glow", desc: "Gentle diffusion & skin tone softening" },
    { name: "Normal Balance", desc: "Even white balance & dynamic range" },
    { name: "Strong Contrast", desc: "Punchy shadows and vibrant pop" },
    { name: "Night Mode", desc: "Low-light denoising & luminance boost" },
    { name: "High Detail", desc: "Micro-texture sharpening & clarity" },
    { name: "Warm Sunset", desc: "Golden hour temperature shift" },
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono mb-4">
            <FolderGit2 className="size-3.5 text-sky-400" />
            <span>APPLICATIONS &amp; CODEBASE REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects &amp; Software
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-normal">
            Real-world systems spanning computer vision algorithms, AI image enhancement, agricultural foliage diagnostics, and interactive esports tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playCyberClick();
                setFilter(cat);
              }}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 text-white font-semibold shadow-[0_4px_15px_rgba(99,102,241,0.25)] scale-[1.02]"
                  : "glass-panel text-slate-300 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-panel border-white/[0.08] hover:border-indigo-400/30 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-5 border border-white/[0.08] bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-slate-900/80 text-indigo-300 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* GitHub Quick Link icon if present */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playCyberClick()}
                      className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/70 hover:bg-indigo-600 hover:text-white text-slate-300 transition-colors backdrop-blur-md border border-white/10"
                      title="Open GitHub Repository"
                    >
                      <GithubIcon className="size-4" />
                    </a>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="size-4 text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Interactive Mode Explorer for AI Photo Enhancer */}
                {project.id === "ai-photo-enhancer" && (
                  <div className="mb-4 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="flex items-center gap-1.5 text-sky-300 font-mono text-[11px] mb-2 font-medium">
                      <Sliders className="size-3" />
                      <span>Supported Enhancement Modes:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {enhancerModes.map((m) => (
                        <button
                          key={m.name}
                          onClick={() => {
                            playCyberClick();
                            setSelectedPhotoEnhancerMode(m.name);
                          }}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
                            selectedPhotoEnhancerMode === m.name
                              ? "bg-indigo-500 text-white font-semibold"
                              : "bg-white/[0.04] text-slate-400 hover:text-white"
                          }`}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive Modes for AI Image Art Generator */}
                {project.id === "ai-image-art-generator" && (
                  <div className="mb-4 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs">
                    <div className="flex items-center gap-1.5 text-indigo-300 font-mono text-[11px] mb-2 font-medium">
                      <Wand2 className="size-3" />
                      <span>Artistic Styles Supported:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {["Sketch Art", "Cartoon Cel", "Noir B&W", "Edge Contour", "Vivid Pop"].map((s) => (
                        <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="size-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech tags + Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-slate-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playCyberClick()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-indigo-400/40 text-slate-200 text-xs font-semibold transition-all group-hover:text-white"
                  >
                    <GithubIcon className="size-3.5" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="size-3 text-slate-400" />
                  </a>
                ) : (
                  <div className="w-full py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center text-xs font-mono text-slate-500">
                    Production System Deliverable
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Live Valorant Roast Interactive Widget Banner */}
        <div className="mt-14 max-w-4xl mx-auto">
          <ValorantRoastWidget />
        </div>

        {/* 20+ Real Projects & 5+ Real Clients Banner */}
        <div className="mt-12 rounded-3xl p-8 glass-panel border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="size-16 rounded-2xl bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center text-indigo-300 shrink-0">
              <FolderGit2 className="size-8" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  20+ Real Projects &amp; 5+ Real Clients
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                  DELIVERED
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed">
                From bespoke commercial deliverables to deep-learning computer vision algorithms, system utilities, and desktop software.
              </p>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberClick()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 hover:from-indigo-400 hover:to-sky-400 text-white text-xs font-semibold transition-all shadow-[0_4px_15px_rgba(99,102,241,0.25)] shrink-0"
          >
            <GithubIcon className="size-4" />
            <span>Visit @{PORTFOLIO_DATA.profile.githubUsername}</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
