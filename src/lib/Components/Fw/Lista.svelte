<script>
    export let lista;
    export let clas;
</script>

<ul class={clas}>
    {#each lista as texto}
        <li>{texto}</li>
    {/each}
</ul>

<style>
    ul{
        list-style: none;
    }

    /* Tipo de estilo de lista */
    .li-none{
        list-style: none;
        margin: 0;
        padding: 0.5rem;
    }

    .li-disc{
        list-style: disc;
    }

    .li-decimal{
        list-style: decimal;
    }

    .li-circle{
        list-style: circle;
    }

    .li-square{
        list-style: square;
    }

    .li-upper-roman{
        list-style: upper-roman;
    }

    .li-lower-alpha{
        list-style: lower-alpha;
    }
</style>