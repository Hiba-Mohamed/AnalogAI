import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/AnalogAI/", // Change this to match your repository name
  plugins: [react()],
  preview: {
    allowedHosts: ["analogai.onrender.com", "localhost"],
  },
});
