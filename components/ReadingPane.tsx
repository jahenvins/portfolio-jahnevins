"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { DATA, EMAILS } from "@/data/portfolio";
import { EmailMeta } from "@/lib/types";
import EmailBody from "./EmailBody";

function initials(str: string) {
  return str
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ReadingPane({
  id,
  onBack,
}: {
  id: EmailMeta["id"];
  onBack: () => void;
}) {
  const meta = EMAILS.find((e) => e.id === id)!;

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      className="flex-1 overflow-y-auto"
    >
      <div className="flex items-center gap-2 md:gap-4 px-3 md:px-6 py-3 md:py-3.5 border-b border-gborder">
        <button
          onClick={onBack}
          className="w-6 md:w-7 h-6 md:h-7 rounded-full flex items-center justify-center text-gdim hover:bg-ghover flex-shrink-0"
        >
          <ArrowLeft size={16} className="md:w-[18px] md:h-[18px]" />
        </button>
        <div className="text-lg md:text-xl font-normal truncate">{meta.subject}</div>
      </div>
      <div className="px-3 sm:px-6 md:px-8 py-4 md:py-5 pb-10">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <div
            className="w-7 md:w-8 h-7 md:h-8 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0"
            style={{ background: meta.color }}
          >
            {initials(meta.sender)}
          </div>
          <div>
            <div className="text-xs md:text-sm font-medium">{meta.sender}</div>
            <div className="text-xs text-gdim">to you</div>
          </div>
        </div>
        <EmailBody id={id} />
      </div>
    </motion.div>
  );
}
