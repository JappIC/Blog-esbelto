<script>
    import { fly } from "svelte/transition";
    //import { fade, blur, slide, scale, fly} from 'svelte/transition';
    export let titulo = "Título generico";
    export let parrafo = "Parrafo generico del slot";
</script>

<header in:fly={{  y:-25, duration: 500, delay: 500 }} out:fly={{ y: -25, duration: 500 }} >
    <h1>{titulo}</h1>
    <p>{parrafo}</p>
    <slot></slot>
</header>

<style>
    header{
        background: var(--c-secondary);
        color: var(--c-text);
        display: grid;
        padding: 50px 20px;
        text-align: center;
        border-top: var(--border);
        border-bottom: var(--border);
    }
    header h1{
        font-size: 6vw;
    }

    header p{
        margin: 10px 0 0;
    }
</style>