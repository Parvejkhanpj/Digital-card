import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
// import App from "./App";
import Intro from "../src/Component/Intro";
import Social from "../src/Component/Social";

import About from "../src/Component/About";

import Footer from "../src/Component/Footer";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Intro />
    <Social />
    <About />
    <Footer />
    {/* <App /> */}
  </StrictMode>
);
