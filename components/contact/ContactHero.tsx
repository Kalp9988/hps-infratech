import Image from "next/image";
import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="relative h-[65vh] overflow-hidden">

      <Image
        src="/images/contact/banner.jpg"
        alt="Contact HPS Infratech"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#081321]/70" />

      <Container className="relative z-10 flex h-full items-center pt-16">

        <div className="max-w-2xl">


          <h1 className="mt-6 font-heading text-5xl leading-tight text-white md:text-6xl">
            We're Here to Help You Find the Right Property
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/80">
            Connect with our team to learn more about our developments, schedule a site visit, or discuss the right investment opportunity for you.
          </p>

        </div>

      </Container>

    </section>
  );
}