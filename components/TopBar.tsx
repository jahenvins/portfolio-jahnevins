"use client";

import {
  Menu,
  Search,
  Bell,
} from "lucide-react";

import { DATA } from "@/data/portfolio";

type TopBarProps = {
  onMenuClick?: () => void;
};

function initials(str: string) {
  return str
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header
      className="
        sticky
        top-0
        z-30

        w-full
        min-w-0

        bg-white/95
        backdrop-blur-md

        border-b
        border-gray-200
      "
    >
      <div
        className="
          h-[64px]
          sm:h-[68px]

          flex
          items-center

          gap-2
          sm:gap-3
          lg:gap-5

          px-3
          sm:px-4
          lg:px-5
          xl:px-6
        "
      >
        {/* Mobile Menu */}
        <button
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="
            lg:hidden

            flex-shrink-0

            w-10
            h-10

            rounded-full

            flex
            items-center
            justify-center

            text-gray-600

            hover:bg-gray-100

            transition-colors
          "
        >
          <Menu size={21} strokeWidth={1.8} />
        </button>

        {/* Logo / Title */}
        <div
          className="
            flex
            items-center
            gap-2

            min-w-0
            flex-shrink-0
          "
        >
          <span
            className="
              w-2
              h-2
              sm:w-2.5
              sm:h-2.5

              rounded-full
              bg-[#ea4335]

              flex-shrink-0
            "
          />

          <span
            className="
              text-[15px]
              sm:text-base
              lg:text-lg
              xl:text-xl

              text-[#5f6368]

              font-normal

              truncate
              max-w-[150px]
              sm:max-w-[220px]
              lg:max-w-[300px]
              xl:max-w-none
            "
          >
            <span className="hidden sm:inline">
              {DATA.name} — Inbox
            </span>

            <span className="sm:hidden">
              {DATA.name}
            </span>
          </span>
        </div>

        {/* Search */}
        <div
          className="
            hidden
            sm:flex

            flex-1
            min-w-0

            max-w-[680px]

            mx-auto

            bg-[#f1f3f4]
            hover:bg-[#e9eaed]

            rounded-full

            transition-colors
          "
        >
          <div className="flex items-center w-full px-4 lg:px-5">
            <Search
              size={19}
              className="flex-shrink-0 text-gray-500"
              strokeWidth={1.8}
            />

            <span
              className="
                ml-3

                text-sm
                text-[#5f6368]

                truncate
              "
            >
              Search this portfolio
            </span>
          </div>
        </div>

        {/* Mobile Search */}
        <button
          aria-label="Search"
          className="
            sm:hidden

            ml-auto

            w-9
            h-9

            rounded-full

            flex
            items-center
            justify-center

            text-gray-600

            hover:bg-gray-100

            transition-colors
          "
        >
          <Search size={19} strokeWidth={1.8} />
        </button>

        {/* Notifications */}
        <button
          aria-label="Notifications"
          className="
            hidden
            sm:flex

            w-9
            h-9

            flex-shrink-0

            rounded-full

            items-center
            justify-center

            text-gray-600

            hover:bg-gray-100

            transition-colors
          "
        >
          <Bell size={18} strokeWidth={1.8} />
        </button>

        {/* Profile */}
        <div
          className="
            w-8
            h-8
            sm:w-9
            sm:h-9

            rounded-full

            bg-[#1a73e8]
            text-white

            flex
            items-center
            justify-center

            text-[11px]
            sm:text-xs

            font-medium

            flex-shrink-0
          "
          title={DATA.name}
        >
          {initials(DATA.name)}
        </div>
      </div>
    </header>
  );
}

