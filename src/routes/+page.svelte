<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const projects = $derived(data.projects);
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<div class="container mx-auto max-w-6xl border-solid border-black p-4">
	<h1 class="pb-4 text-center text-6xl">Portfolio</h1>

	<div class="grid grid-cols-1 md:grid-cols-3">
		{#each projects as project}
			<a href={`./project/${project.id}`}>
				<div
					class="relative m-2 aspect-video rounded-lg border border-gray-200 p-4 shadow transition hover:bg-gray-300"
				>
					<h2 class="text-3xl">{project.name}</h2>
					{#if project.summary}
						<p>{project.summary}</p>
					{/if}
					<div class="absolute inset-x-4 bottom-4">
						{#each project.stack as technology}
							<div class="mr-2 inline w-auto rounded-lg bg-gray-200 p-2">{technology}</div>
						{/each}
					</div>
				</div>
			</a>
		{/each}
	</div>

	<div class="mt-6">
		<p class="text-center text-xl">🚧 This page is a work in progress. 🚧</p>
	</div>
</div>
