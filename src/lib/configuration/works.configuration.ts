import type { Work } from '$lib/models/work.model'

export const WORKS: Work[] = [
	{
		id: 'torcscript',
		images: {
			icon: '/src/lib/assets/images/work/torcscript/icon.webp',
			overview: '/src/lib/assets/images/work/torcscript/code-example-1.webp',
			process: '/src/lib/assets/images/work/torcscript/code-example-2.webp'
		},
		technologies: ['rust'],
		colors: {
			from: '#0891b2',
			to: '#083344'
		},
		links: {
			code: 'https://github.com/Ezetorc/torcscript'
		}
	},
	{
		id: 'notievan',
		images: {
			icon: '/src/lib/assets/images/work/notievan/icon.webp',
			overview: '/src/lib/assets/images/work/notievan/articles-page.webp',
			process: '/src/lib/assets/images/work/notievan/article-page.webp'
		},
		technologies: [
			'sveltekit',
			'tailwind',
			'typescript',
			'zod',
			'bun',
			'drizzle',
			'postgresql',
			'cloudinary'
		],
		colors: {
			from: '#1447e6',
			to: '#041342'
		},
		links: {
			code: 'https://github.com/Ezetorc/notievan',
			site: 'https://notievan.vercel.app'
		}
	},
	{
		id: 'bolsillo-feliz',
		images: {
			icon: '/src/lib/assets/images/work/bolsillo-feliz/icon.webp',
			overview:
				'/src/lib/assets/images/work/bolsillo-feliz/dashboard-page.webp',
			process:
				'/src/lib/assets/images/work/bolsillo-feliz/transactions-page.webp'
		},
		technologies: {
			frontend: ['html', 'css', 'typescript', 'react'],
			backend: ['nodejs', 'express', 'typescript', 'mysql', 'prisma']
		},
		colors: {
			from: '#ff8c70',
			to: '#a23e25'
		},
		links: {
			code: 'https://github.com/Ezetorc/bolsillo-feliz'
		}
	},
	{
		id: 'vibe',
		images: {
			icon: '/src/lib/assets/images/work/vibe/icon.webp',
			overview: '/src/lib/assets/images/work/vibe/register-page.webp',
			process: '/src/lib/assets/images/work/vibe/posts-page.webp'
		},
		technologies: {
			frontend: ['html', 'css', 'typescript', 'react'],
			backend: ['nodejs', 'express', 'typescript', 'mysql', 'cloudinary']
		},
		colors: {
			from: '#63B5B1',
			to: '#1D3C3B'
		},
		links: {
			code: 'https://github.com/Ezetorc/vibe-frontend'
		}
	}
]
