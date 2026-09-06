"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type SecondaryProjectCardProps = {
  index: number;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  highlights: readonly string[];
  tech: readonly string[];
  tags: readonly string[];
  href?: string;
};

export const SecondaryProjectCard = ({
  index,
  slug,
  title,
  tagline,
  summary,
  highlights,
  tech,
  tags,
  href,
}: SecondaryProjectCardProps) => {
  const displayIndex = String(index + 3).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card p-6 md:p-7"
      aria-labelledby={`sproject-${slug}-title`}
    >
      <div className="flex items-center gap-3">
        <span className="num-tag">Project {displayIndex}</span>
        <span className="h-px flex-1 bg-white/10" aria-hidden />
      </div>

      <h3
        id={`sproject-${slug}-title`}
        className="mt-4 font-heading text-white text-[22px] md:text-[26px] font-semibold tracking-tight leading-tight"
      >
        {title}
      </h3>
      <p className="mt-1 text-purple-300 text-[13px] font-medium">{tagline}</p>

      <p className="mt-4 text-gray-300 text-[14px] leading-relaxed">
        {summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="chip chip-solid">
            {t}
          </span>
        ))}
      </div>

      <details className="mt-5 group">
        <summary className="cursor-pointer list-none text-[13px] text-purple-300 hover:text-purple-200 font-medium inline-flex items-center gap-2">
          <span>Show highlights & tech</span>
          <span className="transition-transform group-open:rotate-90" aria-hidden>
            ›
          </span>
        </summary>
        <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-col gap-5">
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-2">
              Highlights
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-4 text-[13px] text-gray-300">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2">
                  <span className="text-purple-400 mt-[6px] w-1 h-1 rounded-full bg-purple-400 shrink-0" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-2">
              Tech
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          {href && (
            <Link
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary self-start"
            >
              Visit site ↗
            </Link>
          )}
        </div>
      </details>
    </motion.article>
  );
};
