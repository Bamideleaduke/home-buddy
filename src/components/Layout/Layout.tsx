import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Insight Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
