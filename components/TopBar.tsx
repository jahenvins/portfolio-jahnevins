import { DATA } from "@/data/portfolio";

function initials(str: string) {
  return str
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TopBar() {
  return (
    <div className="flex items-center gap-4 px-5 py-2.5 border-b border-gborder">
      <div className="flex items-center gap-2 text-xl text-gdim font-normal whitespace-nowrap">
        <span className="w-2.5 h-2.5 rounded-full bg-gred inline-block" />
        {DATA.name} — Inbox
      </div>
      <div className="flex-1 bg-gsidebar rounded-full px-4 py-2 text-sm text-gdim hidden sm:block max-w-[520px]">
        Search this portfolio
      </div>
      <div className="w-8 h-8 rounded-full bg-gblue text-white flex items-center justify-center text-[13px] font-medium flex-shrink-0">
        {initials(DATA.name)}
      </div>
    </div>
  );
}
