"use client";

import { useState } from "react";
import {
  Menu,
  Search,
  Settings,
  HelpCircle,
  Trash2,
  Mail,
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
  Camera,
  CameraIcon
} from "lucide-react";

import Sidebar from "./Sidebar";
import EmailList from "./EmailList";
import ReadingPane from "./ReadingPane";
import ComposeModal from "./ComposeModal";
import { EmailMeta } from "@/lib/types";

export default function Inbox() {
  const [openId, setOpenId] = useState<EmailMeta["id"] | null>(null);
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [composeOpen, setComposeOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  function handleOpen(id: EmailMeta["id"]) {
    setOpenId(id);
    setReadIds((prev) => new Set(prev).add(id));
  }

  return (
    <div className="h-screen bg-[#f6f8fc] p-4">
      <div className="w-full h-full bg-[#f6f8fc] flex flex-col rounded-2xl overflow-hidden">

        {/* Gmail Header */}
        <header className="h-16 bg-[#f6f8fc] flex items-center px-4 gap-4 border-b border-[#e5e7eb]">

          {/* Menu + Logo */}
          <div className="flex items-center gap-4 min-w-[240px]">
            <button className="w-10 h-10 rounded-full hover:bg-[#eaebef] flex items-center justify-center">
              <Menu size={22} className="text-[#5f6368]" />
            </button>
            <div className="flex items-center gap-3">
              <img
                src="/logo/LogoName.png"
                alt="gmail"
                className="h-16"
              />
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-[720px]">
            <div className="
              h-12
              bg-[#eaf1fb]
              rounded-full
              flex
              items-center
              px-5
              gap-4
            ">
              <Search size={20} className="text-[#5f6368]" />

              <input
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-[16px]
                  placeholder:text-[#5f6368]
                "
                placeholder="Search mail"
              />

              <ChevronDown size={18} className="text-[#5f6368]" />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1">
            <button className="w-10 h-10 rounded-full hover:bg-[#eaebef] flex items-center justify-center">
              <HelpCircle size={20} className="text-[#5f6368]" />
            </button>

            <button className="w-10 h-10 rounded-full hover:bg-[#eaebef] flex items-center justify-center">
              <Settings size={20} className="text-[#5f6368]" />
            </button>

            <button className="w-10 h-10 rounded-full hover:bg-[#eaebef] flex items-center justify-center">
              <Grid3X3 size={20} className="text-[#5f6368]" />
            </button>

            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="ml-2"
                aria-label="Open profile menu"
              >
                <span
                  className="inline-block rounded-full p-[2px] hover:scale-105 transition-transform"
                    style={{
                          background: "conic-gradient(#ea4335,#fbbc05,#34a853,#4285f4)"
                        }}
                >
                  <img
                    src="/pics/pic.jpeg"
                    alt="Jahnevi"
                    className="w-10 h-10 rounded-full object-cover bg-white"
                  />
                </span>
              </button>

              {profileOpen && (
                <div 
                 className="
                  absolute
                  top-14
                  right-0
                  z-50
                  w-[420px]
                  rounded-[28px]
                  bg-[#edf2fa]
                  shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                  p-5
                ">
                  <div className="flex flex-col items-center mt-6">
                    <div className="relative">
                      

                       <span
                        className="inline-block rounded-full p-[3px]"
                        style={{
                          background: "conic-gradient(#ea4335,#fbbc05,#34a853,#4285f4)"
                        }}
                      >
                        <img
                        src="/pics/pic.jpeg"
                        alt="Jahnevi"
                        
                        className="
                          w-28
                          h-28
                          rounded-full
                          object-cover
                        "
                      />
                      </span>

                      <button
                        className="
                          absolute
                          bottom-0
                          right-0
                          w-9
                          h-9
                          bg-white
                          rounded-full
                          shadow-md
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <CameraIcon size={19} />
                      </button>
                    </div>

                    <h1
                      className="
                        mt-4
                        text-[22px]
                        font-light
                        leading-none
                        text-[#202124]
                      "
                    >
                      Hi, JAHNEVI!
                    </h1>

                    <button
                      className="
                        mt-5
                        px-8
                        py-3
                        rounded-full
                        border
                        border-[#80868b]
                        text-[#0b57d0]
                        font-medium
                        hover:bg-white
                        transition
                      "
                    >
                      Manage your Portfolio
                    </button>
                  </div>

                  <div
                    className="
                      mt-8
                      bg-white
                      rounded-full
                      px-6
                      py-5
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span className="text-[14px] text-[#202124]">
                      Show more accounts
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-black" />

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-[#f4511e]
                          text-white
                          flex
                          items-center
                          justify-center
                          text-sm
                        "
                      >
                        J
                      </div>

                      <span
                        className="inline-block rounded-full p-[1px]"
                        style={{
                          background: "conic-gradient(#ea4335,#fbbc05,#34a853,#4285f4)"
                        }}
                      >
                        <img
                          src="/pics/pic.jpeg"
                          className="w-8 h-8 rounded-full bg-white"
                          alt="account"
                        />
                      </span>

                      <div
                        className="
                          w-9
                          h-9
                          rounded-full
                          bg-[#edf2fa]
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  

                 

                  <div
                    className="
                      mt-7
                      flex
                      justify-center
                      gap-4
                      text-sm
                      text-[#5f6368]
                    "
                  >
                    <button className="hover:underline">
                      Resume
                    </button>

                    <span>•</span>

                    <button className="hover:underline">
                      LinkedIn
                    </button>

                    <span>•</span>

                    <button className="hover:underline">
                      GitHub
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">

          {/* Sidebar */}
          <Sidebar onCompose={() => setComposeOpen(true)} />
          {/* Portfolio Reactions */}
          {showFeedback && (
            <div className="
              absolute
              bottom-5
              right-5
              bg-white
              border
              border-[#dadce0]
              rounded-2xl
              shadow-md
              w-[260px]
              p-4
            ">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-[#202124]">
                    How was this portfolio?
                  </h4>

                  <p className="text-xs text-[#5f6368] mt-1">
                    Your feedback means a lot.
                  </p>
                </div>

                {/* Close */}
                <button
                  onClick={() => setShowFeedback(false)}
                  className="
                    w-7
                    h-7
                    rounded-full
                    hover:bg-[#f1f3f4]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <X
                    size={16}
                    className="text-[#5f6368]"
                  />
                </button>
              </div>

              {/* Stars */}
              <div className="flex justify-between mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-2xl hover:scale-110 transition"
                  >
                    ⭐
                  </button>
                ))}
              </div>

              {/* Submit */}
              <button className="mt-4 text-sm text-[#1a73e8] font-medium">
                Submit Feedback
              </button>
            </div>
          )}
          {/* Main Gmail Area */}
          <div className="flex-1 bg-white rounded-tl-2xl flex flex-col min-h-0">
            {/* Inbox Header */}
            <div className="bg-white border-b border-[#e0e0e0]">

              {/* Actions Row */}
              <div className="h-12 flex items-center justify-between px-4">

                <div className="flex items-center gap-4">
                  {/* checkbox */}
                  <div className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                    />
                    <ChevronDown
                      size={14}
                      className="text-[#5f6368]"
                    />
                  </div>

                  {/* refresh */}
                  <button className="w-8 h-8 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center">
                    <RefreshCw
                      size={18}
                      className="text-[#5f6368]"
                    />
                  </button>

                  {/* more */}
                  <button className="w-8 h-8 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center">
                    <MoreVertical
                      size={18}
                      className="text-[#5f6368]"
                    />
                  </button>
                </div>

                {/* right */}
                <div className="flex items-center gap-4 text-sm text-[#5f6368]">

                  <span>1–50 of 4</span>

                  <button className="w-8 h-8 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center">
                    <ChevronLeft size={18} />
                  </button>

                  <button className="w-8 h-8 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center">
                    <ChevronRight size={18} />
                  </button>

                  <button className="w-8 h-8 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center">
                    <PanelTop size={18} />
                  </button>

                  <ChevronDown
                    size={14}
                    className="text-[#5f6368]"
                  />
                </div>
              </div>

              {/* Gmail Tabs */}
              <div className="h-14 flex">

                <button className="
                  flex
                  items-center
                  gap-4
                  px-4
                  w-[250px]
                  border-b-4
                  border-[#0b57d0]
                  text-[#0b57d0]
                  font-medium
                ">
                  <Archive size={18} />
                  <span>Primary</span>
                </button>

                <button className="
                  flex
                  items-center
                  gap-4
                  px-4
                  w-[250px]
                  text-[#444746]
                  hover:bg-[#f6f8fc]
                ">
                  <Tag size={18} />
                  <span>Projects</span>
                </button>

                <button className="
                  flex
                  items-center
                  gap-4
                  px-4
                  w-[250px]
                  text-[#444746]
                  hover:bg-[#f6f8fc]
                ">
                  <Users size={18} />
                  <span>Experience</span>
                </button>

                <button className="
                  flex
                  items-center
                  gap-4
                  px-4
                  w-[250px]
                  text-[#444746]
                  hover:bg-[#f6f8fc]
                ">
                  <Info size={18} />

                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                      <span>Resume</span>

                      <span className="
                        px-2
                        rounded-full
                        text-white
                        bg-[#ea8600]
                        text-[11px]
                      ">
                        PDF
                      </span>
                    </div>

                    <span className="text-xs text-gray-500">
                      Updated July 2026
                    </span>
                  </div>
                </button>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {openId ? (
                <ReadingPane
                  id={openId}
                  onBack={() => setOpenId(null)}
                />
              ) : (
                <EmailList
                  onOpen={handleOpen}
                  readIds={readIds}
                />
              )}
            </div>
          </div>
        </div>

        <ComposeModal
          open={composeOpen}
          onClose={() => setComposeOpen(false)}
        />
      </div>
    </div>
  );
}