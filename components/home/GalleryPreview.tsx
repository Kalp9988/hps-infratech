"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
];

export default function GalleryPreview() {
  return (
    <Section className="bg-[#FAF8F5]">
      <Container>

        <SectionTitle
          eyebrow="Gallery"
          title="A Glimpse of Our Developments"
          description="Explore moments that showcase the quality, planning, natural surroundings, and craftsmanship behind HPS Infratech's developments."
        />

        <div className="mt-20 grid grid-cols-2 gap-6">

          <GalleryImage src={images[0]} className="h-[520px]" />

          <GalleryImage src={images[1]} className="h-[520px]" />

          <GalleryImage src={images[2]} className="h-[260px]" />

          <GalleryImage src={images[3]} className="h-[260px]" />

        </div>

        <div className="mt-14 text-center">

          <Link
            href="/gallery"
            className="inline-flex items-center rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            View Full Gallery

            <ArrowRight className="ml-3 h-5 w-5" />

          </Link>

        </div>

      </Container>
    </Section>
  );
}

function GalleryImage({
  src,
  className,
}: {
  src: string;
  className: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[32px] ${className}`}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100" />
    </div>
  );
}