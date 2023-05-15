import React from "react";
import { Navbar, Hero, Footer, GetCarForm, ListCar } from "../../components";

export default function GetCarPage() {
  return (
    <>
      <header>
        <Navbar />
        <Hero isLandingPage={false} />
      </header>
      <main>
        <GetCarForm />
        <ListCar />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
