<script lang="ts">
import { m } from '$i18n/messages'
import { FailureToast } from '$lib/toasts/failure.toast'
import { SuccessToast } from '$lib/toasts/success.toast'

interface Props {
	text: string
	label: string
}

const { text, label }: Props = $props()

async function handleClick() {
	try {
		await navigator.clipboard.writeText(text)

		SuccessToast(label)
	} catch {
		FailureToast(m['unexpected-error']())
	}
}
</script>

<button
    onclick={handleClick}
    class="copy-button clickable secondary"
>
    {label}
</button>