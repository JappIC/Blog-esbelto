<!--
    Componente Container:
    Un componente contenedor fortateable por clases.
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
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
    }

    .dwarf{
        max-width:480px;
    }

    .small{
        max-width:768px;
    }

    .medium{
        max-width:1024px;
    }

    .large{
        max-width:1200px;
    }

    .huge{
        max-width:1920px;
    }

    .full{
        max-width:100%;
    }
</style>