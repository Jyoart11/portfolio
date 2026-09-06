"use client";

import { motion, type Variants } from "framer-motion";

import { GENAI_LAYERS } from "@/constants";

const stepVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const GenAIExpertise = () => {
  return (
    <section id="genai" className="section relative">
      <div className="section-orb section-orb-right" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden />
            <span className="eyebrow">GenAI Expertise</span>
          </div>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            Generative AI <span className="gradient-text">Engineering</span>
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            The full stack for building, evaluating and operating LLM
            applications in production — from prompts to agents to
            observability.
          </p>
        </div>

        <div className="mt-14 relative">
          <div
            className="hidden md:block absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent"
            aria-hidden
          />
          <div className="flex flex-col gap-3 md:gap-4">
            {GENAI_LAYERS.map((layer, i) => (
              <motion.div
                key={layer.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stepVariant}
                className="relative flex items-start gap-4 md:gap-6 group"
              >
                <div className="relative shrink-0">
                  <div className="w-[54px] h-[54px] rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-500/[0.02] backdrop-blur flex items-center justify-center font-mono text-purple-200 text-[13px] font-medium group-hover:border-purple-500/60 group-hover:from-purple-500/30 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex-1 layer-step py-4 md:py-5 px-5 md:px-6 group-hover:border-purple-500/45">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-heading text-white text-[16px] md:text-[19px] font-medium">
                      {layer.title}
                    </h3>
                    <span
                      className="hidden sm:inline text-[11px] text-purple-300/50 font-mono uppercase tracking-[0.14em]"
                      aria-hidden
                    >
                      Layer {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] text-gray-400 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
