<script lang="ts">
	import { LocalStorageAdapter } from '$lib/components/file-browser/adapters/local-storage/local-storage-adapter';
	import AdapterFileBrowser from '$lib/components/file-browser/browser-ui/adapter-file-browser.svelte';
	import { Toaster } from 'svelte-sonner';

    const homePath = '/home';
	const localStorageAdapter = new LocalStorageAdapter(homePath);
</script>

<AdapterFileBrowser
	adapter={localStorageAdapter}
	pathPrefix={homePath + '/'}
/>

<Toaster />

