"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { LIVE_LINKS } from "@/constants";

export const LiveProjects = () => {
  return (
    <section id="live" className="section relative">
      <div className="section-orb section-orb-right" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <div className="flex flex-col items-start gap-4 md:gap-5 max-w-[820px]">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" aria-hidden />
            <span className="eyebrow">Live Systems</span>
          </div>
          <h2 className="font-heading text-white text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">
            Deployed in <span className="gradient-text">production</span>.
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            Systems currently running and serving users.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="card p-6 md:p-7 lg:col-span-1"
          >
            <div className="flex items-center gap-3">
              <span className="num-tag">01</span>
              <span className="h-px flex-1 bg-white/10" aria-hidden />
            </div>
            <h3 className="mt-4 font-heading text-white text-[20px] md:text-[22px] font-semibold">
              Enterprise
            </h3>
            <p className="mt-1 text-purple-300 text-[13px] font-medium">
              {LIVE_LINKS.iicl.label}
            </p>
            <p className="mt-4 text-gray-400 text-[14px] leading-relaxed">
              Full-stack enterprise site with AI chat, voice AI, APIs and cloud
              deployment.
            </p>
            <Link
              href={LIVE_LINKS.iicl.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-purple-300 hover:text-white transition-colors"
            >
              {LIVE_LINKS.iicl.href.replace("https://", "")}
              <span aria-hidden>↗</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 md:p-7 lg:col-span-2"
          >
            <div className="flex items-center gap-3">
              <span className="num-tag">02</span>
              <span className="h-px flex-1 bg-white/10" aria-hidden />
            </div>
            <h3 className="mt-4 font-heading text-white text-[20px] md:text-[22px] font-semibold">
              iVaak Live Brand Deployments
            </h3>
            <p className="mt-1 text-purple-300 text-[13px] font-medium">
              Multi-tenant AI concierge — white-labelled per brand
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {LIVE_LINKS.ivaak.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-2 rounded-lg border border-white/[0.06] hover:border-purple-500/40 bg-white/[0.02] hover:bg-purple-500/[0.06] px-3 py-2.5 text-[13px] text-gray-300 hover:text-white transition-colors"
                >
                  <span className="font-mono truncate">{link.label}</span>
                  <span
                    className="text-purple-300/70 group-hover:text-purple-300 shrink-0"
                    aria-hidden
                  >
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
