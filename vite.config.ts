/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global `describe`, `test`, etc.
    environment: "jsdom", // Simulates a browser environment for React components.
    include: [
      "__tests__/**/*.test.{ts,tsx}",
      "src/__tests__/**/*.test.{ts,tsx}",
    ],
  },
});
