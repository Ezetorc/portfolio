<script lang="ts">
import MenuIcon from '$lib/components/icons/MenuIcon.svelte'
import NavLinks from './NavLinks.svelte'

let isOpen = $state<boolean>(false)

const toggle = () => {
	isOpen = !isOpen
}

const close = () => {
	isOpen = false
}
</script>

<button
    class="desktop:hidden clickable"
    onclick={toggle}
    aria-label="Open navigation menu"
>
    <MenuIcon />
</button>

<nav
    class:hidden={!isOpen}
    class:flex={isOpen}
    class="desktop:hidden flex-col items-end absolute top-16.25 right-0 w-[clamp(280px,50%,560px)] h-dvh bg-light-bg border-l-highlight border-l p-6 gap-y-2 appear-from-right"
>
    <button onclick={close}>
        <NavLinks />
    </button>
</nav>
