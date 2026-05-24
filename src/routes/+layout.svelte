<script lang="ts">
import './layout.css'
import { Toaster } from 'svelte-sonner'
import { m } from '$i18n/messages'
import favicon from '$lib/assets/favicon.webp'
import Footer from '$lib/sections/Footer/Footer.svelte'
import Header from '$lib/sections/Header/Header.svelte'

let { children } = $props()
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/webp" href={favicon} />

    <title>{m["metadata_title"]()}</title>
    <meta
        name="description"
        content={m["metadata_description"]()}
    />

    <meta
        name="og:description"
        content={m["metadata_description"]()}
    />
    <meta name="og:title" content={m["metadata_title"]()} />
    <meta
        name="og:image"
        content="https://opengraph.b-cdn.net/production/images/934d9ff1-24e6-42af-8535-c4a125e62f38.png?token=9uxPjDBLLCu_2iK2fHsVgrzQiom1mBz_ORxB_LdA0qE&height=630&width=1200&expires=33297857890"
    />
    <meta name="og:url" content="https://ezetorc.vercel.app" />
    <meta name="og:type" content="website" />

    <meta
        name="twitter:description"
        content={m["metadata_description"]()}
    />
    <meta name="twitter:title" content={m["metadata_title"]()} />
    <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/934d9ff1-24e6-42af-8535-c4a125e62f38.png?token=9uxPjDBLLCu_2iK2fHsVgrzQiom1mBz_ORxB_LdA0qE&height=630&width=1200&expires=33297857890"
    />
    <meta name="twitter:domain" content="ezetorc.vercel.app" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://ezetorc.vercel.app" />
</svelte:head>

<Header />

<main
    class="flex flex-col min-w-[320px] w-full max-w-7xl mx-auto mobile:px-4 pb-12.5 desktop:pb-30"
>
    {@render children()}
</main>

<Toaster />
<Footer />
