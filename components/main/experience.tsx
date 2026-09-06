"use client";

import { motion } from "framer-motion";

import { EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section id="experience" className="section relative">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <span className="eyebrow">Experience</span>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            2+ years of{" "}
            <span className="gradient-text">production AI</span> engineering.
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 md:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="num-tag">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-white/10" aria-hidden />
                  </div>
                  <h3 className="font-heading text-white text-[22px] md:text-[24px] font-semibold">
                    {exp.role}
                  </h3>
                  <div className="text-purple-300 text-[14px] font-medium">
                    {exp.company}
                  </div>
                  <div className="text-gray-500 text-[13px] font-mono tracking-wide">
                    {exp.period}
                  </div>
                  <div className="text-gray-400 text-[13px]">
                    {exp.location}
                  </div>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-5">
                  <p className="text-gray-300 text-[15px] md:text-[16px] leading-relaxed">
                    {exp.description}
                  </p>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.16em] text-gray-500 mb-3">
                      Key Responsibilities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.responsibilities.map((r) => (
                        <span key={r} className="chip">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
