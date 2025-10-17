import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Scale,
  Gavel,
  BookOpen,
  Shield,
  FileText,
  Users,
  Building2,
  Award,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full bg-[#1b3659] py-24 md:py-32">
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

      {/* Content container with max-width */}
      <div className="mx-auto max-w-5xl px-6 relative">
        <div className="relative mx-auto w-fit">
          <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
            <IntegrationCard>
              <Scale className="h-8 w-8 text-[#c9ad7c]" />
            </IntegrationCard>
            <IntegrationCard>
              <Gavel className="h-8 w-8 text-[#c9ad7c]" />
            </IntegrationCard>
          </div>
          <div className="mx-auto my-2 flex w-fit justify-center gap-2">
            <IntegrationCard>
              <BookOpen className="h-8 w-8 text-[#c9ad7c]" />
            </IntegrationCard>
            <IntegrationCard
              borderClassName="shadow-black-950/10 shadow-xl border-white/25"
              className="bg-white/10"
            >
              <Shield className="h-8 w-8 text-[#c9ad7c]" />
            </IntegrationCard>
            <IntegrationCard>
              <FileText className="h-8 w-8 text-[#c9ad7c]" />
            </IntegrationCard>
          </div>

          <div className="mx-auto flex w-fit justify-center gap-2">
            <IntegrationCard>
              <Users className="h-8 w-8 text-[#c9ad7c]" />
            </IntegrationCard>

            <IntegrationCard>
              <Building2 className="h-8 w-8 text-[#c9ad7c]" />
            </IntegrationCard>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
          <h2 className="font-serif text-balance text-3xl font-semibold md:text-4xl text-white">
            Hora de agir com orientação jurídica
          </h2>
          <p className="text-white/90">
            Cada situação merece uma análise individual. Entre em contato e
            receba uma orientação jurídica clara e segura para o seu caso.
          </p>

          <Button asChild className="rounded-full">
            <Link
              href="https://wa.me/5592996037337"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light  transition-all hover:gap-4 "
            >
              Fale com um advogado
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
}) => {
  return (
    <div className={cn("bg-white relative flex size-20 rounded-xl", className)}>
      <div
        role="presentation"
        className={cn(
          "absolute inset-0 rounded-xl border border-black/20",
          borderClassName
        )}
      />
      <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
    </div>
  );
};
