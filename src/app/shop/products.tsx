"use client";

import { Reveal } from "@/src/components/motion/Reveal";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { PRODUCT_MEDIA } from "@/src/constants/media.constants";
import { useState } from "react";
import { getCheckoutUrl } from "../actions/getCheckoutUrl.action";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

interface ProductsProps {
  createdAt: Date;
  price: number;
  name: string;
  category: string;
  image: string;
  prodId: string;
  priceId: string;
}

export default function Products({
  products,
}: {
  products: ProductsProps[] | null;
}) {
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const [fetchingURL, setFetchingURL] = useState(false);

  async function handleCheckout(id: string) {
    if (!id) return;
    setFetchingURL(true);
    const sessionUrl: string | null = (await getCheckoutUrl(id)) ?? null;
    if (!sessionUrl) {
      setError("Error while generating payment link.");
      setTimeout(() => {
        setError("");
      }, 2000);
      setFetchingURL(false);
      return;
    }
    router.push(sessionUrl);
    setFetchingURL(false);
  }

  return (
    <section id="shop" className="pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="page-container">
        <AnimatePresence initial={false}>
          {error && (
            <motion.p
              key="checkout-error"
              role="alert"
              aria-live="polite"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mb-6 rounded-2xl border border-red-900/10 bg-red-50 px-4 py-3 text-center text-[13px] text-red-900/75"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-14 transition-all ease-in-out">
          {products?.length ? (
            products.map((product: ProductsProps, index: number) => (
              <Reveal
                as="article"
                key={product.prodId}
                delay={(index % 3) * 0.06}
                distance={20}
                scale={0.98}
                hoverLift
                className="group flex h-full flex-col rounded-[30px] border  border-[#8e4521]/8 bg-white p-3 shadow-[0_18px_50px_rgba(80,40,20,0.05)] md:rounded-[34px]"
              >
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[#fbf2ec] md:rounded-[28px]">
                  <span className="absolute left-4 top-4 z-10 rounded-full border border-[#8e4521]/10 bg-white/75 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#8e4521]/65 backdrop-blur-md md:left-5 md:top-5">
                    {product.category}
                  </span>

                  <Image
                    src={
                      PRODUCT_MEDIA[product.image as keyof typeof PRODUCT_MEDIA]
                    } // Typescript was throwing because it need to know what's in the strin, so we say that image is key of the PRODUCT_MEDIA type.
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 424px, (min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.035] md:p-10 lg:p-12"
                  />
                </div>

                <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h3 className="text-[18px] font-medium tracking-[-0.02em] text-[#2f211b] md:text-[19px]">
                        {product.name}
                      </h3>
                      <p className="mt-1.5 text-[12px] font-light text-[#6d5144]/55">
                        Made for better daily routines
                      </p>
                    </div>

                    <p className="shrink-0 text-[17px] font-medium text-[#8e4521]">
                      ${product.price}
                    </p>
                  </div>

                  <div className="mt-auto pt-5">
                    <button
                      onClick={() => {
                        handleCheckout(product.priceId);
                      }}
                      disabled={fetchingURL}
                      type="button"
                      aria-label={`Buy ${product.name} now`}
                      className="group/action inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#8e4521] px-5 text-[13px] font-medium text-white shadow-[0_10px_24px_rgba(80,40,20,0.16)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#733616] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8e4521]"
                    >
                      Buy now
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))
          ) : (
            <Reveal
              distance={18}
              scale={0.98}
              className="col-span-full flex min-h-[380px] items-center justify-center overflow-hidden rounded-[30px] border border-[#8e4521]/10 bg-white px-6 py-16 text-center shadow-[0_22px_60px_rgba(80,40,20,0.05)] sm:min-h-[430px] sm:px-10 md:rounded-[36px]"
            >
              <div className="mx-auto flex max-w-[540px] flex-col items-center">
                <span className="flex size-14 items-center justify-center rounded-full border border-[#8e4521]/10 bg-[#fff5ef] text-[#8e4521] shadow-[0_10px_28px_rgba(80,40,20,0.08)] sm:size-16">
                  <ShoppingBag size={23} strokeWidth={1.5} />
                </span>

                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8e4521]/55">
                  Currently restocking
                </p>
                <h2 className="mt-3 text-[30px] font-medium leading-[1.08] tracking-[-0.035em] text-[#2f211b] sm:text-[38px] md:text-[44px]">
                  Fresh favorites are on the way.
                </h2>
                <p className="mt-4 max-w-[430px] text-[14px] font-light leading-6 text-[#6d5144]/70 sm:text-[15px] sm:leading-7">
                  We are carefully preparing a new collection of thoughtful
                  essentials for happier everyday routines.
                </p>

                <Link
                  href="/"
                  className="group mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#8e4521] px-6 text-[13px] font-medium text-white shadow-[0_12px_28px_rgba(80,40,20,0.16)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#733616] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e4521]"
                >
                  Explore Pawfecta
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
