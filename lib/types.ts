export interface Project {
  name: string;
  desc: string;
  stack: string;
  link: string;
}

export interface PortfolioData {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  role: string;
  about: string[];
  skills: Record<string, string[]>;
  projects: Project[];
}

export interface EmailMeta {
  id: "about" |"experience"| "projects" | "skills" | "resume" | "contact";
  subject: string;
  preview: string;
  time: string;
  color: string;
}
