import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const contactItems = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "HPS Infratech, Navsari, Gujarat",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99984 15606",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact.hpsinfratech@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 9:00 PM",
  },
];

export default function ContactInfo() {
  return (
    <Section className="bg-[#FAF8F5]">
      <Container>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A24F]/10 text-[#C8A24F]">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0A2342]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.value}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </Section>
  );
}