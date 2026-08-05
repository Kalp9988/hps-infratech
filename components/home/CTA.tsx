"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <Section className="bg-[#081321]">
      <Container>
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">

          <h2 className="font-heading text-5xl text-white">
            Own Your Future with HPS Infratech
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/70">
            Discover premium agricultural land, NA plots, and farm developments
            designed for long-term investment and peaceful living.
          </p>

          <div className="mt-12 flex justify-center gap-5">
            <Link
              href="/properties"
              className="rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition hover:bg-[#b8913d]"
            >
              Explore Properties
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#081321]"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </Container>
    </Section>
  );
}