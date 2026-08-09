import { PortfolioData, EmailMeta } from "@/lib/types";

export const DATA: PortfolioData = {
  name: "Jahnevi N S",
  profileImage: "/images/jahnevi.jpg",
  email: "jahnevi@gmail.com",
  linkedin: "https://linkedin.com/in/jahnevi-n-s-8388941ab",
  github: "https://github.com/jahenvins",
  resumeUrl: "/resume/JAHNEVI_NS_Resume.pdf",

  role: ".NET Full Stack Developer",

  about: [
    "I'm a .NET Full Stack Developer with almost 3 years of experience building enterprise applications using C#, ASP.NET Core, React, Angular, Azure, and SQL Server.",
    "I enjoy building reliable backend APIs, responsive frontend applications, cloud-enabled solutions, and exploring AI-assisted development workflows."
  ],

  skills: {
    Backend: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Web API",
      "Entity Framework Core",
      "REST APIs"
    ],

    Frontend: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS"
    ],

    "Azure & DevOps": [
      "Azure App Services",
      "Azure Functions",
      "Azure DevOps",
      "CI/CD"
    ],

    Database: [
      "SQL Server",
      "PostgreSQL"
    ],

    "AI & Modern Development": [
      "GitHub Copilot",
      "Claude",
      "ChatGPT",
      "Semantic Kernel",
      "Prompt Engineering"
    ],

    Design: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator"
    ]
  },

  workProjects: [
    {
      name: "Architect Portal",

      description:
        "Enterprise application developed as part of my professional experience at Capgemini.",

      stack: [
        ".NET",
        "ASP.NET Core Web API",
        "React",
        "Angular",
        "Azure",
        "SQL Server"
      ],

      highlights: [
        "Developed and maintained enterprise application features",
        "Built REST APIs and frontend components",
        "Worked with Azure services and CI/CD workflows"
      ]
    },

    {
      name: "KM Portal",

      description:
        "Enterprise knowledge management application developed as part of professional experience.",

      stack: [
        ".NET",
        "ASP.NET Core Web API",
        "React",
        "SQL Server",
        "Azure"
      ],

      highlights: [
        "Developed backend APIs and frontend functionality",
        "Worked on application enhancements and bug fixes",
        "Integrated frontend components with REST APIs"
      ]
    },

    {
      name: "Sustainability Portal",

      description:
        "Enterprise sustainability-focused application developed as part of professional experience.",

      stack: [
        ".NET",
        "ASP.NET Core",
        "Angular",
        "SQL Server",
        "Azure"
      ],

      highlights: [
        "Implemented application features based on business requirements",
        "Developed API and UI components",
        "Worked with enterprise development and deployment processes"
      ]
    },

    {
      name: "Retail Analytics Portal",

      description:
        "Enterprise analytics application supporting retail-related business workflows.",

      stack: [
        ".NET",
        "ASP.NET Core Web API",
        "Angular",
        "SQL Server",
        "Azure"
      ],

      highlights: [
        "Developed application features and API integrations",
        "Worked with data-driven frontend components",
        "Supported application maintenance and enhancements"
      ]
    }
  ],

  independentProjects: [
    {
      name: "ContractLens",

      description:
        "AI-powered API contract intelligence application.",

      stack: [
        "React",
        "TypeScript",
        "ASP.NET Core",
        "Tailwind CSS",
        "Framer Motion"
      ],

      highlights: [
        "Built a premium SaaS-style interface",
        "Developed ASP.NET Core Web APIs",
        "Implemented API contract analysis workflows"
      ],

      link: ""
    },

    {
      name: "QueryCraft",

      description:
        "Text-to-SQL application that converts natural language into SQL queries.",

      stack: [
        "React",
        "TypeScript",
        "ASP.NET Core",
        "Semantic Kernel",
        "Ollama",
        "SQL"
      ],

      highlights: [
        "Built natural-language SQL generation workflow",
        "Integrated Semantic Kernel",
        "Supported multiple SQL dialects"
      ],

      link: ""
    }
  ],

  experience: [
    {
      company: "Capgemini",
      role: "Senior Software Engineer",
      location: "Navi Mumbai, India",
      period: "June 2026 – Present"
    },
    {
      company: "Capgemini",
      role: "Software Analyst/Engineer",
      location: "Navi Mumbai, India",
      period: "Dec 2023 – Present"
    }
  ],

  certifications: [
    {
      name: "Claude Developer – Foundations",
      code: "Developer Foundations",
      issuer: "Anthropic"
    },

    {
      name: "Microsoft Certified: Azure Developer Associate",
      code: "AZ-204",
      issuer: "Microsoft"
    },

    {
      name: "Microsoft Certified: Azure AI Engineer Associate",
      code: "AI-102",
      issuer: "Microsoft"
    }
  ],

  education: {
    degree: "...",
    university: "...",
    period: "...",
    location: "...",
    cgpa: "..."
  },

  availability: {
    relocation: true,

    locations: [
      "Mumbai",
      "Navi Mumbai",
      "Pune",
      "Bangalore"
    ]
  }
};

export const EMAILS: EmailMeta[] = [
  {
    id: "resume",
    sender: "Jahnevi N S",
    subject: "Resume — .NET Full Stack Developer",
    preview: "C#, .NET, React, Angular, Azure & AI",
    time: "2026",
    color: "#1a73e8",
    section: "inbox",
  },

  {
    id: "about",
    sender: "Bio Overview",
    subject: "About me",
    preview: "Full Stack .NET Developer",
    time: "2026",
    color: "#34a853",
    section: "about",
  },

  {
    id: "experience",
    sender: "Capgemini",
    subject: "Professional experience",
    preview: "Senior Analyst · .NET · Full Stack · Azure",
    time: "2026",
    color: "#4285f4",
    section: "experience",
  },

  {
    id: "work-projects",
    sender: "Capgemini Projects",
    subject: "Professional projects",
    preview: "Architect Portal, KM Portal & more",
    time: "2026",
    color: "#fbbc04",
    section: "projects",
  },

  {
    id: "independent-projects",
    sender: "Side Projects",
    subject: "Independent projects",
    preview: "ContractLens, QueryCraft & more",
    time: "2026",
    color: "#9333ea",
    section: "projects",
  },

  {
    id: "skills",
    sender: "Tech Stack",
    subject: "Technical skills",
    preview: "C#, .NET, React, Angular, Azure & SQL",
    time: "2026",
    color: "#0f9d58",
    section: "about",
  },

  {
    id: "azure",
    sender: "Microsoft Azure",
    subject: "Azure & DevOps",
    preview: "Cloud, CI/CD and Azure services",
    time: "2026",
    color: "#0078d4",
    section: "drafts",
  },

  {
    id: "ai",
    sender: "Anthropic & AI",
    subject: "AI-assisted development",
    preview: "Generative AI, Semantic Kernel & AI tools",
    time: "2026",
    color: "#9333ea",
    section: "drafts",
  },

  {
    id: "certifications",
    sender: "Microsoft & Anthropic",
    subject: "Certifications",
    preview: "AZ-204, AI-102 & Claude Foundations",
    time: "2026",
    color: "#f59e0b",
    section: "certifications",
  },

  {
    id: "design",
    sender: "UI/UX Design",
    subject: "Design background",
    preview: "Figma, Photoshop & Illustrator",
    time: "2026",
    color: "#ec4899",
    section: "freelance",
  },

  {
    id: "contact",
    sender: "Recruiter Connect",
    subject: "Let's connect",
    preview: "Email, LinkedIn & GitHub",
    time: "2026",
    color: "#ea4335",
    section: "contact",
  },
];