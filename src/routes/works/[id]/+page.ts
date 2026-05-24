import { error } from '@sveltejs/kit'

import { WORKS } from '$lib/configuration/works.configuration'

export async function load({ params }) {
	const work = WORKS.find((work) => work.id === params.id)

	if (!work) {
		throw error(404, 'Work not found')
	}

	return {
		work
	}
}
