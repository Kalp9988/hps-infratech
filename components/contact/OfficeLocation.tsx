import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function OfficeLocation() {
  return (
    <Section className="bg-[#FAF8F5]">
      <Container>

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A24F]">
            Visit Us
          </p>

          <h2 className="mt-4 font-heading text-5xl text-[#0A2342]">
            Our Office Location
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            We'd be happy to welcome you. Visit our office or schedule a meeting to discuss your next investment.
          </p>

        </div>

        <div className="mt-16 overflow-hidden rounded-[32px] shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6172039252488!2d72.94077807413808!3d20.929272980695256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0f700598a1883%3A0x44d5c36fc9d380eb!2sJH%20patel!5e1!3m2!1sen!2sin!4v1785874319423!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />

        </div>

      </Container>
    </Section>
  );
}