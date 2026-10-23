
import React from "react";
import { createRoot } from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.jsx";
import "./styles.css";

AOS.init({
  duration: 850,
  once: true,
  offset: 60,
  easing: "ease-out-cubic",
  mirror: false,
  disable: "prefers-reduced-motion",
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
