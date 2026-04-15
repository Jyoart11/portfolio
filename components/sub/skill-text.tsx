"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          GenAI · RAG · Agents · Voice AI
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[28px] md:text-[36px] text-white font-bold mt-[10px] text-center mb-[15px] font-heading"
      >
        Building AI systems with cutting-edge technology.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[18px] md:text-[20px] text-gray-300 mb-10 mt-[10px] text-center"
      >
        From prototype to production, every time.
      </motion.div>
    </div>
  );
};
