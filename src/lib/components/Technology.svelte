<script lang="ts">
import {
	TECHNOLOGIES,
	type TechnologyId
} from '$lib/configuration/technologies.configuration'
import { getMessage } from '$lib/utilities/get-message.utility'

interface Props {
	id: TechnologyId
}

const { id }: Props = $props()

const technology = $derived(TECHNOLOGIES[id])
</script>

<li class="flex mobile:gap-x-4 tablet:gap-x-5.5">
    <div
        class="mobile:w-17.5 aspect-square shrink-0 [&>svg]:w-full [&>svg]:h-full"
    >
        {#if technology}
            {@const Icon = technology.icon}
        
            <Icon />
        {/if}
    </div>

    <div class="flex flex-col justify-center">
        <h3
            class="text-muted mobile:text-[18px] tablet:text-[24px] font-poppins-regular"
        >
            {technology.name}
        </h3>
        <h4
            class="text-muted-strong mobile:text-[16px] tablet:text-[20px] font-poppins-light"
        >
            {getMessage(`technology.${id}`)}
        </h4>
    </div>
</li>
