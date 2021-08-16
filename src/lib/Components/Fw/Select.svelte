<script>
    export let 
        value,
        options
    ;
</script>

<select bind:value={$value}>
	{#each $options as option}
		<option value={option.value}>{option.name}</option> 
	{/each}
</select>

