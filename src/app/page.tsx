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
      <div className="container">
        <Navbar />
        <Hero />
        <AboutUs />
      </div>
      <Demo />
      <div className="container">
        <PricingPlans />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
