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
      <div className="flex items-center gap-4 px-6 py-3.5 border-b border-gborder">
        <button
          onClick={onBack}
          className="w-7 h-7 rounded-full flex items-center justify-center text-gdim hover:bg-ghover"
        >
          <ArrowLeft size={18} />
        </button>
        <div className="text-xl font-normal">{meta.subject}</div>
      </div>
      <div className="px-6 sm:px-8 py-5 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
            style={{ background: meta.color }}
          >
            {initials(DATA.name)}
          </div>
          <div>
            <div className="text-sm font-medium">{DATA.name}</div>
            <div className="text-xs text-gdim">to you</div>
          </div>
        </div>
        <EmailBody id={id} />
      </div>
    </motion.div>
  );
}
