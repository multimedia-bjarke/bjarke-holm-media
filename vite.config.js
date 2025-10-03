import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tailwindcss()],
    base: "/",
  };

  // Change base path when building for production
  if (command !== "serve") {
    config.base = "/bjarke-holm-media/"; // 👈 Replace with your GitHub repository name
  }

  return config;
});
