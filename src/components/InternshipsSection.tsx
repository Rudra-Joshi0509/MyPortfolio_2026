import { Briefcase, Calendar, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function InternshipsSection() {
  return (
    <section id="internships" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono mb-4">
            <Briefcase className="size-3.5 text-sky-400" />
            <span>INDUSTRY APPRENTICESHIP &amp; IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internships &amp; Professional Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-normal">
            Applying theoretical knowledge to real-world machine learning pipelines, computer vision systems, and certified Responsible Generative AI deployments.
          </p>
        </div>

        {/* Internships Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.internships.map((internship) => {
            const isMicrosoft = internship.company.toLowerCase().includes("microsoft");
            return (
              <div
                key={internship.company}
                className="rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden glass-panel border-white/[0.08] hover:border-indigo-400/30"
              >
                <div>
                  {/* Top Meta Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-indigo-300 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25">
                      <Calendar className="size-3.5 text-sky-400" />
                      {internship.period}
                    </span>
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                      {internship.mode}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {internship.role}
                    </h3>
                    <h4 className="text-base font-semibold text-slate-300 mt-1 flex items-center gap-2">
                      <Building2 className="size-4 text-indigo-400" />
                      <span>{internship.company}</span>
                    </h4>
                  </div>

                  {/* Microsoft Badge Spotlight Callout */}
                  {internship.certificateOrBadgeNote && (
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-sky-950/20 to-transparent border border-indigo-400/20 flex items-start gap-3">
                      <ShieldCheck className="size-5 text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white font-mono">
                          Official Credential Earned:
                        </div>
                        <div className="text-xs text-indigo-200 mt-0.5">
                          {internship.certificateOrBadgeNote}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-6">
                    {internship.description.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="size-4 text-sky-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Technologies Applied
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {internship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
