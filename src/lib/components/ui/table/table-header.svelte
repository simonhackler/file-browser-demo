<!--
	Installed from github/simonhackler/svelte-file-explorer
-->

<script lang="ts">
	import { cn, type WithElementRef } from '../../../utils/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLTableSectionElement>> = $props();
</script>

<thead
	bind:this={ref}
	data-slot="table-header"
	class={cn('[&_tr]:border-b', className)}
	{...restProps}
>
	{@render children?.()}
</thead>
