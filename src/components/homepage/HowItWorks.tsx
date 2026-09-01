import SectionIntro from "./SectionIntro";
import { HOMEPAGE_HOW_IT_WORKS_STEPS } from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";

export default function HowItWorks() {
  return (
    <section className="bg-white pb-24 pt-4 md:pb-32 md:pt-8">
      <div className="page-container">
        <SectionIntro
          center
          label="How it works"
          title="From thoughtful picks to happy tails."
          copy="Choose their essentials, check out securely, and we'll take care of the rest."
          titleClassName="max-w-[720px]"
          copyClassName="max-w-[500px]"
        />

        <div className="relative mt-14 md:mt-20">
          {/* Desktop connector */}
          <div className="absolute left-[16%] right-[16%] top-[52px] hidden h-px bg-[#8e4521]/12 md:block" />

          <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {HOMEPAGE_HOW_IT_WORKS_STEPS.map(
              ({ title, copy, Icon }, index) => (
                <Reveal
                  as="article"
                  key={title}
                  delay={index * 0.08}
                  distance={22}
                  scale={0.97}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex size-[104px] items-center justify-center rounded-full bg-[#fff8f4] text-[#8e4521] md:size-[108px]">
                    <Icon
                      aria-hidden="true"
                      size={34}
                      strokeWidth={1.35}
                    />

                    <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full border-4 border-white bg-[#8e4521] text-[9px] font-medium tracking-[0.05em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="mt-7">
                    <h3 className="text-[22px] font-medium leading-[1.15] tracking-[-0.025em] text-[#8e4521] md:text-[24px]">
                      {title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-[280px] text-[14px] font-light leading-[1.7] text-[#3f2b22]/65 md:text-[15px]">
                      {copy}
                    </p>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
