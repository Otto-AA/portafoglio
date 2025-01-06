<script lang="ts">
	import { getProjects } from '$lib/projects/projects';
	import Link from './Link.svelte';
	import Section from './Section.svelte';

	let { children, id } = $props();
	let projects = getProjects();
	let project = projects.find((p) => p.id === id);
	if (!project) {
		throw new Error(`Could not find project with id ${id}`);
	}
</script>

<div class="container mx-auto max-w-6xl border-solid border-black p-4">
	<article class="prose mx-auto">
		<h2 class="my-1 text-center">{project.name}</h2>
		<p class="text-center">{project.summary}.</p>
		{@render children()}
		<Section title="Source code"
			>The source code is available <Link href={project.repository}>here</Link>.</Section
		>
	</article>
</div>
