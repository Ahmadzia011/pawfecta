import { SHOP_PRODUCTS } from "@/src/constants/shop.constants";
import { Reveal } from "@/src/components/motion/Reveal";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function Products() {
  return (
    <section id="shop" className="pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="page-container">
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-14">
          {SHOP_PRODUCTS.map((product, index) => (
            <Reveal
              as="article"
              key={product.name}
              delay={(index % 3) * 0.06}
              distance={20}
              scale={0.98}
              hoverLift
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-[26px] border border-[#8e4521]/8 bg-[#fbf2ec] md:rounded-[30px]">
                <span className="absolute left-4 top-4 z-10 rounded-full border border-[#8e4521]/10 bg-white/75 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#8e4521]/65 backdrop-blur-md md:left-5 md:top-5">
                  {product.category}
                </span>

                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1280px) 424px, (min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.035] md:p-10 lg:p-12"
                />

                <button
                  type="button"
                  aria-label={`Add ${product.name} to cart`}
                  className="absolute bottom-4 right-4 z-10 flex size-11 items-center justify-center rounded-full bg-[#8e4521] text-white shadow-[0_10px_24px_rgba(80,40,20,0.16)] transition-all duration-300 hover:bg-[#733616] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8e4521] md:bottom-5 md:right-5 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100"
                >
                  <ShoppingBag size={16} strokeWidth={1.7} />
                </button>
              </div>

              <div className="mt-5 flex items-start justify-between gap-5 border-b border-[#8e4521]/10 px-1 pb-5">
                <div className="min-w-0">
                  <h3 className="text-[18px] font-medium tracking-[-0.02em] text-[#2f211b] md:text-[19px]">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-[12px] font-light text-[#6d5144]/55">
                    Made for better daily routines
                  </p>
                </div>

                <p className="shrink-0 text-[17px] font-medium text-[#8e4521]">
                  {product.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
