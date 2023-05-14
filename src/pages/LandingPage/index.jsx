import React from "react";
import {
  Navbar,
  Hero,
  Testimonial,
  Service,
  WhyUs,
  Sewa,
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
      </main>
    </>
  );
}
