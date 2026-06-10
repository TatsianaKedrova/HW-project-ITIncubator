import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  server: {
    port: 3000, // Keeps the same port CRA used
    open: true, // Automatically opens the browser
  },
  base: "/HW-project-ITIncubator/",
});
