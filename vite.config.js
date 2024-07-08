import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // Output to 'build' directory
  },
  base: "/Video-Call/", // Make sure this matches your GitHub repo name
});
