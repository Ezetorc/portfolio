<script>
import { m } from '$i18n/messages'
import BlueGithubIcon from '$lib/components/icons/BlueGithubIcon.svelte'
import DiscordIcon from '$lib/components/icons/DiscordIcon.svelte'
import {
	DISCORD_LINK,
	GITHUB_LINK,
	LAST_UPDATE_DATE
} from '$lib/configuration/information.configuration'
</script>

<footer
    class="w-full flex mobile:justify-between tablet:justify-center mobile:px-6 tablet:px-0 items-center mobile:gap-x-4 tablet:gap-x-8 mobile:h-22.5 desktop:h-27.5 bg-light-bg"
>
    <div class="flex flex-col gap-x-1.75 items-center justify-center">
        <span class="text-muted font-poppins-semibold text-[18px]"
            >{m["footer_updated-on"]()}</span
        >
        <span class="text-muted-strong font-poppins-regular text-[16px]"
            >{LAST_UPDATE_DATE}</span
        >
    </div>

    <hr class="bg-muted-strong w-0.5 h-[60%] rounded-default" />

    <div class="flex gap-x-6.5">
        <a
            target="_blank"
            class="clickable"
            aria-label={m["footer_github-aria-label"]()}
            href={GITHUB_LINK}
        >
            <BlueGithubIcon />
        </a>

        <a
            target="_blank"
            class="clickable"
            aria-label={m["footer_discord-aria-label"]()}
            href={DISCORD_LINK}
        >
            <DiscordIcon />
        </a>
    </div>
</footer>
