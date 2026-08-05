"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function InquiryForm() {
    const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  setLoading(false);

  if (response.ok) {
    alert("Thank you! Your inquiry has been sent.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  } else {
    alert("Something went wrong. Please try again.");
  }
};
  return (
    <Section className="bg-white">
      <Container>

        <div className="mx-auto max-w-4xl rounded-[40px] bg-[#FAF8F5] p-8 shadow-xl md:p-12">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A24F]">
              Get In Touch
            </p>

            <h2 className="mt-4 font-heading text-5xl text-[#0A2342]">
              Send Us an Inquiry
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>

          </div>

          <form
  onSubmit={handleSubmit}
  className="mt-12 space-y-6"
>

            <div className="grid gap-6 md:grid-cols-2">

  {/* Name */}
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Full Name"
    className="rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F]"
  />

  {/* Phone */}
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone Number"
    className="rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F]"
  />

</div>

{/* Email */}
<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F]"
/>

{/* Message */}
<textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={6}
  placeholder="Tell us how we can help..."
  className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F]"
/>
            <button
              type="submit"
              className="rounded-full bg-[#C8A24F] px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#b89038]"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

          </form>

        </div>

      </Container>
    </Section>
  );
}