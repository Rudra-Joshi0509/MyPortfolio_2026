import {
  Trophy,
  Award,
  ShieldCheck,
  Globe,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSuccessChime } from "@/utils/sound";
import confetti from "canvas-confetti";

export default function AchievementsSection() {
  const handleBadgeClick = (title: string) => {
    playSuccessChime();
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#6366f1", "#f59e0b", "#38bdf8", "#10b981"],
    });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return Globe;
      case "ShieldCheck":
        return ShieldCheck;
      case "Award":
        return Award;
      case "Trophy":
        return Trophy;
      case "TrendingUp":
        return TrendingUp;
      default:
        return Trophy;
    }
  };

  return (
    <section id="achievements" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-mono mb-4">
            <Trophy className="size-3.5 text-amber-400" />
            <span>HONORS, BADGES &amp; CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; Accolades
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-normal">
            Recognized by global technology leaders, national educational councils, and academic evaluation committees.
          </p>
          <p className="mt-2 text-xs font-mono text-indigo-300">
            ★ Click any credential card to celebrate verification
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.achievements.map((ach) => {
            const Icon = getIcon(ach.iconName);
            const isGoogle = ach.id.includes("google");
            const isMicrosoft = ach.id.includes("microsoft");
            const isAcademic = ach.category === "Academic";

            return (
              <div
                key={ach.id}
                onClick={() => handleBadgeClick(ach.title)}
                className={`cursor-pointer rounded-3xl p-7 transition-all duration-300 relative group hover:-translate-y-1 glass-panel border-white/[0.08] ${
                  isGoogle
                    ? "hover:border-sky-400/40 hover:shadow-[0_8px_30px_rgba(56,189,248,0.15)]"
                    : isMicrosoft
                    ? "hover:border-indigo-400/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)]"
                    : isAcademic
                    ? "hover:border-amber-400/40 hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)]"
                    : "hover:border-white/20"
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                    {ach.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    {ach.year}
                  </span>
                </div>

                {/* Badge Icon & Highlight Tag */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-13 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                    <Icon className="size-6 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">
                      {ach.issuer}
                    </span>
                    <span className="inline-block text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 mt-0.5">
                      {ach.highlight}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-indigo-200 transition-colors">
                  {ach.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal mb-5">
                  {ach.description}
                </p>

                {/* Interactive Status indicator */}
                <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="size-3.5" />
                    Verified Credential
                  </span>
                  <span className="text-slate-500 group-hover:text-indigo-300 transition-colors">
                    Celebrate &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
