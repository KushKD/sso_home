import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import Header from "@/components/header/Header";
import Accordian from "@/components/accordian/Accordian";
import FAQ from "@/components/faq/FAQ";
import Tabs from "@/components/tabs/Tabs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Tabs />
        <FAQ />
      </main>
    </>
  );
}
