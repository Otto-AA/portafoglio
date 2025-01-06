<script>
	import Link from '../../../components/Link.svelte';
	import ListEntry from '../../../components/ListEntry.svelte';
	import Paragraph from '../../../components/Paragraph.svelte';
	import ProjectDetails from '../../../components/ProjectDetails.svelte';
	import Section from '../../../components/Section.svelte';
	import UnorderedList from '../../../components/UnorderedList.svelte';
</script>

<ProjectDetails id="piano-visualization">
	<Section title="Functionality">
		<Paragraph
			>A website where one can listen to piano music while seeing the pressed piano keys. To do so,
			one can upload MP3 and MIDI files, and configure the visualization.</Paragraph
		>

		<Paragraph
			>This is one of my oldest projects, which got small updates over time. I've used the website a
			lot to record visually appealing videos for my piano channel.</Paragraph
		>
	</Section>

	<Paragraph
		><Link href="https://player.oaie.eu/users/1/player?v=Shallow">Example visualization</Link
		>.</Paragraph
	>

	<Section title="Technologies">
		<UnorderedList>
			<ListEntry>HTML</ListEntry>
			<ListEntry>Javascript with JQuery</ListEntry>
			<ListEntry>Bootstrap</ListEntry>
			<ListEntry>Flask</ListEntry>
			<ListEntry>SQLite</ListEntry>
		</UnorderedList>
	</Section>
</ProjectDetails>
