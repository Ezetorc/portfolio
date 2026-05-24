<script lang="ts">
import { m } from '$i18n/messages'
import Section from '$lib/components/Section.svelte'
import { WORKS } from '$lib/configuration/works.configuration'
import WorkPreview from '$lib/sections/Works/WorkPreview.svelte'
</script>

<Section>
    <div class="flex flex-col">
        <h1
            class="text-primary-text mobile:text-4xl tablet:text-6xl desktop:text-7xl font-poppins-semibold"
        >
            {m["work_title"]()}
        </h1>

        <h2
            class="text-muted mobile:text-[25px] tablet:text-3xl desktop:text-4xl font-poppins-semibold tablet:mt-6 desktop:mt-7"
        >
            {m["work_subtitle"]()}
        </h2>
    </div>

    <div
        class="w-full mt-8 grid grid-cols-[repeat(auto-fit,minmax(clamp(200px,90vw,300px),1fr))] gap-9"
    >
        {#each WORKS as work}
            <WorkPreview {work} />
        {/each}
    </div>
</Section>
