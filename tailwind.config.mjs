/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	// Tema conmutable: la clase `dark` se aplica en <html>.
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// ── Tokens semánticos (cambian con el tema vía variables CSS) ──
				surface: 'rgb(var(--surface) / <alpha-value>)',
				'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
				'surface-3': 'rgb(var(--surface-3) / <alpha-value>)',
				line: 'rgb(var(--line) / <alpha-value>)',
				fg: 'rgb(var(--fg) / <alpha-value>)',
				'fg-muted': 'rgb(var(--fg-muted) / <alpha-value>)',

				// Acento primario — Teal de marca (#00AB9E)
				brand: {
					50: '#eefdfb',
					100: '#c6fbf3',
					200: '#8ef5e8',
					300: '#4ee7d7',
					400: '#19d0c0',
					500: '#00AB9E',
					600: '#009187',
					700: '#03736d',
					800: '#085b57',
					900: '#0c4b48',
					950: '#002e2b',
				},
				// Tinta — base de las bandas oscuras
				ink: {
					50: '#f4faf9',
					100: '#e3f2f0',
					200: '#c2e2de',
					600: '#1d4b47',
					700: '#133734',
					800: '#0d2725',
					900: '#071a19',
					950: '#041211',
				},
				// Espectro del logotipo — recurso visual firma
				spectrum: {
					red: '#E62243',
					orange: '#EE7121',
					yellow: '#F7A720',
					green: '#32AA4F',
					teal: '#00AB9E',
				},
				whatsapp: '#25D366',
			},
			fontFamily: {
				sans: [
					'"Plus Jakarta Sans Variable"',
					'"Plus Jakarta Sans"',
					'system-ui',
					'-apple-system',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
				],
			},
			fontSize: {
				display: ['clamp(2.375rem, 1.65rem + 3.1vw, 4rem)', { lineHeight: '1.06', letterSpacing: '-0.03em', fontWeight: '700' }],
				h2: ['clamp(2rem, 1.55rem + 1.9vw, 2.875rem)', { lineHeight: '1.12', letterSpacing: '-0.026em', fontWeight: '700' }],
				h3: ['1.3125rem', { lineHeight: '1.32', letterSpacing: '-0.014em', fontWeight: '700' }],
				lead: ['1.1875rem', { lineHeight: '1.62' }],
				eyebrow: ['0.8125rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '700' }],
			},
			maxWidth: { shell: '75rem' },
			borderRadius: { DEFAULT: '0.375rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem', '2xl': '1rem' },
			boxShadow: {
				card: '0 1px 2px rgb(7 26 25 / 0.04), 0 2px 8px rgb(7 26 25 / 0.06)',
				lift: '0 8px 24px -6px rgb(7 26 25 / 0.12), 0 2px 6px rgb(7 26 25 / 0.06)',
				fab: '0 6px 20px -4px rgb(7 26 25 / 0.28)',
			},
			backgroundImage: {
				spectrum: 'linear-gradient(90deg, #E62243 0%, #EE7121 22%, #F7A720 45%, #32AA4F 72%, #00AB9E 100%)',
			},
			keyframes: {
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(14px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: { 'fade-up': 'fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) both' },
		},
	},
	plugins: [],
}
