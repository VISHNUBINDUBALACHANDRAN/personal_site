import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsSection />
      <ExperienceSection />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
