<!--
    Componente Iframe:
    Un componente para los iframes que soporta video o código usando una clase (video o code).
-->

<script>
    export let
        title = "Título del iframe",
        src,
        frameborder = 0,
        scrolling = "yes",
        sandbox ="allow-scripts allow-same-origin"
    ;
</script>

<div {...$$restProps}>
    <iframe
        title={title}
        src={src}
        sandbox={sandbox}
        frameborder={frameborder}
        scrolling={scrolling}
    >
    </iframe>
</div>

<style>
    div { overflow: hidden; }
    iframe {border: 0; }
    
    div.code{ }

    div.code iframe{
        width: 100%;
        height: 300px;
    }
    
    div.video{
        position: relative;
        padding-top: 56.25%;
    }

    div.video iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>