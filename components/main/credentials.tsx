"use client";

import { motion } from "framer-motion";
import { AcademicCapIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

import { CERTIFICATIONS, EDUCATION } from "@/constants";

export const Credentials = () => {
  return (
    <section id="credentials" className="section relative">
      <div className="section-orb section-orb-left" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden />
            <span className="eyebrow">Credentials</span>
          </div>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            Certified in{" "}
            <span className="gradient-text">AWS Cloud</span> &amp; formal
            engineering education.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="card p-6 md:p-7 lg:col-span-3"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-purple-500/30 bg-purple-500/[0.08] text-purple-200">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-white text-[18px] md:text-[20px] font-semibold">
                Certifications
              </h3>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {CERTIFICATIONS.map((c) => (
                <li
                  key={c.title}
                  className="flex items-start gap-3 py-3 border-t border-white/[0.05] first:border-t-0 first:pt-0"
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"
                    aria-hidden
                  />
                  <div className="flex-1">
                    <div className="text-white text-[14.5px] font-medium leading-snug">
                      {c.title}
                    </div>
                    <div className="mt-0.5 text-gray-400 text-[12.5px]">
                      {c.issuer} · {c.note}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 md:p-7 lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.06] text-cyan-200">
                <AcademicCapIcon className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-white text-[18px] md:text-[20px] font-semibold">
                Education
              </h3>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {EDUCATION.map((e) => (
                <li key={e.degree} className="flex flex-col gap-1">
                  <div className="text-white text-[14.5px] font-medium leading-snug">
                    {e.degree}
                  </div>
                  <div className="text-purple-300 text-[13px] font-medium">
                    {e.school}
                  </div>
                  <div className="text-gray-500 text-[12.5px] font-mono tracking-wide">
                    {e.period}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
