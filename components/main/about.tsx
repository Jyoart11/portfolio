"use client";

import { motion, type Variants } from "framer-motion";

import { APPROACH } from "@/constants";

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const About = () => {
  return (
    <section id="approach" className="section relative">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <span className="eyebrow">Engineering Approach</span>
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
          {APPROACH.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariant}
              className="card p-6"
            >
              <div className="num-tag">— {item.id}</div>
              <h3 className="mt-3 font-heading text-white text-[18px] md:text-[20px] font-medium">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-400 text-[14px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
