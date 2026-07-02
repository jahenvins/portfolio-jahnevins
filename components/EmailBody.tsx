import { DATA } from "@/data/portfolio";
import { EmailMeta } from "@/lib/types";
import { FileText } from "lucide-react";

export default function EmailBody({ id }: { id: EmailMeta["id"] }) {
  if (id === "about") {
    return (
      <div className="max-w-[680px] text-sm leading-[1.9] text-gtext">
        {DATA.about.map((p, i) => (
          <p key={i} className="mb-2.5">
            {p}
          </p>
        ))}
        <p>Scroll back to the inbox for projects, stack, and how to reach me.</p>
      </div>
    );
  }

  if (id === "projects") {
    return (
      <div className="max-w-[680px] text-sm leading-[1.9] text-gtext">
        <p className="mb-3">Here&apos;s what I&apos;ve actually built and shipped:</p>
        {DATA.projects.map((p) => (
          <div key={p.name} className="border border-gborder rounded-lg p-4 mb-3">
            <div className="font-medium text-sm mb-1">{p.name}</div>
            <div className="text-[13px] text-gdim mb-1.5">{p.desc}</div>
            <div className="text-xs text-gdim">
              {p.stack} &nbsp;·&nbsp;{" "}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gblue hover:underline"
              >
                view on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (id === "skills") {
    return (
      <div className="max-w-[680px] text-sm leading-[1.9] text-gtext">
        <p className="mb-2">What I currently work with:</p>
        {Object.entries(DATA.skills).map(([cat, items]) => (
          <div key={cat}>
            <h3 className="text-[15px] mt-5 mb-2">{cat}</h3>
            <div>
              {items.map((i) => (
                <span
                  key={i}
                  className="inline-block bg-[#e8f0fe] text-gblue text-xs px-2.5 py-1 rounded-full mr-1 mb-1"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (id === "resume") {
    return (
      <div className="max-w-[680px] text-sm leading-[1.9] text-gtext">
        <p className="mb-2">
          One page, always current — happy to walk through any part of it.
        </p>
        <a
          href={DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gborder rounded-lg px-3.5 py-2 mt-1 text-[13px] bg-gsidebar hover:bg-ghover"
        >
          <FileText size={14} /> resume.pdf — click to download
        </a>
      </div>
    );
  }

  // contact
  return (
    <div className="max-w-[680px] text-sm leading-[1.9] text-gtext">
      <p className="mb-2">If any of this was useful — I&apos;d genuinely love to talk.</p>
      <p>
        Email &nbsp;→{" "}
        <a href={`mailto:${DATA.email}`} className="text-gblue hover:underline">
          {DATA.email}
        </a>
        <br />
        LinkedIn →{" "}
        <a
          href={DATA.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gblue hover:underline"
        >
          {DATA.linkedin}
        </a>
        <br />
        GitHub &nbsp;→{" "}
        <a
          href={DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gblue hover:underline"
        >
          {DATA.github}
        </a>
      </p>
      <div className="mt-7 pt-4 border-t border-gborder text-gdim text-[13px] leading-relaxed">
        {DATA.name}
        <br />
        {DATA.role}
      </div>
    </div>
  );
}
