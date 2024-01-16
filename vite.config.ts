import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: [{ find: "~/", replacement: "/src/" }],
  },
  build: {
    target: "esnext",
  },
});
