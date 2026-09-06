"use client";

import { motion } from "framer-motion";

type FeaturedProjectCardProps = {
  index: number;
  slug: string;
  title: string;
  tagline: string;
  role: string;
  summary: string;
  description: string;
  tech: readonly string[];
  tags: readonly string[];
};

export const FeaturedProjectCard = ({
  index,
  slug,
  title,
  tagline,
  role,
  summary,
  description,
  tech,
  tags,
}: FeaturedProjectCardProps) => {
  const displayIndex = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="card-featured p-6 md:p-10"
      aria-labelledby={`project-${slug}-title`}
    >
      <div className="relative z-[1] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="num-tag">Project {displayIndex}</span>
            <span className="h-px flex-1 bg-white/10" aria-hidden />
          </div>
          <h3
            id={`project-${slug}-title`}
            className="font-heading text-white text-[28px] md:text-[36px] font-semibold tracking-tight leading-tight"
          >
            {title}
          </h3>
          <p className="text-purple-300 text-[14px] md:text-[15px] font-medium">
            {tagline}
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="chip chip-solid">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <div className="text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-1">
              Role
            </div>
            <div className="text-[14px] text-gray-200 font-medium">{role}</div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-5">
          <p className="text-gray-200 text-[15px] md:text-[16px] leading-relaxed font-medium">
            {summary}
          </p>
          <p className="text-gray-400 text-[14px] md:text-[15px] leading-relaxed">
            {description}
          </p>

          <div className="mt-2">
            <div className="text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-3">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
