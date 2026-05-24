<script lang="ts">
import { m } from '$i18n/messages'
import Link from '$lib/components/Link.svelte'
import Section from '$lib/components/Section.svelte'
import { YEARS_PROGRAMMING } from '$lib/configuration/information.configuration'
</script>

<Section>
    <div class="flex flex-col">
        <h1
            class="text-primary-text mobile:text-left tablet:text-center mobile:text-4xl tablet:text-6xl desktop:text-7xl font-poppins-semibold"
        >
            Ezequias Torczuk
        </h1>

        <h2
            class="text-muted mobile:text-left tablet:text-center mobile:text-[25px] tablet:text-5xl desktop:text-6xl font-poppins-semibold tablet:mt-6 desktop:mt-7"
        >
            {m["hero_subtitle"]()}
        </h2>

        <p
            class="text-paragraph font-poppins-regular mobile:text-left tablet:text-center mobile:text-[16px] tablet:text-[24px] mobile:mt-2 tablet:mt-8"
        >{m["hero_description"]({ yearsOfExperience: YEARS_PROGRAMMING })}</p>
    </div>

    <div class="flex tablet:justify-center mobile:mt-6 tablet:mt-12 gap-x-7.5">
        <Link style="primary" href="#work">{m["hero_view-all-work"]()}</Link>
        <Link style="secondary" href="#about-me">{m["hero_read-about-me"]()}</Link
        >
    </div>
</Section>
