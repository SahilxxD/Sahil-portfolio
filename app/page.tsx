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
  return (<>
    <div className="relative h-[100%]">
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="3"
        resolution="2048"
      >
        {
          () => (<div className="relative">
            <LandingSection />
            <Featured />
          </div>
          )
        }
      </WaterWaveWrapper>
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="3"
        resolution="2048"
      >
        {
          () => (<div className="relative">
            <About />
          </div>
          )
        }
      </WaterWaveWrapper>
      <WaterWaveWrapper
        imageUrl=""
        dropRadius="3"
        perturbance="3"
        resolution="2048"
      >
        {
          () => (<div className="relative pb-8">

            <ContactSection />
          </div>
          )
        }
      </WaterWaveWrapper>
    </div>
  </>
  );
}
