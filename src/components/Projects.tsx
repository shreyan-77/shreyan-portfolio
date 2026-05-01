import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import FloatingShapes from "./FloatingShapes";
import projectLearnLead from "../assets/project-learnlead.jpg";
import projectRetinal from "../assets/project-retinal.jpg";
import projectCodeReviewer from "../assets/project-code-reviewer.jpg";
import projectMovieRecommender from "../assets/project-movie-recommender.jpg";
import projectSignLanguage from "../assets/project-sign-language.jpg";

const projects = [
  {
    title: "Retinal Disease Detection",
    description: "Deep learning CNN model for early detection of retinal diseases from fundus images with clinical-grade accuracy.",
    tech: ["Python", "TensorFlow", "OpenCV", "Keras", "NumPy"],
    impact: "90%+ detection accuracy",
    image: projectRetinal,
    githubUrl: "https://github.com/shreyan-77/retinal-vascular-disease-detection",
  },
  {
    title: "LearnNLead",
    description: "Full-stack ed-tech platform with real-time collaboration, course management, and analytics dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    impact: "30% faster UI performance",
    image: projectLearnLead,
    githubUrl: "https://github.com/shreyan-77/LearnNlead-",
  },
  {
    title: "AI Code Reviewer",
    description: "Automated code review tool using LLMs to detect bugs, suggest improvements, and enforce best practices.",
    tech: ["Python", "OpenAI API", "FastAPI", "React", "Docker"],
    impact: "200+ bugs detected",
    image: projectCodeReviewer,
    githubUrl: "https://github.com/shreyan-77/CODE-REVIEW-BackEnd",
    liveUrl: "https://codereviewer-omega.vercel.app/",
  },
  {
    title: "Movie Recommender System",
    description: "Content-based and collaborative filtering recommendation engine with personalized suggestions.",
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "React"],
    impact: "92% recommendation accuracy",
    image: projectMovieRecommender,
    githubUrl: "https://github.com/shreyan-77/Movie-recommender-system-new",
    liveUrl: "https://shreyans-movie-recommender.streamlit.app/",
  },
  {
    title: "Sign Language Recognition",
    description: "Real-time hand gesture recognition system using computer vision and deep learning for accessibility.",
    tech: ["Python", "MediaPipe", "TensorFlow", "OpenCV"],
    impact: "89% recognition accuracy",
    image: projectSignLanguage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <FloatingShapes />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real-world solutions built with modern tech stacks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
