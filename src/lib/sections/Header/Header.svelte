<script lang="ts">
import { page } from '$app/state'
import { m } from '$i18n/messages'
    import { localizeHref } from '$i18n/runtime';
import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte'
import HeaderLink from './HeaderLink.svelte'
import LanguageSelector from './LanguageSelector.svelte'
import NavLinks from './NavLinks.svelte'
import SectionSelector from './SectionSelector.svelte'

const isHome = $derived(
	page.url.pathname.split('/').filter(Boolean).length <= 1
)
</script>

<header
    class="w-full sticky top-0 left-0 mobile:h-16.25 desktop:h-18.75 border-b-highlight border-b bg-light-bg flex items-center justify-center z-50 mobile:px-4"
>
    <div
        class="w-full max-w-7xl min-w-[320px] flex justify-between items-center"
    >
        <LanguageSelector />

        <div>
            {#if isHome}
                <nav
                    class="mobile:hidden desktop:flex items-center mobile:gap-x-2.5 desktop:gap-x-6"
                >
                    <NavLinks />
                </nav>
                <SectionSelector />
            {:else}
                <HeaderLink aria-label={m["go-back"]()} href={localizeHref("/")}>
                    <ArrowLeftIcon />
                </HeaderLink>
            {/if}
        </div>
    </div>
</header>
