import { calculateYearsSince } from '$lib/utilities/calculate-years-since.utility'
import type { TechnologyId } from './technologies.configuration'

export const LAST_UPDATE_DATE = '05/24/2026'
export const ENGLISH_LEVEL = 'B2'
export const YEARS_PROGRAMMING = calculateYearsSince(2023, 7, 9)
export const EMAIL = 'ezetorc@gmail.com'
export const DISCORD = 'ezetorc'
export const FORM_LINK = 'https://formspree.io/f/xandrvqg'
export const GITHUB_LINK = 'https://github.com/Ezetorc'
export const DISCORD_LINK = 'https://discord.com/users/457597163183144970'
export const DOMINATED_TECHNOLOGIES: TechnologyId[] = [
	'html',
	'css',
	'javascript',
	'typescript',
	'react',
	'sveltekit',
	'tailwind',
	'nodejs',
	'express',
	'git',
	'github',
	'mysql',
	'bun'
]
