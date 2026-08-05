import Image from "next/image";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function OurStory() {
  return (
    <Section className="bg-[#FAF8F5]">
      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Text */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A24F]">
              Our Story
            </p>

            <h2 className="mt-4 font-heading text-5xl text-[#0A2342]">
              Creating Better Investment Opportunities
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              HPS Infratech is committed to developing premium real estate
              projects that combine quality, transparency, and long-term
              value. We specialize in agricultural land, NA plots, farm
              developments, and carefully planned investment opportunities
              designed to meet the needs of modern buyers.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our focus is to build lasting relationships through honest
              guidance, clear documentation, and projects that offer both
              lifestyle and investment potential.
            </p>

          </div>

          {/* Image */}

          <div className="relative h-[550px] overflow-hidden rounded-[40px]">

            <Image
              src="/images/about/story-new.jpg"
              alt="HPS Infratech"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </Container>
    </Section>
  );
}