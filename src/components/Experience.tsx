import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "AI/ML Intern",
    company: "Research Lab",
    period: "2024",
    description: "Developed and optimized machine learning models for production deployment, improving prediction accuracy.",
    impact: "+18% accuracy improvement",
  },
  {
    icon: Award,
    title: "Hackathon Finalist",
    company: "National Hackathon",
    period: "2024",
    description: "Built an innovative AI-powered solution in 48 hours, competing against 120+ teams nationwide.",
    impact: "Top 30 out of 120+ teams",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-6 top-0 w-px origin-top"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="glass-hover rounded-2xl p-6 flex gap-5 ml-12 relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                  className="absolute -left-[33px] top-8 w-3 h-3 rounded-full bg-accent"
                  style={{ boxShadow: "0 0 12px hsl(var(--accent) / 0.5)" }}
                />

                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <exp.icon size={20} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                    <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full"
                  >
                    <Award size={12} />
                    {exp.impact}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
