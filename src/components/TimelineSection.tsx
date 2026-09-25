import Timeline from "@/components/ui/timeline";
import { Sparkles, Milestone, ArrowDown } from "lucide-react";
import { playCyberClick } from "@/utils/sound";

export default function TimelineSection() {
  return (
    <div id="journey-lead" className="relative bg-[#090d16] text-white">
      {/* Lead-in introduction before horizontal pinning */}
      <section className="min-h-[45vh] flex flex-col items-center justify-center gap-4 px-6 text-center pt-24 pb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono">
          <Milestone className="size-3.5 text-sky-400" />
          <span>CAREER ROADMAP &amp; PROGRESSION</span>
        </div>

        <h2 className="max-w-3xl text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight text-white">
          Journey &amp; Milestones
        </h2>

        <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400 font-normal">
          Explore the journey from early secondary foundations to Google leadership, elite internships at BharatCares &amp; Microsoft, and academic rank distinction.
        </p>

        <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs mt-2 animate-bounce">
          <span>Explore Milestones</span>
          <ArrowDown className="size-4 text-sky-400" />
        </div>
      </section>

      {/* The Pinning GSAP Horizontal Timeline Component */}
      <Timeline
        title="Rudra's Roadmap"
        periodLabel="2022 — 2026"
        backgroundColor="#090d16"
        textColor="#ffffff"
        mutedTextColor="#94a3b8"
        activeColor="#6366f1"
        imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Rudra Joshi Engineering Journey"
        duration={1.2}
      />

      {/* Smooth transition bridge */}
      <section className="py-12 flex items-center justify-center px-6 text-center text-xs sm:text-sm font-mono text-slate-400 border-b border-white/[0.06] bg-[#090d16]">
        <div className="flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>Continuing into 2026 with elite internships, cloud badges &amp; Google leadership.</span>
        </div>
      </section>
    </div>
  );
}
