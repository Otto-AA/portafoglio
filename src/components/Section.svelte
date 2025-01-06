<script lang="ts">
	let { children, title } = $props();
</script>

<h3>{title}</h3>
{@render children()}
