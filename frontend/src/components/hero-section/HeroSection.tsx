import HeroSectionIntro from "./HeroSectionIntro";
import HeroSectionText from "./HeroSectionText";
import HeroSectionWrapper from "./HeroSectionWrapper";
import ViewMenuButton from "./ViewMenuButton";

function HeroSection() {
  return (
    <HeroSectionWrapper>
      <HeroSectionIntro />
      <HeroSectionText />
      <ViewMenuButton />
    </HeroSectionWrapper>
  );
}

export default HeroSection;
