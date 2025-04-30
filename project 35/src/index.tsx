import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrainBoostCoin } from "./screens/BrainBoostCoin";
import "./fonts.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrainBoostCoin />
  </StrictMode>,
);