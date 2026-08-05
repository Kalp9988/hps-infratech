import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Lifestyle from "@/components/home/Lifestyle";
import GalleryPreview from "@/components/home/GalleryPreview";
import LocationPreview from "@/components/home/LocationPreview";
import CTA from "@/components/home/CTA";
import WhyChoose from "@/components/home/WhyChoose";
import PropertiesHero from "@/components/property/PropertiesHero";
import FarmVideo from "@/components/home/FarmVideo";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <WhyChoose />
        <PropertiesHero />
        <FeaturedProperties />
        <Lifestyle />
        <FarmVideo />
        <GalleryPreview />
        <CTA />
      </main>

      <Footer />
    </>
  );
}