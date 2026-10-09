import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Dominio de producción (usado por sitemap, canonical y Open Graph).
	site: 'https://betacode.com.co',
	integrations: [
		tailwind({ applyBaseStyles: false }),
		sitemap(),
	],
	build: {
		// Inyecta el CSS crítico en línea para mejorar el First Paint.
		inlineStylesheets: 'auto',
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
	vite: {
		// Alias de rutas para el build (equivalen a los `paths` del tsconfig).
		// Se declaran aquí para no depender de `baseUrl`, deprecado en TS 7.
		resolve: {
			alias: {
				'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
				'@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
				'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	},
});
