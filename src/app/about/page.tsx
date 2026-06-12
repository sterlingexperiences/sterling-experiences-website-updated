import { PageLayout } from "@/components/layout/PageLayout";
import Header from "@/components/about/Header";
import StorySection from "@/components/about/StorySection";
import OurApproach from "@/components/about/OurApproach";
import MeetTheFounder from "@/components/about/MeetTheFounder";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Contact from "@/components/home/Contact";

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <StorySection />
        <OurApproach />
        <MeetTheFounder />
        <MissionVision />
        <CoreValues />
        <Contact />
      </PageLayout>
    </div>
  );
}
