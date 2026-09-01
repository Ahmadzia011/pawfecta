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
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(520px,1.18fr)] lg:items-start lg:gap-16 xl:gap-24">
            <div className="lg:sticky lg:top-36">
              <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#2f211b]">
                <span className="size-1.5 rounded-full bg-[#8e4521]" />
                Contact Pawfecta
              </p>

              <h1 className="mt-5 max-w-[620px] text-[45px] font-medium leading-[1.02] tracking-[-0.05em] text-[#8e4521] md:text-[68px]">
                Thoughtful help, whenever you need it.
              </h1>

              <p className="mt-6 max-w-[520px] text-[16px] font-light leading-7 text-[#4f3a31]/70 md:text-[18px]">
                Whether you need help choosing a product or checking an order,
                tell us what is going on and we’ll point you in the right
                direction.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="group flex items-center gap-4 rounded-[20px] border border-[#8e4521]/10 bg-white p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#f8e5d7] text-[#8e4521]">
                    <Mail size={17} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[#8e4521]/45">
                      Email
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[#2f211b]">
                      {SITE_CONTACT.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${SITE_CONTACT.phoneHref}`}
                  className="group flex items-center gap-4 rounded-[20px] border border-[#8e4521]/10 bg-white p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#f8e5d7] text-[#8e4521]">
                    <Phone size={17} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[#8e4521]/45">
                      Call
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[#2f211b]">
                      {SITE_CONTACT.phone}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-[20px] border border-[#8e4521]/10 bg-white p-4 sm:col-span-2 lg:col-span-1">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#f8e5d7] text-[#8e4521]">
                    <Clock3 size={17} strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-[#8e4521]/45">
                      Response time
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[#2f211b]">
                      {SITE_CONTACT.responseTime}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
