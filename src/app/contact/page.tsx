import FAQ from "@/src/components/UI/FAQ";
import Footer from "@/src/components/UI/Footer";
import Navbar from "@/src/components/UI/Navbar";
import ContactForm from "@/src/components/contact/ContactForm";
import { SITE_CONTACT } from "@/src/constants/site.constants";
import { Clock3, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pawfecta | Product and Order Support",
  description:
    "Contact Pawfecta for product guidance, order support, returns, delivery questions, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#fffaf7] pb-20 pt-32 md:pb-28 md:pt-44">
        <section className="page-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:gap-16">
            <div>
              <p className="flex items-center pt-10 gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#2f211b]">
                <span className="size-1.5 rounded-full bg-[#8e4521]" />
                Contact Pawfecta
              </p>
              <h1 className="mt-5 max-w-[820px] text-[42px] font-medium leading-[1.04] tracking-[-0.045em] text-[#8e4521] md:text-[64px] lg:text-[72px]">
                Here when you need a little help.
              </h1>
            </div>

            <div className="lg:pb-1">
              <p className="max-w-[330px] text-[16px] font-light leading-7 text-[#4f3a31]/75">
                Product questions, order updates, returns, or choosing the right
                essentials.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-12 border-t border-[#8e4521]/12 pt-10 md:mt-16 md:pt-14 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20 xl:gap-28">
            <aside className="lg:pt-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#8e4521]/50">
                Contact details
              </p>

              <div className="mt-5 border-t border-[#8e4521]/10">
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="group flex items-center gap-4 border-b border-[#8e4521]/10 py-5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f8e5d7] text-[#8e4521]">
                    <Mail size={15} strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[#8e4521]/40">
                      Email
                    </span>
                    <span className="mt-1 block truncate text-[14px] font-medium text-[#2f211b] transition-colors group-hover:text-[#8e4521]">
                      {SITE_CONTACT.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${SITE_CONTACT.phoneHref}`}
                  className="group flex items-center gap-4 border-b border-[#8e4521]/10 py-5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f8e5d7] text-[#8e4521]">
                    <Phone size={15} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[#8e4521]/40">
                      Phone
                    </span>
                    <span className="mt-1 block text-[14px] font-medium text-[#2f211b] transition-colors group-hover:text-[#8e4521]">
                      {SITE_CONTACT.phone}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 border-b border-[#8e4521]/10 py-5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#f8e5d7] text-[#8e4521]">
                    <Clock3 size={15} strokeWidth={1.6} />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-[#8e4521]/40">
                      Response time
                    </p>

                    <p className="mt-1 text-[14px] font-medium text-[#2f211b]">
                      {SITE_CONTACT.responseTime}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-7 max-w-[300px] text-[13px] font-light leading-[1.7] text-[#3f2b22]/50">
                For order questions, include your order number so we can help
                you a little faster.
              </p>
            </aside>

            <div className="w-full min-w-0 lg:max-w-[800px] lg:justify-self-end">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <div className="bg-white pt-20 md:pt-28">
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
