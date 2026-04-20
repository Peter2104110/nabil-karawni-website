import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;

if (endpoint) {
  const script = document.createElement("script");
  script.src = `${endpoint}/umami`;
  script.defer = true;
  document.head.appendChild(script);
}

createRoot(document.getElementById("root")!).render(<App />);
