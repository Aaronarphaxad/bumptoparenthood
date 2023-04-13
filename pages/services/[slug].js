import { client, urlFor } from "@/lib/client";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const ServiceDetail = ({ service }) => {
  const { title, image, price, detailedText,slug } = service;
  return (
    <div className="mt-20 lg:p-10 sm:p-5  align-center bg-rose-100 dark:bg-gray-800 pt-5">
        <Head>
        <title>{title}</title>
        <meta name="description" content="About Raven, owner of Bump to Parenthood, Registered nurse" />
        <meta name="keywords" content="about, page, mama coach," />
        <link rel="canonical" href={`https://www.bumptoparenthood.com/${slug.current}`} />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="lg:w-50 md:w-50 sm:w-100 flex flex-col place-content-center bg-white p-5 sm:p-2 rounded sm: lg:m-5 dark:text-gray-800">
        <img
          src={urlFor(image)}
          alt="img"
          className="rounded my-3 mx-auto mt-5 detailed-img"
        />
        <h1 className="text-center font-bold text-2xl my-2">{title}</h1>
        <p className="text-center mb-5 whitespace-normal break-words">
          {detailedText}
        </p>
        <p className="text-center font-bold mb-5">price: ${price} CAD</p>
        <Link
          href="/appointment"
          className="bg-rose-400 hover:bg-rose-300 text-white text-center font-bold py-2 px-4 rounded w-1/2 mx-auto my-5"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "service"] {
          slug {
              current
          }
      }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
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
