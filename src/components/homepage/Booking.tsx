"use client";

import Image from "next/image";
import {
  HOMEPAGE_IMAGES,
  HOMEPAGE_SHOPPING_NEEDS,
} from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";

export default function Booking() {
  return (
    <section id="shop" className="py-10 md:py-16 lg:py-20">
      <div className="page-container">
        <div className="grid overflow-hidden rounded-[28px] bg-[#f8e5d7] px-6 sm:px-10 lg:h-[700px] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end lg:gap-12 lg:px-14 xl:gap-16 xl:px-16">
          <Reveal
            direction="right"
            distance={30}
            scale={0.96}
            className="py-12 md:py-14 lg:py-16"
          >
            <div>
              <h2 className="text-[30px] font-medium leading-[1.2] text-[#8e4521] md:text-[39.8px] md:leading-12">
                Find the right products for your pet.
              </h2>

              <p className="mt-4 max-w-[504px] text-[16px] font-light leading-6 text-[#1d1d1f] md:text-[18px] md:leading-[25.2px]">
                Tell us what your companion needs and we’ll help match you with
                a thoughtful Pawfecta collection.
              </p>
            </div>

            <form
              className="mt-8 w-full max-w-[504px]"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="space-y-5">
                <label className="block text-xs font-medium leading-[14.4px] text-[#1d1d1f]">
                  Pet name
                  <input
                    type="text"
                    className="mt-2 h-12 w-full rounded-xl border border-transparent bg-white/60 px-4 text-sm font-normal text-[#1d1d1f] outline-none transition-colors placeholder:text-[#1d1d1f]/50 focus:border-[#8e4521]/20 focus:bg-white"
                    placeholder="Milo"
                  />
                </label>

                <label className="block text-xs font-medium leading-[14.4px] text-[#1d1d1f]">
                  Email address
                  <input
                    type="email"
                    className="mt-2 h-12 w-full rounded-xl border border-transparent bg-white/60 px-4 text-sm font-normal text-[#1d1d1f] outline-none transition-colors placeholder:text-[#1d1d1f]/50 focus:border-[#8e4521]/20 focus:bg-white"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block text-xs font-medium leading-[14.4px] text-[#1d1d1f]">
                  What are you shopping for?
                  <select
                    defaultValue=""
                    className="mt-2 h-12 w-full appearance-auto rounded-xl border border-transparent bg-white/60 px-4 text-sm font-normal text-[#1d1d1f]/60 outline-none transition-colors focus:border-[#8e4521]/20 focus:bg-white"
                  >
                    <option value="" disabled>
                      Select…
                    </option>

                    {HOMEPAGE_SHOPPING_NEEDS.map((need) => (
                      <option key={need} value={need}>
                        {need}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  type="submit"
                  className="flex h-[50px] w-full items-center justify-center rounded-full bg-[#8e4521] text-sm font-semibold text-[#f8e5d7] transition-[color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#793817]"
                >
                  Get product recommendations
                </button>

                <a
                  href="#products"
                  className="flex h-[50px] w-full items-center justify-center rounded-full bg-white/60 text-sm font-semibold text-[#1d1d1f] transition-[color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Shop all products
                </a>
              </div>
            </form>
          </Reveal>

          <Reveal
            direction="left"
            distance={34}
            delay={0.1}
            scale={0.94}
            className="relative h-[360px] min-w-0 self-end overflow-hidden md:h-[440px] lg:h-[650px]"
          >
            <Image
              src={HOMEPAGE_IMAGES.booking.src}
              alt={HOMEPAGE_IMAGES.booking.alt}
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-contain object-bottom"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
