import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/bjarke-holm-media/"}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
