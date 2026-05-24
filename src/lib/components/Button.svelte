<script lang="ts">
import type { Snippet } from 'svelte'

interface Props {
	variant?: 'primary' | 'secondary' | 'unavailable'
	class?: string
	children: Snippet
}

const { variant = 'primary', class: extraClass = '', children } = $props()
</script>

{#if variant === "primary"}
    <button class={`clickable primary ${extraClass}`}>
        {@render children()}
    </button>
{:else if variant === "secondary"}
    <button class={`clickable secondary ${extraClass}`}>
        {@render children()}
    </button>
{:else if variant === "unavailable"}
    <button class={`clickable unavailable ${extraClass}`}>
        {@render children()}
    </button>
{/if}
