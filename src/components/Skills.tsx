import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Terminal } from "lucide-react";
import FloatingShapes from "./FloatingShapes";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Socket.io"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Prisma"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "NLP"],
  },
  {
    title: "Languages",
    icon: Terminal,
    skills: ["JavaScript", "Python", "C++", "Java", "SQL"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring" as const, stiffness: 100 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <FloatingShapes />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A curated toolkit for building modern, intelligent applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.2 } }}
              className="glass-hover rounded-2xl p-6 group relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.08), transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center"
                  >
                    <group.icon size={18} className="text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.05 }}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
