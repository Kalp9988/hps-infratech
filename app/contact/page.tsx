import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import InquiryForm from "@/components/contact/InquiryForm";
import OfficeLocation from "@/components/contact/OfficeLocation";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>

        <ContactHero />

        <ContactInfo />

        <InquiryForm />

        <OfficeLocation />

      </main>

      <Footer />
    </>
  );
}