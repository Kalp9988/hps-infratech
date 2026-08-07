"use client";

import { useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import PropertiesHero from "@/components/property/PropertiesHero";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { properties } from "@/data/properties";

export default function PropertiesPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredProperties = properties.filter((property) => {

  const matchesSearch =
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.type.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesFilter =
    selectedFilter === "All" ||
    property.type === selectedFilter;

  return matchesSearch && matchesFilter;
  });

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-xl rounded-full border border-gray-300 bg-white px-5 py-3 text-base outline-none transition-all duration-300 focus:border-[#C8A24F] focus:ring-4 focus:ring-[#C8A24F]/20 sm:px-6 sm:py-4 sm:text-lg"
            />
          </div>

          {/* Filters */}
<div className="mb-16 mt-8 flex flex-wrap justify-center gap-3">

  <button
    onClick={() => setSelectedFilter("All")}
    className={`rounded-full px-6 py-3 font-medium transition ${
      selectedFilter === "All"
        ? "bg-[#0A2342] text-white"
        : "border border-gray-300 bg-white text-[#0A2342] hover:border-[#C8A24F] hover:text-[#C8A24F]"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setSelectedFilter("Agricultural Land")}
    className={`rounded-full px-6 py-3 font-medium transition ${
      selectedFilter === "Agricultural Land"
        ? "bg-[#0A2342] text-white"
        : "border border-gray-300 bg-white text-[#0A2342] hover:border-[#C8A24F] hover:text-[#C8A24F]"
    }`}
  >
    Agricultural Land
  </button>

  <button
    onClick={() => setSelectedFilter("NA Land")}
    className={`rounded-full px-6 py-3 font-medium transition ${
      selectedFilter === "NA Land"
        ? "bg-[#0A2342] text-white"
        : "border border-gray-300 bg-white text-[#0A2342] hover:border-[#C8A24F] hover:text-[#C8A24F]"
    }`}
  >
    NA Land
  </button>

  <button
    onClick={() => setSelectedFilter("Farm Projects")}
    className={`rounded-full px-6 py-3 font-medium transition ${
      selectedFilter === "Farm Projects"
        ? "bg-[#0A2342] text-white"
        : "border border-gray-300 bg-white text-[#0A2342] hover:border-[#C8A24F] hover:text-[#C8A24F]"
    }`}
  >
    Farm Projects
  </button>

</div>

          {/* Property Cards */}
<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
  {filteredProperties.length > 0 ? (
    filteredProperties.map((property) => (
      <PropertyCard
        key={property.slug}
        property={property}
      />
    ))
  ) : (
    <div className="col-span-full py-16 text-center">
      <h2 className="text-2xl font-bold text-[#0A2342]">
        No Properties Found
      </h2>

      <p className="mt-3 text-gray-500">
        Try searching with another keyword.
      </p>
    </div>
  )}
</div>

        </Container>
      </Section>

    </main>
  );
}