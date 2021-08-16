<script>
	import { getContext } from 'svelte';

	import { TABS } from './Tabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

{#if $selectedPanel === panel}
    <div class="tab-panel">
        <slot></slot>
    </div>
{/if}

<style>
    .tab-panel {
        background: var(--c-tertiary);
        border: var(--border);
        margin-top: -2px;
        padding: 25px;
    }
</style>