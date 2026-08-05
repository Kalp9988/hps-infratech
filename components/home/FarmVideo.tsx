"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function FarmVideo() {
  return (
    <Section className="bg-[#FAF8F5] py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A24F]">
            Virtual Tour
          </p>

          <h2 className="mt-4 font-heading text-5xl text-[#0A2342]">
            Experience HPS Farm Mogar
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Explore HPS Farm Mogar through our virtual tour and experience
            the premium farm lifestyle, lush surroundings, and thoughtfully
            planned infrastructure.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[32px] shadow-2xl border border-gray-200">
          <video
            className="w-full"
            controls
            controlsList="nodownload"
            preload="metadata"
            poster="/images/hero/hero.jpg"
          >
            <source src="/videos/hps-farm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </Section>
  );
}