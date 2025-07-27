export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'ai' | 'embedded' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  company?: string;
  type: 'education' | 'experience';
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
}

export const personalInfo = {
  name: "Abinav S",
  title: "AI Enthusiast | Full Stack Developer | Dual Degree Holder",
  subtitle: "Real-World Tech Builder",
  email: "abinavsankar01@gmail.com",
  phone: "+91 78458 93358",
  location: "Chennai, India",
  about: `I'm an ambitious dual-degree undergraduate who recently completed a research internship in Generative AI. With strong foundations in both Computer Science and Data Science, I specialize in building impactful real-world solutions, from AI-powered surveillance systems to quiz platforms and embedded microcontroller projects.

My interests span across AI, Backend Systems, Full Stack Development, and Embedded Tech. I'm passionate about creating innovative solutions that make a real difference in the world.`,
  resumeUrl: "/resume.pdf"
};

export const education: Education[] = [
  {
    institution: "Vellore Institute of Technology, Chennai",
    degree: "B.Tech in Computer Science",
    duration: "July 2023 – Present",
    cgpa: "9.13 / 10"
  },
  {
    institution: "Indian Institute of Technology Madras",
    degree: "B.Sc in Data Science",
    duration: "Jan 2024 – Present",
    cgpa: "8.16 / 10"
  }
];

export const skills: Skill[] = [
  // Programming & Web
  { name: "Python", icon: "python", level: 90, category: "backend" },
  { name: "Java", icon: "java", level: 80, category: "backend" },
  { name: "C++", icon: "cpp", level: 75, category: "backend" },
  { name: "C", icon: "c", level: 80, category: "backend" },
  { name: "HTML", icon: "html5", level: 95, category: "frontend" },
  { name: "CSS", icon: "css3", level: 90, category: "frontend" },
  { name: "JavaScript", icon: "javascript", level: 80, category: "frontend" },
  { name: "Vue.js", icon: "vue", level: 75, category: "frontend" },
  { name: "React.js", icon: "react", level: 75, category: "frontend" },
  { name: "Flask", icon: "flask", level: 80, category: "backend" },
  { name: "Bootstrap", icon: "bootstrap", level: 80, category: "frontend" },
  
  // AI & Machine Learning
  { name: "YOLO", icon: "yolo", level: 65, category: "ai" },
  { name: "DeepSORT", icon: "deepsort", level: 60, category: "ai" },
  { name: "OpenCV", icon: "opencv", level: 65, category: "ai" },
  { name: "dlib", icon: "dlib", level: 60, category: "ai" },
  { name: "Prompt Engineering", icon: "prompt", level: 75, category: "ai" },
  { name: "LLM Fine-tuning", icon: "llm", level: 40, category: "ai" },
  
  // Embedded & Systems
  { name: "8051 Microcontroller", icon: "microcontroller", level: 50, category: "embedded" },
  { name: "8086 Microcontroller", icon: "microcontroller", level: 50, category: "embedded" },
  { name: "KeilUVision", icon: "keil", level: 60, category: "embedded" },
  { name: "LTSpice", icon: "ltspice", level: 60, category: "embedded" },
  { name: "Serial Communication", icon: "serial", level: 70, category: "embedded" },
  
  // Databases & Tools
  { name: "Firebase", icon: "firebase", level: 70, category: "tools" },
  { name: "SQLite", icon: "sqlite", level: 85, category: "tools" },
  { name: "Prisma", icon: "prisma", level: 40, category: "tools" },
  { name: "Git & GitHub", icon: "git", level: 70, category: "tools" },
  { name: "Cloud Functions", icon: "cloud", level: 70, category: "tools" },
  { name: "Nodemailer", icon: "email", level: 60, category: "tools" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Smart Surveillance System – Guardian Eye",
    description: "Developed a smart surveillance system for automated suspect tracking across city-wide CCTV feeds. Integrated YOLOv5 for real-time detection and DeepSORT for tracking. Built face recognition with dlib + OpenCV. Designed interactive React-based dashboard and used NestJS + Prisma backend for alerts and data. Helps law enforcement monitor, detect, and act faster.",
    image: "/projects/guardian-eye.jpg",
    technologies: ["YOLO", "DeepSORT", "dlib", "React", "NestJS", "Prisma", "SQLite"],
    githubUrl: "https://github.com/Lokesh-Spectre/guardian_eye",
    featured: true
  },
  {
    id: "2",
    title: "Hospital Appointment Scheduling System",
    description: "A comprehensive hospital management system where patients can book and cancel appointments. Admins manage doctors with Firebase Auth. Automated emails sent via Nodemailer on booking or cancellation. Features secure authentication and real-time updates.",
    image: "/projects/hospital.jpg",
    technologies: ["Firebase", "HTML", "CSS", "JavaScript", "Firestore", "Nodemailer"],
    githubUrl: "https://github.com/Abinav-01/Hospital-Appointment-scheduling",
    featured: true
  },
  {
    id: "3",
    title: "Quiz Master Web App",
    description: "Multi-user quiz app with admin and user roles. Admins create quizzes, track scores, and manage content. Supports timer, history tracking, and Google Forms-like UI. Built with Flask backend and SQLite database.",
    image: "/projects/quiz.jpg",
    technologies: ["Flask", "Jinja2", "SQLite", "Bootstrap"],
    githubUrl: "https://github.com/Abinav-01/Quiz-master",
    featured: false
  },
  {
    id: "4",
    title: "Smart Water Level Indicator",
    description: "Built a real-time embedded system that uses LEDs to indicate water tank levels. Hardware-based solution for basic home automation using 8051 microcontroller programming.",
    image: "/projects/water-level.jpg",
    technologies: ["8051 Microcontroller", "LEDs", "Buzzer", "Embedded C"],
    githubUrl: "",
    featured: false
  }
];

export const timeline: TimelineItem[] = [
  {
    year: "May 2025 – July 2025",
    title: "Research Intern – Summer Research Internship Program (SRIP)",
    description: "Completed research internship in Generative AI. Built prompt engineering pipelines, developed RAG (Retrieval-Augmented Generation) models, and fine-tuned LLMs for generative tasks and domain adaptation.",
    company: "Generative AI Domain",
    type: "experience"
  },
  {
    year: "Jan 2024 – Present",
    title: "B.Sc in Data Science",
    description: "Pursuing dual degree in Data Science from IIT Madras with focus on AI and machine learning applications.",
    company: "Indian Institute of Technology Madras",
    type: "education"
  },
  {
    year: "July 2023 – Present",
    title: "B.Tech in Computer Science",
    description: "Studying Computer Science at VIT Chennai with strong focus on programming, algorithms, and software development.",
    company: "Vellore Institute of Technology, Chennai",
    type: "education"
  }
];

export const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Very Fluent" },
  { name: "German", level: "Beginner" },
  { name: "Hindi", level: "Beginner" }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Abinav-01/",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abinav-s-b33ab528a/",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:abinavsankar01@gmail.com",
    icon: "mail"
  }
]; 