import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <User size={14} className="text-accent" />
            <span className="text-xs uppercase tracking-widest text-muted-foreground">About Me</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Building the future,{" "}
            <span className="text-gradient">one project at a time.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            I'm a final-year AI/ML student passionate about creating technology that makes
            a real difference. With expertise in{" "}
            <span className="text-foreground font-medium">React, Node.js, MongoDB, Python, and TensorFlow</span>,
            I specialize in building full-stack web applications and intelligent AI systems.
          </p>

          <p className="text-muted-foreground text-lg leading-relaxed">
            From building full-stack platforms to training high-accuracy AI models,
            I focus on creating products that actually work well and solve real problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
