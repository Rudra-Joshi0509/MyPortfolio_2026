import { useState, useEffect } from "react";
import {
  Code,
  FileText,
  Volume2,
  VolumeX,
  Menu,
  X,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick, toggleSound, isSoundEnabled } from "@/utils/sound";

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
    if (nextState) playCyberClick();
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#journey-lead" },
    { label: "Internships", href: "#internships" },
    { label: "Honors", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#090d16]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#about"
          onClick={() => playCyberClick()}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="size-9 rounded-xl bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent border border-indigo-400/30 flex items-center justify-center text-indigo-300 shadow-[0_2px_10px_rgba(99,102,241,0.15)] group-hover:scale-105 group-hover:border-indigo-400 transition-all">
            <Code className="size-4 text-indigo-300 group-hover:rotate-6 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tight text-white text-base sm:text-lg">
                Rudra<span className="text-indigo-400">.Joshi</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                Future CE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden md:block">
              AI &amp; Systems Explorer
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => playCyberClick()}
              className="px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Sound FX Button */}
          <button
            onClick={handleSoundToggle}
            className={`p-2 rounded-xl border transition-all ${
              soundOn
                ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20"
                : "bg-white/[0.03] border-white/[0.08] text-slate-400 hover:bg-white/[0.06]"
            }`}
            title={soundOn ? "Sound Effects ON" : "Sound Effects OFF"}
          >
            {soundOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
          </button>

          {/* Resume Trigger */}
          <button
            onClick={() => {
              playCyberClick();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] hover:border-indigo-400/30 text-slate-200 text-xs font-medium transition-all hover:scale-105"
          >
            <FileText className="size-3.5 text-sky-400" />
            <span>Resume</span>
          </button>

          {/* Connect CTA */}
          <a
            href="#contact"
            onClick={() => playCyberClick()}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 hover:from-indigo-400 hover:to-sky-400 text-white text-xs font-semibold shadow-[0_2px_15px_rgba(99,102,241,0.25)] transition-all hover:scale-105"
          >
            <Sparkles className="size-3.5" />
            <span>Connect</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => {
              playCyberClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 lg:hidden hover:bg-white/[0.08]"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#090d16]/95 border-b border-white/[0.08] backdrop-blur-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  playCyberClick();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.05] transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex items-center gap-3">
              <button
                onClick={() => {
                  playCyberClick();
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 text-xs font-medium"
              >
                <FileText className="size-4 text-sky-400" />
                View Resume ({PORTFOLIO_DATA.profile.resumeFileName})
              </button>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="p-2.5 rounded-xl bg-indigo-600 text-white flex items-center justify-center"
                title="Email Rudra"
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
