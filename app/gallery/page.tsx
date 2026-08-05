"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
];

export default function GalleryPreview() {
  return (
    <Section className="bg-white">
      <Container>

        <SectionTitle
          eyebrow="Gallery"
          title="Experience The Lifestyle"
          description="A glimpse into the premium environment, infrastructure and natural beauty of HPS Farm Mogar."
        />

        <div className="mt-20 grid grid-cols-12 gap-6">

          {/* Large Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="col-span-12 overflow-hidden rounded-[36px] lg:col-span-7"
          >
            <Image
              src={images[0]}
              alt=""
              width={1200}
              height={900}
              className="h-[620px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Right Grid */}

          <div className="col-span-12 grid gap-6 lg:col-span-5">

            <div className="grid grid-cols-2 gap-6">

  {images.slice(1).map((img) => (

    <motion.div
      key={img}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className="overflow-hidden rounded-[28px]"
    >

      <Image
        src={img}
        alt=""
        width={600}
        height={600}
        unoptimized
        className="h-[295px] w-full object-cover transition duration-700 hover:scale-110"
      />

    </motion.div>

  ))}

</div>

          </div>

        </div>

        <div className="mt-16 flex justify-center">


        </div>

      </Container>
    </Section>
  );
}