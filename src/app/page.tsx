import { EventsOpsBanner } from "@/components/home/EventsOpsBanner";
import Hero from "@/components/home/Hero";
import MarqueeTape from "@/components/home/MarqueeTape";
import Testimonials from "@/components/home/Testimonials";
import { PageLayout } from "@/components/layout/PageLayout";
import WhatWeBelieve from "@/components/home/FromFunfairs";
import OurExpertise from "@/components/home/OurExpertise";
import OurWork from "@/components/home/Portfolio";
export default function Home() {
  return (
    <div className="bg-secondary">
      <PageLayout>
        <Hero />
      </PageLayout>
      <MarqueeTape />
      <EventsOpsBanner />
      <Testimonials />
      <PageLayout>
        <WhatWeBelieve />
        <OurExpertise />
        <OurWork />
      </PageLayout>
    </div>
  );
}
