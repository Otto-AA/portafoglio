<script>
	import ListEntry from '../../../components/ListEntry.svelte';
	import Paragraph from '../../../components/Paragraph.svelte';
	import ProjectDetails from '../../../components/ProjectDetails.svelte';
	import Section from '../../../components/Section.svelte';
	import UnorderedList from '../../../components/UnorderedList.svelte';
</script>

<ProjectDetails id="cardwiki">
	<Section title="Functionality">
		<Paragraph
			>A web application to study flashcards. Similar to Wikipedia, any user can contribute to decks
			of flashcards. They can then learn these cards using a spaced repetition algorithm. We store a
			version history of every deck and card to allow undoing of accidental or malicious changes.</Paragraph
		>
		<Paragraph
			>I used this application to learn Italian and it worked astonishingly well 🇮🇹.</Paragraph
		>
	</Section>

	<Section title="Responsibilities">
		<Paragraph
			>In this group project, there were no specified roles and everyone contributed to all parts,
			ranging from the database queries to the user interface. However, I laid the focus on
			questions about Typescript and Angular usage, e.g. how one can use observables and pipes to
			work asynchronously.</Paragraph
		>
	</Section>
	<Section title="Technologies">
		<UnorderedList>
			<ListEntry>Angular</ListEntry>
			<ListEntry>Spring Boot</ListEntry>
			<ListEntry>JPA with Hibernate ORM</ListEntry>
			<ListEntry>JUnit</ListEntry>
			<ListEntry>Bootstrap</ListEntry>
			<ListEntry>OAuth login</ListEntry>
		</UnorderedList>
	</Section>
</ProjectDetails>
