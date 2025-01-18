import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for debugging
    outDir: "dist", // Specify the build output directory
  },
  resolve: {
    alias: {
      "@": "/src", // Use `@` as an alias for `/src` directory
    },
  },
  server: {
    port: 3000, // Set development server port
    open: true, // Automatically open the browser
  },
});
