import React from "react";

import ServiceComponent from "./ServiceComponent";
import { client } from "@/lib/client";

const ServicesSection = ({ services }) => {
  return (
    <div id="services-section" className="container mx-auto p-3">
      <h1 className="text-3xl font-bold my-5 text-center">
        Parenthood Is Challenging Enough. <br /> I am Here To Make It Easier.
      </h1>
      <p className="my-5 text-center">
        Take a look at the services we provide. We are committed to being a one
        stop shop for all families, from pregnancy through the school age years.
        With every new milestone that brings a challenge, we are here to help.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-3">
        {services?.map((item) => {
          return <ServiceComponent key={item._id} service={item} />;
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
