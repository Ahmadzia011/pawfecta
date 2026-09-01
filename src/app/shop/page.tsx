import Navbar from "@/src/components/UI/Navbar";
import Footer from "@/src/components/UI/Footer";
import { SHOP_PRODUCTS } from "@/src/constants/shop.constants";
import Products from "./products";
import FAQ from "@/src/components/UI/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Pawfecta | Thoughtful Pet Essentials",
  description:
    "Shop Pawfecta essentials for pet grooming, comfort, play, feeding, travel, and everyday care.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fffaf7] pt-10">
        <section className="pt-32 md:pt-44">
          <div className="page-container border-b border-[#8e4521]/12 pb-12 md:pb-16">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end lg:gap-16">
              <div>
                <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#2f211b]">
                  <span className="size-1.5 rounded-full bg-[#8e4521]" />
                  Shop Pawfecta
                </p>
                <h1 className="mt-5 max-w-[820px] text-[42px] font-medium leading-[1.04] tracking-[-0.045em] text-[#8e4521] md:text-[64px] lg:text-[72px]">
                  Better essentials for everyday pet life.
                </h1>
              </div>

              <div className="lg:pb-1">
                <p className="max-w-[330px] text-[16px] font-light leading-7 text-[#4f3a31]/75">
                  Thoughtful objects for care, comfort, play, and all the
                  routines you share.
                </p>
                <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8e4521]/55">
                  {String(SHOP_PRODUCTS.length).padStart(2, "0")} considered
                  pieces
                </p>
              </div>
            </div>
          </div>
        </section>
        <Products />
      </main>
      <div className="bg-white pt-20 md:pt-28">
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
