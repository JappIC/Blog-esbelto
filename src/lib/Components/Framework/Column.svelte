<!--
@component
Componente Column:
Un componente que permite formatear contanido en columnas usando clases.
-->

<script>
    import { fly } from "svelte/transition";
    export let transition = false;
</script>

{#if transition}
    <div {...$$restProps} in:fly={{ y:25, duration: 1500, delay: 500 }} out:fly={{ y:25, duration: 500}}>
        <slot/>
    </div>
{:else}
    <div {...$$restProps}>
        <slot/>
    </div>
{/if}

<style>
    div{
        display: grid;
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
    }

    .col-1{
        grid-template-columns: 1fr;
    }

    .col-2{
        grid-template-columns: repeat(2, 1fr);
    }

    .col-3{
        grid-template-columns: repeat(3, 1fr);
    }

    .col-4{
        grid-template-columns: repeat(4, 1fr);
    }

    .col-5{
        grid-template-columns: repeat(5, 1fr);
    }

    .col-6{
        grid-template-columns: repeat(6, 1fr);
    }

    .align-items-center{
        align-items: center;
    }

    /* Adaptación a tabletas */
    @media (max-width: 1024px) {}

    /* Adaptación a movil */
    @media (max-width: 768px) {
        .col-2,.col-3,.col-4,.col-5,.col-6 {
            grid-template-columns: 1fr;
        }
    }
</style>