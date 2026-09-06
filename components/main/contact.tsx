"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDownTrayIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
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
            <div className="section-eyebrow">
              <span className="section-eyebrow-line" aria-hidden />
              <span className="eyebrow">Contact</span>
              <span className="section-eyebrow-line" aria-hidden />
            </div>
            <h2 className="font-heading text-white text-[32px] md:text-[52px] font-semibold leading-tight tracking-tight">
              Have an{" "}
              <span className="gradient-text">AI problem worth solving</span>?
            </h2>
            <p className="text-gray-300 text-[15px] md:text-[17px] leading-relaxed">
              I&apos;m interested in building production-grade AI applications,
              intelligent automation systems, and full-stack AI products.
            </p>

            <div className="mt-2 flex flex-wrap gap-3 justify-center">
              <Link href={`mailto:${CONTACT.email}`} className="btn-primary">
                <HiOutlineMail className="h-4 w-4" />
                Email
              </Link>
              <Link
                href={CONTACT.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-secondary"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Resume
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

            <div className="mt-6 pt-6 border-t border-white/[0.06] w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                  Email
                </span>
                <Link
                  href={`mailto:${CONTACT.email}`}
                  className="text-[13.5px] text-white font-mono hover:text-purple-300 transition-colors break-all"
                >
                  {CONTACT.email}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                  Phone
                </span>
                <Link
                  href={CONTACT.phoneHref}
                  className="text-[13.5px] text-white font-mono hover:text-purple-300 transition-colors inline-flex items-center gap-2"
                >
                  <PhoneIcon className="h-3.5 w-3.5" />
                  {CONTACT.phone}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                  Location
                </span>
                <span className="text-[13.5px] text-white">
                  {CONTACT.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
