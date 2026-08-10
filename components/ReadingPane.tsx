"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { EMAILS } from "@/data/portfolio";
import { EmailMeta } from "@/lib/types";
import EmailBody from "./EmailBody";

// IDs that should render the featured "Projects" grid instead of EmailBody
const PROJECT_GRID_IDS = ["projects", "independent-projects"];

export default function ReadingPane({
  id,
  onBack,
}: {
  id: EmailMeta["id"];
  onBack: () => void;
}) {
  const email = EMAILS.find((e) => e.id === id);
  const showProjectGrid = PROJECT_GRID_IDS.includes(id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="flex-1 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center gap-3 px-3 sm:px-6 md:px-8 py-3.5 border-b border-gborder bg-background/90 backdrop-blur-md">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full flex items-center justify-center text-gdim hover:text-foreground hover:bg-ghover transition-all"
        >
          <ArrowLeft size={17} />
        </button>

        <div>
          <div className="text-lg md:text-xl font-medium tracking-tight">
            {showProjectGrid ? "Projects" : email?.subject ?? "Details"}
          </div>
          <div className="text-[11px] text-gdim hidden sm:block">
            {showProjectGrid
              ? "Selected work & experiments"
              : email?.sender ?? ""}
          </div>
        </div>
      </div>

      {/* Body */}
      {showProjectGrid ? (
        <div className="px-3 sm:px-6 md:px-8 py-6 md:py-8 pb-12 max-w-6xl">
          {/* Intro */}
          <div className="mb-7 md:mb-9">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-gdim" />
              <span className="text-[11px] uppercase tracking-[0.16em] text-gdim">
                Featured Projects
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Things I've built
            </h1>

            <p className="text-sm text-gdim mt-2 max-w-2xl leading-relaxed">
              A collection of full-stack applications, AI-powered workflows,
              and modern web experiences built with .NET, React, and TypeScript.
            </p>
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

            {/* IRCTC */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden border border-gborder rounded-2xl p-5 md:p-6 bg-black/[0.02] hover:bg-black/[0.04] hover:border-gdim/50 transition-all duration-300"
            >
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-red-500/5 blur-3xl group-hover:bg-red-500/10 transition-all" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl border border-gborder flex items-center justify-center bg-background">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: "#E63946" }}
                      />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gdim">
                        01
                      </div>
                      <h3 className="font-semibold text-base md:text-lg tracking-tight">
                        IRCTC
                      </h3>
                    </div>
                  </div>

                  <a
                    href="https://irctc-ui-uc.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gborder flex items-center justify-center text-gdim hover:text-foreground hover:bg-ghover transition-all"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <p className="text-xs md:text-sm text-gdim leading-relaxed min-h-[72px]">
                  Modern railway booking experience inspired by IRCTC, featuring
                  train search, ticket booking, PNR status, train tracking, and
                  railway travel services.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                  {["React", "TypeScript", "Tailwind CSS", "Responsive UI"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-[11px] px-2.5 py-1 rounded-md bg-ghover/60 border border-gborder text-gdim"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gborder/60">
                  <a
                    href="https://github.com/jahenvins/irctc-ui-uc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>

                  <a
                    href="https://irctc-ui-uc.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* FluxHR */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden border border-gborder rounded-2xl p-5 md:p-6 bg-black/[0.02] hover:bg-black/[0.04] hover:border-gdim/50 transition-all duration-300"
            >
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl border border-gborder flex items-center justify-center bg-background">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: "#4285F4" }}
                      />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gdim">
                        02
                      </div>
                      <h3 className="font-semibold text-base md:text-lg tracking-tight">
                        FluxHR
                      </h3>
                    </div>
                  </div>

                  <a
                    href="https://fluxhr.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gborder flex items-center justify-center text-gdim hover:text-foreground hover:bg-ghover transition-all"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <p className="text-xs md:text-sm text-gdim leading-relaxed min-h-[72px]">
                  AI-powered HR platform for leave management and workforce
                  intelligence, with analytics dashboards, AI insights,
                  role-based access, and smart notifications.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                  {["React", "TypeScript", "AI", "HR Analytics", "RBAC"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-[11px] px-2.5 py-1 rounded-md bg-ghover/60 border border-gborder text-gdim"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gborder/60">
                  <a
                    href="https://github.com/jahenvins/fluxhr-leavehubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>

                  <a
                    href="https://fluxhr.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* QueryCraft - Featured */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden border border-gborder rounded-2xl p-5 md:p-6 bg-black/[0.02] hover:bg-black/[0.04] hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-purple-500/10 blur-3xl group-hover:bg-purple-500/15 transition-all" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl border border-purple-500/20 flex items-center justify-center bg-purple-500/5">
                      <Sparkles size={15} className="text-purple-400" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-[10px] uppercase tracking-widest text-gdim">
                          03
                        </div>

                        <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          AI
                        </span>
                      </div>

                      <h3 className="font-semibold text-base md:text-lg tracking-tight">
                        QueryCraft
                      </h3>
                    </div>
                  </div>

                  <a
                    href="https://query-craft.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gborder flex items-center justify-center text-gdim hover:text-foreground hover:bg-ghover transition-all"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <p className="text-xs md:text-sm text-gdim leading-relaxed min-h-[72px]">
                  AI-powered text-to-SQL application that converts natural
                  language into SQL queries using ASP.NET Core 8, Semantic
                  Kernel, and local LLM inference.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                  {[
                    "React",
                    "TypeScript",
                    "ASP.NET Core 8",
                    "Semantic Kernel",
                    "Ollama",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-[11px] px-2.5 py-1 rounded-md bg-ghover/60 border border-gborder text-gdim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gborder/60">
                  <a
                    href="https://github.com/jahenvins/querycraft"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>

                  <a
                    href="https://query-craft.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Portfolio */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden border border-gborder rounded-2xl p-5 md:p-6 bg-black/[0.02] hover:bg-black/[0.04] hover:border-gdim/50 transition-all duration-300"
            >
              <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-red-500/5 blur-3xl group-hover:bg-red-500/10 transition-all" />

              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl border border-gborder flex items-center justify-center bg-background">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: "#EA4335" }}
                      />
                    </div>

                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gdim">
                        04
                      </div>
                      <h3 className="font-semibold text-base md:text-lg tracking-tight">
                        Email-Themed Portfolio
                      </h3>
                    </div>
                  </div>

                  <a
                    href="https://jahnevi-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gborder flex items-center justify-center text-gdim hover:text-foreground hover:bg-ghover transition-all"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                <p className="text-xs md:text-sm text-gdim leading-relaxed min-h-[72px]">
                  Gmail-inspired portfolio built as a modern email interface
                  to showcase professional experience, skills, certifications,
                  and projects.
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Framer Motion",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-[11px] px-2.5 py-1 rounded-md bg-ghover/60 border border-gborder text-gdim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gborder/60">
                  <a
                    href="https://github.com/jahenvins/portfolio-jahnevins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <Github size={14} />
                    Source
                  </a>

                  <a
                    href="https://jahnevi-portfolio.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gdim hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      ) : (
        <div className="px-3 sm:px-6 md:px-8 py-6 md:py-8 pb-12">
          <EmailBody id={id} />
        </div>
      )}
    </motion.div>
  );
}
