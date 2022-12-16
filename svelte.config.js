import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
    kit: {
        adapter: adapter(),
        alias: {
            "@": "src/lib",
        },
    },
    preprocess: [vitePreprocess()],
};

export default config;
