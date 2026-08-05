"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  {
    title: "Premium Land Developments",
    description:
      "Creating thoughtfully planned agricultural lands, NA plots, farms, and premium real estate projects with lasting value.",
  },
  {
    title: "Peaceful Lifestyle",
    description:
      "Designed for weekend homes, nature lovers and families seeking a calm environment.",
  },
  {
    title: "Strong Investment Potential",
    description:
      "Located Navsari with excellent future appreciation opportunities.",
  },
];

export default function About() {
  return (
    <Section className="bg-[#FAF8F5]">
      <Container>

        <SectionTitle
          eyebrow="About HPS Infratech"
          title="A Better Way To Own Nature"
          description="HPS Infratech develops premium farm land projects that combine peaceful living with long-term investment value."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[36px]">

              <Image
                src="/images/about/about.jpg"
                alt="Farm Land"
                width={700}
                height={800}
                className="h-[650px] w-full object-cover"
              />

            </div>

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-[#0A2342] p-8 shadow-2xl">

              <h2 className="text-5xl font-bold text-white">
                100%
              </h2>

              <p className="mt-2 text-white/70">
                Customer Satisfaction
              </p>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <h3 className="font-heading text-5xl leading-tight text-[#0A2342]">
              Invest in Nature,
              <br />
              Build Your Future.
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Located in Mogar, Gujarat, HPS Farm offers thoughtfully
              planned premium farm land designed for peaceful living,
              weekend retreats and long-term appreciation.
            </p>

            <div className="mt-12 space-y-8">

              {highlights.map((item) => (

                <div
                  key={item.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <h4 className="text-2xl font-semibold text-[#0A2342]">
                    {item.title}
                  </h4>

                  <p className="mt-3 leading-8 text-gray-600">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </Container>
    </Section>
  );
}