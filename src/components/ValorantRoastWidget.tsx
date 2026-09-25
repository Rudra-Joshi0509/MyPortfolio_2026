import { useState } from "react";
import { Flame, RefreshCw, Skull } from "lucide-react";
import { playCyberClick, playSuccessChime } from "@/utils/sound";

const ROASTS: Record<string, string[]> = {
  Iron: [
    "You crosshair place like you are admiring the map's ceiling architecture.",
    "Your utility does more damage to your teammates' mental health than the enemy team.",
    "Even the training range bots request a timeout after spectating you.",
    "You don't play off angles, you play forgotten angles.",
  ],
  Bronze: [
    "You buy an Odin on eco rounds and still manage to miss all 100 bullets.",
    "Your map awareness is like Internet Explorer trying to load a 4K livestream.",
    "You rotate so slow the spike defuses itself out of boredom.",
  ],
  Silver: [
    "You watch 4 hours of Radiant highlight reels every day just to flash yourself at round start.",
    "You insta-lock Reyna, lurk on the opposite side of the map, and blame the Sage.",
    "Aim of a gold player, decision-making of a broken toaster.",
  ],
  Gold: [
    "Peak hardstuck royalty. You give coaching advice to teammates while bottom-fragging 3-17.",
    "Your ego is Immortal 3, but your match history looks like a red barcode.",
    "You crouch-spray before you even see an enemy pixel.",
  ],
  Platinum: [
    "One game away from Diamond, but then the ranked lottery hands you 5 straight overtime losses.",
    "You blame 128-tick servers for missing a stationary target 2 meters away.",
    "You think you're the next TenZ, but you're just Ten-Deaths.",
  ],
  Diamond: [
    "You have radiant lineups for maps that aren't even in the competitive pool right now.",
    "Your tracker score is 99% pride and 1% team utility.",
    "Tilt-queueing at 3 AM is your full-time profession.",
  ],
  Radiant: [
    "Congratulations, you have officially spent 4,000 hours mastering a game just to get roasted by Rudra's AI.",
    "Grass? Sunlight? Shower? Never heard of those agents before.",
  ],
};

export default function ValorantRoastWidget() {
  const [selectedRank, setSelectedRank] = useState("Silver");
  const [currentRoast, setCurrentRoast] = useState(
    "You watch 4 hours of Radiant highlight reels every day just to flash yourself at round start."
  );
  const [isRoasting, setIsRoasting] = useState(false);

  const ranks = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Radiant"];

  const generateRoast = (rank: string) => {
    playCyberClick();
    setSelectedRank(rank);
    setIsRoasting(true);

    setTimeout(() => {
      const rankRoasts = ROASTS[rank] || ROASTS["Silver"];
      const randomRoast = rankRoasts[Math.floor(Math.random() * rankRoasts.length)];
      setCurrentRoast(randomRoast);
      setIsRoasting(false);
      playSuccessChime();
    }, 250);
  };

  return (
    <div className="rounded-3xl glass-panel border-rose-500/20 bg-gradient-to-br from-rose-950/20 via-slate-900/60 to-[#090d16] p-6 sm:p-7 shadow-xl">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
          <Flame className="size-4 text-rose-400" />
          <span>Interactive Mini-App: Valorant Tactical Roast</span>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/25">
          LIVE DEMO
        </span>
      </div>

      <p className="text-xs text-slate-300 mb-4 font-normal">
        Select a rank below to test the dynamic roast generation engine:
      </p>

      {/* Rank Selector Pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {ranks.map((rank) => (
          <button
            key={rank}
            onClick={() => generateRoast(rank)}
            className={`px-3 py-1 rounded-xl text-xs font-medium transition-all ${
              selectedRank === rank
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30 scale-105"
                : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            {rank}
          </button>
        ))}
      </div>

      {/* Roast Output Box */}
      <div className="relative rounded-2xl border border-white/[0.08] bg-black/40 p-4 font-mono text-xs sm:text-sm text-rose-100 min-h-[75px] flex items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Skull className="size-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="text-rose-400 font-semibold block mb-0.5 text-xs">
              [Competitive Tier: {selectedRank}]
            </span>
            <p className={isRoasting ? "opacity-30 italic" : "opacity-100"}>
              "{currentRoast}"
            </p>
          </div>
        </div>

        <button
          onClick={() => generateRoast(selectedRank)}
          disabled={isRoasting}
          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-rose-300 border border-white/10 shrink-0 transition-transform active:rotate-180"
          title="Roll another roast"
        >
          <RefreshCw className={`size-4 ${isRoasting ? "animate-spin" : ""}`} />
        </button>
      </div>
    </div>
  );
}
