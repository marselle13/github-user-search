import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { APIContextProvider } from "./store/apiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <APIContextProvider>
    <App />
  </APIContextProvider>
);
