import HeroSection from "../../components/hero-section/HeroSection";
import MenuSection from "../../components/menuSection/MenuSection";
import Footer from "../../components/Footer";
import TopDishesSection from "../../components/topDishesSection/TopDishesSection";
import Cta from "../../components/cta/Cta";

function Home() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <TopDishesSection />
      <Cta />
      <Footer />
    </>
  );
}

export default Home;
