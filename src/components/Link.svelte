<script lang="ts">
	let { href, children } = $props();
</script>

<a {href} target="_blank">{@render children()}</a>
