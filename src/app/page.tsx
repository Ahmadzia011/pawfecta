import Navbar from "../components/UI/Navbar";
import Hero from "../components/homepage/Hero";
import About from "../components/homepage/About";
import Metrics from "../components/homepage/Metrics";
import Services from "../components/homepage/Services";
import Pricing from "../components/homepage/Pricing";
import HowItWorks from "../components/homepage/HowItWorks";
import Booking from "../components/homepage/Booking";
import Testimonials from "../components/homepage/Testimonials";
import FAQ from "../components/homepage/FAQ";
import Footer from "../components/UI/Footer";
import FeaturedProducts from "../components/homepage/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Services />
        <FeaturedProducts />
        <Pricing />
        <HowItWorks />
        <Booking />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
