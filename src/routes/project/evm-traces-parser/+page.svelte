<script>
	import Link from '../../../components/Link.svelte';
	import ListEntry from '../../../components/ListEntry.svelte';
	import Paragraph from '../../../components/Paragraph.svelte';
	import ProjectDetails from '../../../components/ProjectDetails.svelte';
	import Section from '../../../components/Section.svelte';
	import UnorderedList from '../../../components/UnorderedList.svelte';
</script>

<ProjectDetails id="evm-traces-parser">
	<Section title="Functionality">
		<Paragraph
			>A tool to parse and analyze traces from executions in the Ethereum blockchain. I used it for
			my master thesis to track the flow of data through multiple <Link
				href="https://www.evm.codes/">EVM instructions</Link
			> (the &quot;assembly&quot; on Ethereum).</Paragraph
		>
	</Section>
	<Paragraph
		>This required the development of an efficient and correct interpreter for the EVM, using
		appropriate data structures to track the data flow.</Paragraph
	>
	<Section title="Technologies">
		<UnorderedList>
			<ListEntry>Python</ListEntry>
			<ListEntry>EVM</ListEntry>
		</UnorderedList>
	</Section>
</ProjectDetails>
