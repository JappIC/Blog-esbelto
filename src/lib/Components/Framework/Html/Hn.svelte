<!--
@component
Componente Hn:
Un componente para títulos

Existes dos hilos habiertos para poder cambiar el tipo de etiqueta html, ideal para seleccionar el tipo de etiqueta de título.
- https://github.com/sveltejs/svelte/issues/2324
- https://github.com/sveltejs/svelte/pull/5481

Por ahora se podría hacer ese comportamiento con if.
- https://svelte.dev/repl/42290cfe8bae4dee4df232669d12dc29?version=3.0.0-beta.21
-->

<script>
    export let type ="h1";
</script>

{#if type==="h1"}
    <h1 {...$$restProps}><slot/></h1>
{:else if  type==="h2"}
    <h2 {...$$restProps}><slot/></h2>
{:else if  type==="h3"}
    <h3 {...$$restProps}><slot/></h3>
{:else if  type==="h4"}
    <h4 {...$$restProps}><slot/></h4>
{:else if  type==="h5"}
    <h5 {...$$restProps}><slot/></h5>
{:else}
    <h6 {...$$restProps}><slot/></h6>
{/if}

<style>

    h1,h2,h3,h4,h5,h6{
        align-items: center;
        display: flex;
    }

    h1 {
        font-size: 1.8rem;
        font-weight: 200;
    }
    h2 {
        font-size: 1.6rem;
        font-weight: 400; 
    }
    h3,h4,h5,h6 {
        font-size: 1.4rem;
        font-weight: 600; 
    }

    .title{
        text-align: left;
        display: grid;
        grid-template-columns: auto 1fr;
    }

   .title::after {
        content: "";
        width: 100%;
        height: 1px;
        margin-left: 20px;
        background-color: var(--c-company);
    }
</style>