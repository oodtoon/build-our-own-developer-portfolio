import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.ttf'],
	optimizeDeps: {
		include: ['postcss', 'autoprefixer', 'postcss-jit-props', 'open-props']
	},
});
