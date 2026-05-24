<script lang="ts">
import { m } from '$i18n/messages'
    import { localizeHref } from '$i18n/runtime';
import H2 from '$lib/components/H2.svelte'
import Link from '$lib/components/Link.svelte'
import Section from '$lib/components/Section.svelte'
import Subheading from '$lib/components/Subheading.svelte'
import { WORKS } from '$lib/configuration/works.configuration'
import WorkPreview from './WorkPreview.svelte'
</script>

<Section id="work" disableAnimation>
    <div
        class="flex flex-col gap-y-3 tablet:flex-row tablet:items-center tablet:justify-between"
    >
        <div>
            <H2>{m["work_title"]()}</H2>
            <Subheading class="text-[4px]">{m["work_subtitle"]()}</Subheading>
        </div>

        <Link
            style="secondary"
            class="mobile:w-full tablet:w-auto"
            href={localizeHref("/works")}
        >
            {m["work_view-all-work"]()}
        </Link>
    </div>

    <div
        class="w-full mt-8 grid grid-cols-[repeat(auto-fit,minmax(clamp(200px,90vw,300px),1fr))] gap-9"
    >
        {#each WORKS.slice(0, 3) as work}
            <WorkPreview {work} />
        {/each}
    </div>
</Section>
