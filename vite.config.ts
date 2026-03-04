import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "https://raul-martinezbeltran.github.io/Personal-Website/",
  plugins: [react(), tailwindcss()],
});
