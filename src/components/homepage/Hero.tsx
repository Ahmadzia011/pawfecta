"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { HOMEPAGE_IMAGES } from "../../constants/homepage.constants";
import { PREMIUM_EASE } from "../../constants/motion.constants";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="bg-white px-4 pb-4 pt-28 md:px-8 md:pb-8 md:pt-36"
    >
      <div className="relative mx-auto min-h-[800px] max-w-360 overflow-hidden rounded-[30px] bg-[#f8e5d7] sm:min-h-[840px] md:min-h-[740px] md:rounded-[38px]">
        {/* Ambient background */}
        <div className="pointer-events-none absolute left-[42%] top-[38%] h-[420px] w-[420px] rounded-full bg-white/35 blur-[100px]" />

        {/* Pet companions */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 45,
                  scale: 0.94,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.15,
            delay: 0.15,
            ease: PREMIUM_EASE,
          }}
          className="pointer-events-none absolute bottom-[-1%] right-[-8%] z-20 h-[34%] w-[112%] sm:right-[-2%] sm:h-[44%] sm:w-[84%] md:bottom-[-3%] md:right-[-2%] md:h-[91%] md:w-[57%] lg:right-[3%] lg:w-[53%]"
        >
          <Image
            src={HOMEPAGE_IMAGES.hero.src}
            alt={HOMEPAGE_IMAGES.hero.alt}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 54vw, (min-width: 768px) 58vw, 100vw"
            className="object-contain object-bottom"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-30 flex min-h-[800px] flex-col px-5 py-7 sm:min-h-[840px] sm:px-8 sm:py-8 md:min-h-[740px] md:px-14 md:py-12 lg:px-16">
          {/* Eyebrow */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: PREMIUM_EASE,
            }}
          >
            <p className="flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[#8e4521] sm:gap-3 sm:text-[11px] sm:tracking-[0.16em] md:text-xs">
              <span className="h-px w-5 bg-[#8e4521]/50 sm:w-7" />
              Curated for happier pets
            </p>
          </motion.div>

          {/* Main copy */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: PREMIUM_EASE,
            }}
            className="mt-10 max-w-[650px] sm:mt-14 md:mt-20 md:max-w-[52%]"
          >
            <h1
              className="
                max-w-[620px]
                text-[clamp(2.25rem,11.4vw,3.05rem)] font-medium
                leading-[0.94]
                tracking-[-0.055em]
                text-[#8e4521]

                sm:text-[58px]

                md:text-[clamp(3.5rem,5.6vw,5.4rem)]
              "
            >
              <span className="block whitespace-nowrap">Beautiful things,</span>
              <span className="block whitespace-nowrap">for their</span>
              <span className="block whitespace-nowrap">best life.</span>
            </h1>

            <p className="mt-5 max-w-[420px] text-[15px] font-light leading-[1.65] text-[#3f2b22]/70 sm:mt-7 sm:leading-[1.7] md:mt-8 md:text-[17px]">
              Thoughtful essentials made for better routines, softer moments,
              and a little more joy every day.
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-8">
              <Link
                href="/shop"
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#8e4521] px-6 text-sm font-medium text-white shadow-[0_16px_34px_rgba(105,49,23,0.2)] transition-colors hover:bg-[#773817] sm:h-[50px] sm:w-auto"
              >
                Shop the collection
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[#8e4521]/35 px-6 text-sm font-medium text-[#8e4521] transition-colors hover:border-[#8e4521] hover:bg-white/50 sm:h-[50px] sm:w-auto"
              >
                Contact us
              </Link>
            </div>
          </motion.div>

          {/* Bottom details */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: PREMIUM_EASE,
            }}
            className="mt-auto hidden items-end gap-10 md:flex"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#8e4521]/55">
                Made for
              </p>
              <p className="mt-1 text-sm text-[#3f2b22]/80">
                Everyday happiness
              </p>
            </div>

            <div className="h-8 w-px bg-[#8e4521]/15" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#8e4521]/55">
                Chosen with
              </p>
              <p className="mt-1 text-sm text-[#3f2b22]/80">Care & intention</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
