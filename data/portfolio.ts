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
      "Enterprise portal for performance, certification, and trend analytics, built to streamline reporting and provide actionable insights.",
    stack: [],
    highlights: [
      "Contributed to the development of dashboards and RESTful APIs using React and ASP.NET Core Web API, reducing manual reporting effort by 40%.",
      "Developed backend services using C#, Entity Framework Core, LINQ, and PostgreSQL with validation, exception handling, and optimized data access.",
      "Supported deployment and application hosting through Azure App Service."
    ]
  },

  {
    name: "KM Portal",
    description:
      "Enterprise knowledge management portal focused on content management, business workflows, and operational efficiency.",
    stack: [],
    highlights: [
      "Contributed to portal enhancements using C#/.NET and Azure Functions, automating business workflows and content management processes.",
      "Helped reduce manual content-update effort by 30% through workflow and application improvements.",
      "Implemented data-access and business logic using MSSQL, Entity Framework Core, and LINQ for content retrieval and operational workflows."
    ]
  },

  {
    name: "Sustainability Portal",
    description:
      "Enterprise sustainability platform supporting event registration, community engagement, and internal business workflows.",
    stack: [],
    highlights: [
      "Contributed to frontend and backend development using React, ASP.NET Core Web API, and MSSQL.",
      "Developed RESTful APIs, database operations, validation, and error handling using C#, Entity Framework Core, and SQL Server.",
      "Worked with Azure DevOps deployment workflows to support continuous delivery across development environments."
    ]
  },

  {
    name: "Retail Analytics Portal",
    description:
      "Analytics and forecasting platform supporting reporting workflows and data-driven business insights.",
    stack: [],
    highlights: [
      "Contributed to reporting and forecasting workflows using Angular and ASP.NET Core Web API.",
      "Integrated .NET APIs with Python-based reporting endpoints to support analytics workflows.",
      "Supported Azure DevOps CI/CD processes for automated build, testing, and deployment across Agile development cycles."
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

  // {
  //   id: "work-projects",
  //   sender: "Capgemini Projects",
  //   subject: "Professional projects",
  //   preview: "Architect Portal, KM Portal & more",
  //   time: "2026",
  //   color: "#fbbc04",
  //   section: "projects",
  // },

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

import { MemoryItem } from "@/lib/types";

export const MEMORIES: Record<string, MemoryItem> = {
//   "office-trip": {
//     id: "office-trip",
//     title: "Office Trip '24 — Silvassa Retreats",
//     subtitle: "Capgemini Annual Team Outing",
//     date: "2025 – 2026",
//     sender: "Capgemini Team",
//     description:
//       "Unforgettable annual team retreats with the Capgemini team! From Boat rides in Daman to team-bonding games and night bonfires in Silvassa, this trip brought the entire GEN AI developer crew closer together.",
//     tags: ["Silvassa", "Team Outing", "Boating Memories", "Capgemini"],
//     images: [
//        {
//         type: "image",
//         url: "/memories/IMG_2988.jpg",
//         caption: "Training Crew  - Lonavala Trip",
//       },
// {
//         type: "image",
//         url: "/memories/cg3.jpg",
//         caption: "CPL Cricket Match — Team Photo - Winners!",
//       },
    


//       {
//         type: "image",
//         url: "/memories/cg5.jpg",
//         caption: "Training Crew  - Lonavala Trip",
//       },

//       {
//         type: "image",
//         url: "/memories/cg6.jpg",
//         caption: "Friday Pizza Party & Release Celebrations",
//       },
//       {
//         type: "image",
//         url: "/memories/IMG_3991.jpg",
//         caption: "Training Crew  - Lonavala Trip",
//       },
//     ],
//   },
 "work-gang": {
    id: "work-gang",
    title: "The Capgemini Crew — Work Besties & Lifelong Friends",
    subtitle: "From Training Room Struggles to Unplanned Goa Trips",
    date: "2023 – Present",
    sender: "The Capgemini Squad",
    description:
      "What started as surviving fresher training sessions and stressing over PR reviews turned into finding my people for life. From endless coffee break gossips and emergency hotfixes to weekend road trips, temple visits, late-night match screenings, and endless messing around in the office—these aren't just colleagues, they're family.",
    tags: [
      "Keepers For Life",
      "Chai & Gossip",
      "Capgemini Squad",
      "Always planning the next trip",
      
    ],
    images: [
      {
        type: "image",
          url: "/memories/cg2.jpg",
        caption: "After office hours",
      },
     {
  type: "video",
  url: "/memories/cg1.mp4", // Served directly from public/memories/cg1.mp4
  caption: "Office Trip & Celebration Clip 🎥",
},
{
        type: "image",
        url: "/memories/cg11.jpg",
        caption: "Training Crew  - Lonavala Trip",
      },

      {
        type: "image",
        url: "/memories/IMG_2988.jpg",
        caption: "Training Crew  - Lonavala Trip",
      },
{
        type: "image",
        url: "/memories/cg3.jpg",
        caption: "CPL Cricket Match — Team Photo - Winners!",
      },
    


      {
        type: "image",
        url: "/memories/cg5.jpg",
        caption: "Training Crew  - Lonavala Trip",
      },

      {
        type: "image",
        url: "/memories/cg6.jpg",
        caption: "Friday Pizza Party & Release Celebrations",
      },
      {
        type: "image",
        url: "/memories/IMG_3991.jpg",
        caption: "Training Crew  - Lonavala Trip",
      },
      {
        type: "image",
        url: "/memories/cg13.jpg",
        caption: "Training Crew  - Lonavala Trip",
      },
      {
        type: "video",
        url: "/memories/cg4.MOV",
        caption: "Friday Pizza Party & Release Celebrations",
      },

      {
        type: "image",
        url: "/memories/cg11.jpg",
        caption: "Friday Pizza Party & Release Celebrations",
      },

      {
        type: "image",
        url: "/memories/cg8.jpg",
        caption: "Friday Pizza Party & Release Celebrations",
      },

    

      {
        type: "image",
        url: "/memories/cg10.jpg",
        caption: "Friday Pizza Party & Release Celebrations",
      },
    ],
  },
  "college-gang": {
    id: "college-gang",
    title: "College Gang — PCE Class of '23",
    subtitle: "Pillai College of Engineering, IT Department",
    date: "2019 – 2023",
    sender: "PCE IT Squad",
    description:
      "Four years of engineering packed with hackathons, festival prep for Alegria, last-minute assignment submissions, and infinite memories in Navi Mumbai. The college crew that started it all!",
    tags: ["Pillai College", "IT Engineering", "Alegria Fest", "Navi Mumbai"],
    images: [
     {
        type: "image",
        url: "/memories/gang1.jpg",
        caption: "",
      },
      {
        type: "image",
        url: "/memories/gang2.jpg",
        caption: "",
      },
      {
        type: "image",
        url: "/memories/gang3.jpg",
        caption: "",
      },
      {
        type: "image",
        url: "/memories/gang6.jpg",
        caption: "",
      },
      {
        type: "video",
        url: "/memories/gang4.mp4",
        caption: "",
      },
      {
        type: "image",
        url: "/memories/gang5.jpg",
        caption: "Training Crew  - Lonavala Trip",
      },
       {
        type: "image",
        url: "/memories/gang7.jpg",
        caption: "",
      },
       {
        type: "image",
        url: "/memories/gang8.jpg",
        caption: "",
      },
       {
        type: "image",
        url: "/memories/gang9.jpg",
        caption: "",
      },
    ],
  },
};