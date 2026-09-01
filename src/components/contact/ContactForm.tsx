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
      className="rounded-[28px] border border-[#8e4521]/8 bg-white p-6 shadow-[0_24px_70px_rgba(83,40,20,0.05)] sm:p-8 md:rounded-[34px] lg:p-10"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#8e4521]/50">
        Send a message
      </p>
      <h2 className="mt-2 text-[28px] font-medium tracking-[-0.035em] text-[#2f211b] md:text-[34px]">
        Tell us what you need.
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
        What can we help with?
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
          rows={4}
          placeholder="Tell us what you and your pet need help with."
          className="mt-2 w-full resize-none rounded-xl border border-[#8e4521]/10 bg-[#fffaf7] px-4 py-3 text-sm font-normal leading-6 outline-none transition-colors placeholder:text-[#6d5144]/40 focus:border-[#8e4521]/30 focus:bg-white"
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#8e4521] px-6 text-sm font-medium text-white shadow-[0_14px_30px_rgba(105,49,23,0.16)] transition-colors hover:bg-[#733616] sm:w-auto"
        >
          Send message
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>

        <p className="text-xs font-light leading-5 text-[#6d5144]/50 sm:max-w-[230px] sm:text-right">
          Opens your email app with the message prepared.
        </p>
      </div>
    </form>
  );
}
