import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050B14] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 md:grid-cols-3">

          <div>

            <Link href="/">
  <Image
    src="/images/logo-1.png"
    alt="HPS Infratech"
    width={220}
    height={80}
    className="h-auto w-52"
    priority
  />
</Link>

            <p className="mt-5 leading-8 text-white/60">
              Trusted real estate solutions specializing in agricultural land, NA plots, farm developments, and premium investment opportunities.
            </p>

          </div>

          <div>

            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <Link href="/">Home</Link><br />

              <Link href="/properties">Properties</Link><br />

              <Link href="/gallery">Gallery</Link><br />

              <Link href="/contact">Contact</Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold">
              Contact
            </h3>

            <p className="mt-5 text-white/60">
              Navsari, Gujarat
            </p>

            <p className="text-white/60">
              contact.hpsinfratech@gmail.com
            </p>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-white/40">
          © 2026 HPS Infratech. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}