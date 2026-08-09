"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { DATA } from "@/data/portfolio";

type Status = "idle" | "sending" | "sent" | "error";

interface ComposeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ComposeModal({ open, onClose }: ComposeModalProps) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleClose = () => {
    if (status === "sending") return;

    onClose();

    // Reset state after closing animation
    setTimeout(() => {
      setSubject("");
      setBody("");
      setReplyTo("");
      setStatus("idle");
    }, 200);
  };

  async function handleSend(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!replyTo || !body) return;

    setStatus("sending");

    try {
      // Send request to Next.js API route (handles both Supabase save and Resend email)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: replyTo,
          subject: subject,
          message: body,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      setStatus("sent");
      setSubject("");
      setBody("");
      setReplyTo("");

      // Automatically close modal after success
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[1px]"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              fixed
              inset-x-3
              bottom-3
              z-50
              mx-auto
              w-auto
              overflow-hidden
              rounded-xl
              border
              border-gray-200
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              sm:inset-x-auto
              sm:right-6
              sm:left-auto
              sm:mx-0
              sm:w-[480px]
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="compose-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 4h16v16H4z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m4 6 8 6 8-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h2
                  id="compose-title"
                  className="text-sm font-semibold text-gray-900"
                >
                  New Message
                </h2>
              </div>

              <button
                type="button"
                onClick={handleClose}
                disabled={status === "sending"}
                className="
                  flex h-7 w-7
                  items-center justify-center
                  rounded-full
                  text-gray-500
                  transition
                  hover:bg-gray-100
                  hover:text-gray-800
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Close message window"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSend} className="flex flex-col">
              {/* Recipient */}
              <div className="flex items-center border-b border-gray-200 px-4 py-2.5">
                <span className="mr-2 text-xs text-gray-500">To</span>
                <span className="truncate text-xs text-gray-800">
                  {DATA.email}
                </span>
              </div>

              {/* Reply-to */}
              <div className="border-b border-gray-200 px-4 py-2.5">
                <input
                  type="email"
                  required
                  value={replyTo}
                  onChange={(e) => setReplyTo(e.target.value)}
                  placeholder="Your email"
                  disabled={status === "sending"}
                  className="
                    w-full
                    bg-transparent
                    text-xs
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    disabled:opacity-60
                  "
                  aria-label="Your email"
                />
              </div>

              {/* Subject */}
              <div className="border-b border-gray-200 px-4 py-2.5">
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  disabled={status === "sending"}
                  className="
                    w-full
                    bg-transparent
                    text-xs
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    disabled:opacity-60
                  "
                  aria-label="Subject"
                />
              </div>

              {/* Message */}
              <div className="px-4 py-3">
                <textarea
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Write your message..."
                  disabled={status === "sending"}
                  className="
                    h-32
                    w-full
                    resize-none
                    bg-transparent
                    text-xs
                    leading-5
                    text-gray-900
                    outline-none
                    placeholder:text-gray-400
                    disabled:opacity-60
                    sm:h-36
                  "
                  aria-label="Message"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-3 border-t border-gray-200 px-4 py-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    rounded-full
                    bg-[#1a73e8]
                    px-5
                    py-2
                    text-xs
                    font-medium
                    text-white
                    shadow-sm
                    transition
                    hover:bg-[#1765cc]
                    active:scale-[0.98]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                >
                  {status === "sending" ? "Sending..." : "Send"}
                </button>

                <div className="text-right text-[11px] text-gray-500">
                  {status === "idle" && (
                    <span>Delivered straight to my inbox</span>
                  )}

                  {status === "sending" && (
                    <span>Sending your message...</span>
                  )}

                  {status === "sent" && (
                    <span className="font-medium text-green-600">
                      Message sent ✓
                    </span>
                  )}

                  {status === "error" && (
                    <span className="font-medium text-red-500">
                      Something went wrong. Try again.
                    </span>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}