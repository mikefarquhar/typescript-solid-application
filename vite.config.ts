import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devTools from "solid-devtools/vite";

export default defineConfig({
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devTools(),
    solidPlugin(),
  ],
  resolve: {
    alias: [{ find: "~/", replacement: "/src/" }],
  },
  build: {
    target: "esnext",
  },
});
