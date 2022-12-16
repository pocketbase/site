import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
    kit: {
        adapter: adapter(),
        // https://kit.svelte.dev/docs/adapters#supported-environments-static-sites
        alias: {
            "@": "src/lib",
        },
    },
    preprocess: [vitePreprocess()],
};

export default config;
