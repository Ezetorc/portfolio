<script lang="ts">
import type { Snippet } from 'svelte'

interface Props {
	disableAnimation?: boolean
	id?: string
	children: Snippet
}

const { disableAnimation = false, id, children }: Props = $props()
</script>

<section
    {id}
    class={`flex-col scroll-mt-20 my-12 ${!disableAnimation && "fade-in"}`}
>
    {@render children()}
</section>
