import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter(),
        // https://kit.svelte.dev/docs/adapters#supported-environments-static-sites
        trailingSlash: 'always',
        alias: {
            "@": 'src/lib',
        },
    },
    vitePlugin: {
        experimental: {
            useVitePreprocess: true,
        },
    },
};

export default config;
