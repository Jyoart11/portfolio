"use client";

import { motion } from "framer-motion";
import {
  SparklesIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

type FeaturedProjectCardProps = {
  index: number;
  slug: string;
  title: string;
  tagline: string;
  role: string;
  accent: string;
  icon: string;
  summary: string;
  description: string;
  tech: readonly string[];
  tags: readonly string[];
};

const iconMap = {
  agents: SparklesIcon,
  voice: MicrophoneIcon,
} as const;

export const FeaturedProjectCard = ({
  index,
  slug,
  title,
  tagline,
  role,
  accent,
  icon,
  summary,
  description,
  tech,
  tags,
}: FeaturedProjectCardProps) => {
  const displayIndex = String(index + 1).padStart(2, "0");
  const Icon = iconMap[icon as keyof typeof iconMap] ?? SparklesIcon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="card-featured group relative overflow-hidden"
      aria-labelledby={`project-${slug}-title`}
    >
      <div
        className={`absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br ${accent} blur-[80px] opacity-60 group-hover:opacity-90 transition-opacity duration-700`}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative z-[1] p-6 md:p-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-purple-500/30 bg-white/[0.03] text-purple-200 backdrop-blur">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-purple-300/80 font-heading">
                Featured Project
              </div>
              <div className="num-tag text-[13px]">— {displayIndex}</div>
            </div>
          </div>
          <div className="hidden sm:block font-heading text-[64px] md:text-[88px] font-bold text-white/[0.04] leading-none tracking-tighter select-none">
            {displayIndex}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3
              id={`project-${slug}-title`}
              className="font-heading text-white text-[30px] md:text-[40px] font-semibold tracking-tight leading-[1.05]"
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
              <div className="text-[14px] text-gray-200 font-medium">
                {role}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5">
            <p className="text-gray-200 text-[15px] md:text-[17px] leading-relaxed font-medium">
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
      </div>
    </motion.article>
  );
};
