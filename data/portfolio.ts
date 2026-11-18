// Centralized Portfolio Data for Jassim Mohammed
// Authentic facts only — no invented stats, metrics, or claims.

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  highlights?: string[];
}

export const profile = {
  name: "Jassim Mohammed",
  firstName: "Jassim",
  lastName: "Mohammed",
  role: "AI/ML Engineer & Software Developer",
  shortRole: "AI/ML Engineer",
  tagline:
    "Building intelligent systems through AI, machine learning, and software engineering.",
  bio: [
    "I am an Artificial Intelligence & Data Science engineer focused on designing practical machine learning solutions and intelligent software systems.",
    "My technical focus spans statistical learning, deep learning model integration, data pipeline engineering, and building resilient backend architectures that bridge machine intelligence with real-world applications.",
  ],
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
    category: "Machine Learning & Security",
    description:
      "A machine learning-based network security system designed to analyze traffic flow patterns, identify anomalous behaviors, and classify malicious intrusion attempts in real time.",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis", "Security"],
    githubUrl: null, // Placeholder in centralized data until repository is published
    liveUrl: null,
    highlights: [
      "Traffic feature extraction & normalization pipeline",
      "Multi-class anomaly classification model",
      "Evaluation against structured intrusion benchmark datasets",
    ],
  },
  {
    id: "alexa-voice-assistant",
    title: "Alexa AI Voice Assistant",
    category: "AI & Natural Language Systems",
    description:
      "A personal AI voice assistant application integrating speech recognition, command parsing, and automated response generation for hands-free desktop and task automation.",
    tags: ["Python", "AI", "Speech Recognition", "Automation", "NLP"],
    githubUrl: null, // Placeholder in centralized data until repository is published
    liveUrl: null,
    highlights: [
      "Real-time voice capture & speech-to-text processing",
      "Intent mapping and multi-action command execution",
      "Audio playback & intelligent conversational responses",
    ],
  },
  {
    id: "collabify-ai",
    title: "Collabify AI",
    category: "Intelligent Collaboration Platform",
    description:
      "An AI-powered collaboration project conceptualized to enhance team workflows, assist document synthesis, and streamline communication through integrated AI workflows.",
    tags: ["Python", "FastAPI", "LLM integration", "REST APIs", "JavaScript"],
    githubUrl: null, // Placeholder in centralized data until repository is published
    liveUrl: null,
    highlights: [
      "Intelligent workflow orchestration & shared workspaces",
      "Context-aware prompt and document synthesis interfaces",
      "Modular microservice integration via clean REST APIs",
    ],
  },
];

export const experience = [
  {
    organization: "Oasis Infobyte",
    role: "Python Online Internship",
    period: "Internship",
    description:
      "Worked on core Python programming tasks, developing automation scripts, algorithm implementations, and applied problem-solving modules.",
  },
  {
    organization: "SMEC Technology, Ernakulam",
    role: "Data Science Internship",
    period: "Internship",
    description:
      "Engaged in hands-on data science workflows including data cleaning, exploratory data analysis, and predictive modeling practices.",
  },
];

export const education = [
  {
    period: "2022 — 2026",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Dhanalakshmi Srinivasan University, Tamil Nadu",
    detail: "Currently pursuing undergraduate degree",
  },
  {
    period: "Higher Secondary",
    degree: "Higher Secondary Education (Class XII)",
    institution: "St John the Baptist's HSS, Nedumkunnam, Kerala",
    detail: "Academic Score: 93%",
  },
  {
    period: "Secondary (SSLC)",
    degree: "Secondary School Leaving Certificate (Class X)",
    institution: "St John the Baptist's HSS, Nedumkunnam, Kerala",
    detail: "Academic Score: 96%",
  },
];

export const research = [
  {
    title: "Advancement in AI for Sustainable Agriculture",
    type: "Paper Presentation",
    description:
      "Presented research on leveraging machine learning and data-driven methods for sustainable farming practices and crop monitoring.",
  },
  {
    title: "Machine Vision in Agriculture",
    type: "Paper Presentation",
    description:
      "Explored visual recognition systems and computer vision algorithms applied to agricultural health assessment and automated sorting.",
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
    field: "Software Development",
  },
  {
    title: "Complete Course on Excelling at Business and Management",
    issuer: "Sproltts",
    field: "Management & Professional Practice",
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
