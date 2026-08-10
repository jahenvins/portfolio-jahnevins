"use client";
import MemoryView from "./MemoryView";
import { MEMORIES } from "@/data/portfolio";
import {
  submitRating,
  getRatingStats,
} from "@/lib/feedback";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Search,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Grid3X3,
  X,
  RefreshCw,
  MoreVertical,
  PanelTop,
  Tag,
  Users,
  Info,
  Archive,
  CameraIcon,
  Star,
  CheckCircle2,
  Github,
  Linkedin,
  FileText,
  Menu,
} from "lucide-react";

import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import ReadingPane from "./ReadingPane";
import ComposeModal from "./ComposeModal";

import { EmailMeta, SidebarSection } from "@/lib/types";
import { DATA } from "@/data/portfolio";

type Tab =
  | "primary"
  | "projects"
  | "experience"
  | "resume";

export default function Inbox() {
  const [openId, setOpenId] =
    useState<EmailMeta["id"] | null>(null);

  const [readIds, setReadIds] =
    useState<Set<EmailMeta["id"]>>(new Set());

  const [composeOpen, setComposeOpen] =
    useState(false);

  const [showFeedback, setShowFeedback] =
    useState(true);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState<Tab>("primary");

  const [activeSection, setActiveSection] =
    useState<SidebarSection>("inbox");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [selectedRating, setSelectedRating] =
    useState(0);

  const [feedbackSubmitting, setFeedbackSubmitting] =
    useState(false);

  const [ratingAverage, setRatingAverage] =
    useState(0);

  const [ratingTotal, setRatingTotal] =
    useState(0);

  const [feedbackSubmitted, setFeedbackSubmitted] =
    useState(false);

  /*
   * =========================================================
   * LOAD FEEDBACK STATE
   * =========================================================
   */

  useEffect(() => {
    const alreadySubmitted =
      localStorage.getItem(
        "portfolio-feedback-submitted"
      );

    if (alreadySubmitted === "true") {
      setShowFeedback(false);
      setFeedbackSubmitted(true);
    }

    async function loadRatingStats() {
      try {
        const stats = await getRatingStats();

        setRatingAverage(stats.average);
        setRatingTotal(stats.total);
      } catch (error) {
        console.error(
          "Failed to load rating stats:",
          error
        );
      }
    }

    loadRatingStats();
  }, []);

  /*
   * =========================================================
   * OPEN EMAIL
   * =========================================================
   */

  function handleOpen(id: EmailMeta["id"]) {
    setOpenId(id);

    setReadIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  /*
   * =========================================================
   * SIDEBAR SECTION CHANGE
   * =========================================================
   */

  function handleSelectSection(section: SidebarSection) {
    setActiveSection(section);
    setOpenId(null);
  }

  /*
   * =========================================================
   * TAB CHANGE
   * =========================================================
   */

  function handleTabChange(tab: Tab) {
    setActiveTab(tab);

    const tabMap: Partial<
      Record<Tab, EmailMeta["id"]>
    > = {
      projects: "work-projects",
      experience: "experience",
      resume: "resume",
    };

    const targetId = tabMap[tab];

    if (targetId) {
      setOpenId(targetId);

      setReadIds((prev) => {
        const next = new Set(prev);
        next.add(targetId);
        return next;
      });
    } else {
      setOpenId(null);
    }
  }

  /*
   * =========================================================
   * FEEDBACK
   * =========================================================
   */

  async function submitFeedback() {
    if (
      !selectedRating ||
      feedbackSubmitting
    ) {
      return;
    }

    try {
      setFeedbackSubmitting(true);

      await submitRating(selectedRating);

      const stats = await getRatingStats();

      setRatingAverage(stats.average);
      setRatingTotal(stats.total);

      localStorage.setItem(
        "portfolio-feedback-submitted",
        "true"
      );

      setFeedbackSubmitted(true);

      window.setTimeout(() => {
        setShowFeedback(false);
      }, 1200);
    } catch (error) {
      console.error(
        "Feedback submission failed:",
        error
      );
    } finally {
      setFeedbackSubmitting(false);
    }
  }

  /*
   * =========================================================
   * PROFILE LINKS
   * =========================================================
   */

  const profileLinks = useMemo(
    () => ({
      resume: DATA.resumeUrl,
      linkedin: DATA.linkedin,
      github: DATA.github,
    }),
    []
  );

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <div
      className="
        flex
        h-dvh
        min-h-dvh
        w-full
        min-w-0
        overflow-hidden
        bg-white
        text-[#202124]
      "
    >
      {/* =====================================================
          MOBILE SIDEBAR
      ===================================================== */}

      <Sidebar
        mobileOnly
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onCompose={() => {
          setComposeOpen(true);
          setSidebarOpen(false);
        }}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* =====================================================
          APPLICATION
      ===================================================== */}

      <div
        className="
          flex
          min-w-0
          min-h-0
          flex-1
          flex-col
          overflow-hidden
        "
      >
        {/* ===================================================
            GMAIL HEADER
        =================================================== */}

        <header
          className="
            sticky
            top-0
            z-30

            shrink-0

            border-b
            border-[#e0e0e0]

            bg-white/95
            backdrop-blur-md
          "
        >
          <div
            className="
              flex
              min-w-0
              items-center

              gap-1
              sm:gap-2
              md:gap-4

              px-2
              sm:px-4
              lg:px-5
              xl:px-6

              py-2
            "
          >
            {/* Mobile menu */}
            <button
              type="button"
              aria-label="Open navigation"
              onClick={() =>
                setSidebarOpen(true)
              }
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full

                text-[#5f6368]

                transition
                hover:bg-[#f1f3f4]

                md:hidden
              "
            >
              <Menu
                size={21}
                strokeWidth={1.8}
              />
            </button>

            {/* Logo */}
            <div
              className="
                hidden
                shrink-0
                items-center
                md:flex
              "
            >
              <img
                src="/logo/LogoName.png"
                alt="Portfolio"
                className="
                  h-10
                  w-auto
                  object-contain

                  lg:h-12
                  xl:h-14
                "
              />
            </div>

            {/* Mobile title */}
            <div
              className="
                flex
                min-w-0
                max-w-[180px]
                items-center
                gap-2

                md:hidden
              "
            >
              <span
                className="
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#ea4335]
                "
              />

              <span
                className="
                  truncate
                  text-[15px]
                  text-[#5f6368]
                "
              >
                {DATA.name}
              </span>
            </div>

            {/* =================================================
                SEARCH
            ================================================= */}

            <div
              className="
                hidden

                min-w-0
                flex-1

                sm:flex

                max-w-[720px]

                lg:mx-auto
              "
            >
              <div
                className="
                  flex
                  h-10
                  min-w-0
                  w-full
                  items-center
                  gap-2

                  rounded-full

                  bg-[#eaf1fb]

                  px-3

                  transition

                  focus-within:bg-white
                  focus-within:shadow-sm

                  md:h-11
                  md:gap-3
                  md:px-4

                  lg:h-12
                  lg:px-5
                "
              >
                <Search
                  size={18}
                  className="
                    shrink-0
                    text-[#5f6368]

                    md:h-5
                    md:w-5
                  "
                />

                <input
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(
                      event.target.value
                    )
                  }
                  className="
                    min-w-0
                    flex-1

                    bg-transparent

                    text-sm
                    text-[#202124]

                    outline-none

                    placeholder:text-[#5f6368]

                    md:text-base
                  "
                  placeholder="Search portfolio"
                  aria-label="Search portfolio"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearchQuery("")
                    }
                    aria-label="Clear search"
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full

                      hover:bg-[#e1e7ef]
                    "
                  >
                    <X
                      size={16}
                      className="text-[#5f6368]"
                    />
                  </button>
                )}

                <button
                  type="button"
                  aria-label="Search options"
                  className="
                    hidden
                    shrink-0

                    sm:flex
                  "
                >
                  <ChevronDown
                    size={18}
                    className="text-[#5f6368]"
                  />
                </button>
              </div>
            </div>

            {/* Mobile search */}
            <button
              type="button"
              aria-label="Search"
              className="
                ml-auto

                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full

                text-[#5f6368]

                hover:bg-[#f1f3f4]

                sm:hidden
              "
            >
              <Search size={19} />
            </button>

            {/* =================================================
                HEADER ACTIONS
            ================================================= */}

            <div
              className="
                ml-auto

                flex
                shrink-0
                items-center

                gap-0

                sm:gap-1
                md:gap-2
              "
            >
              {/* Help */}
              <button
                type="button"
                aria-label="Help"
                className="
                  hidden
                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-full

                  hover:bg-[#eaebef]

                  sm:flex

                  md:h-10
                  md:w-10
                "
              >
                <HelpCircle
                  size={18}
                  className="text-[#5f6368]"
                />
              </button>

              {/* Settings */}
              <button
                type="button"
                aria-label="Settings"
                className="
                  hidden
                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-full

                  hover:bg-[#eaebef]

                  sm:flex

                  md:h-10
                  md:w-10
                "
              >
                <Settings
                  size={18}
                  className="text-[#5f6368]"
                />
              </button>

              {/* Google apps */}
              <button
                type="button"
                aria-label="Google apps"
                className="
                  hidden
                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-full

                  hover:bg-[#eaebef]

                  lg:flex
                "
              >
                <Grid3X3
                  size={18}
                  className="text-[#5f6368]"
                />
              </button>

              {/* Profile */}
              <div className="relative ml-1 md:ml-2">
                <button
                  type="button"
                  onClick={() =>
                    setProfileOpen(
                      (prev) => !prev
                    )
                  }
                  aria-label="Open profile menu"
                  aria-expanded={profileOpen}
                  className="
                    block
                    rounded-full

                    transition
                    hover:scale-105
                  "
                >
                  <span
                    className="
                      inline-block
                      rounded-full
                      p-[2px]
                    "
                    style={{
                      background:
                        "conic-gradient(#ea4335,#fbbc05,#34a853,#4285f4)",
                    }}
                  >
                    <img
                      src="/pics/pic.jpeg"
                      alt="Jahnevi"
                      className="
                        h-8
                        w-8

                        rounded-full
                        bg-white
                        object-cover

                        sm:h-9
                        sm:w-9

                        md:h-10
                        md:w-10
                      "
                    />
                  </span>
                </button>

                {/* =================================================
                    PROFILE POPUP
                ================================================= */}

                {profileOpen && (
                  <>
                    <button
                      type="button"
                      aria-label="Close profile menu"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        fixed
                        inset-0
                        z-40
                        cursor-default
                        bg-black/5
                      "
                    />

                    <div
                      className="
                        fixed
                        inset-x-2
                        top-[60px]
                        z-50

                        max-h-[calc(100dvh-72px)]

                        overflow-y-auto

                        rounded-[24px]

                        bg-[#edf2fa]

                        p-4

                        shadow-[0_8px_30px_rgba(0,0,0,0.18)]

                        sm:absolute
                        sm:inset-x-auto
                        sm:right-0
                        sm:top-12

                        sm:w-[360px]

                        md:top-14
                        md:w-[420px]
                        md:p-5
                      "
                    >
                      {/* Profile */}
                      <div
                        className="
                          flex
                          flex-col
                          items-center
                          pt-2
                          md:pt-4
                        "
                      >
                        <div className="relative">
                          <span
                            className="
                              inline-block
                              rounded-full
                              p-[3px]
                            "
                            style={{
                              background:
                                "conic-gradient(#ea4335,#fbbc05,#34a853,#4285f4)",
                            }}
                          >
                            <img
                              src="/pics/pic.jpeg"
                              alt="Jahnevi"
                              className="
                                h-20
                                w-20
                                rounded-full
                                object-cover

                                sm:h-24
                                sm:w-24

                                md:h-28
                                md:w-28
                              "
                            />
                          </span>

                          <button
                            type="button"
                            aria-label="Change profile picture"
                            className="
                              absolute
                              bottom-0
                              right-0

                              flex
                              h-8
                              w-8

                              items-center
                              justify-center

                              rounded-full

                              bg-white

                              shadow-md

                              hover:bg-gray-50

                              md:h-9
                              md:w-9
                            "
                          >
                            <CameraIcon
                              size={17}
                            />
                          </button>
                        </div>

                        <h1
                          className="
                            mt-3

                            text-lg
                            font-light
                            leading-none
                            text-[#202124]

                            md:mt-4
                            md:text-[22px]
                          "
                        >
                          Hi, JAHNEVI!
                        </h1>

                        <p
                          className="
                            mt-2
                            max-w-full
                            truncate
                            text-xs
                            text-[#5f6368]
                          "
                        >
                          Senior Software Engineer
                        </p>

                        <a
                          href={
                            profileLinks.resume
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            mt-4

                            rounded-full

                            border
                            border-[#80868b]

                            px-6
                            py-2

                            text-sm
                            font-medium
                            text-[#0b57d0]

                            transition

                            hover:bg-white

                            md:mt-5
                            md:px-8
                            md:py-3
                          "
                        >
                          View my resume
                        </a>
                      </div>

                      {/* Account */}
                      <div
                        className="
                          mt-5

                          rounded-[20px]

                          bg-white

                          p-3

                          md:mt-7
                          md:p-4
                        "
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="
                              inline-block
                              shrink-0
                              rounded-full
                              p-[2px]
                            "
                            style={{
                              background:
                                "conic-gradient(#ea4335,#fbbc05,#34a853,#4285f4)",
                            }}
                          >
                            <img
                              src="/pics/pic.jpeg"
                              alt="Jahnevi account"
                              className="
                                h-10
                                w-10
                                rounded-full
                                object-cover
                              "
                            />
                          </span>

                          <div
                            className="
                              min-w-0
                              flex-1
                            "
                          >
                            <p
                              className="
                                truncate
                                text-sm
                                font-medium
                                text-[#202124]
                              "
                            >
                              {DATA.name}
                            </p>

                            <p
                              className="
                                truncate
                                text-xs
                                text-[#5f6368]
                              "
                            >
                              {DATA.email}
                            </p>
                          </div>

                          <CheckCircle2
                            size={18}
                            className="
                              shrink-0
                              text-[#34a853]
                            "
                          />
                        </div>

                        <div
                          className="
                            mt-3

                            rounded-xl

                            bg-[#f6f8fc]

                            px-3
                            py-2.5
                          "
                        >
                          <p
                            className="
                              text-xs
                              leading-5
                              text-[#5f6368]
                            "
                          >
                            Full-stack developer
                            focused on .NET, React,
                            Azure and AI-assisted
                            development.
                          </p>
                        </div>
                      </div>

                      {/* Links */}
                      <div
                        className="
                          mt-3

                          grid
                          grid-cols-3
                          gap-2
                        "
                      >
                        <ProfileLink
                          href={
                            profileLinks.resume
                          }
                          icon={
                            <FileText size={17} />
                          }
                          label="Resume"
                        />

                        <ProfileLink
                          href={
                            profileLinks.linkedin
                          }
                          icon={
                            <Linkedin size={17} />
                          }
                          label="LinkedIn"
                        />

                        <ProfileLink
                          href={
                            profileLinks.github
                          }
                          icon={
                            <Github size={17} />
                          }
                          label="GitHub"
                        />
                      </div>

                      <div
                        className="
                          mt-4
                          flex
                          justify-center
                        "
                      >
                        <p
                          className="
                            text-center
                            text-[10px]
                            text-[#80868b]
                          "
                        >
                          9166392096 · Navi Mumbai, India
                          · Open to relocation
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* =====================================================
            MAIN AREA
        ===================================================== */}

        <div
          className="
            flex
            min-h-0
            min-w-0
            flex-1
            overflow-hidden
          "
        >
          {/* Desktop Sidebar */}

          <div
            className="
              hidden
              shrink-0

              md:block
            "
          >
            <Sidebar
              desktopOnly
              activeSection={activeSection}
              onSelectSection={handleSelectSection}
              onCompose={() => setComposeOpen(true)}
            />
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              flex
              min-h-0
              min-w-0
              flex-1
              flex-col

              overflow-hidden

              bg-white

              md:rounded-tl-2xl
            "
          >
            {/* =================================================
                ACTION BAR
            ================================================= */}

            <div
              className="
                shrink-0

                border-b
                border-[#e0e0e0]

                bg-white
              "
            >
              <div
                className="
                  flex
                  h-11
                  items-center
                  justify-between

                  px-2

                  sm:h-12
                  sm:px-3

                  md:px-4
                "
              >
                {/* Left actions */}
                <div
                  className="
                    flex
                    min-w-0
                    items-center

                    gap-0.5

                    sm:gap-1
                    md:gap-2
                  "
                >
                  {/* Select */}
                  <button
                    type="button"
                    aria-label="Select emails"
                    className="
                      flex
                      h-8
                      items-center
                      gap-1
                      rounded-md
                      px-1.5

                      hover:bg-[#f1f3f4]
                    "
                  >
                    <input
                      type="checkbox"
                      aria-label="Select all"
                      className="
                        h-3.5
                        w-3.5

                        md:h-4
                        md:w-4
                      "
                    />

                    <ChevronDown
                      size={13}
                      className="text-[#5f6368]"
                    />
                  </button>

                  {/* Refresh */}
                  <ActionButton
                    label="Refresh"
                    onClick={() =>
                      window.location.reload()
                    }
                  >
                    <RefreshCw size={17} />
                  </ActionButton>

                  {/* More */}
                  <ActionButton label="More">
                    <MoreVertical size={17} />
                  </ActionButton>
                </div>

                {/* Right actions */}
                <div
                  className="
                    flex
                    shrink-0
                    items-center

                    gap-0.5

                    text-xs
                    text-[#5f6368]

                    sm:gap-1
                    md:gap-2
                  "
                >
                  <span
                    className="
                      hidden
                      whitespace-nowrap

                      sm:inline
                    "
                  >
                    1–11 of 11
                  </span>

                  <ActionButton
                    label="Previous page"
                    disabled
                  >
                    <ChevronLeft size={18} />
                  </ActionButton>

                  <ActionButton
                    label="Next page"
                    disabled
                  >
                    <ChevronRight size={18} />
                  </ActionButton>

                  <ActionButton
                    label="Layout options"
                    className="hidden sm:flex"
                  >
                    <PanelTop size={17} />
                  </ActionButton>
                </div>
              </div>

              {/* =================================================
                  TABS
              ================================================= */}

              <div
                className="
                  flex
                  min-w-0

                  overflow-x-auto
                  overflow-y-hidden

                  scrollbar-none

                  overscroll-x-contain
                "
              >
                <GmailTab
                  active={
                    activeTab === "primary"
                  }
                  icon={
                    <Archive size={18} />
                  }
                  label="Primary"
                  onClick={() =>
                    handleTabChange(
                      "primary"
                    )
                  }
                />

                <GmailTab
                  active={
                    activeTab === "projects"
                  }
                  icon={
                    <Tag size={18} />
                  }
                  label="Projects"
                  onClick={() =>
                    handleTabChange(
                      "projects"
                    )
                  }
                />

                <GmailTab
                  active={
                    activeTab === "experience"
                  }
                  icon={
                    <Users size={18} />
                  }
                  label="Experience"
                  onClick={() =>
                    handleTabChange(
                      "experience"
                    )
                  }
                />

                <GmailTab
                  active={
                    activeTab === "resume"
                  }
                  icon={
                    <Info size={18} />
                  }
                  label="Resume"
                  badge="PDF"
                  subtitle="Updated Aug 2026"
                  onClick={() =>
                    handleTabChange(
                      "resume"
                    )
                  }
                />
              </div>
            </div>
{/* =================================================
                EMAIL / READING CONTENT
            ================================================= */}

            <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain scroll-smooth">
  {MEMORIES[activeSection] ? (
    <MemoryView
      memory={MEMORIES[activeSection]}
      onBack={() => setActiveSection("inbox")}
    />
  ) : openId ? (
    <ReadingPane
      id={openId}
      onBack={() => {
        setOpenId(null);
        setActiveTab("primary");
      }}
    />
  ) : (
    <EmailList
      onOpen={handleOpen}
      readIds={readIds}
      activeSection={activeSection}
      activeTab={activeTab}
    />
  )}
</div>

            
          </div>
        </div>
      </div>

      {/* =======================================================
          FEEDBACK
      ======================================================= */}

      {showFeedback && (
        <div
          className="
            fixed
            bottom-3
            right-3
            z-40

            w-[calc(100vw-1.5rem)]
            max-w-[300px]

            rounded-2xl

            border
            border-[#dadce0]

            bg-white

            p-4

            shadow-[0_6px_24px_rgba(60,64,67,0.18)]

            sm:bottom-5
            sm:right-5
          "
        >
          <div
            className="
              flex
              items-start
              justify-between
              gap-3
            "
          >
            <div className="min-w-0">
              <h4
                className="
                  text-sm
                  font-medium
                  text-[#202124]
                "
              >
                {feedbackSubmitted
                  ? "Thanks for the feedback!"
                  : "How was this portfolio?"}
              </h4>

              <p
                className="
                  mt-1
                  text-xs
                  leading-5
                  text-[#5f6368]
                "
              >
                {feedbackSubmitted
                  ? "I really appreciate you taking the time."
                  : "Your feedback means a lot."}
              </p>

              {ratingTotal > 0 && (
                <div className="mt-1 flex items-center gap-1">
                  <span
                    className="
                      text-xs
                      font-medium
                      text-[#202124]
                    "
                  >
                    {ratingAverage.toFixed(1)} / 5
                  </span>

                  <span
                    className="
                      text-xs
                      text-[#80868b]
                    "
                  >
                    · {ratingTotal}{" "}
                    {ratingTotal === 1
                      ? "rating"
                      : "ratings"}
                  </span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                setShowFeedback(false)
              }
              aria-label="Close feedback"
              className="
                flex
                h-7
                w-7
                shrink-0

                items-center
                justify-center

                rounded-full

                hover:bg-[#f1f3f4]
              "
            >
              <X
                size={15}
                className="text-[#5f6368]"
              />
            </button>
          </div>

          {!feedbackSubmitted && (
            <>
              <div
                className="
                  mt-4
                  flex
                  justify-between
                "
              >
                {[1, 2, 3, 4, 5].map(
                  (rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() =>
                        setSelectedRating(
                          rating
                        )
                      }
                      aria-label={`Rate ${rating} out of 5`}
                      className="
                        rounded-full
                        p-1

                        transition

                        hover:scale-110
                      "
                    >
                      <Star
                        size={22}
                        fill={
                          rating <=
                          selectedRating
                            ? "currentColor"
                            : "none"
                        }
                        className={
                          rating <=
                          selectedRating
                            ? "text-[#fbbc04]"
                            : "text-[#9aa0a6]"
                        }
                      />
                    </button>
                  )
                )}
              </div>

              <button
                type="button"
                onClick={submitFeedback}
                disabled={
                  !selectedRating ||
                  feedbackSubmitting
                }
                className="
                  mt-3
                  w-full

                  rounded-lg

                  bg-[#1a73e8]

                  px-3
                  py-2

                  text-xs
                  font-medium
                  text-white

                  transition

                  hover:bg-[#1557b0]

                  disabled:cursor-not-allowed
                  disabled:bg-[#d2e3fc]
                "
              >
                {feedbackSubmitting
                  ? "Submitting..."
                  : "Submit Feedback"}
              </button>
            </>
          )}
        </div>
      )}

      {/* =======================================================
          COMPOSE
      ======================================================= */}

      <ComposeModal
        open={composeOpen}
        onClose={() =>
          setComposeOpen(false)
        }
      />
    </div>
  );
}

/* ===============================================================
   ACTION BUTTON
================================================================ */

function ActionButton({
  children,
  label,
  onClick,
  disabled = false,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
        h-8
        w-8
        shrink-0

        items-center
        justify-center

        rounded-full

        text-[#5f6368]

        transition

        hover:bg-[#f1f3f4]

        disabled:cursor-not-allowed
        disabled:opacity-40

        ${className}
      `}
    >
      {children}
    </button>
  );
}

/* ===============================================================
   PROFILE LINK
================================================================ */

function ProfileLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        min-w-0
        flex-col
        items-center
        justify-center

        gap-1.5

        rounded-xl

        bg-white

        px-2
        py-3

        text-[#5f6368]

        transition

        hover:bg-gray-50
        hover:text-[#202124]
      "
    >
      {icon}

      <span className="text-[11px]">
        {label}
      </span>
    </a>
  );
}

/* ===============================================================
   GMAIL TAB
================================================================ */

function GmailTab({
  active,
  icon,
  label,
  subtitle,
  badge,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  subtitle?: string;
  badge?: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative

        flex
        min-w-[110px]
        shrink-0
        items-center

        gap-2

        px-4

        text-sm

        transition

        sm:min-w-[145px]
        sm:px-4

        md:min-w-[180px]
        md:gap-3
        md:px-5
        md:text-base

        lg:min-w-[210px]

        ${
          active
            ? `
              border-b-[3px]
              border-[#0b57d0]

              bg-[#f8faff]

              text-[#0b57d0]
            `
            : `
              border-b-[3px]
              border-transparent

              text-[#444746]

              hover:bg-[#f6f8fc]
            `
        }
      `}
    >
      {/* Icon */}
      <span
        className={`
          shrink-0

          ${
            active
              ? "text-[#0b57d0]"
              : "text-[#5f6368]"
          }
        `}
      >
        {icon}
      </span>

      {/* Text */}
      <div
        className="
          flex
          min-w-0
          flex-col
          items-start
        "
      >
        <div
          className="
            flex
            min-w-0
            items-center
            gap-1.5
          "
        >
          <span
            className="
              truncate
              font-medium
            "
          >
            {label}
          </span>

          {badge && (
            <span
              className="
                shrink-0

                rounded-full

                bg-[#ea8600]

                px-1.5
                py-0.5

                text-[8px]
                font-semibold
                text-white

                sm:px-2
                sm:text-[9px]
              "
            >
              {badge}
            </span>
          )}
        </div>

        {subtitle && (
          <span
            className="
              hidden

              truncate
              text-[10px]
              text-[#80868b]

              sm:block
            "
          >
            {subtitle}
          </span>
        )}
      </div>
    </button>
  );
}

  );
}
