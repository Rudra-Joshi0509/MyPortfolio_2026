// Built using Hyperiux Vault & Optimized for Full Mobile & Desktop Responsiveness
"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { playCyberClick } from "@/utils/sound";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
} as const;

export type Month = keyof typeof monthOrder;

export type JourneyItem = {
  id: string;
  year: string;
  month: Month;
  content: string;
  title?: string;
  badge?: string;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  topData?: JourneyItem[];
  bottomData?: JourneyItem[];
  duration?: number;
  scrollDuration?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);
  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

const defaultTopJourneyData: JourneyItem[] = [
  {
    id: "2022-june",
    year: "2022",
    month: "June",
    title: "Secondary School Distinction",
    content: "Dayamayi Mata School: Completed Secondary Education with 81.09%, igniting an early passion for software & hardware architecture.",
    badge: "81.09% Distinction",
  },
  {
    id: "2024-december",
    year: "2024",
    month: "December",
    title: "20+ Software Projects & 5+ Clients",
    content: "Portfolio Milestones: Built 20+ software applications, completed client freelance contracts & mastered C#, Java, Python, and modern web systems.",
    badge: "20+ Projects / 5+ Clients",
  },
  {
    id: "2026-march",
    year: "2026",
    month: "March",
    title: "BharatCares AI Engineer Intern",
    content: "Developed real-world AI/ML models, intelligent image processing pipelines, and high-impact automated tools for community empowerment.",
    badge: "AI & Computer Vision",
  },
  {
    id: "2026-july",
    year: "2026",
    month: "July",
    title: "Google Student Ambassador '26",
    content: "Appointed Google Student Ambassador (GID: 7908): Championing technical developer communities, tech events, and Google AI initiatives.",
    badge: "GID: 7908",
  },
];

const defaultBottomJourneyData: JourneyItem[] = [
  {
    id: "2023-august",
    year: "2023",
    month: "August",
    title: "Enrolled in Diploma CE",
    content: "C. U. Shah Govt Polytechnic: Commenced Diploma in CE, diving deep into Operating Systems, Data Structures, and Game Development.",
    badge: "Polytechnic Merit",
  },
  {
    id: "2025-november",
    year: "2025",
    month: "November",
    title: "Sem 4 Rank 1 (9.46 CGPA) & ISTE",
    content: "Academic Distinction: Ranked 1st in Sem 4 with 9.46 CGPA, inducted into ISTE & completed SimpliLearn Growth Hacking.",
    badge: "9.46 CGPA & Rank 1",
  },
  {
    id: "2026-may",
    year: "2026",
    month: "May",
    title: "Microsoft SBTP Internship 2026",
    content: "Engineered enterprise-grade Generative AI pipelines and earned the official Microsoft Responsible AI Solution Badge.",
    badge: "Microsoft Certified",
  },
];

export default function Timeline({
  title = "Engineering Journey",
  periodLabel = "2022 — 2026",
  textColor = "#f1f5f9",
  mutedTextColor = "#94a3b8",
  activeColor = "#6366f1",
  backgroundColor = "#090d16",
  imageUrl = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  imageAlt = "Rudra Joshi Engineering Journey",
  topData = defaultTopJourneyData,
  bottomData = defaultBottomJourneyData,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  // Combine and sort all items chronologically
  const allJourneyItems = [
    ...topData,
    ...bottomData,
  ].sort((a, b) => {
    const yearDiff = Number(a.year) - Number(b.year);
    if (yearDiff !== 0) return yearDiff;
    return monthOrder[a.month] - monthOrder[b.month];
  });

  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  // Desktop Pinned Horizontal Scroll with GSAP
  useGSAP(() => {
    const section = desktopContainerRef.current;
    const slider = wholeSliderRef.current;

    if (!section || !slider || window.innerWidth < 768) return;

    // Calculate exact horizontal travel distance
    const getScrollDistance = () => slider.scrollWidth - section.clientWidth + 120;

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(slider, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          anticipatePin: 1,
          start: "top top",
          end: () => `+=${getScrollDistance() + 400}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              allJourneyItems.length - 1,
              Math.floor(self.progress * allJourneyItems.length)
            );
            setActiveMilestoneIndex(idx);
          },
        },
      });

      // Animate the horizontal journey line
      gsap.to(".journey-line", {
        width: "98%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 0.8,
        },
      });

      return () => {
        scrollTween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, { dependencies: [reducedMotion], scope: desktopContainerRef });

  // Interactive buttons to slide desktop track
  const slideToMilestone = (index: number) => {
    playCyberClick();
    setActiveMilestoneIndex(index);
    if (!wholeSliderRef.current || !desktopContainerRef.current) return;
    const totalItems = allJourneyItems.length;
    const maxScroll = wholeSliderRef.current.scrollWidth - desktopContainerRef.current.clientWidth + 120;
    const targetX = -(index / (totalItems - 1)) * maxScroll;
    gsap.to(wholeSliderRef.current, {
      x: targetX,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="w-full max-w-full overflow-hidden relative"
      style={{ backgroundColor, color: textColor }}
    >
      {/* ============================================================== */}
      {/* 1. DESKTOP VIEW (Pinned Horizontal Scroll with Zero Page Drag) */}
      {/* ============================================================== */}
      <div
        ref={desktopContainerRef}
        className="hidden md:block w-full max-w-full h-screen overflow-hidden relative"
      >
        {/* Interactive Desktop Milestone Navigation Bar */}
        <div className="absolute top-6 left-0 right-0 z-30 flex items-center justify-between px-8 max-w-7xl mx-auto pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-indigo-300 font-semibold px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/25">
              {periodLabel}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden lg:inline">
              Scroll down or click milestones to navigate &rarr;
            </span>
          </div>

          <div className="flex items-center gap-1.5 glass-panel p-1 rounded-2xl border-white/10">
            {allJourneyItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => slideToMilestone(idx)}
                className={`px-3 py-1 rounded-xl text-xs font-mono transition-all ${
                  activeMilestoneIndex === idx
                    ? "bg-indigo-500 text-white font-bold shadow-md shadow-indigo-500/30 scale-105"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => slideToMilestone(Math.max(0, activeMilestoneIndex - 1))}
              disabled={activeMilestoneIndex === 0}
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              title="Previous Milestone"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => slideToMilestone(Math.min(allJourneyItems.length - 1, activeMilestoneIndex + 1))}
              disabled={activeMilestoneIndex === allJourneyItems.length - 1}
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
              title="Next Milestone"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        {/* The Horizontal Sliding Track */}
        <div className="h-full w-full flex items-center pt-16 overflow-hidden">
          <div
            ref={wholeSliderRef}
            className="flex items-center gap-10 px-12 will-change-transform h-[75vh]"
            style={{ width: "max-content" }}
          >
            {/* Visual Intro Card */}
            <div className="w-[380px] h-[520px] shrink-0 rounded-3xl overflow-hidden glass-panel border-white/10 relative p-6 flex flex-col justify-between shadow-2xl">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-4 border border-white/10">
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-400/30">
                  {periodLabel}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                  From early secondary foundations to leading Google student initiatives, elite internships at BharatCares &amp; Microsoft, and securing Top Academic Ranks.
                </p>
                <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-300">
                  <Sparkles className="size-3.5 text-sky-400" />
                  <span>7 Major Career Milestones</span>
                </div>
              </div>
            </div>

            {/* Trajectory Axis Line & Milestone Columns */}
            <div className="relative flex items-center h-full" style={{ width: "max-content" }}>
              
              {/* Central Glowing Horizontal Guide Line */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-slate-800/80">
                <div className="journey-line h-full w-[10%] bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
              </div>

              {/* Milestones Flow */}
              <div className="flex items-center gap-14 relative z-10 px-8">
                {allJourneyItems.map((item, index) => {
                  const isTop = index % 2 === 0;
                  const isActive = activeMilestoneIndex === index;

                  return (
                    <div
                      key={item.id}
                      className="w-[340px] shrink-0 flex flex-col items-center justify-center relative"
                    >
                      {/* Top Card (if alternate) */}
                      <div className={`w-full transition-all duration-300 ${isTop ? "mb-16" : "invisible h-0 mb-0"}`}>
                        {isTop && (
                          <div
                            onClick={() => slideToMilestone(index)}
                            className={`cursor-pointer rounded-3xl p-6 glass-panel border transition-all duration-300 hover:-translate-y-1 ${
                              isActive
                                ? "border-indigo-400/50 shadow-[0_10px_30px_rgba(99,102,241,0.2)] bg-slate-900/80"
                                : "border-white/[0.08] hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-xs font-mono font-bold text-sky-300">
                                {item.month} {item.year}
                              </span>
                              {item.badge && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                              {item.title || `${item.year} Milestone`}
                            </h4>
                            <p className="text-xs text-slate-300 font-normal leading-relaxed">
                              {item.content}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Center Node Dot on the Trajectory Line */}
                      <div className="relative my-4 flex items-center justify-center">
                        <button
                          onClick={() => slideToMilestone(index)}
                          className={`size-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            isActive
                              ? "bg-indigo-500 border-white shadow-[0_0_15px_#6366f1] scale-125"
                              : "bg-slate-900 border-indigo-400/60 hover:border-white"
                          }`}
                        >
                          <div className={`size-2 rounded-full ${isActive ? "bg-white" : "bg-indigo-300"}`} />
                        </button>
                      </div>

                      {/* Bottom Card (if alternate) */}
                      <div className={`w-full transition-all duration-300 ${!isTop ? "mt-16" : "invisible h-0 mt-0"}`}>
                        {!isTop && (
                          <div
                            onClick={() => slideToMilestone(index)}
                            className={`cursor-pointer rounded-3xl p-6 glass-panel border transition-all duration-300 hover:translate-y-1 ${
                              isActive
                                ? "border-indigo-400/50 shadow-[0_10px_30px_rgba(99,102,241,0.2)] bg-slate-900/80"
                                : "border-white/[0.08] hover:border-white/20"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span className="text-xs font-mono font-bold text-sky-300">
                                {item.month} {item.year}
                              </span>
                              {item.badge && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                              {item.title || `${item.year} Milestone`}
                            </h4>
                            <p className="text-xs text-slate-300 font-normal leading-relaxed">
                              {item.content}
                            </p>
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE VIEW (Dedicated Vertical Interactive Timeline)        */}
      {/* ============================================================== */}
      <div className="block md:hidden px-4 py-12 max-w-lg mx-auto">
        
        {/* Mobile Header Banner */}
        <div className="rounded-3xl glass-panel p-5 border-white/[0.08] mb-8">
          <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 border border-white/10">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-400/30">
              {periodLabel}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight mb-1">
            {title}
          </h3>
          <p className="text-xs text-slate-300 font-normal leading-relaxed">
            Traverse Rudra's key milestones chronologically from 2022 to 2026.
          </p>
        </div>

        {/* Vertical Timeline Stem & Cards */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 pl-6 space-y-8">
          {allJourneyItems.map((item, index) => (
            <div key={`mobile-${item.id}`} className="relative group">
              
              {/* Glowing Node on the Vertical Stem */}
              <div className="absolute -left-[33px] top-1 size-5 rounded-full border-2 border-indigo-400 bg-slate-950 flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                <div className="size-2 rounded-full bg-sky-400" />
              </div>

              {/* Mobile Milestone Card */}
              <div className="rounded-2xl glass-panel p-5 border-white/[0.08] hover:border-indigo-400/40 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2">
                  <span className="text-xs font-mono font-bold text-sky-300 flex items-center gap-1">
                    <Calendar className="size-3 text-indigo-400" />
                    {item.month} {item.year}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {item.title || `${item.year} Milestone`}
                </h4>

                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {item.content}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
