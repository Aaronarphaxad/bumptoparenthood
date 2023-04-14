import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout services={pageProps.services}>
      <Component {...pageProps} />
    </Layout>
  );
}

export const getInitialProps = async () => {
  const query = `*[_type == "service"]`;
  try {
    const services = await client.fetch(query);
    return {
      props: { services },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: { services: [] }, // set a default value for services
    };
  }
};
