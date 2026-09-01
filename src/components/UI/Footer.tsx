import Image from "next/image";
import { HOMEPAGE_IMAGES } from "../../constants/homepage.constants";
import { Reveal } from "../motion/Reveal";

type FooterProps = {
  variant?: "default" | "compact";
};

export default function Footer({ variant = "default" }: FooterProps) {
  if (variant === "compact") {
    return (
      <footer className="relative w-full overflow-hidden rounded-t-[32px] bg-[#8e4521] text-white md:rounded-t-[40px]">
        <div className="page-container py-10 md:py-14">
          <Reveal distance={20} scale={0.96}>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <p
                aria-label="pawfecta"
                className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.78] tracking-[-0.07em] text-[#f8e5d7]"
              >
                pawfecta
              </p>
              <p className="max-w-[320px] text-[15px] font-light leading-6 text-[#f8e5d7]/75 md:text-right">
                Thoughtfully chosen essentials for happier pets and easier
                everyday routines.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:mt-12 md:grid-cols-[1fr_1fr_auto] md:gap-12">
            <Reveal direction="right" distance={18} delay={0.06} scale={0.98}>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#f8e5d7]/55">
                  Contact
                </p>
                <a
                  href="mailto:hello@pawfecta.com"
                  className="mt-3 block text-[17px] font-light transition-opacity hover:opacity-70"
                >
                  hello@pawfecta.com
                </a>
              </div>
            </Reveal>

            <Reveal distance={18} delay={0.1} scale={0.98}>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#f8e5d7]/55">
                  Delivery
                </p>
                <p className="mt-3 text-[17px] font-light">
                  Free standard delivery over $75
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" distance={18} delay={0.14} scale={0.98}>
              <p className="text-[13px] text-[#f8e5d7]/65 md:self-end md:text-right">
                © 2026 Pawfecta
              </p>
            </Reveal>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative w-full overflow-hidden rounded-t-[40px] bg-[#8e4521] text-white md:rounded-t-[48px]">
      <div className="page-container relative pb-8 pt-40 md:min-h-[707px] md:pt-64">
        {/* Wordmark */}
        <div className="absolute left-1/2 top-5 w-max -translate-x-1/2 md:top-8">
          <Reveal distance={30} duration={1} scale={0.88}>
            <p
              aria-label="pawfecta"
              className="text-center text-[clamp(5rem,18vw,16rem)] font-black leading-none tracking-[-0.07em] text-[#f8e5d7]"
            >
              pawfecta
            </p>
          </Reveal>
        </div>

        {/* Centered pet */}
        <div className="pointer-events-none absolute bottom-[-516px] left-1/2 z-10 hidden h-[1127px] w-[472px] -translate-x-1/2 overflow-hidden md:block">
          <Reveal className="relative h-full w-full" scale={0.86} duration={1.05}>
            <Image
              src={HOMEPAGE_IMAGES.petCutout.src}
              alt=""
              sizes="1127px"
              className="absolute left-[-69.39%] top-0 h-full max-w-none object-contain "
            />
          </Reveal>
        </div>

        {/* Mobile pet */}
        <div className="pointer-events-none absolute left-1/2 top-24 z-10 -translate-x-1/2 md:hidden">
          <Reveal scale={0.82} duration={0.95}>
            <Image
              src={HOMEPAGE_IMAGES.petCutout.src}
              alt=""
              sizes="330px"
              className="h-[330px] w-auto object-contain"
            />
          </Reveal>
        </div>

        <div className="relative z-20 grid gap-10 pb-8 pt-64 md:grid-cols-2 md:gap-0 md:pt-[200px]">
          <Reveal direction="right" distance={24} delay={0.08} scale={0.97}>
            <div>
              <h3 className="text-[24px] font-medium leading-[31px]">
                Contact us
              </h3>

              <div className="mt-3 space-y-[7px] font-light text-[#f3f6f1]">
                <a
                  href="mailto:hello@pawfecta.com"
                  className="block text-[18px] leading-[25px] transition-opacity hover:opacity-70"
                >
                  hello@pawfecta.com
                </a>

                <a
                  href="tel:+15551234567"
                  className="block text-[16px] leading-[25px] transition-opacity hover:opacity-70"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" distance={24} delay={0.14} scale={0.97}>
            <div className="md:text-right">
              <h3 className="text-[24px] font-medium leading-[31px]">
                Delivery
              </h3>

              <div className="mt-3 space-y-[7px] font-light">
                <p className="text-[18px] leading-[25px]">
                  Free standard delivery over $75
                </p>

                <p className="text-[18px] leading-[25px]">
                  Orders ship Monday–Saturday
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} distance={16} scale={0.98}>
          <div className="relative z-20 mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[14px] font-medium leading-[21px] text-[#f8e5d7] md:mt-16 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Pawfecta. All rights reserved.</p>

            <p>Thoughtfully chosen for happy pets.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
