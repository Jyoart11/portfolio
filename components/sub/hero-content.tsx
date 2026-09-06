"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

import { CONTACT, QUICK_FACTS } from "@/constants";
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
      className="relative z-10 flex flex-col items-center justify-center px-6 md:px-10 py-24 md:py-28 w-full"
    >
      <div className="flex flex-col gap-6 md:gap-8 items-center text-center max-w-[980px] mx-auto">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.06] px-3 py-1.5 backdrop-blur"
        >
          <span className="pulse-dot" aria-hidden />
          <span className="text-[12px] font-medium tracking-[0.14em] uppercase text-emerald-100/90">
            Available for AI engineering work
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="font-heading font-semibold text-white tracking-tight text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05]"
        >
          AI Engineer
          <br />
          Building{" "}
          <span className="gradient-text">Production-Ready</span>
          <br />
          Generative AI Systems.
        </motion.h1>

        <motion.p
          variants={slideInFromRight(0.5)}
          className="font-mono text-[12px] md:text-[13px] tracking-[0.24em] uppercase text-gray-400"
        >
          LLMs · RAG · Agentic AI · Full Stack · Cloud
        </motion.p>

        <motion.p
          variants={slideInFromRight(0.7)}
          className="text-[15px] md:text-[17px] text-gray-400 max-w-[720px] leading-relaxed"
        >
          I design and build AI-powered applications using LLMs, RAG,
          multi-agent workflows, voice AI, APIs, modern web technologies, and
          cloud infrastructure.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-3 justify-center mt-2"
        >
          <Link href="#projects" className="btn-primary">
            View Projects
          </Link>
          <Link
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary"
            aria-label="GitHub"
          >
            <RxGithubLogo className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary"
            aria-label="LinkedIn"
          >
            <RxLinkedinLogo className="h-4 w-4" />
            LinkedIn
          </Link>
          <Link href="#contact" className="btn-secondary">
            <HiOutlineMail className="h-4 w-4" />
            Contact Me
          </Link>
        </motion.div>

        <motion.div
          variants={slideInFromRight(1.1)}
          className="mt-8 md:mt-10 w-full max-w-[960px]"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur">
            {QUICK_FACTS.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-1 py-4 px-3 bg-[#0b0620]/60"
              >
                <span className="text-[10px] uppercase tracking-[0.16em] text-gray-500 font-heading">
                  {f.label}
                </span>
                <span className="text-[13px] md:text-[14px] text-white font-medium text-center leading-tight">
                  {f.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
