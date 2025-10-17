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
import { ContactButtonGroup } from "@/components/ui/contact-button-group";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="bg-[#1b3659] relative">
        {/* Background image - full width */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full opacity-10">
            <img
              src="/stroke_quadrado.png"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <header className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="flex items-center justify-between py-6">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
            <ContactButtonGroup
              instagramUrl="https://instagram.com/seu_perfil"
              whatsappNumber="5511999999999"
              email="contato@exemplo.com"
              address="Rua Exemplo, 123 - Bairro - Cidade, Estado - CEP 00000-000"
              coordinates={{ lat: -23.5505, lng: -46.6333 }}
            />
          </div>
        </header>

        <HeroSection />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-12">
        <AboutSection />
        <ExpertiseSection />
        <DifferentialsSection />
        <FAQsThree />
      </main>

      <CTA />

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="flex  items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <div className="h-2 w-2 rounded-full bg-black"></div>
            </div>

            <div className="flex flex-col gap-4">
              <ContactButtonGroup />

              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
