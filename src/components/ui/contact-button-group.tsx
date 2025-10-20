"use client";

import { useState } from "react";
import { Instagram, MessageCircle, Mail, MapPin, Menu } from "lucide-react";
import { Button } from "./button";
import { ButtonGroup } from "./button-group";
import { LocationModal } from "./location-modal";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

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
  instagramUrl = "https://www.instagram.com/di.advocacia/",
  whatsappNumber = "5592996037337",
  email = "duarteadvocacia@diadv.com",
  address = "Rua Valério Botelho de Andrade, nº 190, Sala 11, São Francisco, Manaus/AM",
  coordinates = { lat: -3.1096881, lng: -60.0112901 }, // Coordenadas reais do endereço em Manaus
}: ContactButtonGroupProps) {
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInstagram = () => {
    window.open(instagramUrl, "_blank");
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLocation = () => {
    setLocationModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="hidden md:block">
        <ButtonGroup aria-label="Opções de contato" className="shadow-sm">
          <Button
            variant="outline"
            size="lg"
            onClick={handleInstagram}
            className="rounded-r-none border-r-0 bg-transparent"
          >
            <Instagram className="h-5 w-5 mr-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleWhatsApp}
            className="rounded-none border-r-0  bg-transparent"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleEmail}
            className="rounded-none border-r-0  bg-transparent"
          >
            <Mail className="h-5 w-5 mr-2" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => setLocationModalOpen(true)}
            className="rounded-l-none "
          >
            <MapPin className="h-5 w-5 mr-2" />
          </Button>
        </ButtonGroup>
      </div>

      <div className="md:hidden">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-transparent"
            >
              <Menu className="h-5 w-5 " />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto">
            <SheetHeader>
              <SheetTitle>Entre em Contato</SheetTitle>
              <SheetDescription>
                Escolha a melhor forma de nos contatar
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-3 py-6">
              <Button
                variant="outline"
                size="lg"
                onClick={handleInstagram}
                className="w-full justify-start bg-transparent"
              >
                <Instagram className="h-5 w-5 mr-3" />
                Instagram
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsApp}
                className="w-full justify-start bg-transparent"
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleEmail}
                className="w-full justify-start bg-transparent"
              >
                <Mail className="h-5 w-5 mr-3" />
                Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleLocation}
                className="w-full justify-start bg-transparent"
              >
                <MapPin className="h-5 w-5 mr-3" />
                Localização
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <LocationModal
        open={locationModalOpen}
        onOpenChange={setLocationModalOpen}
        address={address}
        coordinates={coordinates}
      />
    </>
  );
}
