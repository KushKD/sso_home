import Image from "next/image";
import styles from "./page.module.css";
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
