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

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };

    let valid = true;

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      valid = false;
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
      valid = false;
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must contain at least 10 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus(null);
    setLoading(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you for contacting HPS Infratech. We'll contact you shortly.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        setErrors({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            "Failed to send your inquiry. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error. Please try again later.",
      });
    }

    setLoading(false);
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
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F] ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  maxLength={10}
                  inputMode="numeric"
                  placeholder="Phone Number *"
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    setFormData((prev) => ({
                      ...prev,
                      phone: value,
                    }));

                    setErrors((prev) => ({
                      ...prev,
                      phone: "",
                    }));
                  }}
                  className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F] ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />

                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

            </div>

            {/* Email */}

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F] ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell us how we can help... *"
                className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:border-[#C8A24F] ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />

              <div className="mt-2 flex items-center justify-between">
                {errors.message ? (
                  <p className="text-sm text-red-500">
                    {errors.message}
                  </p>
                ) : (
                  <span />
                )}

                <span className="text-xs text-gray-500">
                  {formData.message.length}/500
                </span>
              </div>
            </div>

            {status && (
              <div
                className={`rounded-2xl p-4 text-center font-medium ${
                  status.type === "success"
                    ? "border border-green-200 bg-green-100 text-green-700"
                    : "border border-red-200 bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[#C8A24F] px-10 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#b89038] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending Inquiry..." : "Send Inquiry"}
            </button>

          </form>

        </div>

      </Container>
    </Section>
  );
}