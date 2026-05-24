import { toast } from 'svelte-sonner'

export function FailureToast(label: string) {
	toast.error(label, {
		duration: 1000,
		position: 'top-center',
		style: `
            background: #02172b;
            font-family: Poppins-Semibold;
            font-size: 1rem;
            border: 1px solid #FC100D;
            border-radius: 8px;
            color: #FFFFFF;
        `
	})
}
