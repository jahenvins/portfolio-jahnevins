"use client";

import { useState } from "react";
import {
  Pencil,
  Inbox,
  Star,
  Clock3,
  ChevronRight,
  Send,
  File,
  ShoppingBag,
  Users,
  Info,
  ChevronDown,
  ChevronUp,
  X,
  Camera,
  Heart,
  Instagram,
  Coffee,
  Sparkles,
  Plane,
  Palette,
} from "lucide-react";
import { SidebarSection } from "@/lib/types";

type SidebarProps = {
  onCompose: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  activeSection: SidebarSection;
  onSelectSection: (section: SidebarSection) => void;
};

export default function Sidebar({
  onCompose,
  isOpen = true,
  onClose,
  mobileOnly = false,
  desktopOnly = false,
  activeSection,
  onSelectSection,
}: SidebarProps) {
  const [showMore, setShowMore] = useState(false);

  const items: {
    icon: any;
    label: string;
    count?: string;
    section: SidebarSection;
  }[] = [
    {
      icon: Inbox,
      label: "Inbox",
      count: "11",
      section: "inbox",
    },
    {
      icon: Star,
      label: "About",
      section: "about",
    },
    {
      icon: Clock3,
      count: "1",
      label: "Experience",
      section: "experience",
    },
    {
      icon: ChevronRight,
      label: "Projects",
      section: "projects",
    },
    {
      icon: Send,
      label: "Sent",
      section: "sent",
    },
    {
      icon: File,
      label: "Drafts",
      count: "2",
      section: "drafts",
    },
    {
      icon: ShoppingBag,
      label: "Certifications",
      section: "certifications",
    },
    {
      icon: Users,
      label: "Freelance",
      count: "1",
      section: "freelance",
    },
    {
      icon: Info,
      label: "Contact",
      section: "contact",
    },
  ];

  // Extended menu items revealed when "More" is clicked
  const moreItems = [
    {
      icon: Plane,
      label: "Office Trip '24",
      count: "📸",
      action: () => alert("Office Trip Memories: Goa & Alibaug team retreats!"),
    },
    {
      icon: Users,
      label: "The Gang (Work)",
      count: "Capgemini",
      action: () => alert("Capgemini Dev Team: Work hard, party harder!"),
    },
    {
      icon: Heart,
      label: "College Gang",
      count: "PCE '23",
      action: () => alert("Pillai College of Engineering Crew!"),
    },
    {
      icon: Instagram,
      label: "Instagram",
      action: () => window.open("https://instagram.com", "_blank"),
    },
    // {
    //   icon: Palette,
    //   label: "Design Gallery",
    //   count: "Google Sites",
    //   action: () =>
    //     window.open(
    //       "https://sites.google.com/view/junecaeles-portofolio/home",
    //       "_blank"
    //     ),
    // },
    // {
    //   icon: Coffee,
    //   label: "Daily Stack",
    //   count: "☕ + 💻",
    //   action: () => alert("Fuel: Black Coffee, .NET Core, & React"),
    // },
  ];

  const handleNavigation = (section: SidebarSection) => {
    onSelectSection(section);
    onClose?.();
  };

  return (
    <>
      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      {!desktopOnly && (
        <div
          className={`
            fixed
            inset-0
            z-40
            bg-black/20
            backdrop-blur-[1px]

            transition-opacity
            duration-200

            lg:hidden

            ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }
          `}
          onClick={onClose}
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          ${
            mobileOnly
              ? `fixed lg:hidden`
              : desktopOnly
                ? `hidden lg:flex`
                : `fixed lg:sticky`
          }

          top-0
          left-0
          z-50

          h-dvh

          w-[280px]
          sm:w-[300px]
          lg:w-[256px]
          xl:w-[280px]

          flex
          flex-col

          bg-white

          border-r
          border-gray-200

          overflow-hidden

          transform
          transition-transform
          duration-300
          ease-out

          ${
            mobileOnly
              ? isOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : ""
          }
        `}
      >
        {/* ===================================================
            MOBILE HEADER
        =================================================== */}
        {!desktopOnly && (
          <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 lg:hidden">
            <span className="text-base font-semibold text-gray-800">
              Navigation
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100"
            >
              <X size={19} strokeWidth={1.8} />
            </button>
          </div>
        )}

        {/* ===================================================
            COMPOSE
        =================================================== */}
        <div className="px-4 pt-4 pb-3 sm:px-5">
          <button
            type="button"
            onClick={onCompose}
            className="flex min-h-[48px] w-full items-center justify-center gap-3 rounded-2xl bg-[#c2e7ff] text-sm font-medium text-[#001d35] shadow-sm transition-all duration-200 hover:bg-[#b5ddf7] hover:shadow active:scale-[0.98]"
          >
            <Pencil size={18} strokeWidth={1.9} />
            <span>Compose</span>
          </button>
        </div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}
        <nav className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain pb-[75px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="pr-3">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.section;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavigation(item.section)}
                  className={`group flex min-h-[40px] w-full items-center rounded-r-full px-5 text-sm transition-all duration-150 lg:px-5 xl:px-6 ${
                    isActive
                      ? "bg-[#d3e3fd] font-semibold text-[#001d35]"
                      : "text-[#202124] hover:bg-[#f1f3f4]"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={isActive ? 2 : 1.8}
                    className="flex-shrink-0 transition-transform duration-150 group-hover:scale-105"
                  />

                  <span className="ml-4 flex-1 truncate text-left">
                    {item.label}
                  </span>

                  {item.count && (
                    <span
                      className={`ml-2 flex-shrink-0 text-[12px] font-medium ${
                        isActive ? "text-[#001d35]" : "text-gray-600"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}

            {/* More Toggle Button */}
           <button
  type="button"
  onClick={() => setShowMore((prev) => !prev)}
  className="group flex min-h-[40px]  w-full items-center rounded-r-full px-5 text-sm text-[#202124] transition-colors hover:bg-[#f1f3f4] lg:px-5 xl:px-6"
>
              {showMore ? (
                <ChevronUp
                  size={18}
                  strokeWidth={1.8}
                  className="flex-shrink-0 transition-transform group-hover:-translate-y-0.5"
                />
              ) : (
                <ChevronDown
                  size={18}
                  strokeWidth={1.8}
                  className="flex-shrink-0 transition-transform group-hover:translate-y-0.5"
                />
              )}

              <span className="ml-4 font-medium">
                {showMore ? "Less" : "More"}
              </span>
            </button>

            {/* Expanded Items */}
            {showMore && (
              <div className="mt-1 space-y-0.5 border-l-2 border-gray-100 ml-4 pl-2 transition-all">
                {moreItems.map((subItem) => {
                  const SubIcon = subItem.icon;
                  return (
                    <button
                      key={subItem.label}
                      type="button"
                      onClick={subItem.action}
                      className="group flex min-h-[36px] w-full items-center rounded-r-full px-4 text-xs text-gray-700 transition-colors hover:bg-[#f1f3f4] hover:text-black"
                    >
                      <SubIcon
                        size={15}
                        className="flex-shrink-0 text-gray-500 transition-transform group-hover:scale-110"
                      />
                      <span className="ml-3 flex-1 truncate text-left">
                        {subItem.label}
                      </span>
                      {subItem.count && (
                        <span className="ml-1 text-[11px] font-medium text-gray-400">
                          {subItem.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}