import { urlFor } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceComponent = ({ service }) => {
  const { slug, image, title, text, price, pricePerHour } = service;
  

  return (
    <Link href={`/services/${slug.current}`}>
      <div className="max-w-sm dark:bg-gray-700 rounded overflow-hidden shadow-lg service-div">
        <img
          className="w-full h-50 card-img"
          src={urlFor(image)}
          alt="service img"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 dark:text-gray-100 text-base text-sm">
            {text}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${pricePerHour ? `${price}/hr` : price} CAD
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ServiceComponent;
