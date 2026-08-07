"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
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
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
];

export default function GalleryPreview() {
  return (
    <Section className="bg-[#FAF8F5] py-28">
      <Container>
        <SectionTitle
          eyebrow="Gallery"
          title="Experience The Lifestyle"
          description="A glimpse into the premium environment, infrastructure and natural beauty of HPS Farm Mogar."
        />

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4 auto-rows-[220px]">

          {images.map((img, index) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className={`
                overflow-hidden rounded-[28px]
                ${index === 0 ? "col-span-2 row-span-2" : ""}
                ${index === 5 ? "row-span-2" : ""}
                ${index === 9 ? "col-span-2" : ""}
              `}
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                width={1000}
                height={1000}
                unoptimized
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>
          ))}

        </div>
      </Container>
    </Section>
  );
}