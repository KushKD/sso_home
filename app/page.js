import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import Header from "@/components/header/Header";
import Accordian from "@/components/accordian/Accordian";
import FAQ from "@/components/faq/FAQ";
import Tabs from "@/components/tabs/Tabs";
import Documents from "@/components/documentation/Documents";
import HowItWorks from "@/components/howItWorks/HowItWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Documents />
        <FAQ />
      </main>
    </>
  );
}
