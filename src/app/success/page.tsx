import Footer from "@/src/components/UI/Footer";
import Navbar from "@/src/components/UI/Navbar";
import { Reveal } from "@/src/components/motion/Reveal";
import { ArrowUpRight, Check, Mail, PackageCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Successful | Pawfecta",
  description:
    "Your Pawfecta payment was successful and your order is being prepared.",
};

export default function SuccessPage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center bg-[#fffaf7] pb-20 pt-32 sm:pt-36 md:pb-28 md:pt-44">
        <div className="page-container">
          <Reveal
            distance={20}
            scale={0.98}
            className="mx-auto w-full max-w-[920px] overflow-hidden rounded-[30px] border border-[#8e4521]/10 bg-white px-6 py-14 text-center shadow-[0_28px_80px_rgba(80,40,20,0.07)] sm:px-10 sm:py-16 md:rounded-[38px] md:px-16 md:py-20"
          >
            <div className="mx-auto flex max-w-[650px] flex-col items-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-[#8e4521] text-white shadow-[0_14px_34px_rgba(80,40,20,0.2)] sm:size-[72px]">
                <Check size={30} strokeWidth={1.8} />
              </span>

              <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8e4521]/60">
                Payment confirmed
              </p>
              <h1 className="mt-3 text-[36px] font-medium leading-[1.04] tracking-[-0.045em] text-[#2f211b] sm:text-[48px] md:text-[58px]">
                Your order is officially in motion.
              </h1>
              <p className="mt-5 max-w-[530px] text-[15px] font-light leading-7 text-[#6d5144]/72 sm:text-[16px]">
                Thank you for choosing Pawfecta. We are preparing your order
                with care and will send the details to your email.
              </p>

              <div className="mt-8 grid w-full gap-3 text-left sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl bg-[#fff8f4] px-4 py-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#8e4521]">
                    <Mail size={17} strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[12px] font-medium text-[#2f211b]">
                      Confirmation
                    </p>
                    <p className="mt-0.5 text-[11px] font-light text-[#6d5144]/65">
                      Check your email for details
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-[#fff8f4] px-4 py-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#8e4521]">
                    <PackageCheck size={18} strokeWidth={1.7} />
                  </span>
                  <div>
                    <p className="text-[12px] font-medium text-[#2f211b]">
                      What happens next
                    </p>
                    <p className="mt-0.5 text-[11px] font-light text-[#6d5144]/65">
                      We will carefully prepare your order
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/shop"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#8e4521] px-7 text-[13px] font-medium text-white shadow-[0_12px_28px_rgba(80,40,20,0.17)] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#733616] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#8e4521]"
                >
                  Continue shopping
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
