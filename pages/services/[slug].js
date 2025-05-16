import { client, urlFor } from "@/lib/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

const ServiceDetail = ({ service }) => {
  const { title, image, price, detailedText, slug, pricePerHour } = service;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="keywords" content="support, nurse" />
        <link
          rel="canonical"
          href={`https://www.bumptoparenthood.com/${slug.current}`}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src={urlFor(image).url()}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
              
              <div className="flex items-center justify-between mb-8 p-4 bg-rose-50 rounded-lg">
                <span className="text-lg text-gray-700">Service Price</span>
                <span className="text-2xl font-semibold text-rose-600">
                  ${pricePerHour ? `${price}/hr` : price} CAD
                </span>
              </div>
              
              <div className="prose prose-rose max-w-none mb-8">
                <p className="text-gray-600 leading-relaxed">
                  {detailedText}
                </p>
              </div>
              
              <div className="flex justify-center">
                <Link href="/appointment" className="w-full sm:w-auto">
                  <Button 
                    className="w-full sm:w-auto bg-pink-500 hover:bg-rose-700 text-white px-8 py-3 rounded-full"
                  >
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "service"] {
          slug {
              current
          }
      }`;
  const services = await client.fetch(query);

  const paths = services.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "service" && slug.current == '${slug}'][0]`;
  const service = await client.fetch(query);

  return {
    props: { service },
  };
};

export default ServiceDetail;
