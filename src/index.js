// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./CartContext/CartContext"; // خليته صح
import { Toaster } from "react-hot-toast";

// أهم 3 أسطر في المشروع كله
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";        // الـ CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";    // الـ JS (ده اللي كان ناقصك!)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <Toaster position="top-center" />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);