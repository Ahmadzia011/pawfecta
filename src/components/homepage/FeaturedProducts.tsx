import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_PRODUCTS } from "../../constants/shop.constants";
import { Reveal } from "../motion/Reveal";
import SectionIntro from "./SectionIntro";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <div className="page-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            label="Featured products"
            title="Everyday essentials, elevated."
            copy="Quality favorites for happier daily routines."
            titleClassName="max-w-none lg:whitespace-nowrap"
            copyClassName="max-w-[570px]"
          />

          <Reveal delay={0.22} distance={14} scale={0.98}>
            <Link
              href="/shop"
              className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[#8e4521]/20 px-5 text-sm font-medium text-[#8e4521] transition-colors hover:border-[#8e4521]/40 hover:bg-[#fff8f4] md:mb-1"
            >
              See all products
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-5 lg:gap-7">
          {FEATURED_PRODUCTS.map((product, index) => (
            <Reveal
              as="article"
              key={product.name}
              delay={index * 0.08}
              distance={22}
              scale={0.97}
              hoverLift
              className="group"
            >
              <Link href="/shop" aria-label={`Shop ${product.name}`}>
                <div className="relative aspect-square overflow-hidden rounded-[28px] border border-[#8e4521]/8 bg-[#fff8f4] md:rounded-[32px]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1280px) 430px, (min-width: 768px) 32vw, 100vw"
                    className="object-contain p-10 transition-transform duration-700 ease-out group-hover:scale-[1.035] md:p-8 lg:p-12"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-5 border-b border-[#8e4521]/10 px-1 pb-5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8e4521]/50">
                      {product.category}
                    </p>

                    <h3 className="mt-1.5 text-[18px] font-medium tracking-[-0.015em] text-[#2f211b] md:text-[19px]">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="text-[17px] font-medium text-[#8e4521]">
                      {product.price}
                    </p>

                    <span className="flex size-9 items-center justify-center rounded-full border border-[#8e4521]/15 text-[#8e4521] transition-colors group-hover:bg-[#8e4521] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
