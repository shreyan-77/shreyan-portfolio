import { motion } from "framer-motion";

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Rotating diamond */}
    <motion.div
      animate={{ rotate: 360, y: [0, -20, 0] }}
      transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      className="absolute top-[15%] right-[10%] w-8 h-8 border border-primary/20 rotate-45"
    />
    {/* Pulsing circle */}
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[40%] left-[5%] w-16 h-16 rounded-full border border-accent/20"
    />
    {/* Floating plus */}
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[30%] right-[8%] text-primary/20 text-3xl font-light"
    >
      +
    </motion.div>
    {/* Drifting dot */}
    <motion.div
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[70%] left-[15%] w-3 h-3 rounded-full bg-accent/15"
    />
    {/* Small triangle */}
    <motion.div
      animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
      transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
      className="absolute top-[25%] left-[80%] w-0 h-0"
      style={{ borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderBottom: "10px solid hsl(var(--primary) / 0.15)" }}
    />
  </div>
);

export default FloatingShapes;
