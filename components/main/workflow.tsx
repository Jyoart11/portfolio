"use client";

import { motion } from "framer-motion";

import { WORKFLOW } from "@/constants";

export const Workflow = () => {
  return (
    <section id="workflow" className="section relative">
      <div className="section-orb section-orb-left" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden />
            <span className="eyebrow">Engineering Workflow</span>
          </div>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            How I <span className="gradient-text">Build</span>.
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            End-to-end ownership across the AI application lifecycle — from
            discovery to reliable operation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {WORKFLOW.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-6"
            >
              <div className="num-tag">— {step.id}</div>
              <h3 className="mt-3 font-heading text-white text-[20px] md:text-[22px] font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-400 text-[13.5px] font-mono leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
