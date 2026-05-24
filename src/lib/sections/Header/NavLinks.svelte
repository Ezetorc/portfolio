<script>
import { m } from '$i18n/messages'
import HeaderLink from './HeaderLink.svelte'
</script>

<HeaderLink href="#work">{m["header_work"]()}</HeaderLink>
<HeaderLink href="#about-me">{m["header_about-me"]()}</HeaderLink>
<HeaderLink href="#technologies">{m["header_technologies"]()}</HeaderLink>
<HeaderLink href="#contact">{m["header_contact"]()}</HeaderLink>
