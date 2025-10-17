import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#1b3659] pb-20 lg:pb-28 mt-12">
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full opacity-10">
          <img
            src="/stroke_quadrado.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative px-6 lg:px-8 mx-auto max-w-7xl pt-12">
        {/* Hero Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 mb-16">
          {/* Left: Heading */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-light leading-tight tracking-tight text-white">
              Tornamos o Direito mais próximo de quem precisa.
            </h1>
          </div>

          {/* Right: Description and CTA */}
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-sm leading-relaxed text-white/90">
              O escritório Duarte & Iannuzzi nasceu para aproximar o cidadão do
              Direito e oferecer orientação jurídica acessível, em Manaus e em
              todo o Brasil.
            </p>
            <div>
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
        </div>

        <div className="grid grid-cols-4 gap-4 lg:gap-6">
          {/* Image 1 - Small square on left */}
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <Image
              src="/img1-hero.png"
              alt="Legal consultation"
              width={300}
              height={300}
              sizes="(max-width: 768px) 25vw, 20vw"
              className="h-full w-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Image 2 - Large vertical in center-left */}
          <div className="aspect-[3/5] overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <Image
              src="/img2-hero.png"
              alt="Lady Justice statue"
              width={300}
              height={500}
              sizes="(max-width: 768px) 25vw, 20vw"
              className="h-full w-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Image 3 - Large vertical in center-right */}
          <div className="aspect-[3/5] overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <Image
              src="/img3-hero.png"
              alt="Scales of justice"
              width={300}
              height={500}
              sizes="(max-width: 768px) 25vw, 20vw"
              className="h-full w-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Image 4 - Small square on right */}
          <div className="aspect-square overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <Image
              src="/img4-hero.png"
              alt="Justice statue detail"
              width={300}
              height={300}
              sizes="(max-width: 768px) 25vw, 20vw"
              className="h-full w-full object-cover hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
