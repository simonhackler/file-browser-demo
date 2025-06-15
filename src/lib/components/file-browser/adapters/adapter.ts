/*
	Installed from github/simonhackler/svelte-file-explorer/tree/jsrepo
*/

import type { FileFunctions, Folder } from '../utils/types.svelte';

export interface Adapter extends FileFunctions {
	getFolder: () => Promise<{ result: Folder | null; error: Error | null }>;
}
