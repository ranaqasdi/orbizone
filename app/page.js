import Image from "next/image";
import { HeroSection } from "./components/HompageSections/HeroSection";
import OurServices from "./components/HompageSections/OurServices";
import FeatureSection from "./components/HompageSections/FeatureSection";
import PortfolioSlider from "./components/HompageSections/PortfolioSlider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurServices/>
      <FeatureSection/>
      <PortfolioSlider/>
    </>
  );
}
