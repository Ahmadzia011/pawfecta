import { Reveal } from "../motion/Reveal";

type SectionIntroProps = {
  label: string;
  title: string;
  copy?: string;
  center?: boolean;
  titleClassName?: string;
  copyClassName?: string;
};

export default function SectionIntro({
  label,
  title,
  copy,
  center = false,
  titleClassName = "max-w-[760px]",
  copyClassName = "max-w-[540px]",
}: SectionIntroProps) {
  return (
    <div className={center ? "flex flex-col items-center text-center" : ""}>
      <Reveal distance={12} duration={0.65} scale={0.88}>
        <p className="flex items-center gap-2 text-[11px] font-medium uppercase leading-5 tracking-[0.08em] text-[#1d1d1f] md:text-xs">
          <span className="size-1.5 rounded-full bg-[#1d1d1f]" />
          {label}
        </p>
      </Reveal>

      <Reveal delay={0.08} distance={22} scale={0.96}>
        <h2
          className={`mt-5 text-[30px] font-medium leading-[1.18] text-[#8e4521] md:mt-6 md:text-[40px] md:leading-12 ${titleClassName}`}
        >
          {title}
        </h2>
      </Reveal>

      {copy && (
        <Reveal delay={0.16} distance={18} scale={0.98}>
          <p
            className={`mt-4 text-[15px] font-light leading-6 text-[#292929] md:text-[18px] md:leading-[25.2px] ${copyClassName}`}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}
