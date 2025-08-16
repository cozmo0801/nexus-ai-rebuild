import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SolutionTimeline from "@/components/ui/solution-timeline";
import ReadySection from "@/components/ReadySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SolutionTimeline />
      <ReadySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
