"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DATA } from "@/data/portfolio";

// Create a free form at https://formspree.io, then paste your endpoint ID below.
// It'll look like: https://formspree.io/f/abcd1234
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error";

export default function ComposeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify({
          subject: subject || "New message from portfolio",
          message: body,
          replyto: replyTo,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setSubject("");
        setBody("");
        setReplyTo("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/15 z-50 flex items-end justify-end pr-6"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-[480px] bg-white rounded-t-lg shadow-2xl flex flex-col"
          >
            <div className="bg-[#f2f6fc] px-4 py-3 rounded-t-lg flex justify-between items-center text-[13px] font-medium">
              <span>New Message</span>
              <button onClick={onClose} className="text-gdim hover:text-gtext">
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSend}>
              <div className="px-4 py-2.5 border-b border-gborder text-[13px] text-gdim">
                To &nbsp;{DATA.email}
              </div>
              <div className="px-4 py-2.5 border-b border-gborder">
                <input
                  type="email"
                  required
                  placeholder="Your email (so I can reply)"
                  value={replyTo}
                  onChange={(e) => setReplyTo(e.target.value)}
                  className="w-full outline-none text-[13px]"
                />
              </div>
              <div className="px-4 py-2.5 border-b border-gborder">
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full outline-none text-[13px]"
                />
              </div>
              <div className="px-4 py-2.5 border-b border-gborder">
                <textarea
                  required
                  placeholder="Say hello..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="w-full h-28 outline-none text-[13px] resize-none"
                />
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-gblue text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-[#1765cc] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send"}
                </button>
                <span className="text-xs text-gdim">
                  {status === "sent" && "Sent ✓ thanks!"}
                  {status === "error" && "Something went wrong — try again"}
                  {status === "idle" && "delivered straight to my inbox"}
                </span>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
