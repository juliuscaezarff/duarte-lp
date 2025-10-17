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
    <section>
      <div className="bg-[#f8f8f8] py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mx-auto w-fit">
            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
              <IntegrationCard>
                <Scale className="h-8 w-8 text-[#1b3659]" />
              </IntegrationCard>
              <IntegrationCard>
                <Gavel className="h-8 w-8 text-[#1b3659]" />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <IntegrationCard>
                <BookOpen className="h-8 w-8 text-[#1b3659]" />
              </IntegrationCard>
              <IntegrationCard
                borderClassName="shadow-black-950/10 shadow-xl border-[#1b3659]/25"
                className="bg-[#1b3659]/10"
              >
                <Shield className="h-8 w-8 text-[#1b3659]" />
              </IntegrationCard>
              <IntegrationCard>
                <FileText className="h-8 w-8 text-[#1b3659]" />
              </IntegrationCard>
            </div>

            <div className="mx-auto flex w-fit justify-center gap-2">
              <IntegrationCard>
                <Users className="h-8 w-8 text-[#1b3659]" />
              </IntegrationCard>

              <IntegrationCard>
                <Building2 className="h-8 w-8 text-[#1b3659]" />
              </IntegrationCard>
            </div>
          </div>
          <div className="mx-auto mt-6 max-w-lg space-y-6 text-center">
            <h2 className="font-serif text-balance text-3xl font-semibold md:text-4xl text-black">
              Hora de agir com orientação jurídica
            </h2>
            <p className="text-[#7d7d7d]">
              Cada situação merece uma análise individual. Entre em contato e
              receba uma orientação jurídica clara e segura para o seu caso.
            </p>

            <button className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1b3659] bg-[#1b3659] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#476288] hover:border-[#476288] hover:gap-4">
              <Link href="#contato" className="inline-flex items-center gap-2">
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
            </button>
          </div>
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
