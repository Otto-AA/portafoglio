<script>
	import ListEntry from '../../../components/ListEntry.svelte';
	import Paragraph from '../../../components/Paragraph.svelte';
	import ProjectDetails from '../../../components/ProjectDetails.svelte';
	import Section from '../../../components/Section.svelte';
	import UnorderedList from '../../../components/UnorderedList.svelte';
</script>

<ProjectDetails id="campus-meet">
	<Section title="Functionality">
		<Paragraph
			>A mobile application to connect people at spontaneous meetups. It is designed for students,
			to meetup at the campus and study together or maybe enjoy a shared lunch.</Paragraph
		>
	</Section>
	<Section title="Responsibilities">
		<Paragraph>We developed this app at university as a group of two students.</Paragraph>
		<Paragraph>I focused on:</Paragraph>
		<UnorderedList>
			<ListEntry>Chat (UI; push notifications; synchronization)</ListEntry>
			<ListEntry>User authentication</ListEntry>
			<ListEntry>E2E tests</ListEntry>
		</UnorderedList>
	</Section>
	<Section title="Technologies">
		<UnorderedList>
			<ListEntry>React Native (Expo)</ListEntry>
			<ListEntry>Firebase</ListEntry>
			<ListEntry>Detox E2E testing</ListEntry>
			<ListEntry>Material Design</ListEntry>
		</UnorderedList>
	</Section>
</ProjectDetails>
