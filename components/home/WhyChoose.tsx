"use client";

import { ShieldCheck, Trees, Building2, TrendingUp } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description:
      "Every development is built with clear processes, quality standards, and a commitment to customer confidence.",
  },
  {
    icon: Trees,
    title: "Nature-Focused Developments",
    description:
      "Creating projects that embrace natural surroundings while supporting modern lifestyles and peaceful living.",
  },
  {
    icon: Building2,
    title: "Quality Infrastructure",
    description:
      "Thoughtfully planned developments with attention to infrastructure, accessibility, and long-term usability.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    description:
      "Developments selected and planned with future growth and lasting investment potential in mind.",
  },
];

export default function WhyChoose() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Why Choose HPS Infratech?"
          description="We are committed to creating premium developments that combine quality, trust, and long-term value."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8A24F] hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8A24F]/10 text-[#C8A24F] transition group-hover:bg-[#C8A24F] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-[#0A2342]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}