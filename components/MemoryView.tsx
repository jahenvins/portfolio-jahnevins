"use client";

import { ArrowLeft, Calendar, Tag, User, MapPin, Play } from "lucide-react";
import { MemoryItem } from "@/lib/types";

export default function MemoryView({
  memory,
  onBack,
}: {
  memory: MemoryItem;
  onBack: () => void;
}) {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Top Action Bar */}
      <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={onBack}
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100"
          aria-label="Back to inbox"
        >
          <ArrowLeft size={18} />
        </button>
        <span className="text-xs font-medium text-gray-500">Back to List</span>
      </div>

      {/* Main Content Pane */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 sm:p-6">
        {/* Title */}
        <div>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            {memory.title}
          </h1>
          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            {memory.subtitle}
          </p>
        </div>

        {/* Sender Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-600 text-xs font-bold text-white shadow-sm">
              {memory.sender.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 sm:text-sm">
                <User size={13} className="text-gray-400" />
                <span>{memory.sender}</span>
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-500">
                <MapPin size={11} className="text-gray-400" />
                <span>Navi Mumbai / Outing</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar size={13} />
            <span>{memory.date}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {memory.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600"
            >
              <Tag size={10} className="text-gray-400" />
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Memory Highlights
          </h3>
          <p className="text-xs leading-relaxed text-gray-700 sm:text-sm">
            {memory.description}
          </p>
        </div>

        {/* Media Gallery (Photos & Videos) */}
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Media Gallery ({memory.images.length} items)
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {memory.images.map((media, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-52 w-full overflow-hidden bg-black">
                  {media.type === "video" ? (
                    <video
                      src={media.url}
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={media.url}
                      alt={media.caption}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}