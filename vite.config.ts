import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import path from "path"
import tsconfigPaths from "vite-tsconfig-paths"


// https://vite.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //     "@assets": path.resolve(__dirname, "./src/assets"),
  //     "@images": path.resolve(__dirname, "./src/assets/images"),
  //     "@components": path.resolve(__dirname, "./src/components"),
  //     "@containers": path.resolve(__dirname, "./src/containers"),
  //     "@data": path.resolve(__dirname, "./src/data"),
  //     "@types": path.resolve(__dirname, "./src/types"),
  //     "@hooks": path.resolve(__dirname, "./src/hooks"),
  //     "@appStyles": path.resolve(__dirname, "./src/App.css"),
  //   },
  // },
  plugins: [react(), tsconfigPaths()],
});
