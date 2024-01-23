import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import PerformanceMetrics from "./_components/PerformanceMetrics";
import '@shopify/polaris/build/esm/styles.css';
import HeartFunctionality from "./_components/HeartFunctionality";

export default function Home() {
  return (
    <div className="bg-white h-[100%]">
      <Navbar />
      <Hero />
      <PerformanceMetrics />
      <HeartFunctionality />
    </div>
    
  
  );
}
