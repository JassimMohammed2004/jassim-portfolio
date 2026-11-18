// Centralized Portfolio Data for Jassim Mohammed
// Authentic facts only — no invented stats, metrics, or claims.

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  highlights: string[];
  accentColor: string;
}

export const profile = {
  name: "Jassim Mohammed",
  firstName: "Jassim",
  lastName: "Mohammed",
  role: "AI & Machine Learning Engineer | Software Developer",
  shortRole: "AI/ML Engineer",
  tagline:
    "Building intelligent systems through AI, machine learning, and software engineering.",
  bio: [
    "I am an Artificial Intelligence & Data Science graduate engineer with a deep passion for designing practical machine learning solutions and scalable intelligent software.",
    "Having completed my B.Tech in Artificial Intelligence and Data Science, I bridge mathematical theory with production-grade code: training statistical classifiers, integrating foundation models, constructing reliable data pipelines, and architecting performant full-stack systems.",
  ],
  educationSummary: "B.Tech in Artificial Intelligence & Data Science (Completed / Graduated)",
  location: "Kottayam, Kerala, India",
  email: "jassim974685@gmail.com",
  phone: "+91 9746859565",
  github: "https://github.com/jassim-mohammed",
  linkedin: "https://www.linkedin.com/in/jassim-mohammed",
  availableForWork: true,
};

export const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Scikit-learn",
      "Deep Learning",
      "AI",
      "LLM integration",
    ],
  },
  {
    category: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Data Analysis", "Data Visualization"],
  },
  {
    category: "Backend & Development",
    skills: ["Flask", "FastAPI", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman"],
  },
];

// Strictly approved projects: Network Intrusion Detection System, Alexa AI Voice Assistant, Collabify AI
// Excluded per user instructions: Garden City Properties, Midhula Farm Hut, Web Scraping Project
export const projects: ProjectItem[] = [
  {
    id: "nids-ml",
    title: "Network Intrusion Detection System",
    subtitle: "Autonomous ML Defense & Telemetry Classification",
    category: "Machine Learning & Network Security",
    description:
      "A high-precision machine learning system engineered to inspect streaming network packet features, isolate anomalous behavioral signatures, and autonomously classify hostile network intrusions in real time.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis", "Security"],
    githubUrl: null, // Staging placeholder
    liveUrl: null,
    highlights: [
      "Feature extraction, protocol discretization & normalization pipeline",
      "Multi-class anomaly classifier benchmarking malicious attack patterns",
      "Robust statistical evaluation against adversarial network flows",
    ],
    accentColor: "#C5F82A",
  },
  {
    id: "alexa-voice-assistant",
    title: "Alexa AI Voice Assistant",
    subtitle: "Conversational Acoustic Pipeline & Task Automation",
    category: "AI & Natural Language Systems",
    description:
      "A personal AI voice assistant application integrating continuous speech recognition, lexical intent parsing, and automated response synthesis for hands-free workflow automation and machine control.",
    tags: ["Python", "AI", "Speech Recognition", "Automation", "NLP"],
    githubUrl: null, // Staging placeholder
    liveUrl: null,
    highlights: [
      "Real-time audio stream acquisition & acoustic-to-text inference",
      "Intent mapping & multi-threaded task automation execution",
      "Context-aware voice feedback with low-latency audio synthesis",
    ],
    accentColor: "#38bdf8",
  },
  {
    id: "collabify-ai",
    title: "Collabify AI",
    subtitle: "Distributed Collaboration & Workspace Intelligence",
    category: "Intelligent Collaboration Platform",
    description:
      "An AI-augmented collaboration architecture conceived to empower distributed engineering teams, synthesize multi-document knowledge streams, and streamline technical communication via modular microservices.",
    tags: ["Python", "FastAPI", "LLM integration", "REST APIs", "JavaScript"],
    githubUrl: null, // Staging placeholder
    liveUrl: null,
    highlights: [
      "Dynamic prompt engineering & contextual document intelligence",
      "Modular microservice integration built upon high-throughput FastAPI endpoints",
      "Synchronous state synchronization across collaborative team canvases",
    ],
    accentColor: "#a78bfa",
  },
];

export const experience = [
  {
    organization: "Oasis Infobyte",
    role: "Python Online Internship",
    period: "Internship Completed",
    description:
      "Developed modular Python software utilities, implemented algorithmic solutions, and built automated test and data handling scripts.",
  },
  {
    organization: "SMEC Technology, Ernakulam",
    role: "Data Science Internship",
    period: "Internship Completed",
    description:
      "Executed end-to-end data science workflows spanning exploratory data analysis, dataset preprocessing, feature engineering, and predictive model validation.",
  },
];

export const education = [
  {
    period: "Completed & Graduated",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Dhanalakshmi Srinivasan University, Tamil Nadu",
    statusBadge: "Graduated",
    detail: "Bachelor of Technology — Specialization in Artificial Intelligence and Data Science (Degree Completed)",
  },
  {
    period: "Completed",
    degree: "Higher Secondary Education (Class XII)",
    institution: "St John the Baptist's HSS, Nedumkunnam, Kerala",
    statusBadge: "93%",
    detail: "Core Sciences & Mathematics — Final Academic Score: 93%",
  },
  {
    period: "Completed",
    degree: "Secondary School Leaving Certificate (Class X)",
    institution: "St John the Baptist's HSS, Nedumkunnam, Kerala",
    statusBadge: "96%",
    detail: "General Academics & Foundation Sciences — Final Academic Score: 96%",
  },
];

export const research = [
  {
    title: "Advancement in AI for Sustainable Agriculture",
    type: "Academic Presentation",
    description:
      "Presented research analyzing the application of predictive machine learning models and sensor data fusion toward optimized crop yields and sustainable agronomy.",
  },
  {
    title: "Machine Vision in Agriculture",
    type: "Academic Presentation",
    description:
      "Investigated convolutional neural structures and optical sensing pipelines applied to real-time plant pathology diagnosis and quality grading.",
  },
];

export const seminars = [
  {
    title: "AVG Conclave 2025",
    organizer: "DSU Preambular",
    role: "Academic Delegate & Participant",
  },
];

export const certifications = [
  {
    title: "Python Programming",
    issuer: "Oasis Infobyte",
    field: "Software Engineering",
  },
  {
    title: "Complete Course on Excelling at Business and Management",
    issuer: "Sproltts",
    field: "Professional Leadership",
  },
];

export const languages = ["English", "Malayalam", "Tamil"];

export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];
