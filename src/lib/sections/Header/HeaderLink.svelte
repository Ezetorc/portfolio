<script lang="ts">
import type { Snippet } from 'svelte'
import type { HTMLAnchorAttributes } from 'svelte/elements'

interface Props extends HTMLAnchorAttributes {
	children: Snippet
}

const { children, ...props }: Props = $props()
</script>

<a
    class="text-muted-strong mobile:text-[32px] desktop:text-[20px] w-fit rounded-default clickable font-poppins-regular"
    {...props}>{@render children()}</a
>
