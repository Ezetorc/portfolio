<script lang="ts">
import { getLocale, type locales, setLocale } from '$i18n/runtime'
import LanguageIcon from '$lib/components/icons/LanguageIcon.svelte'
import Language from './Language.svelte'

let isOpen = $state<boolean>(false)

const toggle = () => {
	isOpen = !isOpen
}

const changeLocale = (locale: (typeof locales)[number]) => {
	setLocale(locale)
	isOpen = false
}
</script>

<div class="relative">
    <button
        class="rounded-full p-2 grid place-items-center clickable"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onclick={toggle}
    >
        <LanguageIcon />
    </button>

    <ul
        class:hidden={!isOpen}
        class:flex={isOpen}
        class="absolute top-12 right-0 z-50 hidden flex-col min-w-32 overflow-hidden cursor-pointer left-6 w-40 bg-light-bg border-highlight border text-primary-text font-poppins-semibold rounded-lg shadow-lg"
    >
        <li class="w-full">
            <Language
                label="English"
                locale="en"
                onclick={() => changeLocale("en")}
            />

            <Language
                label="Español"
                locale="es"
                onclick={() => changeLocale("es")}
            />
        </li>
    </ul>
</div>
