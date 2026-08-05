"use client";

import Link from "next/link";
import { MapPin, Navigation, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function LocationPreview() {
  return (
    <Section className="bg-[#FAF8F5]">
      <Container>

        <SectionTitle
          eyebrow="Location"
          title="Strategically Located in Mogar"
          description="Enjoy peaceful surroundings while staying well connected to Navsari and nearby cities."
        />

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-[36px] bg-white p-10 shadow-xl">

            <div className="space-y-8">

              <div className="flex gap-5">
                <MapPin className="mt-1 text-[#C8A24F]" size={28} />

                <div>
                  <h3 className="text-2xl font-semibold text-[#0A2342]">
                    Project Address
                  </h3>

                  <p className="mt-2 text-gray-600 leading-8">
                    HPS Farm Mogar,
                    <br />
                    Mogar, Gujarat,
                    <br />
                    Near Navsari.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Navigation className="mt-1 text-[#C8A24F]" size={28} />

                <div>
                  <h3 className="text-2xl font-semibold text-[#0A2342]">
                    Connectivity
                  </h3>

                  <p className="mt-2 text-gray-600">
                    • 4 KM from Navsari
                  </p>

                  <p className="text-gray-600">
                    • Easy Highway Access
                  </p>

                  <p className="text-gray-600">
                    • Peaceful Green Environment
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="mt-1 text-[#C8A24F]" size={28} />

                <div>
                  <h3 className="text-2xl font-semibold text-[#0A2342]">
                    Site Visit
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Schedule your personal visit and explore
                    the project.
                  </p>
                </div>
              </div>

            </div>

            <Link
              href="/contact"
              className="mt-12 inline-flex rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Book Site Visit
            </Link>

          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-[36px] shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Mogar,Navsari&output=embed"
              width="100%"
              height="600"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </Container>
    </Section>
  );
}