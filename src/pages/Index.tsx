import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FavoritesSection from "@/components/FavoritesSection";
import CricketLoveSection from "@/components/CricketLoveSection";
import GallerySection from "@/components/GallerySection";
import AchievementsSection from "@/components/AchievementsSection";
import FunFactsSection from "@/components/FunFactsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <AboutSection />
    <FavoritesSection />
    <CricketLoveSection />
    <GallerySection />
    <AchievementsSection />
    <FunFactsSection />
    <Footer />
  </main>
);

export default Index;
