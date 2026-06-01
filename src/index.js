import React from "react";
import { createRoot } from "react-dom/client";
// Global CSS import
import './css/style.css';

// Root application component
import App from "./App";

// Mounting the App into the DOM
const root = createRoot(document.getElementById("root"));
root.render(<App />);