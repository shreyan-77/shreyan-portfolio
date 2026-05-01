import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tech,
  impact,
  image,
  liveUrl,
  githubUrl,
  index
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-hover rounded-2xl overflow-hidden group relative"
    >
      {/* Animated border glow on hover */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        style={{ background: "var(--gradient-primary)", filter: "blur(8px)" }}
      />

      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Hover overlay with slide-up animation */}
        <motion.div
          initial={false}
          className="absolute inset-0 flex items-center justify-center gap-3"
        >
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              className="glass px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 text-foreground hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="glass px-4 py-2 rounded-lg font-medium flex items-center gap-1.5 text-foreground hover:bg-primary/20 transition-colors text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
            >
              <Github size={14} />
              GitHub
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Impact */}
        <div className="flex items-center gap-2 mb-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TrendingUp size={14} className="text-accent" />
          </motion.div>
          <span className="text-xs font-medium text-accent">{impact}</span>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.15)" }}
              className="text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground transition-colors"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
