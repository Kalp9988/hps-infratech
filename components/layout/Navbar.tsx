"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className={`text-2xl font-bold transition ${
            scrolled ? "text-[#0A2342]" : "text-white"
          }`}
        >
          HPS INFRATECH
        </Link>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 md:flex">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative font-medium transition ${
                  scrolled
                    ? "text-[#0A2342]"
                    : "text-white"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#C8A24F] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

        </nav>

        {/* Button */}

        <div className="flex items-center gap-4">

  <Link
    href="/contact"
    className="hidden rounded-full bg-[#C8A24F] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#b8913d] md:block"
  >
    Book Visit
  </Link>

  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className={`md:hidden ${
      scrolled ? "text-[#0A2342]" : "text-white"
    }`}
  >
    {menuOpen ? <X size={32} /> : <Menu size={32} />}
  </button>

</div>

      </div>

        {menuOpen && (
  <div className="md:hidden bg-white shadow-lg">

    <nav className="flex flex-col px-6 py-6">

      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="border-b py-4 text-lg font-medium text-[#0A2342]"
        >
          {item.name}
        </Link>
      ))}

      <Link
        href="/contact"
        onClick={() => setMenuOpen(false)}
        className="mt-6 rounded-full bg-[#C8A24F] py-3 text-center font-semibold text-white"
      >
        Book Visit
      </Link>

    </nav>

  </div>
)}

    </header>
  );
}