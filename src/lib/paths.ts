// Resuelve rutas absolutas respetando el `base` configurado en astro.config.mjs
// (necesario porque el sitio se publica en GitHub Pages bajo /portfolio/).
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
	const clean = path.replace(/^\/+/, '');
	return `${base}/${clean}`;
}
