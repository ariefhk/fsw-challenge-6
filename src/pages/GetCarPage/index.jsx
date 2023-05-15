import React from "react";
import { Navbar, Hero, Footer, GetCarForm } from "../../components";

export default function GetCarPage() {
  return (
    <>
      <header>
        <Navbar />
        <Hero isLandingPage={false} />
      </header>
      <main>
        <GetCarForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
