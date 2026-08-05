"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { properties } from "@/data/properties";

export default function FeaturedProperty() {
  const property = properties[0];

  return (
    <Section className="bg-white">
      <Container>

        <SectionTitle
          eyebrow="Featured Property"
          title="HPS Farm Mogar"
          description="A premium NA farm land project designed for peaceful living, weekend homes and long-term investment."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <div className="group overflow-hidden rounded-[40px]">

            <Image
              src={property.heroImage}
              alt={property.name}
              width={900}
              height={700}
              className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          {/* Right Content */}

          <div>

            <h2 className="font-heading text-5xl text-[#0A2342]">
              {property.name}
            </h2>

            <div className="mt-6 flex items-center gap-3 text-gray-500">
              <MapPin size={18} />
              {property.location}
            </div>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Located just 4 KM from Navsari, HPS Farm Mogar offers
              premium NA farm land with clear title, internal
              infrastructure, plantation and peaceful surroundings.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">

              <Info title="Area" value={property.area} />

              <Info title="Land Type" value={property.type} />

              <Info title="Title" value={property.title} />

              <Info title="Distance" value={property.distance} />

            </div>

            <div className="mt-12 flex gap-5">

              <Link
                href={`/properties/${property.slug}`}
                className="inline-flex items-center rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                Explore Property

                <ArrowRight className="ml-3 h-5 w-5" />

              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-[#0A2342] px-8 py-4 font-semibold text-[#0A2342] transition hover:bg-[#0A2342] hover:text-white"
              >
                Book Site Visit
              </Link>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-[#F8F8F8] p-6">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-[#0A2342]">
        {value}
      </h3>
    </div>
  );
}