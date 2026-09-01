import { HOMEPAGE_METRICS } from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";
import SectionIntro from "./SectionIntro";

export default function Metrics() {
  return (
    <section className="bg-white pb-24 pt-4 md:pb-32 md:pt-8">
      <div className="page-container">
        <SectionIntro
          label="Why Pawfecta"
          title="Good care should feel simple."
          copy="A considered collection built around quality, everyday usefulness, and the comfort of the pets we love."
          titleClassName="max-w-[680px]"
          copyClassName="max-w-[520px]"
        />

<div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
  {HOMEPAGE_METRICS.map(([value, title, copy], index) => (
    <Reveal
      as="article"
      key={title}
      delay={index * 0.08}
      distance={22}
      scale={0.97}
      className={`
        group relative flex min-h-[260px] flex-col
        justify-between overflow-hidden rounded-[26px]
        p-6 md:min-h-[300px] md:rounded-[30px] md:p-7

        ${
          index === 2
            ? "bg-[#8e4521] text-white"
            : "bg-[#fff8f4] text-[#8e4521]"
        }
      `}
    >
      <div className="flex items-start justify-between">
        <p
          className={`
            text-[10px] font-medium uppercase tracking-[0.15em]
            ${index === 2 ? "text-white/55" : "text-[#8e4521]/45"}
          `}
        >
          0{index + 1}
        </p>

        <span
          className={`
            mt-1 size-1.5 rounded-full
            ${index === 2 ? "bg-white/60" : "bg-[#8e4521]/45"}
          `}
        />
      </div>

      <div>
        <p className="text-[54px] font-medium leading-none tracking-[-0.06em] md:text-[62px]">
          {value}
        </p>

        <h3 className="mt-4 max-w-[260px] text-[20px] font-medium leading-[1.1] tracking-[-0.025em] md:text-[23px]">
          {title}
        </h3>

        <p
          className={`
            mt-3 max-w-[290px] text-[13px]
            font-light leading-[1.6] md:text-[14px]
            ${
              index === 2
                ? "text-white/65"
                : "text-[#3f2b22]/60"
            }
          `}
        >
          {copy}
        </p>
      </div>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}