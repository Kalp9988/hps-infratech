"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero/hero.jpg"
        alt="HPS Farm Mogar"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081321]/80 via-[#081321]/50 to-[#081321]/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mt-6 font-heading text-5xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
            INVEST IN
            <br />
            NATURE.
            <br />
            OWN
            <br />
            TOMORROW.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-white/75">
            Premium developments designed for today, built to create value for generations.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/properties"
              className="inline-flex items-center rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Explore Properties
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#081321]"
            >
              Book Site Visit
            </Link>

          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 ...">
        <div className="mb-2 text-xs uppercase tracking-[0.4em]">
          Scroll
        </div>

        <div className="animate-bounce text-xl">↓</div>
      </div>
    </section>
  );
}