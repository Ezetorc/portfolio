import { toast } from 'svelte-sonner'

export function SuccessToast(label: string) {
	toast.success(label, {
		duration: 1000,
		position: 'top-center',
		style: `
            background: #02172b;
            font-family: Poppins-Semibold;
            font-size: 1rem;
            border: 1px solid #4BB543;
            border-radius: 8px;
            color: #FFFFFF;
        `
	})
}
