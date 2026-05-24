<script lang="ts">
import { m } from '$i18n/messages'
import { localizeHref } from '$i18n/runtime'
import H2 from '$lib/components/H2.svelte'
import Link from '$lib/components/Link.svelte'
import Paragraph from '$lib/components/Paragraph.svelte'
import Section from '$lib/components/Section.svelte'
import Subheading from '$lib/components/Subheading.svelte'
import Technology from '$lib/components/Technology.svelte'
import { getMessage } from '$lib/utilities/get-message.utility'
import type { PageData } from './$types'

const { data }: { data: PageData } = $props()
const work = $derived(data.work)

const overview = $derived([
	getMessage(`${work.id}_overview_paragraph_1`),
	getMessage(`${work.id}_overview_paragraph_2`),
	getMessage(`${work.id}_overview_paragraph_3`)
])
const process = $derived([
	getMessage(`${work.id}_process_paragraph_1`),
	getMessage(`${work.id}_process_paragraph_2`),
	getMessage(`${work.id}_process_paragraph_3`)
])
</script>

<Section>
    <h1
        class="text-primary-text mobile:text-4xl mb-4 tablet:text-[36px] desktop:text-[40px] font-poppins-semibold"
    >
        {getMessage(`${work.id}_title`)}
    </h1>

    <Subheading class="max-w-[50ch] mb-8">
        {getMessage(`${work.id}_description`)}
    </Subheading>

    <div class="flex gap-8">
        {#if work.links.code != null}
            <Link
                style={work.links.site ? "primary" : "unavailable"}
                target="_blank"
                href={work.links.site}
            >
                {m["work_visit-site"]()}
            </Link>
        {/if}

        <Link
            style={work.links.code ? "secondary" : "unavailable"}
            target="_blank"
            href={work.links.code}
        >
            {m["work_view-code"]()}
        </Link>
    </div>
</Section>

<Section>
    <H2>{m["work_overview"]()}</H2>

    <div class="desktop:grid gap-x-[5%] tablet:grid-cols-[1fr_1fr]">
        <article class="flex flex-col gap-y-9">
            {#each overview as paragraph}
                <Paragraph>
                    {paragraph}
                </Paragraph>
            {/each}
        </article>

        <img
            class="justify-self-end mobile:mt-6 desktop:mt-0 rounded-default"
            src={work.images.overview}
            alt={getMessage(`${work.id}_overview_image_alt`)}
            loading="eager"
        />
    </div>
</Section>

<Section>
    <H2>{m["work_technologies"]()}</H2>

    {#if Array.isArray(work.technologies)}
        <article>
            <ul class="grid grid-cols-2 gap-4">
                {#each work.technologies as id}
                    <Technology {id} />
                {/each}
            </ul>
        </article>
    {:else}
        <article
            class="desktop:grid desktop:grid-cols-2 mobile:gap-y-6 mobile:flex mobile:flex-col"
        >
            {#if work.technologies.frontend?.length}
                <div>
                    <Subheading class="mb-2">{m["work_frontend"]()}</Subheading>
                    <ul class="grid gap-4">
                        {#each work.technologies.frontend as id}
                            <Technology {id} />
                        {/each}
                    </ul>
                </div>
            {/if}

            {#if work.technologies.backend?.length}
                <div>
                    <Subheading class="mb-2">{m["work_backend"]()}</Subheading>
                    <ul class="grid gap-4">
                        {#each work.technologies.backend as id}
                            <Technology {id} />
                        {/each}
                    </ul>
                </div>
            {/if}
        </article>
    {/if}
</Section>

<Section>
    <H2>{m["work_process"]()}</H2>

    <div class="desktop:grid gap-x-[5%] desktop:grid-cols-[1fr_1fr]">
        <article class="flex flex-col gap-y-9">
            {#each process as paragraph}
                <Paragraph>
                    {paragraph}
                </Paragraph>
            {/each}
        </article>

        <img
            class="justify-self-end mobile:mt-6 desktop:mt-0 rounded-default"
            src={work.images.process}
            alt={getMessage(`${work.id}_process_image_alt`)}
            loading="lazy"
        />
    </div>
</Section>

<Link style="secondary" class="w-full mt-12" href={localizeHref("/")}>
    {m["go-back"]()}
</Link>
