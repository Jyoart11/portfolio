"use client";

import { motion, type Variants } from "framer-motion";
import { CpuChipIcon, ServerStackIcon, CodeBracketIcon, CloudIcon } from "@heroicons/react/24/outline";

import { APPROACH } from "@/constants";

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const iconMap = {
  cpu: CpuChipIcon,
  server: ServerStackIcon,
  code: CodeBracketIcon,
  cloud: CloudIcon,
} as const;

export const About = () => {
  return (
    <section id="approach" className="section relative">
      <div className="section-orb section-orb-left" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden />
            <span className="eyebrow">Engineering Approach</span>
          </div>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            From <span className="gradient-text">AI Architecture</span> to
            Production
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            I work across the complete lifecycle of AI applications — from
            understanding product requirements and designing system architecture
            to implementing AI workflows, APIs, retrieval pipelines, testing,
            deployment, and production support.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {APPROACH.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={cardVariant}
                className="card card-hover-lift p-6 relative overflow-hidden group"
              >
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.accent} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-purple-500/25 bg-purple-500/[0.08] text-purple-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="num-tag">— {item.id}</div>
                  </div>
                  <h3 className="mt-5 font-heading text-white text-[18px] md:text-[20px] font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-5 h-px bg-gradient-to-r from-purple-500/40 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
