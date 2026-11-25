import Nav from "@/components/Nav";
import VideoHero from "@/components/VideoHero";
import ValueProps from "@/components/ValueProps";
import CategorySections from "@/components/CategorySections";
import ProductCatalog from "@/components/ProductCatalog";
import BestCare from "@/components/BestCare";
import MedicalSupport from "@/components/MedicalSupport";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import BigCTA from "@/components/BigCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav overlay />
      <main>
        <VideoHero />
        <ValueProps />
        <CategorySections />
        <ProductCatalog />
        <BestCare />
        <MedicalSupport />
        <HowItWorks />
        <FAQ />
        <BigCTA />
      </main>
      <Footer />
    </>
  );
}
