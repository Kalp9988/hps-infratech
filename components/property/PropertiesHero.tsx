"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PropertiesHero() {
  return (
    <section className="relative h-[60vh] overflow-hidden">

      <Image
        src="/images/properties/banner.jpg"
        alt="Our Properties"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#081321]/60" />

      <Container className="relative z-10 flex h-full items-center">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[0.35em] text-[#C8A24F]">
            Our Projects
          </p>

          <h1 className="mt-6 font-heading text-6xl text-white">
            Explore Our Developments
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Discover premium developments designed for quality living,
            investment opportunities, and long-term value.
          </p>

        </div>

      </Container>

    </section>
  );
}