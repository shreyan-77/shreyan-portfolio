import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Download my resume to learn more about my experience and skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-xl mx-auto"
        >
          <div className="glass-hover rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <FileText size={28} className="text-primary-foreground" />
            </div>

            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Shreyan Sharma
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Full Stack Developer & AI Engineer — Resume
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/Shreyan_Sharma_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
              >
                <Download size={16} />
                Download PDF
              </a>
              <a
                href="/Shreyan_Sharma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium text-sm hover:bg-muted/50 transition-colors w-full sm:w-auto justify-center"
              >
                <Eye size={16} />
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
