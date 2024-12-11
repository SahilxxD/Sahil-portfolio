"use client";

const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false });
import About from "@/sections/about/about";
//import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

import ContactSection from "@/sections/contact/contact";
import Featured from "@/sections/featured/featured";
import LandingSection from "@/sections/landing";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {
        () => (<div className="pb-8">
          <LandingSection />
          <Featured />
          <About />
          <ContactSection />
        </div>
        )
      }
    </WaterWaveWrapper>
  );
}
