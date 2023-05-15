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
      <header>
        <Navbar />
        <Hero isLandingPage />
      </header>
      <main>
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
