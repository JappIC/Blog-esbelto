<!--
@component
Componente SocialMedia:
Un componente que permite añadir url de las redes sociales.
-->

<script>
    export let 
        facebook,
        linkedin,
        twitch,
        twitter,
        whatsapp,
        discord,
        telegram,
        github,
        web
    ;
</script>

<div class="social-media">
    
    {#if facebook}
        <a href={facebook} target="_blank" title="Facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
    {/if}
    {#if twitter}
        <a href={twitter} target="_blank" title="Twitter">
            <i class="fab fa-twitter"></i>
        </a>
    {/if}
    {#if linkedin}
        <a href={linkedin} target="_blank" title="Linkeding">
            <i class="fab fa-linkedin"></i>
        </a>
    {/if}
    {#if twitch}
        <a href={twitch} target="_blank" title="Twitch">
            <i class="fab fa-twitch"></i>
        </a>
    {/if}
    {#if whatsapp}
        <a href={whatsapp} target="_blank" title="Whatsapp">
            <i class="fab fa-whatsapp"></i>
        </a>
    {/if}
    {#if discord}
        <a href={discord} target="_blank" title="Discord">
            <i class="fab fa-discord"></i>
        </a>
    {/if}
    {#if telegram}
        <a href={telegram} target="_blank" title="Telegram">
            <i class="fab fa-telegram-plane"></i>
        </a>
    {/if}
    {#if github}
        <a href={github} target="_blank" title="Github">
            <i class="fab fa-github"></i>
        </a>
    {/if}
    {#if web}
        <a href={github} target="_blank" title="Web">
            <i class="fas fa-link"></i>
        </a>
    {/if}

</div>

<style>
    .social-media{
        display: grid;
        padding: 20px 10px;
        grid-auto-flow: column;
        text-align: center;
        justify-content: center;
    }

    .social-media a{
        font-size: 20px;
        margin: 5px;
        padding: 5px;
        transition: 0.3s;
        color: var(--c-link);
    }

    .social-media a:hover{
        color: var(--c-link-hover);
    }

    /* Adaptación a tabletas */
    @media (min-width: 766px) and (max-width: 1024px) {

    }

    /* Adaptación a movil */
    @media (max-width: 767px) {
        .social-media{
            grid-template-columns: repeat(3, 1fr);
            grid-auto-flow: row;
        }

        .social-media a{
            font-size: 30px;
        }
    }

    /* Formateamos los elementos para el formato de impresora */
    @media print
    {
        .social-media{
            display: none !important;
        }
    }

</style>