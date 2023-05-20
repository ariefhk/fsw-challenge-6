import React from "react";

import {
  Navbar,
  Hero,
  Testimonial,
  Service,
  WhyUs,
  Sewa,
  Faq,
  Footer,
} from "../../components";

export default function LandingPage() {
  return (
    <>
      <header style={{ backgroundColor: "rgba(241, 243, 255, 1)" }}>
        <Navbar />
        <Hero isLandingPage />
      </header>
      <main style={{ backgroundColor: "#ffff" }}>
        <Service />
        <WhyUs />
        <Testimonial />
        <Sewa />
        <Faq />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
