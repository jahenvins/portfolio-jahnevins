"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Star,
  ChevronRight,
  Inbox as InboxIcon,
  Send as SendIcon,
} from "lucide-react";

import { DATA, EMAILS } from "@/data/portfolio";
import { EmailMeta, SidebarSection } from "@/lib/types";
import { getSentMessages, SentMessage } from "@/lib/messages";

function initials(str: string) {
  return str
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function EmailList({
  onOpen,
  readIds,
  activeSection,
}: {
  onOpen: (id: EmailMeta["id"]) => void;
  readIds: Set<EmailMeta["id"]>;
  activeSection: SidebarSection;
}) {
  const [sentMessages, setSentMessages] = useState<SentMessage[]>([]);
  const [loadingSent, setLoadingSent] = useState(false);

  // Fetch real sent messages when Sent tab is active
  useEffect(() => {
    if (activeSection === "sent") {
      setLoadingSent(true);
      getSentMessages()
        .then((messages) => setSentMessages(messages))
        .finally(() => setLoadingSent(false));
    }
  }, [activeSection]);

  // =====================================================
  // SENT SECTION VIEW: ONLY SENDER EMAIL & SENT TIME
  // =====================================================
  if (activeSection === "sent") {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between border-b border-gborder bg-white px-4 py-3 sm:px-5">
          <span className="text-xs text-gdim">
            {sentMessages.length} sent messages
          </span>
          <span className="hidden text-[11px] text-gdim sm:block">
            Sent Mail Log
          </span>
        </div>

        {loadingSent ? (
          <div className="p-8 text-center text-xs text-gray-500">
            Loading sent messages...
          </div>
        ) : sentMessages.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
            <SendIcon className="mb-3 h-12 w-12 text-gray-300" strokeWidth={1.5} />
            <p className="text-sm font-medium text-gray-600">No sent messages yet</p>
            <p className="mt-1 text-xs text-gray-400">
              Messages sent via Compose will appear here.
            </p>
          </div>
        ) : (
          sentMessages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.2 }}
              className="group relative flex items-center gap-3 border-b border-gborder px-4 py-3 transition-colors hover:bg-ghover sm:px-5"
            >
              {/* Sender Avatar */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a73e8] text-xs font-semibold text-white">
                {initials(msg.sender_email)}
              </div>

              {/* Sender Email Column */}
              <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
                <span className="truncate text-xs font-medium text-gtext sm:text-[13px]">
                  {msg.sender_email}
                </span>

                {/* Sent Time Column */}
                <span className="shrink-0 text-[11px] text-gdim whitespace-nowrap">
                  {formatDate(msg.created_at)}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>
    );
  }

  // =====================================================
  // STANDARD INBOX / CATEGORY VIEW
  // =====================================================
  const filteredEmails = EMAILS.filter((email) => {
    if (activeSection === "inbox") return true;
    return email.section === activeSection;
  });

  const showResume = activeSection === "inbox" || activeSection === "about";
  const normalEmails = filteredEmails.filter((email) => email.id !== "resume");

  const openResume = () => {
    window.open(DATA.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b border-gborder bg-white px-4 py-3 sm:px-5">
        <span className="text-xs text-gdim">
          {filteredEmails.length} conversations
        </span>

        <span className="hidden text-[11px] text-gdim sm:block">
          Portfolio Inbox
        </span>
      </div>

      {showResume && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          onClick={openResume}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              openResume();
            }
          }}
          className="group relative flex cursor-pointer items-center gap-2 border-b border-gborder bg-[#f8fbff] px-3 py-3 transition-colors hover:bg-[#eef6ff] focus:bg-[#eef6ff] focus:outline-none sm:gap-3 sm:px-5"
        >
          <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#1a73e8]" />

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8f0fe] sm:h-9 sm:w-9">
            <FileText size={17} className="text-[#1a73e8]" strokeWidth={1.8} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex min-w-0 items-center">
              <span className="w-[105px] shrink-0 truncate text-xs font-semibold text-gtext sm:w-[145px] sm:text-[13px]">
                {DATA.name}
              </span>

              <div className="min-w-0 flex-1 truncate text-xs sm:text-[13px]">
                <span className="font-semibold text-gtext">
                  Resume — .NET Full Stack Developer
                </span>

                <span className="font-normal text-gdim">
                  {" "}
                  — C#, .NET, React, Angular, Azure & AI
                </span>
              </div>
            </div>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-[#e8f0fe] px-1.5 py-0.5 text-[10px] font-medium text-[#1a73e8]">
                <FileText size={10} />
                PDF
              </span>

              <span className="text-[10px] text-gdim">
                Nearly 3 years experience
              </span>

              <span className="hidden text-[10px] text-gdim sm:inline">·</span>

              <span className="hidden text-[10px] text-gdim sm:inline">
                Updated 2026
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <a
              href={DATA.resumeUrl}
              download
              onClick={(event) => event.stopPropagation()}
              aria-label="Download resume"
              className="hidden h-7 w-7 items-center justify-center rounded-full opacity-0 transition-all hover:bg-gray-200 group-hover:opacity-100 sm:flex"
            >
              <Download size={15} className="text-gray-500" strokeWidth={1.8} />
            </a>

            <button
              type="button"
              onClick={(event) => event.stopPropagation()}
              aria-label="Star resume"
              className="hidden h-7 w-7 items-center justify-center rounded-full opacity-0 transition-all hover:bg-gray-200 group-hover:opacity-100 sm:flex"
            >
              <Star size={16} className="text-gray-500" strokeWidth={1.8} />
            </button>

            <ChevronRight size={16} className="text-gray-400 sm:hidden" />

            <span className="hidden text-[10px] text-gdim whitespace-nowrap sm:block">
              Resume
            </span>
          </div>
        </motion.div>
      )}

      {normalEmails.length === 0 && !showResume ? (
        <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
          <InboxIcon className="mb-3 h-12 w-12 text-gray-300" strokeWidth={1.5} />
          <p className="text-sm font-medium text-gray-600">No emails found</p>
          <p className="mt-1 text-xs text-gray-400">
            There are no emails matching this sidebar section.
          </p>
        </div>
      ) : (
        normalEmails.map((email, index) => {
          const isRead = readIds.has(email.id);

          return (
            <motion.div
              key={email.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: (index + 1) * 0.035,
                duration: 0.2,
              }}
              onClick={() => onOpen(email.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpen(email.id);
                }
              }}
              className={`group relative flex cursor-pointer items-center gap-2 border-b border-gborder px-3 py-2.5 transition-colors duration-150 hover:bg-ghover focus:bg-ghover focus:outline-none sm:gap-3 sm:px-5 ${
                isRead ? "bg-white text-gdim" : "bg-[#f8fafd] text-gtext"
              }`}
            >
              {!isRead && (
                <span className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#1a73e8]" />
              )}

              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-medium text-white shadow-sm sm:h-8 sm:w-8 sm:text-xs"
                style={{ background: email.color }}
              >
                {initials(email.sender)}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-center">
                  <span
                    className={`w-[105px] shrink-0 truncate text-xs sm:w-[145px] sm:text-[13px] ${
                      isRead ? "font-normal text-gtext" : "font-semibold text-gtext"
                    }`}
                  >
                    {email.sender}
                  </span>

                  <div className="min-w-0 flex-1 truncate text-xs sm:text-[13px]">
                    <span
                      className={
                        isRead ? "font-normal text-gtext" : "font-semibold text-gtext"
                      }
                    >
                      {email.subject}
                    </span>

                    <span className="font-normal text-gdim">
                      {" "}
                      — {email.preview}
                    </span>
                  </div>
                </div>
              </div>

              <span
                className={`text-[10px] whitespace-nowrap sm:text-[11px] ${
                  isRead ? "font-normal text-gdim" : "font-semibold text-gtext"
                }`}
              >
                {email.time}
              </span>
            </motion.div>
          );
        })
      )}
    </div>
  );
}