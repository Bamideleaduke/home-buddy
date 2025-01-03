import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";
import Navbar from "../Header/Navbar";
import Subscribe from "../Subscribe/Subscribe";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Insight Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandLogo.svg" />
      </Head>
      <div style={{ maxWidth: "1283px", marginInline: "auto" }}>
        {/* <Header/> */}
        <Navbar />
        {props.children}
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
