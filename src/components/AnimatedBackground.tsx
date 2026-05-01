import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = document.documentElement.scrollHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = document.documentElement.scrollHeight;
    };
    window.addEventListener("resize", resize);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    // Floating orbs
    const orbs = [
      { x: w * 0.2, y: h * 0.15, r: 300, color: "276, 60%, 53%", speed: 0.0003, offset: 0 },
      { x: w * 0.8, y: h * 0.35, r: 250, color: "288, 93%, 78%", speed: 0.0004, offset: 2 },
      { x: w * 0.5, y: h * 0.6, r: 350, color: "276, 60%, 53%", speed: 0.00025, offset: 4 },
      { x: w * 0.15, y: h * 0.8, r: 200, color: "288, 93%, 78%", speed: 0.00035, offset: 1 },
      { x: w * 0.85, y: h * 0.7, r: 280, color: "276, 60%, 53%", speed: 0.0003, offset: 3 },
    ];

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      time++;

      // Draw orbs
      orbs.forEach((orb) => {
        const ox = orb.x + Math.sin(time * orb.speed + orb.offset) * 80;
        const oy = orb.y + Math.cos(time * orb.speed * 0.7 + orb.offset) * 60;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        grad.addColorStop(0, `hsla(${orb.color}, 0.06)`);
        grad.addColorStop(0.5, `hsla(${orb.color}, 0.02)`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(ox - orb.r, oy - orb.r, orb.r * 2, orb.r * 2);
      });

      // Draw and connect particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(276, 60%, 70%, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(276, 60%, 60%, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    // Re-measure height on scroll (for dynamic content)
    const resizeObserver = new ResizeObserver(() => {
      h = canvas.height = document.documentElement.scrollHeight;
    });
    resizeObserver.observe(document.body);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default AnimatedBackground;
