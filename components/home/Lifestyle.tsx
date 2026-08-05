"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Building2,
  Trees,
  Car,
  Zap,
  Droplets,
  Landmark,
  Home,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const amenities = [
  {
    icon: Shield,
    title: "9-ft Compound Wall",
    description: "Fully secured premium boundary wall around the project.",
  },
  {
    icon: Building2,
    title: "Premium Gazebo",
    description: "25×25 ft gazebo with premium roofing for relaxation.",
  },
  {
    icon: Home,
    title: "RCC Construction",
    description: "Room with attached bathroom and terrace.",
  },
  {
    icon: Trees,
    title: "Tree Plantation",
    description: "Kesar Mango & Coconut trees across the property.",
  },
  {
    icon: Car,
    title: "Paver Parking",
    description: "Premium paver block parking area.",
  },
  {
    icon: Zap,
    title: "24×7 Electricity",
    description: "Reliable electricity connection available.",
  },
  {
    icon: Droplets,
    title: "Borewell Water",
    description: "Independent borewell water facility.",
  },
  {
    icon: Landmark,
    title: "Clear NA Title",
    description: "Legally clear non-agricultural land documentation.",
  },
];

export default function Lifestyle() {
  return (
    <Section className="bg-[#F8F6F2]">
      <Container>

        <SectionTitle
          eyebrow="Why Choose HPS"
          title="Everything You Need, Already Included"
          description="Every plot is thoughtfully developed with premium infrastructure, utilities and lifestyle amenities."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-[30px] border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A24F] hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8A24F]/10 text-[#C8A24F] transition group-hover:bg-[#C8A24F] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#0A2342]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}