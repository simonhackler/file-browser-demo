<!--
	Installed from github/simonhackler/svelte-file-explorer
-->

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '../../../utils/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: DialogPrimitive.DescriptionProps = $props();
</script>

<DialogPrimitive.Description
	bind:ref
	data-slot="dialog-description"
	class={cn('text-muted-foreground text-sm', className)}
	{...restProps}
/>
