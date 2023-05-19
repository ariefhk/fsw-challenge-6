import * as React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import "./utils/reset.css";
import "./utils/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, GetCarPage, NotFoundPage } from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<GetCarPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
