import { useState } from "react";
import {
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  FileText,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playCyberClick, playSuccessChime } from "@/utils/sound";
import confetti from "canvas-confetti";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("Internship / Project Opportunity");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    playSuccessChime();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#6366f1", "#38bdf8", "#10b981", "#fbbf24"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    playSuccessChime();
    setSentSuccess(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
    });

    // Generate mailto link
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello Rudra,\n\nFrom: ${senderName} (${senderEmail})\n\nMessage:\n${message}`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  const quickSubjects = [
    "Internship Opportunity",
    "Freelance Client Project",
    "AI / ML Collaboration",
    "Technical Mentorship",
  ];

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-mono mb-4">
            <Mail className="size-3.5 text-sky-400" />
            <span>GET IN TOUCH &amp; COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect with Rudra Joshi
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-normal">
            Open to engineering internships, cutting-edge AI &amp; systems projects, freelance client work, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contacts & Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with One-Click Copy */}
            <div className="rounded-3xl glass-panel p-7 sm:p-8 relative overflow-hidden border-white/[0.08] hover:border-indigo-400/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-500/15 text-indigo-300 border border-indigo-400/25">
                  <Mail className="size-6 text-sky-400" />
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                  RESPONSIVE IN &lt;24H
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Direct Email Address
              </div>
              <div className="text-lg sm:text-xl font-bold font-mono text-white mb-5 break-all">
                {PORTFOLIO_DATA.profile.email}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 hover:from-indigo-400 hover:to-sky-400 text-white text-xs font-semibold transition-all shadow-[0_4px_15px_rgba(99,102,241,0.25)] hover:scale-[1.02]"
                >
                  {copied ? (
                    <>
                      <Check className="size-4" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  onClick={() => playCyberClick()}
                  className="px-4 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-indigo-400/30 text-xs font-medium transition-all"
                  title="Open default email client"
                >
                  Open Mailto &rarr;
                </a>
              </div>
            </div>

            {/* Social & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberClick()}
                className="glass-panel p-5 rounded-2xl hover:border-sky-400/30 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-400/25">
                    <LinkedinIcon className="size-5" />
                  </div>
                  <ExternalLink className="size-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
                  <div className="text-sm font-semibold text-white mt-0.5 group-hover:text-sky-300 transition-colors">
                    in/rudra-joshi0509
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberClick()}
                className="glass-panel p-5 rounded-2xl hover:border-indigo-400/30 transition-all group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-400/25">
                    <GithubIcon className="size-5" />
                  </div>
                  <ExternalLink className="size-3.5 text-slate-500 group-hover:text-indigo-300 transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">GitHub</div>
                  <div className="text-sm font-semibold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">
                    @Rudra-Joshi0509
                  </div>
                </div>
              </a>

            </div>

            {/* Location & Resume Quick Trigger */}
            <div className="glass-panel p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-400/25">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white">
                    {PORTFOLIO_DATA.profile.location}
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  playCyberClick();
                  onOpenResume();
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 border border-white/10 text-xs font-medium transition-all hover:scale-105"
              >
                <FileText className="size-3.5 text-sky-400" />
                <span>Resume JPG</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-9 rounded-3xl border-white/[0.08] relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">
                  <MessageSquare className="size-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-slate-400">
                    Direct inquiry to Rudra Joshi
                  </p>
                </div>
              </div>

              {/* Quick Subject Suggestions */}
              <div className="mb-6">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Select Topic:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickSubjects.map((qs) => (
                    <button
                      key={qs}
                      type="button"
                      onClick={() => {
                        playCyberClick();
                        setSubject(qs);
                      }}
                      className={`text-xs px-3 py-1 rounded-lg transition-all ${
                        subject === qs
                          ? "bg-indigo-500 text-white font-medium shadow-sm"
                          : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      {qs}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Recruiter / Collaborator"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1.5 font-medium">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, internship role, or opportunity..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.08] text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-indigo-600 hover:from-indigo-400 hover:to-sky-400 text-white text-sm font-semibold tracking-wide shadow-[0_4px_20px_rgba(99,102,241,0.25)] transition-all hover:scale-[1.01]"
                >
                  <Send className="size-4" />
                  <span>Send Message via Mail Client</span>
                </button>

                {sentSuccess && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2">
                    <Check className="size-4" />
                    <span>Inquiry ready! Email client opened with pre-filled content.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
