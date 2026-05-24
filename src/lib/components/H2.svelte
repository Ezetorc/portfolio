<script lang="ts">
import type { Snippet } from 'svelte'

interface Props {
	class?: string
	children: Snippet
}

const { class: extraClass = '', children }: Props = $props()
</script>

<h2
  class={`font-poppins-semibold mb-2.5 text-muted mobile:text-3xl tablet:text-4xl ${extraClass}`}
>
  {@render children()}
</h2>
