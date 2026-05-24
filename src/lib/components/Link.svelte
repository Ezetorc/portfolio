<script lang="ts">
import type { Snippet } from 'svelte'
import type { HTMLAnchorAttributes } from 'svelte/elements'

interface Props extends HTMLAnchorAttributes {
	class?: string
	style?: 'primary' | 'secondary' | 'unavailable'
	children: Snippet
}

const {
	style = 'primary',
	class: extraClass = '',
	children,
	...rest
}: Props = $props()
</script>

<a
    class={`flex items-center justify-center clickable ${style} ${extraClass}`}
    {...rest}
>
    {@render children()}
</a>
