"use client";

import { useState } from "react";
import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { LocationModal } from "@/components/ui/location-modal";

interface ContactButtonGroupProps {
  instagramUrl?: string;
  whatsappNumber?: string;
  email?: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export function ContactButtonGroup({
  instagramUrl = "https://instagram.com/seu_perfil",
  whatsappNumber = "5511999999999",
  email = "contato@exemplo.com",
  address = "Rua Exemplo, 123 - Bairro - Cidade, Estado - CEP 00000-000",
  coordinates = { lat: -23.5505, lng: -46.6333 }, // São Paulo como exemplo
}: ContactButtonGroupProps) {
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const handleInstagram = () => {
    window.open(instagramUrl, "_blank");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <ButtonGroup
        aria-label="Opções de contato"
        className="shadow-sm border-none"
      >
        <Button
          variant="outline"
          size="lg"
          onClick={handleInstagram}
          className="rounded-r-none border-r-0 hover:bg-[#c9ad7c] hover:text-white bg-transparent"
        >
          <Instagram className="h-5 w-5 mr-2" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={handleWhatsApp}
          className="rounded-none border-r-0 hover:bg-[#c9ad7c] hover:text-white bg-transparent"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={handleEmail}
          className="rounded-none border-r-0 hover:bg-[#c9ad7c] hover:text-white bg-transparent"
        >
          <Mail className="h-5 w-5 mr-2" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={() => setLocationModalOpen(true)}
          className="rounded-l-none hover:bg-[#c9ad7c] hover:text-white bg-transparent"
        >
          <MapPin className="h-5 w-5 mr-2" />
        </Button>
      </ButtonGroup>

      <LocationModal
        open={locationModalOpen}
        onOpenChange={setLocationModalOpen}
        address={address}
        coordinates={coordinates}
      />
    </>
  );
}
