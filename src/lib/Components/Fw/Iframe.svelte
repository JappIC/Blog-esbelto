<script>
    export let
        title = "Título del iframe",
        src,
        frameborder = 0,
        scrolling = "yes"
    ;
</script>

<iframe
    title={title}
    src={src}
    sandbox="allow-scripts allow-same-origin"
    frameborder={frameborder}
    scrolling={scrolling}
>
</iframe>

<style>
    iframe{
        border: 0;
        height: auto;
        min-height: 500px;
        overflow:hidden;
        transform: scale(1);
        width: 100%;
    }
</style>
