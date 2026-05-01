import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  // Extract number and suffix from value like "90%+" or "200+"
  const numMatch = value.match(/(\d+)/);
  const num = numMatch ? parseInt(numMatch[1]) : 0;
  const prefix = value.slice(0, value.indexOf(numMatch?.[0] || ""));
  const suffix = value.slice((value.indexOf(numMatch?.[0] || "") + (numMatch?.[0]?.length || 0)));

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * num);
      setDisplay(String(start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, num]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="font-display text-3xl md:text-4xl font-bold text-gradient">
        {prefix}{display}{suffix}
      </span>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
