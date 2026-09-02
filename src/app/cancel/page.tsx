import Footer from "@/src/components/UI/Footer";
import Navbar from "@/src/components/UI/Navbar";
import { Reveal } from "@/src/components/motion/Reveal";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout Cancelled | Pawfecta",
  description:
    "Your Pawfecta checkout was cancelled. Return to the shop whenever you are ready.",
};

export default function CancelPage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center bg-[#fffaf7] pb-20 pt-32 sm:pt-36 md:pb-28 md:pt-44">
        <div className="page-container">
          <Reveal
            distance={20}
            scale={0.98}
            className="mx-auto w-full max-w-[820px] overflow-hidden rounded-[30px] border border-[#8e4521]/10 bg-white px-6 py-14 text-center shadow-[0_28px_80px_rgba(80,40,20,0.07)] sm:px-10 sm:py-16 md:rounded-[38px] md:px-16 md:py-20"
          >
            <div className="mx-auto flex max-w-[600px] flex-col items-center">
              <span className="flex size-16 items-center justify-center rounded-full border border-[#8e4521]/12 bg-[#fff5ef] text-[#8e4521] shadow-[0_12px_30px_rgba(80,40,20,0.08)] sm:size-[72px]">
                <ArrowLeft size={28} strokeWidth={1.7} />
              </span>

              <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8e4521]/60">
                Checkout paused
              </p>
              <h1 className="mt-3 text-[36px] font-medium leading-[1.04] tracking-[-0.045em] text-[#2f211b] sm:text-[48px] md:text-[56px]">
                Your order was not placed.
              </h1>
              <p className="mt-5 max-w-[500px] text-[15px] font-light leading-7 text-[#6d5144]/72 sm:text-[16px]">
                No payment was completed through this checkout. Your selected
                product will still be waiting if you would like to try again.
              </p>

              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-[#fff8f4] px-4 py-4 text-left sm:px-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#8e4521]">
                  <ShieldCheck size={18} strokeWidth={1.7} />
                </span>
                <div>
                  <p className="text-[12px] font-medium text-[#2f211b]">
                    Your payment details remain secure
                  </p>
                  <p className="mt-0.5 text-[11px] font-light text-[#6d5144]/65">
                    You can safely return to the shop whenever you are ready.
                  </p>
                </div>
              </div>

              <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/shop"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#8e4521] px-7 text-[13px] font-medium text-white shadow-[0_12px_28px_rgba(80,40,20,0.17)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#733616] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e4521]"
                >
                  Return to shop
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#8e4521]/15 bg-[#fff8f4] px-7 text-[13px] font-medium text-[#8e4521] transition-colors hover:border-[#8e4521]/25 hover:bg-[#f8e5d7] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e4521]"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
