<!--
	Installed from github/simonhackler/svelte-file-explorer
-->

<script lang="ts">
	import * as Dialog from '../../ui/dialog/index.js';

	import { isFolder, type ExplorerNode, type Folder } from '../browser-utils/types.svelte';
	import FileBrowser from './file-browser.svelte';
	import { Button } from '../../ui/button';

	let {
		nodes,
		open = $bindable(),
		currentAction,
		handleCurrentAction
	}: {
		nodes: ExplorerNode[];
		open: boolean;
		currentAction: 'copy' | 'move';
		handleCurrentAction: (nodes: ExplorerNode[], currentFolder: Folder) => Promise<void>;
	} = $props();

	let currentFolder = $derived(nodes.length > 0 ? nodes[0].parent! : null);
</script>

<Dialog.Root bind:open>
	<Dialog.Content
		class="flex max-h-[calc(100vh_-_100px)] min-h-[calc(100vh_-_100px)] min-w-full flex-col md:min-w-[80vw]"
	>
		<FileBrowser bind:currentFolder class="min-h-0 flex-1" showActions={false} />
		<Button onclick={() => handleCurrentAction(nodes, currentFolder)} class="flex-none"
			>{currentAction} {nodes.length == 1 ? nodes[0].name : 'files'} to {currentFolder.name}</Button
		>
	</Dialog.Content>
</Dialog.Root>
