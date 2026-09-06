"use client";

import { motion, type Variants } from "framer-motion";

import { GENAI_LAYERS } from "@/constants";

const stepVariant: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const GenAIExpertise = () => {
  return (
    <section id="genai" className="section relative">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <span className="eyebrow">GenAI Expertise</span>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            Generative AI <span className="gradient-text">Engineering</span>
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            The full stack for building, evaluating and operating LLM
            applications in production — from prompts to agents to observability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {GENAI_LAYERS.map((layer, i) => (
            <motion.div
              key={layer.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stepVariant}
              className="layer-step flex gap-4"
            >
              <div className="shrink-0 num-tag pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-heading text-white text-[16px] md:text-[18px] font-medium">
                  {layer.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] text-gray-400 leading-relaxed">
                  {layer.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
