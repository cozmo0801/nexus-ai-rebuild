import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TransformSection from "@/components/TransformSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReadySection from "@/components/ReadySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TransformSection />
      <FeaturesSection />
      <ReadySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
