import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  publicDir: "public",
  tanstackStart: {
    server: {
      entry: "server",
      preset: "vercel"
    },
  },
  nitro: {
    preset: "vercel"
  },
});