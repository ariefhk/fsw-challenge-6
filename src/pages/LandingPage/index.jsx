import React from "react";
import {
  Navbar,
  Hero,
  Testimonial,
  Service,
  WhyUs,
  Sewa,
  Faq,
} from "../../components";

export default function LandingPage() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Service />
        <WhyUs />
        <Testimonial />
        <Sewa />
        <Faq />
      </main>
    </>
  );
}
