<script lang="ts">
import { m } from '$i18n/messages'
import H2 from '$lib/components/H2.svelte'
import Section from '$lib/components/Section.svelte'
import Subheading from '$lib/components/Subheading.svelte'
import Technology from '$lib/components/Technology.svelte'
import { DOMINATED_TECHNOLOGIES } from '$lib/configuration/information.configuration'
</script>

<Section id="technologies">
    <H2>{m["technologies_title"]()}</H2>
    <Subheading>{m["technologies_subtitle"]()}</Subheading>

    <ul
        class="grid gap-y-6 mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mt-5"
    >
        {#each DOMINATED_TECHNOLOGIES as id}
            <Technology {id} />
        {/each}
    </ul>
</Section>
