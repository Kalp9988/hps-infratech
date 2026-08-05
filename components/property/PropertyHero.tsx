"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";

interface PropertyHeroProps {
  property: {
    heroImage: string;
    name: string;
    shortDescription: string;
    location: string;
  };
}

export default function PropertyHero({
  property,
}: PropertyHeroProps) {
  const { scrollY } = useScroll();

  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const imageScale = useTransform(
  scrollY,
  [0, 700],
  [1, 1.15]
);

  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const contentY = useTransform(
  scrollY,
  [0, 600],
  [0, -120]
);

  return (
    <section className="relative h-screen overflow-hidden">

      <motion.div
        style={{
          opacity: imageOpacity,
          scale: imageScale,
        }}
        className="absolute inset-0"
      >
        <Image
          src={property.heroImage}
          alt={property.name}
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <>
  <div className="absolute inset-0 bg-black/45" />

  <div
    className="absolute bottom-0 left-0 right-0 h-64
               bg-gradient-to-t
               from-[#FAF8F5]
               via-[#FAF8F5]/40
               to-transparent"
  />
</>

      <motion.div
        style={{
          opacity: contentOpacity,
          y: contentY,
        }}
        className="relative z-10 flex h-full items-center"
      >
        <Container>

          <h1 className="font-heading text-7xl text-white">
            {property.name}
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-white/80">
            {property.shortDescription}
          </p>

          <div className="mt-8 flex items-center gap-2 text-[#C8A24F]">
            <MapPin />
            {property.location}
          </div>

          <div className="mt-12 flex gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition-all duration-500 hover:scale-105 hover:bg-[#b89038]"
            >
              Book Site Visit
            </Link>

            <Link
              href="/gallery"
              className="rounded-full border border-white/70 px-8 py-4 font-semibold text-white transition-all duration-500 hover:bg-white hover:text-[#081321]"
            >
              View Gallery
            </Link>

          </div>

        </Container>
      </motion.div>

    </section>
  );
}