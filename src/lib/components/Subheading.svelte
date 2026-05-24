<script lang="ts">
import type { Snippet } from 'svelte'

interface Props {
	class?: string
	children: Snippet
}

const { class: extraClass = '', children }: Props = $props()
</script>

<p class={`font-poppins-regular text-muted-strong text-[20px] ${extraClass}`}>
  {@render children()}
</p>
