import { client, urlFor } from "@/lib/client";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { MapPin, Briefcase } from "lucide-react";

const about = ({ about }) => {
  const { image, name, occupation, location, description } = about[0];
  
  return (
    <>
      <Head>
        <title>About Raven</title>
        <meta
          name="description"
          content="About Raven, owner of Bump to Parenthood, Registered nurse"
        />
        <meta name="keywords" content="about, page, mamacoach," />
        <link rel="canonical" href="https://www.bumptoparenthood.com/about" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </h1>
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl mb-8 mx-auto ring-4 ring-rose-100">
                <div className="relative w-full h-full">
                  <Image
                    src={urlFor(image).url()}
                    alt="Profile Photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                <Briefcase className="w-4 h-4 text-rose-500" />
                <span className="text-lg">{occupation}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{location}</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
              <div className="prose prose-rose max-w-none">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "about"]`;
  try {
    const about = await client.fetch(query);
    return {
      props: { about },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: { about: [] },
    };
  }
};

export default about;
