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
      <div className="w-custom mx-auto">
        <Navbar />
        <Hero />
        <AboutUs />
      </div>
      {/* <Demo /> */}
      <div className="w-custom mx-auto">
        <PricingPlans />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
