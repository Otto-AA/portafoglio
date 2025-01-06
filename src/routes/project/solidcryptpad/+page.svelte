<script>
	import Link from '../../../components/Link.svelte';
	import ListEntry from '../../../components/ListEntry.svelte';
	import Paragraph from '../../../components/Paragraph.svelte';
	import ProjectDetails from '../../../components/ProjectDetails.svelte';
	import Section from '../../../components/Section.svelte';
	import UnorderedList from '../../../components/UnorderedList.svelte';
</script>

<ProjectDetails id="solidcryptpad">
	<Section title="Functionality">
		<Paragraph
			>SolidCrpytPad is an encrypted file storage and collaborative editor that uses the <Link
				href="https://solidproject.org/">Solid protocol</Link
			>. Users can choose any Solid-compliant backend as a data storage. Apart from that, the
			features are similar to Proton Drive, where a user can store and work with E2E-encrypted
			files, and collaborate on them with other users.</Paragraph
		>
	</Section>

	<Section title="Responsibilities">
		<UnorderedList>
			<ListEntry
				>The client-side <Link
					href="https://github.com/solidcryptpad/solidcryptpad/blob/main/docs/Encryption-Scheme.md"
					>E2E encryption scheme</Link
				></ListEntry
			>
			<ListEntry>Integration with the Solid specification</ListEntry>
			<ListEntry>Testing using Karma and Cypress</ListEntry>
			<ListEntry>Project setup with CI and CD</ListEntry>
		</UnorderedList>
	</Section>
	<Section title="Technologies">
		<UnorderedList>
			<ListEntry>Angular</ListEntry>
			<ListEntry>Solid specification (Solid-OIDC; REST API)</ListEntry>
			<ListEntry>Cypress</ListEntry>
			<ListEntry>Material Design</ListEntry>
			<ListEntry>Gitlab CI</ListEntry>
		</UnorderedList>
	</Section>
</ProjectDetails>
