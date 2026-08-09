"use client";

import { DATA } from "@/data/portfolio";
import { EmailMeta } from "@/lib/types";

import {
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  BriefcaseBusiness,
  Award,
  Cloud,
  Bot,
  Palette,
  MapPin,
  Download,
  CheckCircle2,
  Code2,
  PhoneCall,
  Phone,
} from "lucide-react";

export default function EmailBody({
  id,
}: {
  id: EmailMeta["id"];
}) {
  // =====================================================
  // ABOUT
  // =====================================================

  if (id === "about") {
    return (
      <div className="space-y-6">
  {/* Profile header */}
  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
    {/* Profile image */}
    <div className="h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md ring-1 ring-gray-200">
      <img
        src={DATA.profileImage}
        alt={DATA.name}
        className="h-full w-full object-cover"
      />
    </div>

    {/* Profile information */}
    <div className="min-w-0">
      <h2 className="text-xl font-semibold text-gtext">
        {DATA.name}
      </h2>

      <p className="mt-1 text-sm font-medium text-gblue">
        {DATA.role}
      </p>

      <div className="mt-2 flex items-center gap-1.5 text-xs text-gdim">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        <span>
          Navi Mumbai, India · Open to relocation
        </span>
      </div>
    </div>
  </div>

  {/* Introduction */}
  <div className="space-y-5">
    {DATA.about.map((paragraph, index) => (
      <p
        key={index}
        className={`text-sm leading-7 ${
          index === 0
            ? "text-base font-medium text-gtext"
            : "text-gdim"
        }`}
      >
        {paragraph}
      </p>
    ))}
  </div>

  {/* Expertise */}
  <div className="flex flex-wrap items-center gap-2">
    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
      <Code2 className="h-3.5 w-3.5" />
      Full Stack Engineering
    </span>

    <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
      <Cloud className="h-3.5 w-3.5" />
      Azure
    </span>

    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700">
      <Bot className="h-3.5 w-3.5" />
      AI-assisted Development
    </span>
  </div>

  {/* Location */}
  <div className="border-t border-gborder pt-5">
    <div className="flex items-center gap-2 text-xs text-gdim">
      <MapPin className="h-3.5 w-3.5" />

      <span>
        Currently based in Navi Mumbai · Open to relocation
      </span>
    </div>
  </div>
</div>
    );
  }

  // =====================================================
  // EXPERIENCE
  // =====================================================

  if (id === "experience") {
    return (
      <div className="space-y-6">
        <p className="text-sm leading-7 text-gdim">
          My professional experience at Capgemini spans enterprise
          application development, backend APIs, frontend engineering,
          databases, Azure, and DevOps.
        </p>

        {DATA.experience.map((experience, index) => (
          <section
            key={`${experience.company}-${experience.period}`}
            className="relative"
          >
            <div className="flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>

                {index !== DATA.experience.length - 1 && (
                  <div className="mt-2 h-full w-px bg-gray-200" />
                )}
              </div>

              {/* Experience */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-gtext">
                      {experience.company}
                    </h3>

                    <p className="mt-0.5 text-sm font-medium text-gblue">
                      {experience.role}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-xs font-medium text-gtext">
                      {experience.period}
                    </p>

                    <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gdim sm:justify-end">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </p>
                  </div>
                </div>

                {/* Work projects */}
                <div className="mt-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gdim">
                    Professional Projects
                  </h4>

                  <div className="space-y-4">
                    {DATA.workProjects.map((project) => (
                      <article
                        key={project.name}
                        className="
                          rounded-xl
                          border
                          border-gborder
                          bg-white
                          p-4
                          transition
                          hover:border-gray-300
                          hover:shadow-sm
                        "
                      >
                        <h4 className="text-sm font-semibold text-gtext">
                          {project.name}
                        </h4>

                        <p className="mt-1.5 text-xs leading-5 text-gdim">
                          {project.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {project.stack.map((technology) => (
                            <span
                              key={technology}
                              className="
                                rounded-md
                                bg-gray-50
                                px-2
                                py-1
                                text-[10px]
                                text-gray-600
                              "
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <div className="mt-4 space-y-2">
                          {project.highlights.map(
                            (highlight, highlightIndex) => (
                              <div
                                key={highlightIndex}
                                className="flex gap-2 text-xs leading-5 text-gdim"
                              >
                                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />

                                <span>{highlight}</span>
                              </div>
                            )
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    );
  }

  // =====================================================
  // WORK PROJECTS
  // =====================================================

  if (id === "work-projects") {
    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BriefcaseBusiness className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-semibold text-gtext">
                Professional Projects
              </h2>

              <p className="mt-1 text-sm leading-6 text-gdim">
                Enterprise projects I have worked on as part of my
                professional experience.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {DATA.workProjects.map((project) => (
            <article
              key={project.name}
              className="
                rounded-xl
                border
                border-gborder
                bg-white
                p-4
                transition
                hover:border-gray-300
                hover:shadow-sm
              "
            >
              <h3 className="text-sm font-semibold text-gtext">
                {project.name}
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-gdim">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-md
                      border
                      border-gray-200
                      bg-gray-50
                      px-2
                      py-1
                      text-[10px]
                      text-gray-600
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {project.highlights.map(
                  (highlight, index) => (
                    <div
                      key={index}
                      className="flex gap-2 text-xs leading-5 text-gdim"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />

                      <span>{highlight}</span>
                    </div>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  // =====================================================
  // INDEPENDENT PROJECTS
  // =====================================================

  if (id === "independent-projects") {
    return (
      <div className="space-y-6">
        <div>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <Code2 className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-semibold text-gtext">
                Independent Projects
              </h2>

              <p className="mt-1 text-sm leading-6 text-gdim">
                Personal projects built to explore modern full-stack,
                cloud, and AI-assisted development.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {DATA.independentProjects.map((project) => (
            <article
              key={project.name}
              className="
                overflow-hidden
                rounded-xl
                border
                border-gborder
                bg-white
                transition
                hover:border-gray-300
                hover:shadow-md
              "
            >
              {project.thumbnail && (
                <div className="overflow-hidden border-b border-gborder bg-gray-50">
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} preview`}
                    className="h-40 w-full object-cover"
                  />
                </div>
              )}

              <div className="p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-gtext">
                      {project.name}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-gdim">
                      {project.description}
                    </p>
                  </div>

                  {project.link &&
                    project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          w-fit
                          shrink-0
                          items-center
                          gap-1
                          text-xs
                          font-medium
                          text-gblue
                          hover:underline
                        "
                      >
                        View project
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        border
                        border-gray-200
                        bg-gray-50
                        px-2
                        py-1
                        text-[10px]
                        text-gray-600
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.highlights &&
                  project.highlights.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {project.highlights.map(
                        (highlight, index) => (
                          <div
                            key={index}
                            className="flex gap-2 text-xs leading-5 text-gdim"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />

                            <span>{highlight}</span>
                          </div>
                        )
                      )}
                    </div>
                  )}
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  // =====================================================
  // SKILLS
  // =====================================================

  if (id === "skills") {
    return (
      <div className="space-y-6">
        <p className="text-sm leading-7 text-gdim">
          Technologies and tools I currently work with across
          backend, frontend, cloud, databases, and AI-assisted
          development.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(DATA.skills).map(
            ([category, items]) => (
              <section key={category}>
                <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wide text-gdim">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-md
                        border
                        border-gray-200
                        bg-gray-50
                        px-2.5
                        py-1.5
                        text-xs
                        text-gtext
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            )
          )}
        </div>
      </div>
    );
  }

  // =====================================================
  // AZURE
  // =====================================================

  if (id === "azure") {
    const azureSkills =
      DATA.skills["Azure & DevOps"] ?? [];

    return (
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Cloud className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-base font-semibold text-gtext">
              Cloud & Azure Experience
            </h2>

            <p className="mt-1 text-sm leading-6 text-gdim">
              Hands-on experience working with Azure services and
              DevOps workflows as part of enterprise application
              development.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {azureSkills.map((skill) => (
            <div
              key={skill}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                border
                border-gborder
                bg-white
                p-3
              "
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50">
                <Cloud className="h-4 w-4 text-blue-600" />
              </div>

              <span className="text-sm font-medium text-gtext">
                {skill}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-xs leading-5 text-gdim">
            My Azure experience includes application hosting,
            serverless functions, deployment workflows, CI/CD, and
            supporting enterprise applications through cloud-based
            development processes.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // AI
  // =====================================================

  if (id === "ai") {
    const aiSkills =
      DATA.skills["AI & Modern Development"] ?? [];

    return (
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
            <Bot className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-base font-semibold text-gtext">
              AI-assisted Development
            </h2>

            <p className="mt-1 text-sm leading-6 text-gdim">
              I'm actively exploring Generative AI and modern AI
              development workflows while using AI tools to improve
              everyday software engineering tasks.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {aiSkills.map((skill) => (
            <span
              key={skill}
              className="
                rounded-lg
                border
                border-purple-100
                bg-purple-50
                px-3
                py-2
                text-xs
                font-medium
                text-purple-700
              "
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="rounded-xl border border-gborder bg-gray-50 p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gdim">
            Current focus
          </h3>

          <p className="mt-2 text-sm leading-6 text-gdim">
            Exploring AI-enabled application development, prompt
            engineering, LLM workflows, and ways AI can improve
            developer productivity without replacing good engineering
            practices.
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // CERTIFICATIONS
  // =====================================================

  if (id === "certifications") {
    return (
      <div className="space-y-6">
        <p className="text-sm leading-7 text-gdim">
          Certifications and learning milestones that complement my
          full-stack and cloud development experience.
        </p>

        <div className="grid gap-4">
          {DATA.certifications.map((certification) => (
            <article
              key={certification.code}
              className="
                overflow-hidden
                rounded-xl
                border
                border-gborder
                bg-white
                transition
                hover:border-gray-300
                hover:shadow-sm
              "
            >
              {certification.image && (
                <div className="flex justify-center border-b border-gborder bg-gray-50 p-5">
                  <img
                    src={certification.image}
                    alt={certification.name}
                    className="max-h-44 max-w-full object-contain"
                  />
                </div>
              )}

              <div className="flex items-start gap-3 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <Award className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gtext">
                    {certification.name}
                  </p>

                  <p className="mt-1 text-xs text-gdim">
                    {certification.issuer} ·{" "}
                    {certification.code}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  // =====================================================
  // =====================================================
  // DESIGN
  // =====================================================

  if (id === "design") {
    const designSkills = [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Premiere Pro",
      "Lightroom",
      "CorelDraw",
      "UI/UX Design",
      "Brand Identity",
      "Poster & Poster GFX",
    ];

    const designExperiences = [
      {
        role: "Graphic Designer",
        company: "Internet Division, LA",
        period: "2021 – 2023",
        description:
          "Designed products and assisted clients on dynamic, rewarding, and collaborative visual projects.",
      },
      {
        role: "Graphic Design Intern",
        company: "Gopolitix",
        period: "2021 – 2022",
        description:
          "Created logo designs and assisted with website visuals, empowering startup brand visions.",
      },
      {
        role: "GFX Team Member",
        company: "Alegria Fest",
        period: "2022",
        description:
          "Designed vibrant festival posters and event graphics, crafting captivating promotional visuals.",
      },
      {
        role: "Graphic Design Intern",
        company: "Sahu Technologies",
        period: "2021",
        description:
          "Collaborated on creative graphics, branding materials, and marketing assets.",
      },
      {
        role: "Graphic Designer",
        company: "CSI-PCE",
        period: "2020 – 2021",
        description:
          "Crafted social media designs, webinar banners, and workshop posters for the creative committee.",
      },
    ];

    const portfolioUrl =
      "https://sites.google.com/view/junecaeles-portofolio/home";

    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
            <Palette className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-base font-semibold text-gtext">
              Graphic & UI/UX Design Background
            </h2>

            <p className="mt-1 text-sm leading-6 text-gdim">
              Talented graphic designer with a passion for technology, visual storytelling, and digital innovation. My design foundation strongly elevates my frontend engineering through usability, crisp visual hierarchy, brand consistency, and intuitive user experiences.
            </p>
          </div>
        </div>

        {/* Design Tools & Skills */}
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gdim">
            Design Stack & Software
          </h3>
          <div className="flex flex-wrap gap-2">
            {designSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-pink-100 bg-pink-50 px-3 py-1.5 text-xs font-medium text-pink-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Design Work History */}
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gdim">
            Graphic Design Experience
          </h3>
          <div className="space-y-3">
            {designExperiences.map((exp) => (
              <div
                key={exp.company}
                className="rounded-xl border border-gray-100 bg-gray-50/50 p-3.5 transition hover:bg-gray-50"
              >
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <span className="text-sm font-semibold text-gtext">
                    {exp.role}{" "}
                    <span className="font-normal text-gdim">
                      · {exp.company}
                    </span>
                  </span>
                  <span className="rounded-full border border-pink-100 bg-pink-50 px-2 py-0.5 text-[11px] font-medium text-pink-600">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-gdim">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Native In-Screen Browser Mockup Preview */}
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gdim">
            Interactive Portfolio Preview
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            {/* Browser Top Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 max-w-[200px] truncate font-mono text-xs text-gray-400 sm:max-w-none">
                  sites.google.com/view/junecaeles-portofolio
                </span>
              </div>

              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-pink-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-pink-700"
              >
                <span>Launch Site</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* In-Screen Portfolio Content Screen */}
            <div className="bg-gradient-to-b from-gray-900 via-zinc-900 to-black p-6 sm:p-8 text-white">
              <div className="max-w-xl">
                <span className="rounded-full bg-pink-500/20 px-3 py-1 text-[11px] font-semibold text-pink-300 uppercase tracking-widest border border-pink-500/30">
                  Graphic Designer Portfolio
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl text-white">
                 Jahnevi's Graphic Design Showcase
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  A curated collection of poster art, branding identities, social media assets, marketing collaterals, and digital designs built with Photoshop, Illustrator, and Figma.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <span className="text-xs font-medium text-pink-400">Posters & GFX</span>
                  <p className="mt-1 text-[11px] text-gray-400">Event & fest branding visuals</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <span className="text-xs font-medium text-pink-400">Logo Design</span>
                  <p className="mt-1 text-[11px] text-gray-400">Startup & corporate identities</p>
                </div>
                <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                  <span className="text-xs font-medium text-pink-400">Social Media</span>
                  <p className="mt-1 text-[11px] text-gray-400">Promotional banners & ads</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href={portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition hover:bg-gray-100"
                >
                  <span>Explore Portfolio Works</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // RESUME
  // =====================================================

  if (id === "resume") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-base font-semibold text-gtext">
            {DATA.role}
          </h2>

          <p className="mt-2 text-sm leading-6 text-gdim">
            My latest resume covering my professional experience,
            technical skills, enterprise projects, certifications,
            education, and full-stack development background.
          </p>
        </div>

        <div
          className="
            overflow-hidden
            rounded-xl
            border
            border-gborder
            bg-gray-50
          "
        >
          <div className="flex items-center gap-3 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
              <FileText className="h-5 w-5 text-red-500" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gtext">
                JAHNEVI_NS_Resume.pdf
              </p>

              <p className="mt-0.5 text-xs text-gdim">
                PDF · Updated 2026
              </p>
            </div>
          </div>

          <div className="flex gap-2 border-t border-gborder bg-white p-3">
            <a
              href={DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-md
                bg-[#1a73e8]
                px-3
                py-2
                text-xs
                font-medium
                text-white
                transition
                hover:bg-[#1557b0]
              "
            >
              <FileText className="h-3.5 w-3.5" />
              Preview Resume
            </a>

            <a
              href={DATA.resumeUrl}
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-gray-200
                bg-white
                px-3
                py-2
                text-xs
                font-medium
                text-gtext
                transition
                hover:bg-gray-50
              "
            >
              <Download className="h-3.5 w-3.5" />
              Download
            </a>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-[10px] uppercase tracking-wide text-gdim">
              Experience
            </p>

            <p className="mt-1 text-sm font-semibold text-gtext">
              2.7+ years
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-[10px] uppercase tracking-wide text-gdim">
              Focus
            </p>

            <p className="mt-1 text-sm font-semibold text-gtext">
              .NET Full Stack
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-[10px] uppercase tracking-wide text-gdim">
              Location
            </p>

            <p className="mt-1 text-sm font-semibold text-gtext">
              Open to relocate
            </p>
          </div>
        </div>
      </div>
    );
  }

  // =====================================================
  // CONTACT
  // =====================================================

  if (id === "contact") {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm leading-7 text-gdim">
            If my background looks like a good fit for your team,
            I'd genuinely love to talk. I'm currently open to .NET
            full-stack, software engineering, and product engineering
            opportunities.
          </p>
         

          <div className="mt-4 flex items-center gap-2 text-xs text-green-700">
            <CheckCircle2 className="h-4 w-4" />

            <span>Open to relocation across India</span>
            <Phone className="h-4 w-4" />
            <span> Contact Number : +91 91663 92096</span>
          </div>
        </div>

        <div className="space-y-2">
          {/* Email */}
          <a
            href={`mailto:${DATA.email}`}
            className="
              group
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-gborder
              bg-white
              p-3
              transition
              hover:border-gray-300
              hover:bg-gray-50
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs text-gdim">Email</p>

              <p className="truncate text-sm font-medium text-gtext">
                {DATA.email}
              </p>
            </div>

            

            <ExternalLink className="h-3.5 w-3.5 text-gdim" />
          </a>

          {/* LinkedIn */}
          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-gborder
              bg-white
              p-3
              transition
              hover:border-gray-300
              hover:bg-gray-50
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
              <Linkedin className="h-4 w-4 text-blue-600" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs text-gdim">LinkedIn</p>

              <p className="truncate text-sm font-medium text-gtext">
                {DATA.linkedin.replace(
                  "https://linkedin.com/",
                  ""
                )}
              </p>
            </div>

            <ExternalLink className="h-3.5 w-3.5 text-gdim" />
          </a>

          {/* GitHub */}
          <a
            href={DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-3
              rounded-lg
              border
              border-gborder
              bg-white
              p-3
              transition
              hover:border-gray-300
              hover:bg-gray-50
            "
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
              <Github className="h-4 w-4 text-gray-700" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs text-gdim">GitHub</p>

              <p className="truncate text-sm font-medium text-gtext">
                {DATA.github.replace(
                  "https://github.com/",
                  "github.com/"
                )}
              </p>
            </div>

            <ExternalLink className="h-3.5 w-3.5 text-gdim" />
          </a>
        </div>

        <div className="border-t border-gborder pt-5">
          <p className="text-sm font-semibold text-gtext">
            {DATA.name}
          </p>

          <p className="mt-1 text-xs text-gdim">
            {DATA.role}
          </p>

          <p className="mt-2 text-xs text-gdim">
            Navi Mumbai, India · Open to relocation
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // FALLBACK
  // =====================================================

  return (
    <p className="text-sm text-gdim">
      This section is currently being updated.
    </p>
  );
}