import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: [{ find: "~/", replacement: "/src/" }],
    conditions: ["development", "browser"],
  },
  build: {
    target: "esnext",
  },
  test: {
    environment: "jsdom",
    deps: {
      optimizer: {
        web: {
          exclude: ["solid-js", "@solidjs/testing-library"],
        },
      },
    },
    globals: true,
    setupFiles: ["node_modules/@testing-library/jest-dom/vitest"],
  },
});
