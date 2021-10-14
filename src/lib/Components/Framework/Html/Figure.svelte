<!--
@component
Componente Figure:
Un componente para contenido multimedia
-->

<script>
    export let 
        src,
        alt,
        figcaption = undefined
    ;
</script>

<figure {...$$restProps}>
    <img src={src} alt={alt}>
    {#if figcaption}
        <figcaption> {figcaption} </figcaption>
    {/if}
</figure>

<style lang="postcss">
    figure{
        margin: 0;
        padding: 0;

        & img{
            grid-area: img;
            height: auto;
            width: 100%;
        }

            & figcaption{
            font-size: 12px;
            text-align: right;
        }
    }

    .cover img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>