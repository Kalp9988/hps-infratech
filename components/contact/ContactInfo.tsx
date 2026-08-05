import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const contactItems = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "HPS Infratech, Navsari, Gujarat",
    href: "https://maps.google.com/?q=HPS+Infratech+Farm+Navsari",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99984 15606",
    href: "tel:+919998415606",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact.hpsinfratech@gmail.com",
    href: "mailto:contact.hpsinfratech@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat | 9:00 AM - 9:00 PM",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    value: "@hpsinfratech",
    href: "https://www.instagram.com/hpsinfratech",
  },
];

export default function ContactInfo() {
  return (
    <Section className="bg-[#FAF8F5]">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {contactItems.map((item) => {
            const Icon = item.icon;

            const content = (
              <>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C8A24F]/10 text-[#C8A24F]">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#0A2342]">
                  {item.title}
                </h3>

                <p
                  className={`mt-4 break-words leading-7 transition ${
                    item.href
                      ? "text-gray-600 hover:text-[#C8A24F]"
                      : "text-gray-600"
                  } ${
                    item.title === "Instagram"
                      ? "font-medium text-[#C8A24F]"
                      : ""
                  }`}
                >
                  {item.value}
                </p>
              </>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target={
                  item.title === "Instagram" || item.title === "Office Address"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.title === "Instagram" || item.title === "Office Address"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="rounded-[30px] bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {content}
              </a>
            ) : (
              <div
                key={item.title}
                className="rounded-[30px] bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}