<script>
    export let 
        src,
        alt,
        clas,
        figcaption
    ;
</script>

<figure>
    <img src={src} alt={alt} class={clas}>
    {#if figcaption}
        <figcaption> {figcaption} </figcaption>
    {/if}
</figure>

<style>
    figure{
        grid-area: figure;
        margin: 0;
        padding: 0;
    }

    figure img{
        grid-area: img;
        height: auto;
        width: 100%;
    }

    figure figcaption{
        font-size: 12px;
        text-align: right;
    }

</style>