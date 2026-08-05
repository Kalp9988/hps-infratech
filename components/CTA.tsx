"use client";

import Image from "next/image";
import Container from "./ui/Container";
import Section from "./ui/Section";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <Section className="relative overflow-hidden py-52">

      <Image
        src="/images/hero/hero.jpg"
        alt=""
        fill
        className="object-cover object-bottom"
      />

      <div className="absolute inset-0 bg-[#081321]/80" />

      <Container className="relative z-10 text-center text-white">

        <h2 className="font-heading text-6xl">
          Ready To Visit
          <br />
          HPS Farm Mogar?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
          Experience the property in person and discover why HPS
          Farm is the perfect destination for investment and
          peaceful weekend living.
        </p>

        <div className="mt-8 flex justify-center gap-5">

          <Button href="tel:+919998415606">
            Call Now
          </Button>

          <Button
            href="https://wa.me/919998415606"
            variant="secondary"
          >
            WhatsApp
          </Button>

        </div>

      </Container>

    </Section>
  );
}