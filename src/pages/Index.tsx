import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PersonaSection from "@/components/PersonaSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import JourneyTable from "@/components/JourneyTable";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PersonaSection />
      <JourneyTimeline />
      <JourneyTable />
    </main>
  );
};

export default Index;
