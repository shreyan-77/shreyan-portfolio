import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Hls from "hls.js";

const HLS_URL =
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8";

const roles = ["Full Stack Developer", "AI/ML Engineer", "Problem Solver"];

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-10">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover mix-blend-screen opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Glow effect behind name */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-25"
        style={{ background: "var(--gradient-glow)" }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Intro pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Built projects with real-world impact
          </span>
        </motion.div>

        {/* Small intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-3"
        >
          Hi, I'm
        </motion.p>

        {/* Name — largest element */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-4 text-foreground"
          style={{ textShadow: "0 0 80px hsl(276 60% 53% / 0.3)" }}
        >
          Shreyan Sharma
        </motion.h1>

        {/* Rotating role with gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="h-10 md:h-12 mb-8 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="text-gradient font-display text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build scalable web applications and intelligent AI solutions that
          solve real-world problems and deliver measurable impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-all glow"
          >
            View My Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="/Shreyan_Sharma_Resume.pdf"
            download
            className="glass-hover px-8 py-3.5 rounded-xl text-sm font-semibold text-foreground flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default Hero;
