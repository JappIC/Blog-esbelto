<script>
    export let
        href ="http://www.example.com",
        text ="Text boton"
    ;
</script>

<a {href} class="btn"
>
    {text}
</a>

<style>
    .btn{
        background: var(--bg-btn);
        border: var(--border);
        box-shadow: var(--shadow);
        color: var(--c-btn);
        padding: 10px 20px;
    }

    .btn:hover{
        background: var(--c-btn);
        border: var(--border);
        box-shadow: var(--shadow-hover);
        color: var(--bg-btn );
    }
</style>