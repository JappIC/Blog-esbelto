<!--
@component
Componente AccordionSection:
-->

<script context="module">
    export const ACCORDION = {};
</script>
  
<script>
    import { getContext } from "svelte";
    import { slide } from "svelte/transition";
    import Header from "./AccordionHeader.svelte";
    export let title = undefined;
    export let open = false;
    export let className = "";
    export let key;
    $: key = key || title;
    const { handleChange, selected } = getContext(ACCORDION);
    //get selected value from context
    $: open = $selected === key;
</script>

<style>

    .accordion-section{
        background: var(--c-secondary);
        margin: 10px 0;
    }

    .accordion-section .contenedor{
        padding: 25px;
    }
</style>
  
<li class={`accordion-section ${className}`}>
    <Header on:click={handleChange.bind(null, key)} {title} {open} />
    {#if open}
        <div class="contenedor" transition:slide>
            <slot />
        </div>
    {/if}
</li>