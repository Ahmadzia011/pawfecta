import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import SectionIntro from "./SectionIntro";
import { HOMEPAGE_PRODUCT_BUNDLES } from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";

export default function Pricing() {
  return (
    <section
      id="bundles"
      className="bg-white pb-28 pt-20 md:pb-28 md:pt-24 lg:pb-32 lg:pt-28"
    >
      <div className="page-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            label="Curated bundles"
            title="Thoughtful bundles, made simple."
            copy="Useful favorites, beautifully grouped."
            titleClassName="max-w-none lg:whitespace-nowrap"
            copyClassName="max-w-[570px]"
          />

          <Reveal delay={0.22} distance={14} scale={0.98}>
            <Link
              href="/shop"
              className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[#8e4521]/20 px-5 text-sm font-medium text-[#8e4521] transition-colors hover:border-[#8e4521]/40 hover:bg-[#fff8f4] md:mb-1"
            >
              See all bundles
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {HOMEPAGE_PRODUCT_BUNDLES.map((bundle, index) => {
            const featured = index === 2;

            return (
              <Reveal
                as="article"
                key={bundle.name}
                delay={index * 0.1}
                distance={30}
                scale={0.92}
                hoverLift
                className={`flex min-h-[490px] flex-col rounded-3xl p-6 md:p-8 ${
                  featured
                    ? "bg-[#9f4219] text-white md:col-span-2 lg:col-span-1"
                    : "bg-[#fff8f4] text-[#1d1d1f]"
                }`}
              >
                <div>
                  <h3 className="text-[23px] font-normal leading-[31px]">
                    {bundle.name}
                  </h3>

                  <p
                    className={`mt-2 text-[42px] font-normal leading-[42px] tracking-[-0.06em] ${
                      featured ? "text-white" : "text-[#9f4219]"
                    }`}
                  >
                    {bundle.price}
                  </p>

                  <p
                    className={`mt-4 min-h-12 text-[15px] leading-6 ${
                      featured ? "text-white" : "text-[#1d1d1f]/70"
                    }`}
                  >
                    {bundle.copy}
                  </p>

                  <Link
                    href="/shop"
                    className={`mt-4 flex h-[43px] w-full items-center justify-center rounded-full text-[15px] transition-colors ${
                      featured
                        ? "bg-[#f8e5d7] text-[#9f4219] hover:bg-white"
                        : "border border-[#9f4219] text-[#9f4219] hover:bg-[#9f4219] hover:text-white"
                    }`}
                  >
                    Shop {bundle.name}
                  </Link>
                </div>

                <div className="mt-8">
                  <p
                    className={`text-sm font-medium leading-[21px] ${
                      featured ? "text-white" : "text-[#1d1d1f]/60"
                    }`}
                  >
                    What&apos;s inside:
                  </p>

                  <ul className="mt-3 space-y-2.5">
                    {bundle.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-2 text-sm font-medium leading-[21px] ${
                          featured ? "text-white" : "text-[#1d1d1f]/70"
                        }`}
                      >
                        <span
                          className={`flex size-4 shrink-0 items-center justify-center rounded-full ${
                            featured
                              ? "bg-[#f8e5d7] text-[#9f4219]"
                              : "bg-[#a95b25] text-white"
                          }`}
                        >
                          <Check size={11} strokeWidth={3} />
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
