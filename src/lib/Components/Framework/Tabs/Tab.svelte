<!--
@component
Componente Tab:
-->

<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>

<style>
	
    button {
        background: var(--c-secondary);
        border: var(--border);
        border-radius: 5px 5px 0 0;
        display: inline-block;
        cursor: pointer;
        color: var(--c-link);
        font-size: 18px;
        margin-bottom: -1.8px;
        padding: 15px 25px;
        text-decoration: none;
        transition: var(--transition);
    }
	
	.selected {
        background: var(--c-secondary);
		border-bottom: none;
        color: var(--c-company);
	}
</style>