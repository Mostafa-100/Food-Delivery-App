import HeroSection from "../../components/hero-section/HeroSection";
import MenuSection from "../../components/menuSection/MenuSection";
import TopDishesSection from "../../components/topDishesSection/TopDishesSection";
import Cta from "../../components/cta/Cta";
import Footer from "../../layouts/Footer";

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
