// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/memochou/Projects/vite-library-ts-example/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/memochou/Projects/vite-library-ts-example/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/memochou/Projects/vite-library-ts-example";
var vite_config_default = defineConfig({
  plugins: [
    dts({ include: ["lib"] })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "lib/index.ts"),
      name: "Formulate",
      fileName: (format) => format === "es" ? "index.js" : `index.${format}.js`
    },
    copyPublicDir: false
  },
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "lib")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWVtb2Nob3UvUHJvamVjdHMvdml0ZS1saWJyYXJ5LXRzLWV4YW1wbGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tZW1vY2hvdS9Qcm9qZWN0cy92aXRlLWxpYnJhcnktdHMtZXhhbXBsZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWVtb2Nob3UvUHJvamVjdHMvdml0ZS1saWJyYXJ5LXRzLWV4YW1wbGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgZHRzKHsgaW5jbHVkZTogWydsaWInXSB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbGliL2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAnRm9ybXVsYXRlJyxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBmb3JtYXQgPT09ICdlcycgPyAnaW5kZXguanMnIDogYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICBjb3B5UHVibGljRGlyOiBmYWxzZSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsaWInKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtVLE9BQU8sVUFBVTtBQUNuVixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFGaEIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQzFCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDN0MsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsV0FBVyxPQUFPLGFBQWEsU0FBUyxNQUFNO0FBQUEsSUFDdEU7QUFBQSxJQUNBLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
