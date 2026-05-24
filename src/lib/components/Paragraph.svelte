<script lang="ts">
import type { Snippet } from 'svelte'

interface Props {
	class?: string
	children?: Snippet
	html?: string
}

const { class: extraClass = '', children, html }: Props = $props()
</script>

<p
    class={`text-[clamp(16px,7rem,20px)] text-paragraph font-poppins-light text-pretty ${extraClass}`}
>
    {@render children?.()}
    {@html html}
</p>
