import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./footer";
// @ts-ignore
import "../style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Footer></Footer>
  </React.StrictMode>
);
