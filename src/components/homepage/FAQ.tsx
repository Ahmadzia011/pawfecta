"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import SectionIntro from "./SectionIntro";
import { HOMEPAGE_FAQS } from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white pb-24 pt-0 md:pb-32 lg:pb-36">
      <div className="page-container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionIntro
            label="FAQ"
            title="Got a few questions?"
            copy="Everything you need to know before placing your Pawfecta order."
            titleClassName="max-w-[704px]"
            copyClassName="max-w-128"
          />

          <div className="space-y-3 md:space-y-4">
            {HOMEPAGE_FAQS.map(([question, answer], index) => {
              const isOpen = open === index;

              return (
                <Reveal
                  as="article"
                  key={question}
                  delay={index * 0.06}
                  distance={18}
                  scale={0.96}
                  className="overflow-hidden rounded-2xl bg-[#fff8f4]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex min-h-[73px] w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6 md:py-6"
                  >
                    <span className="text-[16px] font-medium leading-[25px] text-[#1d1d1f] md:text-[18px]">
                      {question}
                    </span>

                    <span className="flex size-6 shrink-0 items-center justify-center rounded-md text-[#1d1d1f]">
                      {isOpen ? (
                        <Minus size={19} strokeWidth={1.8} />
                      ) : (
                        <Plus size={19} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[16px] font-light leading-[25px] text-[#1d1d1f]/70 md:px-6 md:pb-6">
                        {answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
