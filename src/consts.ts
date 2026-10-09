/**
 * Configuración central del sitio.
 * ───────────────────────────────────────────────────────────
 * ⚠️  IMPORTANTE: actualiza `SITE.url` y `CONTACT.email` con los
 *     valores reales de producción. Se usan en canonical, sitemap,
 *     Open Graph y los datos estructurados (JSON-LD).
 */

export const SITE = {
	name: 'Betacode',
	legalName: 'Betacode',
	// 👇 Cambia esto por tu dominio real de producción.
	url: 'https://betacode.com.co',
	title: 'Betacode · Desarrollo y creación de sitios web en Barranquilla',
	description:
		'Fusionamos creatividad y tecnología para construir sitios web y software que destacan visualmente e impulsan tu negocio. Desarrollo web, posicionamiento SEO y software a medida en Barranquilla, Colombia.',
	lang: 'es',
	locale: 'es_CO',
	themeColor: '#00AB9E',
	founded: '2023',
} as const;

export const CONTACT = {
	// 👇 Cambia esto por tu correo real.
	email: 'contacto@betacode.com.co',
	whatsappNumber: '573015595408',
	whatsappDisplay: '+57 301 559 5408',
	whatsappMessage: 'Hola, estoy interesado en cotizar un proyecto con ustedes',
} as const;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
	CONTACT.whatsappMessage,
)}`;

export const LOCATION = {
	city: 'Barranquilla',
	region: 'Atlántico',
	country: 'Colombia',
	countryCode: 'CO',
} as const;

export const SOCIAL = {
	github: 'https://github.com/betacodesolution',
	x: 'https://x.com/betacodeweb',
	instagram: 'https://instagram.com/betacodeweb',
	facebook: 'https://facebook.com/betacodeweb',
	linkedin: 'https://www.linkedin.com/company/betacodeweb',
} as const;

export const NAV_LINKS = [
	{ label: 'Inicio', href: '/#inicio' },
	{ label: 'Nosotros', href: '/#nosotros' },
	{ label: 'Servicios', href: '/#servicios' },
	{ label: 'Proceso', href: '/#proceso' },
	{ label: 'FAQ', href: '/#faq' },
] as const;

export const FAQ_ITEMS = [
	{
		question: '¿Qué servicios ofrece Betacode?',
		answer:
			'Desarrollamos sitios web a medida, aplicaciones y software, y ofrecemos posicionamiento SEO para mejorar tu visibilidad en Google y los motores de búsqueda con IA. Todo desde Barranquilla, Colombia.',
	},
	{
		question: '¿Cuánto cuesta un sitio web?',
		answer:
			'Cada proyecto es único, así que el precio depende del alcance, las funcionalidades y el diseño. Escríbenos por WhatsApp y te damos una cotización personalizada sin compromiso.',
	},
	{
		question: '¿Cuánto tarda el desarrollo de un proyecto?',
		answer:
			'Un sitio web informativo suele estar listo en 2 a 4 semanas. Los proyectos de software o con funcionalidades a medida pueden tomar más tiempo; lo definimos juntos en la etapa de descubrimiento.',
	},
	{
		question: '¿Los sitios incluyen optimización SEO?',
		answer:
			'Sí. Todos nuestros sitios se construyen con buenas prácticas de SEO, rendimiento y accesibilidad para que te encuentren más fácil en buscadores y asistentes de IA.',
	},
	{
		question: '¿Trabajan con clientes fuera de Barranquilla?',
		answer:
			'Sí. Aunque somos de Barranquilla, trabajamos con clientes de toda Colombia y el exterior de forma remota, con comunicación cercana por WhatsApp.',
	},
] as const;
