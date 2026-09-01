import Image from "next/image";
import SectionIntro from "./SectionIntro";
import { HOMEPAGE_PRODUCT_CATEGORIES } from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";

export default function Services() {
  return (
    <section id="products" className="px-4 py-4 md:px-8">
      <div className="mx-auto max-w-360 rounded-[32px] bg-[#f8e5d7] py-18 md:rounded-[40px] md:py-24">
        <div className="page-container">
          <SectionIntro
            center
            label="Shop by category"
            title="Everything they need, thoughtfully considered."
            copy="Explore a focused collection of everyday essentials for care, comfort, play, and wellbeing."
            titleClassName="max-w-[720px]"
            copyClassName="max-w-[540px]"
          />

          <div className="mt-12 space-y-4 md:mt-16 md:space-y-5">
            {HOMEPAGE_PRODUCT_CATEGORIES.map((category, index) => (
              <article
                key={category.title}
                style={{
                  zIndex: index + 1,
                  top: 110 + index * 12,
                }}
                className="sticky"
              >
                <Reveal
                  delay={index * 0.04}
                  distance={22}
                  scale={0.98}
                  className="
                    overflow-hidden rounded-[26px]
                    bg-[#fffaf7]
                    p-2
                    shadow-[0_18px_50px_rgba(90,43,20,0.05)]
                    md:p-3
                    lg:grid
                    lg:h-[360px]
                    lg:grid-cols-2
                  "
                >
                  {/* Text */}
                  <div
                    className={`
                      flex min-h-[270px] flex-col justify-between
                      px-5 py-6
                      md:px-8 md:py-8
                      lg:min-h-0 lg:p-10
                      ${
                        index % 2 === 0
                          ? "lg:order-2"
                          : "lg:order-1"
                      }
                    `}
                  >
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8e4521]/50 md:text-[11px]">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-5 max-w-[440px] text-[30px] font-medium leading-[1.08] tracking-[-0.035em] text-[#8e4521] md:text-[36px]">
                        {category.title}
                      </h3>

                      <p className="mt-4 max-w-[460px] text-[14px] font-light leading-[1.7] text-[#3f2b22]/65 md:text-[15px]">
                        {category.copy}
                      </p>
                    </div>

                    <div className="mt-8 flex items-end justify-between gap-6 border-t border-[#8e4521]/10 pt-5">
                      <p className="max-w-[360px] text-[11px] font-medium uppercase leading-5 tracking-[0.1em] text-[#8e4521]/50">
                        {category.items.join(" · ")}
                      </p>

                      <span className="shrink-0 text-[12px] font-medium text-[#8e4521]">
                        Explore →
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div
                    className={`
                      relative overflow-hidden rounded-[22px]
                      ${
                        index % 2 === 0
                          ? "lg:order-1"
                          : "lg:order-2"
                      }
                    `}
                  >
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-auto transition-transform duration-700 hover:scale-[1.025]"
                    />
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}