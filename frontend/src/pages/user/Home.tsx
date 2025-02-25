import HeroSection from "../../components/HeroSection";
import MenuSection from "../../components/menuSection/MenuSection";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import TopDishesSection from "../../components/topDishesSection/TopDishesSection";

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
