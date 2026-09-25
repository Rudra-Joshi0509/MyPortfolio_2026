import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const particles = useRef<Particle[]>([]);
  const lastSpawnTime = useRef(0);

  const colors = [
    "rgba(99, 102, 241, ", // Indigo
    "rgba(56, 189, 248, ", // Sky
    "rgba(168, 85, 247, ", // Violet
    "rgba(52, 211, 153, ", // Emerald
    "rgba(251, 191, 36, ", // Amber
  ];

  useEffect(() => {
    // Detect touch-only devices
    if (typeof window !== "undefined") {
      const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      if (isTouchDevice) {
        setIsTouch(true);
        return;
      }
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse movement
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      mousePos.current = { x, y };

      if (!isVisible) setIsVisible(true);

      // Update global CSS variables for ambient background spotlight
      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);

      // Spawn subtle particle trail on movement (throttled to every 30ms)
      const now = performance.now();
      if (now - lastSpawnTime.current > 30) {
        lastSpawnTime.current = now;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;

        particles.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.3, // slight upward float
          size: Math.random() * 2.5 + 1.2,
          alpha: 0.8,
          color,
        });

        // Cap particles for peak performance
        if (particles.current.length > 45) {
          particles.current.shift();
        }
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Hover state detection on clickable items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const clickable = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-hover'
      );
      setIsHovering(!!clickable);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Animation loop (lerp ring + render particles)
    let animationFrameId: number;

    const animate = () => {
      // 1. Move core dot directly with hardware acceleration
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // 2. Smooth lerp for trailing ring
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // 3. Render delicate floating particle trail
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.022; // gentle fade
        p.size *= 0.97;

        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.current.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = `${p.color}0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <>
      {/* Particle Canvas for Movement Trail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Trailing Fluid Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out ${
          isHovering
            ? "size-12 border border-sky-400/60 bg-sky-400/10 shadow-[0_0_20px_rgba(56,189,248,0.25)] scale-110"
            : "size-8 border border-indigo-400/40 bg-indigo-500/5 shadow-[0_0_12px_rgba(99,102,241,0.2)]"
        }`}
        style={{
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
        }}
      />

      {/* Precision Core Dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ${
          isHovering
            ? "size-2 bg-sky-300 shadow-[0_0_10px_#38bdf8] scale-150"
            : "size-2 bg-indigo-400 shadow-[0_0_8px_#818cf8]"
        }`}
        style={{
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
