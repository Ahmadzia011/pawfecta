"use client";

import { ArrowUpRight } from "lucide-react";
import type { FormEvent } from "react";
import { SITE_CONTACT } from "../../constants/site.constants";

export default function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const topic = String(form.get("topic") ?? "General question");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Pawfecta: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${SITE_CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-[#8e4521]/10 bg-white p-6 shadow-[0_24px_70px_rgba(83,40,20,0.06)] md:rounded-[34px] md:p-9 lg:p-11"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-xs font-medium text-[#2f211b]">
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className="mt-2 h-12 w-full rounded-xl border border-[#8e4521]/10 bg-[#fffaf7] px-4 text-sm font-normal outline-none transition-colors placeholder:text-[#6d5144]/40 focus:border-[#8e4521]/30 focus:bg-white"
          />
        </label>

        <label className="text-xs font-medium text-[#2f211b]">
          Email address
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-2 h-12 w-full rounded-xl border border-[#8e4521]/10 bg-[#fffaf7] px-4 text-sm font-normal outline-none transition-colors placeholder:text-[#6d5144]/40 focus:border-[#8e4521]/30 focus:bg-white"
          />
        </label>
      </div>

      <label className="mt-5 block text-xs font-medium text-[#2f211b]">
        How can we help?
        <select
          name="topic"
          defaultValue="Product guidance"
          className="mt-2 h-12 w-full rounded-xl border border-[#8e4521]/10 bg-[#fffaf7] px-4 text-sm font-normal text-[#4f3a31] outline-none transition-colors focus:border-[#8e4521]/30 focus:bg-white"
        >
          <option>Product guidance</option>
          <option>Order support</option>
          <option>Returns and delivery</option>
          <option>Partnerships</option>
          <option>General question</option>
        </select>
      </label>

      <label className="mt-5 block text-xs font-medium text-[#2f211b]">
        Message
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us what you and your pet need help with."
          className="mt-2 w-full resize-none rounded-xl border border-[#8e4521]/10 bg-[#fffaf7] px-4 py-3 text-sm font-normal leading-6 outline-none transition-colors placeholder:text-[#6d5144]/40 focus:border-[#8e4521]/30 focus:bg-white"
        />
      </label>

      <button
        type="submit"
        className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8e4521] px-6 text-sm font-medium text-white shadow-[0_14px_30px_rgba(105,49,23,0.16)] transition-colors hover:bg-[#733616] sm:w-auto"
      >
        Send message
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>

      <p className="mt-4 text-xs font-light leading-5 text-[#6d5144]/55">
        This opens your email app with the message prepared for you.
      </p>
    </form>
  );
}
