<script lang="ts">
import { m } from '$i18n/messages'
import Button from '$lib/components/Button.svelte'
import CopyButton from '$lib/components/CopyButton.svelte'
import H2 from '$lib/components/H2.svelte'
import Section from '$lib/components/Section.svelte'
import Subheading from '$lib/components/Subheading.svelte'
import {
	DISCORD,
	EMAIL,
	FORM_LINK
} from '$lib/configuration/information.configuration'
</script>

<Section id="contact">
    <H2>{m["contact_title"]()}</H2>
    <Subheading class="max-w-[50ch]">{m["contact_subtitle"]()}</Subheading>

    <div class="flex gap-x-8 mt-12">
        <CopyButton label={m["contact_copy-discord"]()} text={DISCORD} />
        <CopyButton label={m["contact_copy-email"]()} text={EMAIL} />
    </div>

    <form
        class="bg-light-bg w-[clamp(300px,100%,900px)] mobile:p-4 tablet:p-9 flex flex-col gap-y-10 mt-11 rounded-default"
        action={FORM_LINK}
        method="POST"
    >
        <input
            class="w-full font-poppins-regular p-4 text-primary-text placeholder:text-placeholder h-16 mobile:text-[20px] tablet:text-[24px] bg-input-bg rounded-default"
            type="email"
            name="email"
            placeholder={m["contact_email-placeholder"]()}
            required
        />

        <textarea
            class="w-full font-poppins-regular p-4 text-primary-text placeholder:text-placeholder mobile:text-[20px] tablet:text-[24px] bg-input-bg rounded-default h-72.5 resize-none"
            placeholder={m["contact_message-placeholder"]()}
            name="message"
            required
        ></textarea>

        <Button variant="primary">{m["contact_send-message"]()}</Button>
    </form>
</Section>
