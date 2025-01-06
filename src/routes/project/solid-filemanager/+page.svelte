<script>
	import Link from '../../../components/Link.svelte';
	import ListEntry from '../../../components/ListEntry.svelte';
	import Paragraph from '../../../components/Paragraph.svelte';
	import ProjectDetails from '../../../components/ProjectDetails.svelte';
	import Section from '../../../components/Section.svelte';
	import UnorderedList from '../../../components/UnorderedList.svelte';
</script>

<ProjectDetails id="solid-filemanager">
	<Section title="Functionality">
		<Paragraph
			>A file manager using the <Link href="https://solidproject.org/">Solid protocol</Link>. It is
			similar to a local file explorer, except that you can interact with files on any backend that
			implements the Solid specification. You can upload and download files, you can view and edit
			them, and more!</Paragraph
		>
	</Section>
	<Section title="Responsibilities">
		<Paragraph
			>I extended an existing file explorer, to which I added support for the Solid pods and added a
			bunch of useful features. I also converted it to Typescript and added E2E tests with Cypress.</Paragraph
		>
	</Section>
	<Section title="Technologies">
		<UnorderedList>
			<ListEntry>React with Redux</ListEntry>
			<ListEntry>Solid specification</ListEntry>
			<ListEntry>Cypress</ListEntry>
		</UnorderedList>
	</Section>
</ProjectDetails>
