import Link from "next/link";

import { CONTACT, FOOTER_DATA, NAV_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.05] bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 flex flex-col gap-3">
            <Link href="#about" className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 font-heading font-semibold text-white text-[14px]"
              >
                JK
              </span>
              <span className="font-heading text-white text-[15px] font-medium">
                Jyothirmai Kalamkuri
              </span>
            </Link>
            <p className="text-gray-400 text-[13.5px] max-w-[440px] leading-relaxed">
              AI Engineer building production-oriented Generative AI, LLM, RAG,
              agentic AI, full-stack and cloud solutions.
            </p>
            <div className="mt-2 flex flex-col gap-1 text-[13px] text-gray-400">
              <span className="font-mono">{CONTACT.email}</span>
              <span>{CONTACT.location}</span>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.18em] text-gray-500 font-heading mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.title}>
                  <Link
                    href={l.link}
                    className="text-[13.5px] text-gray-400 hover:text-white transition-colors"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] uppercase tracking-[0.18em] text-gray-500 font-heading mb-4">
              Connect
            </h3>
            <ul className="flex flex-col gap-2">
              {FOOTER_DATA.map((column) =>
                column.data.map(({ icon: Icon, name, link }) => (
                  <li key={`${column.title}-${name}`}>
                    <Link
                      href={link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-[13.5px] text-gray-400 hover:text-white transition-colors"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      <span>{name}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-gray-500">
            © Jyothirmai Kalamkuri {new Date().getFullYear()}. All rights
            reserved.
          </p>
          <p className="text-[12px] text-gray-500 font-mono">
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
