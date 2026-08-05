import { notFound } from "next/navigation";
import Image from "next/image";
import PropertyHero from "@/components/property/PropertyHero";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { MapPin, CheckCircle } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { properties } from "@/data/properties";

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <Navbar />

      {/* HERO */}

      <PropertyHero property={property} />

      {/* OVERVIEW */}

      <Section className="-mt-24 relative z-20 rounded-t-[60px] bg-[#FAF8F5] pt-32">

        <Container>

          <div className="max-w-3xl">

  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A24F]">
    Overview
  </p>

  <h2 className="mt-4 font-heading text-5xl text-[#0A2342]">
    Everything You Need to Know
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-600">
    Explore the key highlights, specifications, and essential details of this development, carefully planned to help you make an informed decision.
  </p>

</div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <OverviewCard
              title="Location"
              value={property.location}
            />

            <OverviewCard
              title="Area"
              value={property.area}
            />

            <OverviewCard
              title="Land Type"
              value={property.type}
            />

            <OverviewCard
              title="Title"
              value={property.title}
            />

            <OverviewCard
              title="Distance"
              value={property.distance}
            />

            <OverviewCard
              title="Price"
              value={property.price}
            />

          </div>

          <div className="mt-12 flex flex-wrap gap-5">

  <a
    href={property.mapLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#b89038]"
  >
    📍 View on Google Maps
  </a>

  <Link
    href="/contact"
    className="inline-flex items-center rounded-full border border-[#081321] px-8 py-4 font-semibold text-[#081321] transition hover:bg-[#081321] hover:text-white"
  >
    Book Site Visit
  </Link>

</div>

        </Container>

      </Section>

      {/* GALLERY */}

      <Section>

        <Container>

          <h2 className="font-heading text-5xl text-[#0A2342]">
            Gallery
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {property.gallery.map((image, index) => (

  <div
    key={image}
    className="group relative h-[320px] overflow-hidden rounded-[30px]"
  >

    <Image
      src={image}
      alt={property.name}
      fill
      className="object-cover transition duration-700 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

  </div>

))}

          </div>

        </Container>

      </Section>

      {/* NEARBY CONNECTIVITY */}

<Section className="bg-white">

  <Container>

    <h2 className="font-heading text-5xl text-[#0A2342]">
      Nearby Connectivity
    </h2>

    <p className="mt-4 max-w-2xl text-lg text-gray-600">
      Convenient access to important destinations, making this property
      well-connected for both everyday living and long-term investment.
    </p>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {property.nearby.map((item) => (

        <div
          key={item.place}
          className="rounded-[30px] border border-gray-200 bg-[#FAF8F5] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

          <p className="text-sm uppercase tracking-widest text-gray-500">
            {item.place}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-[#C8A24F]">
            {item.distance}
          </h3>

        </div>

      ))}

    </div>

  </Container>

</Section>

      {/* FEATURES */}

      <Section className="bg-[#081321]">

        <Container>

          <h2 className="font-heading text-5xl text-white">
            Premium Amenities
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {property.features.map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-8"
              >

                <CheckCircle
                  className="text-[#C8A24F]"
                  size={26}
                />

                <span className="text-lg text-white">
                  {feature}
                </span>

              </div>

            ))}

          </div>

        </Container>

      </Section>

      {/* CTA */}

<Section className="bg-[#FAF8F5]">

  <Container>

    <div className="rounded-[40px] bg-[#081321] px-8 py-20 text-center md:px-16">

      <p className="text-sm uppercase tracking-[0.35em] text-[#C8A24F]">
        Ready to Invest?
      </p>

      <h2 className="mt-6 font-heading text-5xl text-white">
        Schedule Your Site Visit Today
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
        Experience the property in person. Contact our team to arrange a site visit and explore the development firsthand.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-5">

        <Link
          href="/contact"
          className="rounded-full bg-[#C8A24F] px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          Book Site Visit
        </Link>

        <Link
          href="/properties"
          className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#081321]"
        >
          Explore More Properties
        </Link>

      </div>

    </div>

  </Container>

</Section>

      <Footer />
    </>
  );
}

function OverviewCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C8A24F] hover:shadow-2xl">

      <p className="text-sm uppercase tracking-widest text-gray-500">
        {title}
      </p>

      <h3 className="mt-4 text-3xl font-bold text-[#0A2342] transition-colors duration-300 group-hover:text-[#C8A24F]">
        {value}
      </h3>

    </div>
  );
}