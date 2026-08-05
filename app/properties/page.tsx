import PropertyCard from "@/components/property/PropertyCard";
import PropertiesHero from "@/components/property/PropertiesHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  return (
    <main className="bg-[#FAF8F5]">

      {/* Hero Banner */}
      <PropertiesHero />

      {/* Properties Section */}
      <Section>
        <Container>

          <SectionTitle
            eyebrow="Our Collection"
            title="Our Developments"
            description="Explore our thoughtfully planned developments, designed to deliver quality, long-term value, and exceptional investment opportunities."
          />

          {/* Search */}
          <div className="mt-12 flex justify-center">
            <input
              type="text"
              placeholder="Search developments..."
              className="w-full max-w-xl rounded-full border border-gray-300 bg-white px-6 py-4 text-lg outline-none transition-all duration-300 focus:border-[#C8A24F] focus:ring-4 focus:ring-[#C8A24F]/20"
            />
          </div>

          {/* Filters */}
          <div className="mb-16 mt-8 flex flex-wrap justify-center gap-4">

            <button className="rounded-full bg-[#0A2342] px-6 py-3 font-medium text-white transition hover:bg-[#C8A24F]">
              All
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-[#0A2342] transition hover:border-[#C8A24F] hover:text-[#C8A24F]">
              Agricultural Land
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-[#0A2342] transition hover:border-[#C8A24F] hover:text-[#C8A24F]">
              NA Land
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-6 py-3 font-medium text-[#0A2342] transition hover:border-[#C8A24F] hover:text-[#C8A24F]">
              Farm Projects
            </button>

          </div>

          {/* Property Cards */}
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.slug}
                property={property}
              />
            ))}
          </div>

        </Container>
      </Section>

    </main>
  );
}