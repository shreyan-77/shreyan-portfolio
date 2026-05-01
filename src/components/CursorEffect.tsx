import { useEffect, useRef } from "react";

const CursorEffect = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const onMouseDown = () => ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(0.8)`;
    const onMouseUp = () => ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(1)`;

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      requestAnimationFrame(animate);
    };

    // Hover effect on interactive elements
    const addHover = () => {
      document.querySelectorAll("a, button, input, textarea, [role='button']").forEach(el => {
        el.addEventListener("mouseenter", () => {
          ring.style.width = "50px";
          ring.style.height = "50px";
          ring.style.borderColor = "hsl(var(--accent))";
          ring.style.transform = `translate(${ringX - 25}px, ${ringY - 25}px)`;
        });
        el.addEventListener("mouseleave", () => {
          ring.style.width = "40px";
          ring.style.height = "40px";
          ring.style.borderColor = "hsl(var(--primary))";
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    requestAnimationFrame(animate);
    addHover();

    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ background: "hsl(var(--accent))" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] transition-[width,height,border-color] duration-200"
        style={{ border: "2px solid hsl(var(--primary))" }}
      />
    </>
  );
};

export default CursorEffect;
