"use client";

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
  MessageSquare,
  Tag,
  ChevronDown,
  Plus,
} from "lucide-react";

export default function Sidebar({
  onCompose,
}: {
  onCompose: () => void;
}) {
  const items = [
    {
      icon: Inbox,
      label: "Inbox",
      count: "4",
      active: true,
    },
    {
      icon: Star,
      label: "About",
    },
    {
      icon: Clock3,
      label: "Experience",
    },
    {
      icon: ChevronRight,
      label: "Projects",
    },
    {
      icon: Send,
      label: "Sent",
    },
    {
      icon: File,
      label: "Drafts",
      count: "1",
    },
    {
      icon: ShoppingBag,
      label: "Certifications",
      count: "6",
    },
    {
      icon: Users,
      label: "Freelance",
      count: "3 yrs",
    },
    {
      icon: Info,
      label: "Contact",
    },
    {
      icon: MessageSquare,
      label: "Let's Talk",
      count: "!",
    },
    {
      icon: Tag,
      label: "AI Tools",
      count: "5",
    },
  ];

  return (
    <aside className="w-[256px] bg-[#f6f8fc] py-2 flex-shrink-0">
      {/* Compose */}
      <div className="px-2 mb-4">
        <button
          onClick={onCompose}
          className="
            h-14
            w-[145px]
            rounded-2xl
            bg-[#c2e7ff]
            hover:shadow-md
            flex
            items-center
            gap-4
            px-5
            text-[#001d35]
          "
        >
          <Pencil size={20} />
          <span className="text-[14px] font-medium">
            Compose
          </span>
        </button>
      </div>

      {/* Menu */}
      <div className="pr-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={`
                w-full
                h-8
                flex
                items-center
                px-7
                rounded-r-full
                transition-colors
                ${
                  item.active
                    ? "bg-[#d3e3fd] font-semibold text-[#001d35]"
                    : "hover:bg-[#eaebef] text-[#202124]"
                }
              `}
            >
              <Icon size={18} strokeWidth={1.8} />

              <span className="ml-5 flex-1 text-left text-[14px]">
                {item.label}
              </span>

              {item.count && (
                <span className="text-[12px] font-medium">
                  {item.count}
                </span>
              )}
            </button>
          );
        })}

        {/* More */}
        <button
          className="
            w-full
            h-8
            flex
            items-center
            px-7
            rounded-r-full
            hover:bg-[#eaebef]
            text-[#202124]
          "
        >
          <ChevronDown size={18} />
          <span className="ml-5 text-[14px]">
            More
          </span>
        </button>
      </div>

      {/* Labels */}
      <div className="mt-10 px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[22px] font-normal text-[#202124]">
            Labels
          </h3>

          <button className="p-1 hover:bg-[#eaebef] rounded-full">
            <Plus size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}