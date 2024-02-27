import Head from "next/head";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import PropertyDisplay from "@/components/shared/Card/PropertyDisplay";
import Sponsors from "@/components/Sponsors";
import Offers from "@/components/Offers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{}}>
        <Hero />
        <Sponsors />
        <Offers />
        <PropertyDisplay />
      </main>
    </>
  );
}
