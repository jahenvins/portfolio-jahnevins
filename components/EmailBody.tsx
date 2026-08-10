"use client";

import { DATA } from "@/data/portfolio";
import { EmailMeta } from "@/lib/types";

import {
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,

  Award,

  Bot,
  Palette,

  Download,
  CheckCircle2,

  BriefcaseBusiness,
Building2,
MapPin,
CalendarDays,
LayoutDashboard,
Cloud,
Database,
Zap,
Code2,
Leaf,
GitBranch,
BarChart3,
Workflow,
  Phone,
} from "lucide-react";
import {
  
  GraduationCap,
  Cake,
  Briefcase,
  Languages,
  Sparkles,
  Users,
  Target
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
      <div className="space-y-8">
        {/* Profile header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Profile image */}
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white ring-1 ring-gray-200 shadow-md sm:h-32 sm:w-32">
            <img
              src={DATA.profileImage}
              alt={DATA.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Profile information */}
          <div className="min-w-0 space-y-1.5">
            <h2 className="text-2xl font-bold text-gtext">
              {DATA.name}
            </h2>

            <p className="text-sm font-semibold text-gblue">
              {DATA.role}
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-gdim">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                Navi Mumbai, India
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Cake className="h-3.5 w-3.5 shrink-0 text-pink-500" />
                Born 23 June 2002 (Thrissur, Kerala)
              </span>
            </div>

            <div className="pt-1">
              <span className="inline-flex items-center rounded-full bg-green-50 border border-green-200 px-2.5 py-0.5 text-[11px] font-medium text-green-700">
                Open to Relocation
              </span>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-5 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gdim flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-amber-500" /> Professional Summary
          </h3>
          <p className="text-sm leading-7 text-gtext">
            C#/.NET Full Stack Developer with almost 3 years of experience contributing to enterprise application development and enhancement. Experienced in building robust backend services, RESTful APIs, responsive frontend features, and database-driven solutions, with hands-on exposure to cloud deployments and business workflow automation. Strong focus on writing maintainable code, solving application problems, and working effectively in Agile development teams, with growing experience in AI-enabled application development.
          </p>
        </div>

        {/* Expertise Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-medium text-blue-700">
            <Code2 className="h-3.5 w-3.5" />
            Full Stack Engineering
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-100 px-3.5 py-1.5 text-xs font-medium text-green-700">
            <Cloud className="h-3.5 w-3.5" />
            Azure Cloud
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-100 px-3.5 py-1.5 text-xs font-medium text-purple-700">
            <Bot className="h-3.5 w-3.5" />
            AI-Assisted Development
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 border border-pink-100 px-3.5 py-1.5 text-xs font-medium text-pink-700">
            <Palette className="h-3.5 w-3.5" />
            UI/UX & Graphic Design
          </span>
        </div>

        {/* What I Am, What I Do & What I Provide */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-gtext">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Target className="h-4 w-4" />
              </div>
              <span>Who I Am</span>
            </div>
            <p className="text-xs leading-relaxed text-gdim">
              A creative, highly adaptable team player who can step up to lead, communicate effectively across teams, and bridge technical & design thinking.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-gtext">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <Code2 className="h-4 w-4" />
              </div>
              <span>What I Do</span>
            </div>
            <p className="text-xs leading-relaxed text-gdim">
              Build high-performance REST APIs, full-stack enterprise portals, clean database schemas, and intuitive modern interfaces with .NET, React & Angular.
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-gtext">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <Sparkles className="h-4 w-4" />
              </div>
              <span>What I Provide</span>
            </div>
            <p className="text-xs leading-relaxed text-gdim">
              Maintainable architecture, smooth Agile collaboration, rapid bug resolution, business workflow automation, and AI-enabled software solutions.
            </p>
          </div>
        </div>

        

        {/* Education & Personal Details */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Education */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-gtext">
              <GraduationCap className="h-4 w-4 text-blue-600" />
              <span>Education</span>
            </div>

            <div>
              <p className="text-xs font-semibold text-gtext">
                Bachelor of Technology (B.Tech.) in Information Technology
              </p>
              <p className="text-xs text-gdim">University of Mumbai (Pillai College of Engineering)</p>
              <div className="mt-2 flex items-center justify-between text-[11px]">
                <span className="text-gray-400">Aug 2019 – May 2023</span>
                <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">CGPA: 8.67</span>
              </div>
            </div>
          </div>

          {/* Languages & Soft Skills */}
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm space-y-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gtext mb-1.5">
                <Languages className="h-4 w-4 text-green-600" />
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-md bg-gray-50 border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700">English</span>
                <span className="rounded-md bg-gray-50 border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700">Hindi</span>
                <span className="rounded-md bg-gray-50 border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-700">Malayalam</span>
              </div>
            </div>

            <div>
              <div>
  <div className="flex items-center gap-2 text-sm font-semibold text-gtext mb-2">
    <Users className="h-4 w-4 text-purple-600" />
    <span>Key Soft Skills</span>
  </div>
  <div className="flex flex-wrap gap-1.5">
    <span className="rounded-md bg-purple-50 border border-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700">
      End-to-End Ownership
    </span>
    <span className="rounded-md bg-purple-50 border border-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700">
      UI/UX & Tech Alignment
    </span>
    <span className="rounded-md bg-purple-50 border border-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700">
      Agile Team Leadership
    </span>
    <span className="rounded-md bg-purple-50 border border-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700">
      Proactive Communication
    </span>
    <span className="rounded-md bg-purple-50 border border-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700">
      Pragmatic Problem Solving
    </span>
    <span className="rounded-md bg-purple-50 border border-purple-100 px-2.5 py-1 text-xs font-medium text-purple-700">
      Rapid AI Tool Adoption
    </span>
  </div>
</div>
            </div>
          </div>
        </div>

        {/* Location Footer */}
        <div className="border-t border-gborder pt-4">
          <div className="flex items-center justify-between text-xs text-gdim">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gray-400" />
              Currently based in Navi Mumbai, India
            </span>
            <span className="font-medium text-gblue">Open to relocation</span>
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
    <div className="bg-white">

      {/* Header */}
      <div className="px-6 md:px-10 pt-8 pb-7 border-b border-[#e8eaed]">
        <div className="flex items-start gap-4">
          <div className="mt-1 w-11 h-11 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
            <BriefcaseBusiness
              size={21}
              className="text-[#1a73e8]"
              strokeWidth={1.8}
            />
          </div>

          <div>
            <h2 className="text-[22px] font-medium tracking-[-0.02em] text-[#202124]">
              Experience
            </h2>

            <p className="mt-1.5 text-[13px] leading-5 text-[#6b7280] max-w-xl">
              Building enterprise applications across full-stack development,
              cloud services, APIs, data platforms, and modern frontend systems.
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="px-6 md:px-10 py-8">

        {/* =====================================================
            CAPGEMINI — CURRENT
        ===================================================== */}
        <section className="relative">

          {/* Timeline */}
          <div className="absolute left-[19px] top-[50px] bottom-0 w-px bg-[#e5e7eb]" />

          <div className="flex gap-5">

            {/* Timeline Icon */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#1a73e8] flex items-center justify-center shadow-sm ring-4 ring-white">
                <Building2
                  size={18}
                  className="text-white"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-12">

              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#202124]">
                      Capgemini
                    </h3>

                    <span className="w-2 h-2 rounded-full bg-[#34a853]" />
                  </div>

                  <p className="mt-1 text-[13px] font-medium text-[#5f6368]">
                    Senior Analyst / Software Engineer
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[12px] text-[#80868b]">
                    <MapPin size={13} />
                    <span>Navi Mumbai, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[12px] text-[#5f6368]">
                  <CalendarDays size={14} />
                  <span>Jun 2025 — Present</span>
                </div>

              </div>

              {/* Projects */}
              <div className="mt-7 space-y-5">

                {/* Architect Portal */}
                <article className="group relative rounded-2xl border border-[#e5e7eb] bg-[#fafbff] p-5 md:p-6 transition-all duration-200 hover:border-[#c7d7f5] hover:shadow-[0_8px_30px_rgba(60,64,67,0.08)]">

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#e8f0fe] flex items-center justify-center flex-shrink-0">
                        <LayoutDashboard
                          size={17}
                          className="text-[#1a73e8]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <h4 className="text-[16px] font-semibold text-[#202124]">
                          Architect Portal
                        </h4>

                        <p className="mt-0.5 text-[12px] text-[#80868b]">
                          Enterprise analytics & performance portal
                        </p>
                      </div>
                    </div>

                    <span className="hidden sm:block text-[11px] font-medium text-[#1a73e8] bg-[#e8f0fe] px-2.5 py-1 rounded-full">
                      Current Project
                    </span>

                  </div>

                  <div className="mt-5 space-y-3">

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1a73e8] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Contributed to an enterprise portal built with React
                        and ASP.NET Core Web API, developing dashboards and
                        RESTful APIs for performance, certification, and trend
                        analytics.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1a73e8] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Developed backend services using C#, Entity Framework
                        Core, LINQ, and PostgreSQL with validation, exception
                        handling, and optimized data access.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#1a73e8] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Deployed services on Azure App Service and helped reduce
                        manual reporting effort by approximately
                        <span className="font-semibold text-[#202124]"> 40%</span>.
                      </p>
                    </div>

                  </div>

                  {/* Bottom accent */}
                  <div className="mt-5 pt-4 border-t border-[#e8eaed] flex items-center gap-2 text-[11px] text-[#6b7280]">
                    <Cloud size={14} className="text-[#4285f4]" />
                    <span>React · ASP.NET Core · PostgreSQL · Azure</span>
                  </div>

                </article>

                {/* KM Portal */}
                <article className="group relative rounded-2xl border border-[#e5e7eb] bg-white p-5 md:p-6 transition-all duration-200 hover:border-[#c9dfd0] hover:shadow-[0_8px_30px_rgba(60,64,67,0.08)]">

                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 rounded-xl bg-[#e6f4ea] flex items-center justify-center flex-shrink-0">
                      <Database
                        size={17}
                        className="text-[#188038]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h4 className="text-[16px] font-semibold text-[#202124]">
                        KM Portal
                      </h4>

                      <p className="mt-0.5 text-[12px] text-[#80868b]">
                        Knowledge management & workflow automation
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 space-y-3">

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#188038] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Contributed to enhancements for an enterprise knowledge
                        management portal using C#/.NET and Azure Functions,
                        supporting content management and automated workflows.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#188038] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Implemented business logic and data-access operations
                        with MSSQL, Entity Framework Core, and LINQ for content
                        retrieval and operational workflows.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#188038] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Helped automate repetitive content-update processes,
                        reducing manual effort by approximately
                        <span className="font-semibold text-[#202124]"> 30%</span>.
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 pt-4 border-t border-[#e8eaed] flex items-center gap-2 text-[11px] text-[#6b7280]">
                    <Zap size={14} className="text-[#f9ab00]" />
                    <span>C#/.NET · Azure Functions · MSSQL · EF Core</span>
                  </div>

                </article>

              </div>
            </div>
          </div>
        </section>


        {/* =====================================================
            CAPGEMINI — PREVIOUS ROLE
        ===================================================== */}
        <section className="relative">

          <div className="absolute left-[19px] top-[50px] bottom-0 w-px bg-[#e5e7eb]" />

          <div className="flex gap-5">

            <div className="relative z-10 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#f1f3f4] border border-[#dadce0] flex items-center justify-center shadow-sm ring-4 ring-white">
                <Code2
                  size={18}
                  className="text-[#5f6368]"
                  strokeWidth={1.8}
                />
              </div>
            </div>

            <div className="flex-1">

              {/* Company */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

                <div>
                  <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[#202124]">
                    Capgemini
                  </h3>

                  <p className="mt-1 text-[13px] font-medium text-[#5f6368]">
                    Software Analyst / Engineer
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[12px] text-[#80868b]">
                    <MapPin size={13} />
                    <span>Navi Mumbai, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[12px] text-[#5f6368]">
                  <CalendarDays size={14} />
                  <span>Dec 2023 — Jun 2025</span>
                </div>

              </div>

              {/* Projects */}
              <div className="mt-7 space-y-5">

                {/* Sustainability */}
                <article className="rounded-2xl border border-[#e5e7eb] bg-white p-5 md:p-6 transition-all duration-200 hover:border-[#d7c8ee] hover:shadow-[0_8px_30px_rgba(60,64,67,0.08)]">

                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 rounded-xl bg-[#f3e8fd] flex items-center justify-center flex-shrink-0">
                      <Leaf
                        size={17}
                        className="text-[#9334e6]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h4 className="text-[16px] font-semibold text-[#202124]">
                        Sustainability Portal
                      </h4>

                      <p className="mt-0.5 text-[12px] text-[#80868b]">
                        Event registration & community engagement platform
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 space-y-3">

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#9334e6] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Contributed to an enterprise portal using React,
                        ASP.NET Core Web API, and MSSQL, implementing features
                        for event registration and community engagement.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#9334e6] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Developed RESTful APIs, database operations, validation,
                        and error handling using C#, Entity Framework Core,
                        and SQL Server.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#9334e6] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Worked with Azure DevOps deployment workflows as part of
                        Agile development and release cycles.
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 pt-4 border-t border-[#e8eaed] flex items-center gap-2 text-[11px] text-[#6b7280]">
                    <GitBranch size={14} className="text-[#9334e6]" />
                    <span>React · ASP.NET Core · MSSQL · Azure DevOps</span>
                  </div>

                </article>


                {/* Retail Analytics */}
                <article className="rounded-2xl border border-[#e5e7eb] bg-[#fafafa] p-5 md:p-6 transition-all duration-200 hover:border-[#f4c7c3] hover:shadow-[0_8px_30px_rgba(60,64,67,0.08)]">

                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 rounded-xl bg-[#fce8e6] flex items-center justify-center flex-shrink-0">
                      <BarChart3
                        size={17}
                        className="text-[#d93025]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h4 className="text-[16px] font-semibold text-[#202124]">
                        Retail Analytics Portal
                      </h4>

                      <p className="mt-0.5 text-[12px] text-[#80868b]">
                        Reporting & forecasting workflows
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 space-y-3">

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#d93025] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Contributed to reporting and forecasting workflows
                        using Angular and ASP.NET Core Web API.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#d93025] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Integrated .NET APIs with Python-based reporting
                        endpoints to support data processing and analytics.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#d93025] flex-shrink-0" />
                      <p className="text-[13px] leading-6 text-[#4b5563]">
                        Supported Azure DevOps CI/CD workflows for automated
                        build, testing, and deployment across Agile releases.
                      </p>
                    </div>

                  </div>

                  <div className="mt-5 pt-4 border-t border-[#e8eaed] flex items-center gap-2 text-[11px] text-[#6b7280]">
                    <Workflow size={14} className="text-[#d93025]" />
                    <span>Angular · ASP.NET Core · MSSQL · Python · Azure DevOps</span>
                  </div>

                </article>

              </div>
            </div>
          </div>
        </section>

      </div>
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