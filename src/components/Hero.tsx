import { useState } from "react";
import {
  Terminal,
  Sparkles,
  ArrowRight,
  Download,
  Copy,
  Check,
  MapPin,
  Cpu,
  GraduationCap,
  Camera,
  Layers,
  Code,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick, playSuccessChime } from "@/utils/sound";
import confetti from "canvas-confetti";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "stack" | "merit">("overview");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    playSuccessChime();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#38bdf8", "#10b981", "#fbbf24"],
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-medium mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Engineering Roles &amp; AI Collaborations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-4">
              Hello, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-400">
                {PORTFOLIO_DATA.profile.fullName}
              </span>
            </h1>

            {/* Sub-headline Pill Group */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="text-lg sm:text-xl font-semibold text-slate-200">
                Future Computer Engineer
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-xs sm:text-sm font-mono text-indigo-300 bg-indigo-500/15 px-3 py-1 rounded-full border border-indigo-500/25">
                9.46 CGPA (Sem 4 Merit)
              </span>
            </div>

            {/* User's Exact Short Bio with Eye-Pleasing Styling */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal max-w-2xl">
              Myself <strong className="text-white font-semibold">Rudra Joshi</strong>. Currently pursuing{" "}
              <span className="text-sky-300 font-medium">Diploma in Computer Engineering</span> with a strong understanding of{" "}
              <span className="text-white font-medium underline decoration-indigo-400/50 underline-offset-4">Operating Systems</span>,{" "}
              <span className="text-white font-medium underline decoration-sky-400/50 underline-offset-4">Machine Learning</span>, and{" "}
              <span className="text-white font-medium underline decoration-purple-400/50 underline-offset-4">Game Development</span>.
            </p>

            {/* Key Meta Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-8">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <MapPin className="size-3.5 text-indigo-400" />
                {PORTFOLIO_DATA.profile.location}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <GraduationCap className="size-3.5 text-sky-400" />
                C. U. Shah Govt Polytechnic
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <Cpu className="size-3.5 text-purple-400" />
                Google Student Ambassador '26
              </span>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={() => playCyberClick()}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 hover:from-indigo-400 hover:to-sky-400 text-white text-sm font-semibold shadow-[0_4px_20px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.03]"
              >
                <span>Explore 20+ Projects</span>
                <ArrowRight className="size-4" />
              </a>

              <button
                onClick={() => {
                  playCyberClick();
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-indigo-400/40 text-sm font-medium transition-all hover:scale-[1.03]"
              >
                <Download className="size-4 text-sky-400" />
                <span>Resume ({PORTFOLIO_DATA.profile.resumeFileName})</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass-panel text-slate-300 hover:text-white text-sm transition-all"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span className="text-emerald-400 text-xs font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4 text-indigo-400" />
                    <span className="text-xs">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links & Roadmap Trigger */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Profiles:
              </span>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberClick()}
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-indigo-400/40 transition-all hover:scale-110"
                title="GitHub Profile"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberClick()}
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-sky-300 hover:border-sky-400/40 transition-all hover:scale-110"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="#journey-lead"
                onClick={() => playCyberClick()}
                className="px-3.5 py-1.5 rounded-xl glass-panel text-slate-300 hover:text-indigo-300 text-xs font-mono flex items-center gap-1.5 transition-all hover:border-indigo-400/40"
              >
                <Sparkles className="size-3 text-indigo-400" />
                <span>Interactive Timeline</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Showcase & Interactive Console */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Soft Eye-Pleasing Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-sky-500/20 to-purple-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />
              
              <div className="relative rounded-3xl glass-panel p-6 sm:p-7 border-white/[0.08] hover:border-indigo-400/30 transition-all duration-300">
                <div className="flex items-center gap-5">
                  {/* Avatar Container */}
                  <div className="relative">
                    <div className="size-24 sm:size-28 rounded-2xl overflow-hidden border border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.4)] bg-slate-900 flex items-center justify-center relative">
                      <img
                        src={PORTFOLIO_DATA.profile.avatarPlaceholder}
                        alt="Rudra Joshi Placeholder Avatar"
                        className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Photo Placeholder Indicator */}
                      <div className="absolute bottom-1 right-1 bg-black/75 px-1.5 py-0.5 rounded text-[10px] text-slate-300 flex items-center gap-1 font-mono backdrop-blur-sm">
                        <Camera className="size-3 text-sky-400" />
                        <span>Photo slot</span>
                      </div>
                    </div>
                    {/* Status Dot */}
                    <div className="absolute -top-1 -right-1 size-3.5 rounded-full bg-emerald-400 border-2 border-[#090d16] shadow-[0_0_8px_#10b981]" />
                  </div>

                  {/* Profile Quick Stats */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-white tracking-tight">Rudra Joshi</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-indigo-300 font-mono mb-3">
                      Computer Engineering Scholar
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-base font-bold text-white font-mono leading-none">9.46</div>
                        <div className="text-[10px] text-slate-400 mt-1">Sem 4 CGPA</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-base font-bold text-sky-300 font-mono leading-none">20+ / 5+</div>
                        <div className="text-[10px] text-slate-400 mt-1">Projects / Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Console / Developer Card */}
            <div className="rounded-3xl glass-panel border-white/[0.08] overflow-hidden">
              {/* Card Titlebar */}
              <div className="px-5 py-3 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-slate-600/60" />
                  <div className="size-2.5 rounded-full bg-slate-600/60" />
                  <div className="size-2.5 rounded-full bg-slate-600/60" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="size-3 text-indigo-400" />
                    rudra-overview
                  </span>
                </div>

                {/* Tab switchers */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      playCyberClick();
                      setActiveTab("overview");
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "overview"
                        ? "bg-indigo-500/20 text-indigo-200 border border-indigo-400/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    overview
                  </button>
                  <button
                    onClick={() => {
                      playCyberClick();
                      setActiveTab("stack");
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "stack"
                        ? "bg-indigo-500/20 text-indigo-200 border border-indigo-400/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    tech-stack
                  </button>
                  <button
                    onClick={() => {
                      playCyberClick();
                      setActiveTab("merit");
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      activeTab === "merit"
                        ? "bg-indigo-500/20 text-indigo-200 border border-indigo-400/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    honors
                  </button>
                </div>
              </div>

              {/* Console Screen Content */}
              <div className="p-5 font-mono text-xs text-left leading-relaxed min-h-[180px] overflow-x-auto text-slate-300">
                {activeTab === "overview" && (
                  <div className="space-y-2">
                    <div className="text-indigo-300 font-semibold">
                      // Core Engineering Intuition
                    </div>
                    <p className="text-slate-300 font-sans text-xs leading-relaxed">
                      Specializing in building robust low-level architectures and AI pipelines. Passionate about Operating System internals, Computer Vision algorithms, and real-time interactive game loops.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {["Operating Systems", "Machine Learning", "Game Development", "Modern Web"].map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-300 text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "stack" && (
                  <div className="space-y-1.5">
                    <div>
                      <span className="text-indigo-400 font-bold">Languages:</span>{" "}
                      <span className="text-slate-200">C#, Java, Python, C/C++, TypeScript, JavaScript</span>
                    </div>
                    <div>
                      <span className="text-sky-400 font-bold">Webstack:</span>{" "}
                      <span className="text-slate-200">HTML5, CSS3, Tailwind, SQL, MongoDB, React</span>
                    </div>
                    <div>
                      <span className="text-purple-400 font-bold">Core Systems:</span>{" "}
                      <span className="text-slate-200">Kernel Synchronization, Vision Pipelines, Game Physics</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-bold">Track Record:</span>{" "}
                      <span className="text-slate-200">20+ Real Projects, 5+ Real Client Deployments</span>
                    </div>
                  </div>
                )}

                {activeTab === "merit" && (
                  <div className="space-y-1.5 text-slate-300">
                    <div className="text-amber-300 font-semibold">★ 9.46 CGPA in Diploma CE Semester 4</div>
                    <div className="text-sky-300">★ Multiple times 1st Rank in Semester 4 &amp; Top 3 (2x)</div>
                    <div className="text-indigo-300">★ 81.09% in SSC (Dayamayi Mata High School)</div>
                    <div className="text-purple-300">★ Google Student Ambassador 2026 (GID: 7908)</div>
                    <div className="text-emerald-300">★ Microsoft Responsible Generative AI Solution Badge</div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
