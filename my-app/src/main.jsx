import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { HabitProvider,HabitContext } from "./Contexts/HabitContext.jsx";
export {HabitContext};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <HabitProvider>
      <App />
      </HabitProvider>
    </Router>
  </React.StrictMode>
);
