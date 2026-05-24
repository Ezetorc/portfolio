<script lang="ts">
import { m } from '$i18n/messages'
import H2 from '$lib/components/H2.svelte'
import Paragraph from '$lib/components/Paragraph.svelte'
import Section from '$lib/components/Section.svelte'
import profilePictureImage from '$lib/assets/images/about-me/profile-picture.webp'
import argentineFlagImage from '$lib/assets/images/about-me/argentine-flag.webp'
import {
	ENGLISH_LEVEL,
	YEARS_PROGRAMMING
} from '$lib/configuration/information.configuration'
</script>

<Section id="about-me">
    <H2 class="mb-4">{m["about-me_title"]()}</H2>

    <div
        class="mobile:flex mobile:flex-col mobile:gap-y-25 desktop:grid desktop:grid-cols-[1.2fr_1fr]"
    >
        <article class="flex flex-col gap-y-8">
            <Paragraph
                html={m["about-me_paragraph-1"]({
                    yearsOfExperience: YEARS_PROGRAMMING,
                })}
            />
            <Paragraph html={m["about-me_paragraph-2"]()} />
            <Paragraph
                html={m["about-me_paragraph-3"]({
                    englishLevel: ENGLISH_LEVEL,
                })}
            />
            <Paragraph html={m["about-me_paragraph-4"]()} />
        </article>

        <div class="relative flex items-end justify-end">
            <img
                src={profilePictureImage}
                class="rounded-default w-47.5 tablet:w-68.75 aspect-square absolute z-10 tablet:-translate-x-[clamp(100px,10vw,176px)] -translate-y-14 drop-shadow-2xl mobile:-translate-x-25"
                alt={m["about-me_face-image"]()}
                decoding="async"
                loading="lazy"
            />

            <img
                src={argentineFlagImage}
                class="rounded-default w-47.5 tablet:w-68.75 aspect-square relative z-0"
                alt={m["about-me_argentine-flag"]()}
                decoding="async"
                loading="lazy"
            />
        </div>
    </div>
</Section>
