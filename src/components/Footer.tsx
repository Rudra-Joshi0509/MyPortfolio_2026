import { ArrowUp, Mail, Terminal, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick } from "@/utils/sound";

export default function Footer() {
  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#05070e] border-t border-white/5 text-slate-400 font-mono text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Tagline */}
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Terminal className="size-4" />
          </div>
          <div>
            <div className="font-bold text-white tracking-wider">
              RUDRA JOSHI
            </div>
            <div className="text-[11px] text-slate-500">
              Future Computer Engineer &bull; Surendranagar, Gujarat
            </div>
          </div>
        </div>

        {/* Center note */}
        <div className="flex items-center gap-1.5 text-center text-slate-400">
          <span>Engineered with passion for systems, AI &amp; games.</span>
        </div>

        {/* Right Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberClick()}
            className="p-2 rounded-lg glass-panel hover:text-cyan-400 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playCyberClick()}
            className="p-2 rounded-lg glass-panel hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}`}
            onClick={() => playCyberClick()}
            className="p-2 rounded-lg glass-panel hover:text-cyan-400 transition-colors"
            title="Email"
          >
            <Mail className="size-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all hover:scale-105"
            title="Back to Top"
          >
            <ArrowUp className="size-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
