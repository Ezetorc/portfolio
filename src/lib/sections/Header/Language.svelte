<script lang="ts">
import { getLocale, locales } from '$i18n/runtime'

interface Props {
	label: string
	locale: string
	onclick: () => void
}

const { onclick, label, locale }: Props = $props()
</script>

<button
    {onclick}
    class={`w-full cursor-pointer text-left px-4 py-2 text-sm transition-colors hover:bg-highlight ${
        getLocale() == locale
            ? "font-poppins-semibold text-primary-text"
            : "font-poppins-light text-muted"
    }`}
>
    {label}
</button>
