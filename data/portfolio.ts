import { PortfolioData, EmailMeta } from "@/lib/types";

export const DATA: PortfolioData = {
  name: "Jahnevi N S",
  email: "jahnevi@gmail.com",
  linkedin: "https://linkedin.com/in/jahnevi-n-s",
  github: "https://github.com/jahenvins",
  resumeUrl: "/JAHNEVI_NS_Resume.pdf",

  role: "Frontend Developer | React, Angular & UI Engineering",

  about: [
    "Hi! Welcome to my inbox portfolio 👋",
    "I'm a Frontend Developer with 2.5+ years of experience at Capgemini and 3+ years of freelance UI/UX design experience.",
    "I specialize in building scalable, accessible, and design-driven web applications using React, Angular, TypeScript, and modern frontend technologies.",
    "My passion lies in transforming complex business requirements and UX wireframes into pixel-perfect, high-performance user experiences.",
    "Currently, I'm exploring opportunities in frontend engineering, product development, and UI-focused full-stack roles."
  ],

  skills: {
    Frontend: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "SPFx",
      "Framer Motion"
    ],

    Backend: [
      "Node.js",
      "Express.js",
      ".NET",
      "ASP.NET Web API",
      "REST APIs"
    ],

    Database: [
      "MongoDB",
      "MSSQL",
      "Supabase"
    ],

    Microsoft365: [
      "SharePoint Online",
      "SPFx",
      "Power Automate",
      "PowerApps",
      "Microsoft Copilot"
    ],

    Design: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Rive",
      "Design Systems",
      "Wireframing"
    ],

    AI: [
      "ChatGPT",
      "Claude",
      "GitHub Copilot",
      "Microsoft Copilot",
      "v0"
    ]
  },

  projects: [
    {
      name: "FluxHR",
      desc: "AI-powered HR and workforce management platform with employee management, leave workflows, and analytics dashboards.",
      stack: "Next.js 15 · TypeScript · Tailwind · Supabase · Framer Motion",
      link: "YOUR_FLUXHR_LINK"
    },

    {
      name: "IRCTC UI Redesign",
      desc: "Modern redesign of India's railway booking experience with reusable component architecture and motion design.",
      stack: "Next.js · TypeScript · Tailwind · Framer Motion",
      link: "YOUR_IRCTC_LINK"
    },

    {
      name: "Architect Portal",
      desc: "Enterprise dashboard platform built at Capgemini for architect certification tracking and analytics.",
      stack: "React · Redux · Node.js · MongoDB",
      link: "#"
    },

    {
      name: "Knowledge Management Portal",
      desc: "SharePoint-based enterprise knowledge platform with SPFx web parts and workflow automation.",
      stack: "SPFx · React · SharePoint · Power Automate",
      link: "#"
    }
  ]
};

export const EMAILS: EmailMeta[] = [
  {
    id: "about",
    subject: "Introducing myself 👋",
    preview: "Frontend developer with 2.5+ years at Capgemini and a passion for UI engineering...",
    time: "9:00 AM",
    color: "#1a73e8",
  },

  {
    id: "experience",
    subject: "What I built at Capgemini",
    preview: "Enterprise dashboards, SharePoint portals and scalable frontend systems...",
    time: "8:45 AM",
    color: "#34a853",
  },

  {
    id: "projects",
    subject: "Projects I'm proud of",
    preview: "FluxHR, IRCTC redesign, analytics dashboards and more...",
    time: "Yesterday",
    color: "#fbbc04",
  },

  {
    id: "skills",
    subject: "My tech stack",
    preview: "React, Angular, TypeScript, Next.js, Node.js, SPFx and AI tools...",
    time: "Mon",
    color: "#ea4335",
  },

  {
    id: "resume",
    subject: "Resume attached 📎",
    preview: "Updated July 2026 version available for download...",
    time: "Mon",
    color: "#9334e6",
  },

  {
    id: "contact",
    subject: "Let's build something together",
    preview: "Open to frontend, UI engineering and product development opportunities...",
    time: "Sun",
    color: "#0f9d58",
  }
];