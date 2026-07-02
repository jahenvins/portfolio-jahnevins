"use client";

import { motion } from "framer-motion";
import { DATA, EMAILS } from "@/data/portfolio";
import { EmailMeta } from "@/lib/types";

function initials(str: string) {
  return str
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function EmailList({
  onOpen,
  readIds,
}: {
  onOpen: (id: EmailMeta["id"]) => void;
  readIds: Set<string>;
}) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-5 py-2.5 text-[13px] text-gdim border-b border-gborder">
        {EMAILS.length} conversations
      </div>
      {EMAILS.map((e, i) => {
        const isRead = readIds.has(e.id);
        return (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => onOpen(e.id)}
            className={`flex items-center gap-3.5 px-5 py-2.5 border-b border-gborder cursor-pointer text-[13px] hover:bg-ghover ${
              isRead ? "bg-[#f9fafb] text-gdim font-normal" : "bg-white font-bold"
            }`}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0"
              style={{ background: e.color }}
            >
              {initials(DATA.name)}
            </div>
            <div className="w-24 sm:w-[140px] flex-shrink-0 truncate">{DATA.name}</div>
            <div className="flex-1 min-w-0 flex gap-1.5 whitespace-nowrap overflow-hidden">
              <span className="flex-shrink-0">{e.subject}</span>
              <span className={`truncate ${isRead ? "" : "text-gdim font-normal"}`}>
                — {e.preview}
              </span>
            </div>
            <div className="w-14 text-right flex-shrink-0 text-xs text-gdim">{e.time}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
