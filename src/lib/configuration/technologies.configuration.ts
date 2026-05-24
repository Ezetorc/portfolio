import type { Component } from 'svelte'
import BunIcon from '$lib/components/icons/BunIcon.svelte'
import CloudinaryIcon from '$lib/components/icons/CloudinaryIcon.svelte'
import CSSIcon from '$lib/components/icons/CSSIcon.svelte'
import DrizzleIcon from '$lib/components/icons/DrizzleIcon.svelte'
import ExpressIcon from '$lib/components/icons/ExpressIcon.svelte'
import GithubIcon from '$lib/components/icons/GithubIcon.svelte'
import GitIcon from '$lib/components/icons/GitIcon.svelte'
import HTMLIcon from '$lib/components/icons/HTMLIcon.svelte'
import JavaScriptIcon from '$lib/components/icons/JavaScriptIcon.svelte'
import MySQLIcon from '$lib/components/icons/MySQLIcon.svelte'
import NodeJSIcon from '$lib/components/icons/NodeJSIcon.svelte'
import PostgreSQLIcon from '$lib/components/icons/PostgreSQLIcon.svelte'
import PrismaIcon from '$lib/components/icons/PrismaIcon.svelte'
import ReactIcon from '$lib/components/icons/ReactIcon.svelte'
import RustIcon from '$lib/components/icons/RustIcon.svelte'
import SvelteIcon from '$lib/components/icons/SvelteIcon.svelte'
import TailwindIcon from '$lib/components/icons/TailwindIcon.svelte'
import TypeScriptIcon from '$lib/components/icons/TypeScriptIcon.svelte'
import ZodIcon from '$lib/components/icons/ZodIcon.svelte'

export const TECHNOLOGIES = {
	html: { name: 'HTML', icon: HTMLIcon },
	css: { name: 'CSS', icon: CSSIcon },
	javascript: { name: 'JavaScript', icon: JavaScriptIcon },
	typescript: { name: 'TypeScript', icon: TypeScriptIcon },
	github: { name: 'GitHub', icon: GithubIcon },
	react: { name: 'React', icon: ReactIcon },
	tailwind: { name: 'Tailwind', icon: TailwindIcon },
	mysql: { name: 'MySQL', icon: MySQLIcon },
	nodejs: { name: 'NodeJS', icon: NodeJSIcon },
	express: { name: 'Express', icon: ExpressIcon },
	git: { name: 'Git', icon: GitIcon },
	sveltekit: { name: 'SvelteKit', icon: SvelteIcon },
	bun: { name: 'Bun', icon: BunIcon },
	zod: { name: 'Zod', icon: ZodIcon },
	drizzle: { name: 'Drizzle', icon: DrizzleIcon },
	postgresql: { name: 'PostgreSQL', icon: PostgreSQLIcon },
	cloudinary: { name: 'Cloudinary', icon: CloudinaryIcon },
	rust: { name: 'Rust', icon: RustIcon },
	prisma: { name: 'Prisma', icon: PrismaIcon }
} satisfies Record<
	string,
	{
		name: string
		icon: Component
	}
>

export type TechnologyId = keyof typeof TECHNOLOGIES
