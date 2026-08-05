import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <Image
        src="/images/about/banner.jpg"
        alt="About HPS Infratech"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#081321]/90 via-[#081321]/70 to-[#081321]/40" />

      <Container className="relative z-10 flex h-full items-center">

        <div className="max-w-2xl">

          <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[1.1] text-white md:text-6xl lg:text-7xl">
            Building Trust,
            Creating Value
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/80">
            At HPS Infratech, we are dedicated to delivering quality real estate opportunities with transparency, reliability, and long-term value.
          </p>

        </div>

      </Container>

    </section>
  );
}