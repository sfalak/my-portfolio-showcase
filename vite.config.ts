import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
const getBase = () => {
  // Check if GITHUB_PAGES is set (often done by the GitHub Pages Action)
  if (process.env.GITHUB_PAGES) {
    // If you are deploying to a project page (not the user page),
    // the base path should be the repository name surrounded by slashes.
    return '/my-portfolio-showcase/';
  }
  // Otherwise, use the root path for local development
  return '/';
};
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: getBase(),
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
