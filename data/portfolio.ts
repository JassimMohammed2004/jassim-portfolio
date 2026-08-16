// All content here is sourced directly from Jassim's resume.
// Nothing in this file should be embellished with invented facts, numbers, or claims.

export const profile = {
  name: "Jassim Mohammed",
  firstName: "Jassim",
  lastName: "Mohammed",
  role: "AI & Data Science Engineer",
  tagline:
    "Building intelligent systems where data, software and artificial intelligence meet.",
  location: "Kottayam, Kerala, India",
  email: "jassim974685@gmail.com",
  phone: "+91 9746859565",
};

export const education = [
  {
    period: "2022 — 2026",
    degree: "B.Tech — Artificial Intelligence and Data Science",
    institution: "Dhanalakshmi Srinivasan University, Tamil Nadu",
    detail: null as string | null,
  },
  {
    period: "Higher Secondary",
    degree: "Higher Secondary Education",
    institution: "St John the Baptist's HSS, Nedumkunnam, Kerala",
    detail: "93%",
  },
  {
    period: "SSLC",
    degree: "Secondary School Leaving Certificate",
    institution: "St John the Baptist's HSS, Nedumkunnam, Kerala",
    detail: "96%",
  },
];

export const skills = ["Python", "HTML"];

export const interests = [
  "AI-based technology",
  "Data analysis",
  "AI in robotics",
  "Software engineering",
];

export const experience = [
  {
    organization: "Oasis Infobytes",
    role: "Python Online Internship",
    type: "Internship",
  },
  {
    organization: "SMEC Technology, Ernakulam",
    role: "Data Science Internship",
    type: "Internship",
  },
];

export type ProjectStatus = "active" | "complete";

export const projects = [
  {
    id: "secured-cloud-storage",
    index: "01",
    title: "Secured Cloud Storage with Homomorphic Encryption",
    status: "active" as ProjectStatus,
    statusLabel: "Currently working",
    description:
      "A conceptual pipeline exploring secure data storage and computation using homomorphic encryption techniques.",
    pipeline: ["DATA", "ENCRYPTION", "CLOUD STORAGE", "SECURE COMPUTATION", "DECRYPTION"],
  },
  {
    id: "collabify-ai",
    index: "02",
    title: "Collabify AI",
    status: "active" as ProjectStatus,
    statusLabel: "Project",
    description: null as string | null,
    pipeline: null as string[] | null,
  },
];

export const research = [
  {
    title: "Advancement in AI for Sustainable Agriculture",
    type: "Paper Presentation",
  },
  {
    title: "Machine Vision in Agriculture",
    type: "Paper Presentation",
  },
];

export const seminars = [
  {
    title: "AVG Conclave 2025",
    organizer: "DSU Preambular",
  },
];

export const certifications = [
  {
    title: "Python Programming",
    issuer: "Oasis Infobyte",
  },
  {
    title: "Complete Course on Excelling at Business and Management",
    issuer: "Sproltts",
  },
];

export const softSkills = ["Analytical", "Communication", "Leadership", "Management"];

export const traits = [
  "Creative and logical",
  "Problem solving ability",
  "Cooperative and observant",
  "Adaptable to new concepts",
];

export const languages = ["English", "Malayalam", "Tamil"];

export const navSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
