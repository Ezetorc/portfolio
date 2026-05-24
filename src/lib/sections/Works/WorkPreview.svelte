<script lang="ts">
import { m } from '$i18n/messages'
    import { localizeHref } from '$i18n/runtime';
import type { Work } from '$lib/models/work.model'
import { getMessage } from '$lib/utilities/get-message.utility'

interface Props {
	work: Work
}

const { work }: Props = $props()

const title = $derived(getMessage(`${work.id}_title`))
const description = $derived(getMessage(`${work.id}_description`))
</script>

<a
    href={localizeHref(`/works/${work.id}`)}
    class="w-full max-w-125 gap-y-8 rounded-default cursor-pointer drop-shadow-2xl flex flex-col items-center p-[6%] justify-between tablet:hover:-translate-y-4 tablet:transition-transform"
    style={`background: radial-gradient(circle at top, ${work.colors.from} 0%, ${work.colors.to} 100%)`}
>
    <img
        src={work.images.icon}
        alt={`${title} Icon`}
        class="mt-[12%] w-[70%] aspect-square border-primary-text border-4 rounded-default"
        decoding="async"
        loading="eager"
    />

    <div class="self-stretch">
        <h3
            class="text-primary-text font-poppins-semibold text-left w-full text-[30px]"
        >
            {title}
        </h3>

        <p class="text-paragraph font-poppins-light text-left text-[16px]">
            {description}
        </p>
    </div>
</a>
