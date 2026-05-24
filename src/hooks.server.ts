import type { Handle } from '@sveltejs/kit'
import { getTextDirection } from '$i18n/runtime'
import { paraglideMiddleware } from '$i18n/server'

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(
		event.request,
		({ request: localizedRequest, locale }) => {
			event.request = localizedRequest
			return resolve(event, {
				transformPageChunk: ({ html }) => {
					return html
						.replace('%lang%', locale)
						.replace('%dir%', getTextDirection(locale))
				}
			})
		}
	)

export const handle: Handle = paraglideHandle
