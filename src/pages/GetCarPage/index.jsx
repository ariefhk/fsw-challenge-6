import React from "react";
import { themeSlice, getIsSearch } from "../../reducers/themeReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Hero, Footer, GetCarForm, ListCar } from "../../components";
import styles from "./index.module.css";

export default function GetCarPage() {
  const { searchMode } = themeSlice.actions;
  const isSearchMode = useSelector(getIsSearch);
  const dispatch = useDispatch();

  return (
    <>
      <div
        id="filter"
        style={{ width: isSearchMode ? "100%" : "0" }}
        onClick={() => dispatch(searchMode(false))}
        className={styles.filter}
      ></div>
      <header style={{ backgroundColor: "rgba(241, 243, 255, 1)" }}>
        <Navbar />
        <Hero isLandingPage={false} />
      </header>
      <main style={{ backgroundColor: "#ffff" }}>
        <GetCarForm />
        <ListCar />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
