import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
