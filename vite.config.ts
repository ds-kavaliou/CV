import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command }) => {
  const isProduction = command === "build";
  return {
    plugins: [react()],
    base: isProduction ? "/CV/" : "/",
  };
});
