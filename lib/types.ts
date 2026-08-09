export interface Project {
  name: string;
  description: string;
  stack: string[];
  highlights?: string[];
  link?: string;
  thumbnail?: string;
}

export interface ExperienceProject {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
}

export interface Certification {
  name: string;
  code: string;
  issuer: string;
  image?: string;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  location: string;
  cgpa?: string;
}

export interface Availability {
  relocation: boolean;
  locations: string[];
}

export interface PortfolioData {
  name: string;
  profileImage: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;

  role: string;

  about: string[];

  skills: Record<string, string[]>;

  workProjects: ExperienceProject[];

  independentProjects: Project[];

  experience: Experience[];

  certifications: Certification[];

  education: Education;

  availability: Availability;
}

export type EmailId =
  | "resume"
  | "about"
  | "experience"
  | "work-projects"
  | "independent-projects"
  | "skills"
  | "azure"
  | "ai"
  | "certifications"
  | "design"
  | "contact";

export type SidebarSection =
  | "inbox"
  | "about"
  | "experience"
  | "projects"
  | "sent"
  | "drafts"
  | "certifications"
  | "freelance"
  | "contact"
  | "talk"
  | "ai";

export interface EmailMeta {
  id: EmailId;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  color: string;
  section: SidebarSection;
}