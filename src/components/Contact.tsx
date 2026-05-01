import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "shreyansharma76@gmail.com", href: "mailto:shreyansharma76@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 86391 65446", href: "tel:+918639165446" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vshreyansharma", href: "https://www.linkedin.com/in/vshreyansharma" },
  { icon: Github, label: "GitHub", value: "github.com/shreyan-77", href: "https://github.com/shreyan-77" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-hover rounded-xl p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                  <link.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm text-foreground font-medium">{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-6 space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              {submitted ? "Message Sent! ✓" : (
                <>
                  Send Message
                  <Send size={14} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
