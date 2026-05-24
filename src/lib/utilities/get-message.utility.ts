import { m } from '$i18n/messages'

const messages = m as Record<string, (...args: any[]) => unknown>

export function getMessage(key: string): string {
	return String(messages[key]?.() ?? '')
}
