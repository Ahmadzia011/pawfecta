"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import SectionIntro from "./SectionIntro";
import {
  HOMEPAGE_IMAGES,
  HOMEPAGE_TESTIMONIALS,
} from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white pb-28 pt-20 md:pb-28 md:pt-24 lg:pb-32 lg:pt-28">
      <div className="page-container">
        <SectionIntro
          center
          label="Testimonials"
          title="Happy pets. Even happier pet parents."
          copy="See why pet parents choose Pawfecta for thoughtful products, dependable quality, and everyday delight."
          titleClassName="max-w-[810px]"
          copyClassName="max-w-[540px]"
        />

        <div className="mt-12 grid items-center gap-10 md:mt-16 lg:h-[680px] lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-10 xl:gap-16">
          <Reveal direction="right" distance={36} scale={0.95} duration={1}>
            <Image
              src={HOMEPAGE_IMAGES.testimonials.src}
              alt={HOMEPAGE_IMAGES.testimonials.alt}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-[480px] w-full rounded-3xl object-cover sm:h-[560px] lg:h-[680px]"
            />
          </Reveal>

          <Reveal direction="left" distance={30} delay={0.1} scale={0.96}>
            <div
              className="relative h-[560px] overflow-hidden sm:h-[620px] lg:h-[680px]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 19%, black 76%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 19%, black 76%, transparent 100%)",
              }}
            >
              <motion.div
                className="flex flex-col gap-4"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: ["0%", "calc(-50% - 8px)"] }
                }
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[0, 1].map((group) => (
                  <div key={group} className="flex flex-col gap-4">
                    {HOMEPAGE_TESTIMONIALS.map((review, index) => (
                      <article
                        key={`${group}-${review.name}-${index}`}
                        className="flex h-[270px] shrink-0 flex-col justify-between rounded-[20px] bg-[#fff8f4] p-6"
                      >
                        <p className="text-md font-medium leading-[27px] text-[#8e4521]">
                          “{review.quote}”
                        </p>

                        <div className="flex items-center gap-4">
                          <Image
                            src={review.image}
                            alt={`${review.petName}, ${review.name}'s pet`}
                            sizes="50px"
                            className="size-[50px] shrink-0 rounded-full object-cover"
                          />

                          <div>
                            <p className="text-base font-medium leading-[27px] text-[#1d1d1f]">
                              {review.name}
                            </p>

                            <p className="text-base leading-[21px] text-[#1d1d1f]/60">
                              {review.pet}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
} 
