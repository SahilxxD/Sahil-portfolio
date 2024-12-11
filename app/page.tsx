"use client";

import dynamic from "next/dynamic";
import About from "@/sections/about/about";
import ContactSection from "@/sections/contact/contact";
import Featured from "@/sections/featured/featured";
import LandingSection from "@/sections/landing";
import { Cursor } from "@/components/cursor/cursor";
import { useEffect, useState } from "react";

const WaterWaveWrapper = dynamic(
  () => import("@/components/visualEffects/water-wave-wrapper"),
  { ssr: false }
);

export default function Home() {
  // Check if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Determine if the device is mobile on the client side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value and add resize event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div >
        {
          !isMobile ? (
            <Cursor color="#fff" />
          ) : null
        }

        {/* Conditionally render the WaterWaveWrapper or static content */}
        {isMobile ? (
          <div className="relative">
            <WaterWaveWrapper
              imageUrl=""
              dropRadius="3"
              perturbance="3"
              resolution="1024"
            >
              {() => (
                <div className="relative">
                  <LandingSection />
                </div>
              )}
            </WaterWaveWrapper>
            <Featured />
          </div>
        ) : (
          <WaterWaveWrapper
            imageUrl="relative"
            dropRadius="3"
            perturbance="3"
            resolution="2048"
          >
            {() => (
              <div className="relative">
                <LandingSection />
                <Featured />
              </div>
            )}
          </WaterWaveWrapper>
        )}

        {isMobile ? (
          <div className="">
            <About />
          </div>
        ) : (
          <WaterWaveWrapper
            imageUrl="relative"
            dropRadius="3"
            perturbance="3"
            resolution="2048"
          >
            {() => (
              <div className="relative">
                <About />
              </div>
            )}
          </WaterWaveWrapper>
        )}

        {isMobile ? (
          <div className="pb-8">
            <ContactSection />
          </div>
        ) : (
          <WaterWaveWrapper
            imageUrl="relative"
            dropRadius="3"
            perturbance="3"
            resolution="2048"
          >
            {() => (
              <div className="relative pb-8">
                <ContactSection />
              </div>
            )}
          </WaterWaveWrapper>
        )}
      </div>
    </>
  );
}
