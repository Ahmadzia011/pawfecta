import Image from "next/image";
import { HOMEPAGE_IMAGES } from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";
import SectionIntro from "./SectionIntro";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white pb-24 pt-20 md:pb-32 md:pt-28"
    >
      <div className="page-container">
        <SectionIntro
          label="About Pawfecta"
          title="Everyday pet care, considered in every detail."
          copy="We curate useful, well-made essentials that make daily routines feel easier and time together feel even better."
          titleClassName="max-w-[760px]"
          copyClassName="max-w-[560px]"
        />

        <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          {/* Main image */}
          <Reveal
            direction="right"
            distance={30}
            duration={1}
            scale={0.97}
            className="relative min-h-[620px] overflow-hidden rounded-[30px] bg-[#f8e5d7] md:min-h-[760px] md:rounded-[36px]"
          >
            <Image
              src={HOMEPAGE_IMAGES.aboutCat.src}
              alt={HOMEPAGE_IMAGES.aboutCat.alt}
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/20 to-transparent" />

            <div className="absolute bottom-7 left-7 md:bottom-9 md:left-9">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/75">
                Thoughtfully selected
              </p>

              <p className="mt-2 max-w-[330px] text-[22px] font-medium leading-[1.15] tracking-[-0.025em] text-white md:text-[28px]">
                Better products for the everyday moments that matter.
              </p>
            </div>
          </Reveal>

          {/* Right column */}
          <div className="flex flex-col gap-6 md:gap-8">
            <Reveal
              direction="left"
              distance={26}
              duration={0.95}
              delay={0.06}
              scale={0.97}
              className="relative overflow-hidden rounded-[30px] bg-[#f8e5d7] md:rounded-[34px]"
            >
              <Image
                src={HOMEPAGE_IMAGES.aboutCompanions.src}
                alt={HOMEPAGE_IMAGES.aboutCompanions.alt}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-[320px] w-full object-cover md:h-[360px]"
              />
            </Reveal>

            <Reveal
              delay={0.12}
              distance={20}
              scale={0.98}
              className="flex flex-1 flex-col justify-between rounded-[30px] bg-[#fff8f4] p-7 md:rounded-[34px] md:p-10 lg:p-12"
            >
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#8e4521]/60">
                  Our approach
                </p>

                <h3 className="mt-5 max-w-[470px] text-[30px] font-medium leading-[1.08] tracking-[-0.035em] text-[#8e4521] md:text-[38px]">
                  Less clutter.
                  <br />
                  Better choices.
                </h3>

                <p className="mt-6 max-w-[500px] text-[15px] font-light leading-[1.7] text-[#3f2b22]/70 md:text-[16px]">
                  From grooming and wellness to comfort and play, every Pawfecta
                  essential is chosen for quality, usefulness, and pet-first
                  comfort.
                </p>
              </div>

              <div className="mt-12 border-t border-[#8e4521]/10 pt-7">
                <div className="flex items-start justify-between gap-6">
                  <p className="max-w-[190px] text-sm font-medium leading-5 text-[#3f2b22]">
                    Purpose over excess
                  </p>

                  <p className="max-w-[230px] text-right text-sm font-light leading-5 text-[#3f2b22]/60">
                    Useful essentials selected for real routines and everyday
                    comfort.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}