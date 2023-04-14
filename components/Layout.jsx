import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, services }) => {
  return (
    <div className="layout font-sans">
      <Head>
        <title>Bump to parenthood</title>
      </Head>
      <header>
        <Navbar services={services} />
      </header>
      <main className="bg-white dark:bg-gray-800 dark:text-gray-50">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
