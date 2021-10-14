<!--
@component
Componente VisitingCard:
Un componente para mostrar una targeta de visita.
También contiene un botón imprimir que permite guardar en pdf.
-->

<script>
    export let 
        src         ="",
        figcaption  ="",
        name        ="Nombre",
        surname     ="1º Apellido",
        lastname    ="2º Apellido",
        description ="Añade una descripción",
        link        ="Añade un enlace a tu perfil"
    ;
</script>

<div class="visiting-card">
    <figure>
        <img src={src} alt={name}>
        {#if figcaption}
            <figcaption> {figcaption} </figcaption>
        {/if}
    </figure>
    <h3>
        <a sveltekit:prefetch href={link}>
            {name} {surname} {lastname}
        </a>
    </h3>
    <p>{description}</p>
</div>

<style lang="postcss">
    .visiting-card{
        background: var(--c-secondary);
        border: var(--border);
        box-shadow: var(--shadow);
        display: grid;
        grid-template-areas:   
            "figure title"
            "figure paragraph"
        ;
        grid-template-rows:   auto 1fr;
        grid-template-columns: 250px 1fr;

        & figure{
            grid-area: figure;
            margin: 0;
            padding: 0;

            & img{
                grid-area: img;
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        & figcaption{
            font-size: 12px;
            text-align: right;
        }

        & h3{
            grid-area: title;
            margin: 0;
            padding: var(--padding);
            border-bottom: var(--border);
        }

        & p{
            padding: var(--padding);
            grid-area: paragraph;
            margin: 0;
        }
    }

    /* Adaptación a movil */
    @media (max-width: 767px) {
        .visiting-card{
            grid-template-areas:   
                "figure"
                "title"
                "paragraph"
                "social-media"
            ;
            grid-template-rows:    auto;
            grid-template-columns: 1fr;
        }
    }
</style>