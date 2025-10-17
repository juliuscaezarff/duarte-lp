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

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${coordinates.lat},${coordinates.lng}&zoom=15`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Nossa Localização
          </DialogTitle>
          <DialogDescription>Encontre-nos no endereço abaixo</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Google Maps Embed */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden border">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapUrl}
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
