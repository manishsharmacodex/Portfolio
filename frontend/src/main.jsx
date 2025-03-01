import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DisplayContextProvider from "./components/Context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DisplayContextProvider>
      <App />
    </DisplayContextProvider>
  </BrowserRouter>
);
