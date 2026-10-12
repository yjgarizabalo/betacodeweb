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
		// Todo el CSS va en línea: son ~10 kB y era la única petición que
		// bloqueaba el pintado, además de retrasar el descubrimiento de la
		// fuente (HTML -> CSS -> woff2). En línea, esa cadena desaparece.
		inlineStylesheets: 'always',
	},
	prefetch: {
		// Al pasar el cursor, no al entrar en pantalla: con 'viewport' el
		// pie de página dispara una descarga por cada enlace durante la
		// carga, compitiendo con lo que sí hace falta pintar.
		prefetchAll: true,
		defaultStrategy: 'hover',
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
