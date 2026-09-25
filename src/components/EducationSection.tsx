import { GraduationCap, Award, BookOpen, CheckCircle2, Trophy, Star } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick } from "@/utils/sound";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono mb-4">
            <GraduationCap className="size-3.5 text-sky-400" />
            <span>ACADEMIC FOUNDATION &amp; MERIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Academic Honors
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-normal">
            Grounded in core computer engineering fundamentals with top-of-the-class academic records and applied technical coursework.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.education.map((edu) => {
            const isOngoing = edu.status.includes("Ongoing");
            return (
              <div
                key={edu.institution}
                className={`relative rounded-3xl p-7 sm:p-9 transition-all duration-300 ${
                  isOngoing
                    ? "glass-panel-glow border-indigo-400/30"
                    : "glass-panel border-white/[0.08] hover:border-white/20"
                }`}
              >
                {/* Ribbon Tag */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-mono text-indigo-300 font-semibold px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25">
                    {edu.period}
                  </span>
                  <span
                    className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full ${
                      isOngoing
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25"
                        : "bg-sky-500/15 text-sky-300 border border-sky-500/25"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Degree & School */}
                <h3 className="text-2xl font-bold text-white mb-1.5 tracking-tight">
                  {edu.degree}
                </h3>
                <h4 className="text-base text-slate-300 font-medium mb-5 flex items-center gap-2">
                  <span>{edu.institution}</span>
                </h4>

                {/* Score Spotlight Card */}
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/50 to-transparent border border-indigo-500/20 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {edu.scoreLabel}
                    </div>
                    <div className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-sky-200 to-indigo-300">
                      {edu.score}
                    </div>
                  </div>
                  {isOngoing ? (
                    <div className="flex flex-col items-end text-right">
                      <div className="flex items-center gap-1.5 text-amber-300 font-mono text-xs font-bold">
                        <Trophy className="size-4 text-amber-400" />
                        <span>Rank 1 Holder</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                        Multiple 1st in Sem 4 | Top 3 (2x)
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-sky-300 font-mono text-xs font-semibold">
                      <Award className="size-4 text-sky-400" />
                      <span>Distinction Aggregate</span>
                    </div>
                  )}
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {edu.details.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="size-4 text-sky-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Key Subjects */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen className="size-3.5 text-indigo-400" />
                    <span>Curriculum &amp; Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.keySubjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Highlights Banner */}
        <div className="mt-10 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/5 via-indigo-500/5 to-transparent p-6 flex flex-col md:flex-row items-center justify-between gap-4 glass-panel">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center text-amber-300 shrink-0">
              <Star className="size-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Academic Rank Distinction at C. U. Shah Polytechnic
              </h4>
              <p className="text-xs text-slate-300 font-normal mt-0.5">
                Maintaining a stellar 9.46 CGPA in Semester 4, securing 1st rank multiple times and top 3 twice across semester evaluations.
              </p>
            </div>
          </div>
          <a
            href="#journey-lead"
            onClick={() => playCyberClick()}
            className="px-4 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-200 text-xs font-mono font-medium transition-all shrink-0"
          >
            Track in Timeline &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
