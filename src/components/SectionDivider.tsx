import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative py-4 flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-px w-full max-w-md"
      style={{ background: "var(--gradient-primary)" }}
    />
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="absolute w-2 h-2 rounded-full bg-accent"
      style={{ boxShadow: "0 0 20px hsl(var(--accent) / 0.6)" }}
    />
  </div>
);

export default SectionDivider;
