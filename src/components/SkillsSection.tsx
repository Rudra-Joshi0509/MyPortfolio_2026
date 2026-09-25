import { useState } from "react";
import {
  Code,
  Globe,
  Cpu,
  Brain,
  Gamepad2,
  Users,
  Layers,
  Sparkles,
  Database,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick } from "@/utils/sound";

type SkillCategory = "all" | "programming" | "webstack" | "systems" | "softskills";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("all");

  const categories = [
    { id: "all", label: "All Proficiencies", icon: Layers },
    { id: "programming", label: "Programming (C#, Java, Python)", icon: Code },
    { id: "webstack", label: "Webstack (HTML, CSS, JS, SQL, Mongo)", icon: Globe },
    { id: "systems", label: "Systems, ML & Game Dev", icon: Cpu },
    { id: "softskills", label: "Engineering Soft Skills", icon: Users },
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono mb-4">
            <Sparkles className="size-3.5 text-sky-400" />
            <span>TECHNICAL ARSENAL &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills, Systems &amp; Core Competencies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-normal">
            Covering low-level operating system architectures, applied machine learning pipelines, full-stack database ecosystems, and agile engineering practices.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playCyberClick();
                  setSelectedCategory(cat.id as SkillCategory);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 text-white shadow-[0_4px_15px_rgba(99,102,241,0.25)] scale-[1.02]"
                    : "glass-panel text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <Icon className="size-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Skills Content Grid */}
        <div className="space-y-12">
          
          {/* Programming Languages */}
          {(selectedCategory === "all" || selectedCategory === "programming") && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">
                  <Terminal className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Programming Languages</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Core languages: C#, Java, Python, C/C++, TypeScript
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PORTFOLIO_DATA.skills.programming.map((prog) => (
                  <div
                    key={prog.name}
                    className="glass-panel p-5 rounded-2xl hover:border-indigo-400/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-white font-mono group-hover:text-indigo-300 transition-colors">
                        {prog.name}
                      </span>
                      <span className="text-xs font-mono text-indigo-300 font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                        {prog.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full transition-all duration-1000"
                        style={{ width: `${prog.level}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-400 font-sans">{prog.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Webstack & Databases */}
          {(selectedCategory === "all" || selectedCategory === "webstack") && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20">
                  <Database className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Webstack &amp; Databases</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    HTML, CSS, JavaScript, SQL, MongoDB, React, Tailwind
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PORTFOLIO_DATA.skills.webstack.map((web) => (
                  <div
                    key={web.name}
                    className="glass-panel p-5 rounded-2xl hover:border-sky-400/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-white font-mono group-hover:text-sky-300 transition-colors">
                        {web.name}
                      </span>
                      <span className="text-xs font-mono text-sky-300 font-semibold px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20">
                        {web.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-indigo-400 rounded-full transition-all duration-1000"
                        style={{ width: `${web.level}%` }}
                      />
                    </div>

                    <p className="text-xs text-slate-400 font-sans">{web.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Domains: OS, ML, Game Dev */}
          {(selectedCategory === "all" || selectedCategory === "systems") && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-400/20">
                  <Cpu className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Core Domains</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Operating Systems, Machine Learning &amp; Game Development
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Operating Systems */}
                <div className="rounded-3xl p-6 glass-panel border-white/[0.08] hover:border-indigo-400/30 transition-all">
                  <div className="size-12 rounded-xl bg-indigo-500/15 border border-indigo-400/25 flex items-center justify-center text-indigo-300 mb-4">
                    <Cpu className="size-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                    Operating Systems
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    Thorough grasp of process synchronization, CPU scheduling algorithms, virtual memory paging, multithreading, and Linux command-line tooling.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Kernel", "Threads", "Memory Paging", "Linux Bash", "Scheduling"].map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-indigo-300 border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Machine Learning */}
                <div className="rounded-3xl p-6 glass-panel border-white/[0.08] hover:border-purple-400/30 transition-all">
                  <div className="size-12 rounded-xl bg-purple-500/15 border border-purple-400/25 flex items-center justify-center text-purple-300 mb-4">
                    <Brain className="size-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                    Machine Learning &amp; Vision
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    Computer vision workflows, image preprocessing, OpenCV style transfer filters, and architecting Responsible Generative AI systems.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Computer Vision", "OpenCV", "Style Transfer", "Responsible AI", "Model Tuning"].map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-purple-300 border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Game Development */}
                <div className="rounded-3xl p-6 glass-panel border-white/[0.08] hover:border-sky-400/30 transition-all">
                  <div className="size-12 rounded-xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-300 mb-4">
                    <Gamepad2 className="size-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 tracking-tight">
                    Game Development
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                    Designing game mechanics, player physics, collision detection, custom finite state loops, and interactive gameplay systems in C#.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["C# Game Loops", "2D/3D Physics", "Collision", "State Machines", "Level Design"].map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-sky-300 border border-white/[0.06]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {(selectedCategory === "all" || selectedCategory === "softskills") && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                  <Users className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Engineering Soft Skills</h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Collaboration, analytical problem-solving, and team leadership
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PORTFOLIO_DATA.skills.softSkills.map((soft) => (
                  <div
                    key={soft.name}
                    className="glass-panel p-5 rounded-2xl hover:border-emerald-400/30 transition-all"
                  >
                    <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                      <span>{soft.name}</span>
                    </h4>
                    <p className="text-xs text-slate-300 font-normal leading-relaxed">
                      {soft.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
