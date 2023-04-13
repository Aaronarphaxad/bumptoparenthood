import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/components/HeroBanner";
import ServicesSection from "@/components/ServicesSection";
import { client } from "@/lib/client";
import ReviewSection from "@/components/ReviewSection";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Home = ({services, reviews}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Bump to Parenthood</title>
        <meta name="description" content="Labor and Delivery Specialist at Royal Columbian Hospital - Newborn Care and Breastfeeding Support
" />
        <meta name="keywords" content="newborn care, support, specialist, lactation, breatfeeding, cpr," />
        <link rel="canonical" href="https://www.bumptoparenthood.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      <HeroBanner />
      <ServicesSection services={services} />
      <ReviewSection reviews={reviews} />
    </main>
  );
}

export const getServerSideProps = async ()=> {
  const query = `*[_type == "service"]`;
  const reviewQuery = `*[_type == "review"]`;
  try {
    const services = await client.fetch(query);
    const reviews = await client.fetch(reviewQuery);
    return {
      props: { services, reviews },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: { services: [], reviews: [] }, // set a default value for services
    };
  }
}


export default Home;