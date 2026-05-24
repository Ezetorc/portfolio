import bolsilloFelizIcon from '$lib/assets/images/work/bolsillo-feliz/icon.webp'
import bolsilloFelizOverviewImage from '$lib/assets/images/work/bolsillo-feliz/overview.webp'
import bolsilloFelizProcessImage from '$lib/assets/images/work/bolsillo-feliz/process.webp'
import notievanIcon from '$lib/assets/images/work/notievan/icon.webp'
import notievanOverviewImage from '$lib/assets/images/work/notievan/overview.webp'
import notievanProcessImage from '$lib/assets/images/work/notievan/process.webp'
import torcscriptIcon from '$lib/assets/images/work/torcscript/icon.webp'
import torcscriptOverviewImage from '$lib/assets/images/work/torcscript/overview.webp'
import torcscriptProcessImage from '$lib/assets/images/work/torcscript/process.webp'
import vibeIcon from '$lib/assets/images/work/vibe/icon.webp'
import vibeOverviewImage from '$lib/assets/images/work/vibe/overview.webp'
import vibeProcessImage from '$lib/assets/images/work/vibe/process.webp'
import type { Work } from '$lib/models/work.model'

export const WORKS: Work[] = [
	{
		id: 'torcscript',
		images: {
			icon: torcscriptIcon,
			overview: torcscriptOverviewImage,
			process: torcscriptProcessImage
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
			icon: notievanIcon,
			overview: notievanOverviewImage,
			process: notievanProcessImage
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
			icon: bolsilloFelizIcon,
			overview: bolsilloFelizOverviewImage,
			process: bolsilloFelizProcessImage
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
			icon: vibeIcon,
			overview: vibeOverviewImage,
			process: vibeProcessImage
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
