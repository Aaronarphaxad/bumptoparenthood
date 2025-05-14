import { urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceComponent = ({ service }) => {
  const { slug, image, title, text, price, pricePerHour } = service;

  return (
    <Link href={`/services/${slug.current}`}>
      <Card className="transition-all hover:shadow-lg overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(image).url()}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold text-rose-600">
              ${pricePerHour ? `${price}/hr` : price} CAD
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{text}</p>
          <Button 
            variant="outline" 
            className="w-full mt-4 border-rose-200 hover:bg-rose-50 hover:text-rose-700"
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ServiceComponent;
