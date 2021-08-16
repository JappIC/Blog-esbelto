<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<style>
	
    button {
        background: var(--c-secondary);
        border: var(--border);
        display: inline-block;
        cursor: pointer;
        color: var(--c-link);
        font-size: 18px;
        padding: 15px 25px;
        text-decoration: none;
        transition: var(--transition);
    }
	
	.selected {
        background: var(--c-tertiary);
		border-bottom: none;
        font-weight: bold;
	}
</style>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>