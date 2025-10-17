import CTA from "@/components/cta";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Phone } from "lucide-react";
import FAQsThree from "@/components/faqt";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExpertiseSection from "@/components/expertise-section";
import DifferentialsSection from "@/components/differentials-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="">
        <header className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <div className="h-2 w-2 rounded-full bg-black"></div>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/contact" className="text-sm hover:underline">
                CONTACT US
              </Link>
            </div>
          </div>
        </header>

        <HeroSection />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12">
        <AboutSection />
        <ExpertiseSection />
        <DifferentialsSection />
        <FAQsThree />
        <CTA />
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <div className="h-2 w-2 rounded-full bg-black"></div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7d7d7d] transition-colors hover:text-[#1b3659]"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7d7d7d] transition-colors hover:text-[#1b3659]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contato@escritorio.com"
                className="text-[#7d7d7d] transition-colors hover:text-[#1b3659]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>

            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
