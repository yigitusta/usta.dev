import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const config: UserConfig = {
  plugins: [react(), ssr({ prerender: true }), ViteImageOptimizer()],
};

export default config;
