"use client";

import { motion } from "framer-motion";

import { FLOW_STEPS, STACK_COLUMNS } from "@/constants";

export const FullStackCloud = () => {
  return (
    <section id="stack" className="section relative">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <span className="eyebrow">AI + Full Stack + Cloud</span>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            Not just AI — the{" "}
            <span className="gradient-text">whole system</span>.
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            AI models are only useful when they&apos;re wrapped in reliable
            services, delivered through good interfaces, and operated on
            dependable infrastructure.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {STACK_COLUMNS.map((col, colIndex) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: colIndex * 0.1 }}
              className="card p-6 md:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="num-tag">
                  0{colIndex + 1}
                </span>
                <span className="h-px flex-1 bg-white/10" aria-hidden />
              </div>
              <h3 className="mt-3 font-heading text-white text-[20px] font-semibold uppercase tracking-[0.08em]">
                {col.label}
              </h3>
              <ul className="mt-5 flex flex-col gap-2">
                {col.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 text-[14px] text-gray-300"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-purple-400"
                      aria-hidden
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 md:mt-16">
          <div className="text-center mb-6">
            <span className="eyebrow">Request Flow</span>
          </div>
          <div className="card p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
              {FLOW_STEPS.map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="chip chip-solid">{step}</span>
                  {i < FLOW_STEPS.length - 1 && (
                    <span className="flow-arrow text-[15px]" aria-hidden>
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
