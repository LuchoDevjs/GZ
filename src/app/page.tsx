import {
  AboutUs,
  Contact,
  Demo,
  Footer,
  Hero,
  Navbar,
  PricingPlans,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="w-width-custom-sm md:w-width-custom lg:w-width-custom mx-auto">
        <Navbar />
        <Hero />
        <AboutUs />
      </div>
      {/* <Demo /> */}
      <div className="w-width-custom-sm md:w-width-custom lg:w-width-custom mx-auto">
        <PricingPlans />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
