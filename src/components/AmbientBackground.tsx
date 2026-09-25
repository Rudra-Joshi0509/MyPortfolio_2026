import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
}

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize 60 soft stars
    const starCount = Math.min(65, Math.floor((width * height) / 22000));
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.6,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        baseAlpha: Math.random() * 0.4 + 0.15,
        alpha: Math.random() * 0.4 + 0.15,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      stars.forEach((star) => {
        // Drift
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > star.baseAlpha + 0.25 || star.alpha < star.baseAlpha - 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Mouse proximity reaction (gentle magnetic push)
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let extraAlpha = 0;

        if (dist < 140) {
          const force = (140 - dist) / 140;
          star.x -= (dx / dist) * force * 1.5;
          star.y -= (dy / dist) * force * 1.5;
          extraAlpha = force * 0.4;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 231, 255, ${Math.min(0.9, star.alpha + extraAlpha)})`;
        ctx.shadowColor = "rgba(147, 197, 253, 0.4)";
        ctx.shadowBlur = dist < 140 ? 6 : 2;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0d14]">
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.08), transparent 65%),
            radial-gradient(1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.04), transparent 75%)
          `,
        }}
      />

      {/* Soft Ambient Aurora Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/12 to-purple-600/08 blur-[150px] animate-pulse duration-[8000ms]" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-sky-500/10 to-teal-500/06 blur-[160px] animate-pulse duration-[10000ms]" />
      <div className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-violet-600/10 to-indigo-600/08 blur-[180px] animate-pulse duration-[12000ms]" />

      {/* Gentle Constellation & Star Dust Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
    </div>
  );
}
