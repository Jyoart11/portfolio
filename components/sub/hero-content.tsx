"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center text-center max-w-[900px] mx-auto">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            GenAI / LLM Engineer — RAG · Agents · Voice AI · Multimodal AI
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-7xl font-bold text-white w-auto h-auto font-heading"
        >
          <span className="leading-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500">
              production-grade
            </span>{" "}
            AI systems.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromRight(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[700px] leading-relaxed"
        >
          GenAI Engineer with 1.5+ years delivering production-grade AI systems
          at IICL. Independently shipped 5 end-to-end AI products — from
          multilingual Voice AI to multimodal retrieval pipelines. I build AI
          that works in production, not just in demos.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4"
        >
          <Link
            href="#projects"
            className="py-3 px-8 button-primary text-center text-white cursor-pointer rounded-lg text-sm font-medium tracking-wide"
          >
            View Projects
          </Link>
          <Link
            href="mailto:kalamkurijyothirmai@gmail.com"
            className="py-3 px-8 text-center text-gray-300 cursor-pointer rounded-lg text-sm font-medium tracking-wide border border-gray-700 hover:border-purple-500/50 hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
