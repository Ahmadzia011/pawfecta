"use client";

import { Show, UserButton } from "@clerk/nextjs";
import { ArrowUpRight, Menu, PawPrint, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PREMIUM_EASE } from "../../constants/motion.constants";
import { SITE_NAV_LINKS } from "../../constants/site.constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = () => setOpen(false);
  const isActiveLink = (href: string) =>
    href === "/"
      ? pathname === "/"
      : !href.includes("#") && pathname.startsWith(href);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-5">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: PREMIUM_EASE }}
        className="relative mx-auto max-w-360 rounded-[22px] border border-white/55 bg-white/68 shadow-[0_10px_35px_rgba(73,33,16,0.07)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 md:border-0 md:bg-transparent md:shadow-none md:backdrop-blur-none"
      >
        <div className="flex h-20 items-center justify-between px-3 pl-4 md:px-4 md:pl-5">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8e4521]"
            aria-label="Pawfecta home"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-[#8e4521] text-[#fff8f4] shadow-[0_8px_20px_rgba(91,43,21,0.18)] transition-transform duration-300 group-hover:-rotate-6">
              <PawPrint size={17} strokeWidth={1.8} />
            </span>
            <span className="text-[25px] font-black leading-none tracking-[-0.055em] text-[#8e4521]">
              pawfecta
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-[#8e4521]/8 bg-[#fff8f4]/65 p-1 lg:flex"
          >
            {SITE_NAV_LINKS.map(([label, href]) => {
              const isActive = isActiveLink(href);

              return (
                <Link
                  key={label}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all focus-visible:outline-2 focus-visible:outline-[#8e4521] ${
                    isActive
                      ? "bg-white text-[#8e4521] shadow-[0_5px_14px_rgba(91,43,21,0.08)]"
                      : "text-[#5f3927]/70 hover:bg-white/70 hover:text-[#8e4521]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="group hidden h-11 items-center gap-2.5 rounded-full bg-[#8e4521] px-7 text-base font-normal text-white shadow-[0_10px_24px_rgba(91,43,21,0.2)] transition-colors hover:bg-[#733616] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e4521] sm:flex"
              >
                Sign in
              </Link>
            </Show>

            <Show when="signed-in">
              <div className="hidden h-11 items-center rounded-full bg-white/75 px-1.5 shadow-[0_8px_20px_rgba(91,43,21,0.1)] sm:flex">
                <UserButton />
              </div>
            </Show>

            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-[#8e4521]/15 bg-[#fff8f4]/70 text-[#8e4521] transition-colors hover:bg-[#f8e5d7] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e4521] lg:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X size={19} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: PREMIUM_EASE }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mx-3 border-t border-[#8e4521]/10 px-1 pb-4 pt-3">
                <div className="grid gap-1 sm:grid-cols-2">
                  {SITE_NAV_LINKS.map(([label, href], index) => {
                    const isActive = isActiveLink(href);

                    return (
                      <motion.div
                        key={label}
                        initial={
                          shouldReduceMotion ? false : { opacity: 0, x: -8 }
                        }
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.035 }}
                      >
                        <Link
                          href={href}
                          onClick={closeMenu}
                          aria-current={isActive ? "page" : undefined}
                          className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors ${
                            isActive
                              ? "bg-[#f8e5d7] text-[#8e4521]"
                              : "text-[#5f3927] hover:bg-[#f8e5d7]/75"
                          }`}
                        >
                          {label}
                          <ArrowUpRight
                            size={14}
                            className="text-[#8e4521]/55"
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <Show when="signed-out">
                  <Link
                    href="/sign-in"
                    onClick={closeMenu}
                    className="mt-3 flex h-12 items-center justify-center gap-2 rounded-full bg-[#8e4521] text-sm font-medium text-white sm:hidden"
                  >
                    Sign in
                    <ArrowUpRight size={15} />
                  </Link>
                </Show>

                <Show when="signed-in">
                  <div className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-[#fff8f4] sm:hidden">
                    <UserButton showName />
                  </div>
                </Show>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
