import React from "react";
import ReactDOM from "react-dom/client";

import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </HashRouter>
);
