import {
  AboutUs,
  Contact,
  Footer,
  Hero,
  Navbar,
  PricingPlans,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <AboutUs />
        <PricingPlans />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
