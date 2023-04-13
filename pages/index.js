import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import { client, urlFor } from "@/lib/client";
import ReviewSection from "@/components/ReviewSection";
import Head from "next/head";
import LearnMore from "@/components/LearnMore";

const inter = Inter({ subsets: ["latin"] });

const Home = ({ services, reviews, about }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Bump to Parenthood</title>
        <meta
        property="og:description"
          name="description"
          content="Let us empower you and make this journey of parenthood less overwhelming. Contact me to book a consultation today!
"
        />
        <meta
          property="og:image"
          content={urlFor(about[0]?.image)}
          key="ogimage"
        />
        <meta
          name="keywords"
          content="newborn care, support, specialist, lactation, breatfeeding, cpr,"
        />
        <link rel="canonical" href="https://www.bumptoparenthood.com" />
        <meta name="robots" content="index, follow" />
        
      </Head>
      <HeroBanner />
      <ServicesSection services={services} />
      <LearnMore about={about} />
      <ReviewSection reviews={reviews} />
    </main>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "service"]`;
  const reviewQuery = `*[_type == "review"]`;
  const aboutQuery = `*[_type == "about"]`;
  try {
    const services = await client.fetch(query);
    const reviews = await client.fetch(reviewQuery);
    const about = await client.fetch(aboutQuery);
    return {
      props: { services, reviews, about },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: { services: [], reviews: [], about: [] }, // set a default value for services
    };
  }
};

export default Home;
