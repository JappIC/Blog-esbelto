<!--
@component
Componente AccordionHeader:
-->
<script>
    export let 
        title = undefined,
        open = undefined,
        className = "",
        icon = "fas fa-angle-down"
    ;
</script>
  
<style>
    .accordion-section__header {
        border-radius: 5px;
        border: var(--border);
        background: var(--c-secondary);
        padding: 12px;
        cursor: pointer;
    }
</style>
  
<div on:click class={`accordion-section__header ${className}`}>
    {#if open}
        <i class="{icon}"></i>
    {:else}
        <i class="{icon} fa-rotate-270"></i>
    {/if}
    {title}
</div>