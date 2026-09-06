"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail } from "react-icons/hi";

import { CONTACT } from "@/constants";

export const Contact = () => {
  return (
    <section id="contact" className="section relative">
      <div className="mx-auto max-w-[1240px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="card-featured p-8 md:p-14 text-center"
        >
          <div className="relative z-[1] flex flex-col items-center gap-6 max-w-[720px] mx-auto">
            <span className="eyebrow">Contact</span>
            <h2 className="font-heading text-white text-[32px] md:text-[52px] font-semibold leading-tight tracking-tight">
              Have an{" "}
              <span className="gradient-text">AI problem worth solving</span>?
            </h2>
            <p className="text-gray-300 text-[15px] md:text-[17px] leading-relaxed">
              I&apos;m interested in building production-grade AI applications,
              intelligent automation systems, and full-stack AI products.
            </p>

            <div className="mt-2 flex flex-wrap gap-3 justify-center">
              <Link
                href={`mailto:${CONTACT.email}`}
                className="btn-primary"
              >
                <HiOutlineMail className="h-4 w-4" />
                Email
              </Link>
              <Link
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
              >
                <RxGithubLogo className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
              >
                <RxLinkedinLogo className="h-4 w-4" />
                LinkedIn
              </Link>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 text-[13px] text-gray-400">
              <span className="font-mono">{CONTACT.email}</span>
              <span className="hidden sm:inline text-gray-600">·</span>
              <span>{CONTACT.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
