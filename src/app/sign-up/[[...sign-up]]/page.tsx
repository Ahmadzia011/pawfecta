import Footer from "@/src/components/UI/Footer";
import Navbar from "@/src/components/UI/Navbar";
import { SignUp } from "@clerk/nextjs";
import { PawPrint } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create an account | Pawfecta",
  description: "Create your Pawfecta account.",
};

export default function SignUpPage() {
  return (
    <>
    <Navbar/>
    <main className="flex min-h-screen w-full items-center justify-center bg-[#fffaf7] px-4 py-12">
        <SignUp signInUrl="/sign-in" />
    </main>
    </>
  );
}
