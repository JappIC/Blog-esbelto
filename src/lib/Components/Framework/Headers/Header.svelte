<!--
    Componente Header genérico:
    Un componente para cabeceras

    Existes dos hilos habiertos para poder cambiar el tipo de etiqueta html, ideal para seleccionar el tipo de etiqueta de título.
    https://github.com/sveltejs/svelte/issues/2324
    https://github.com/sveltejs/svelte/pull/5481
    
    Por ahora se podría hacer ese comportamiento con if.
    https://svelte.dev/repl/42290cfe8bae4dee4df232669d12dc29?version=3.0.0-beta.21
-->

<script>
    import { fly } from "svelte/transition";
    export let title = "Título del header";
</script>

<header {...$$restProps} in:fly={{  y:-25, duration: 500, delay: 500 }} out:fly={{ y: -25, duration: 500 }} >
    <h1>{title}</h1>
    <slot/>
</header>

<style>
    header{
        background: var(--c-secondary);
        color: var(--c-text);
        display: grid;
        padding: 50px 15vw;
        text-align: center;
        border-top: var(--border);
        border-bottom: var(--border);
    }

    header h1{
        color: var(--c-company);
        font-size: 6vw;
        font-weight: 200;
        margin: 0;
        padding: 0;
    }

    /* Adaptación a movil */
    @media (min-width: 0px) and (max-width: 767px) {
        header{
            padding: 50px 5vw;
        }
    }
</style>