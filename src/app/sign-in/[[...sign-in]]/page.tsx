import Navbar from "@/src/components/UI/Navbar";
import { SignIn } from "@clerk/nextjs";
import { PawPrint } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in | Pawfecta",
  description: "Sign in to your Pawfecta account.",
};

export default function SignInPage() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen w-full items-center justify-center bg-[#fffaf7] px-4 py-12">
        <SignIn signUpUrl="/sign-up" />
    </main>
    </>
  );
}
