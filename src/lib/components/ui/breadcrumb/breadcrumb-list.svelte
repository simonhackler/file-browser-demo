<!--
	Installed from github/simonhackler/svelte-file-explorer
-->

<script lang="ts">
	import type { HTMLOlAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '../../../utils/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLOlAttributes> = $props();
</script>

<ol
	bind:this={ref}
	data-slot="breadcrumb-list"
	class={cn(
		'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
		className
	)}
	{...restProps}
>
	{@render children?.()}
</ol>
