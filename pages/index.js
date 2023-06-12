import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Footer from "./components/footer"

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <main className="container mx-auto px-4 my-4">
        <Head>
          <title>Frontend Mentor | News homepage</title>
          <link rel="icon" href="/favicon-32x32.png" />
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Navbar />
        <Hero />
        <Footer />
      </main>
    </div>
  );
}