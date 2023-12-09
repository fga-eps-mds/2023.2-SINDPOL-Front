import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "src/assets",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/tests/setupTests.ts",
    mockReset: true,
  },
})
