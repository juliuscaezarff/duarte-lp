"use client";

import { useState } from "react";
import { Copy, Check, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LocationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function LocationModal({
  open,
  onOpenChange,
  address,
  coordinates,
}: LocationModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.943360216931!2d-60.01129012399026!3d-3.1096881403399377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0548d3ab2629%3A0x9babb8080397932f!2sR.%20Val%C3%A9rio%20Botelho%20de%20Andrade%2C%20190%20-%20S%C3%A3o%20Francisco%2C%20Manaus%20-%20AM%2C%2069079-260!5e0!3m2!1spt-BR!2sbr!4v1760718760243!5m2!1spt-BR!2sbr`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[calc(100vw-2rem)] md:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Nossa Localização
          </DialogTitle>
          <DialogDescription>Encontre-nos no endereço abaixo</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Google Maps Embed */}
          <div className="w-full h-[300px] sm:h-[340px] md:h-[420px] lg:h-[500px] rounded-lg overflow-hidden border">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address Section */}
          <div className="flex items-start justify-between gap-4 p-4 bg-muted rounded-lg">
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Endereço:</p>
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="shrink-0 bg-transparent"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copiar
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
