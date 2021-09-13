<!--
    Componente Share:
    Un componente que permite añadir botones para compartir la página en las redes sociales.
    También contiene un botón imprimir que permite guardar en pdf.
-->

<script>
    import { page } from '$app/stores';

    /**
     * Guardamos la url del host en una constante.
     * Creamos una variable reactiva con $: para que actualice el path dependiendo de la página donde se encuentra el componente.
     **/ 
    const host = $page.host
    $:url = $page.path;
</script>

<div class="share">
    <h4> Compárteme </h4>

    <div>
        <a href="https://www.facebook.com/sharer/sharer.php?u={host}{url}" target="_blank" title="Facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/share?url={host}{url}/&amp;text=TITULO&amp;hashtags=empresiona&amp;via=PERFIL" target="_blank" title="Twitter">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url={host}{url}" target="_blank" title="Linkedin">
            <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://api.whatsapp.com/send?text=TITULO%2{host}{url}0" target="_blank" title="Whatsapp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:?Subject=TITULO;Body=Vi%20este%20artÍculo%20y%20pense%20que%20te%20podia%20interesar%2{host}{url}0" title="Correo">
            <i class="far fa-envelope"></i>
        </a>
        <a href="javascript;" onclick="window.print()" title="Imprimir - PDF">
            <i class="fas fa-print"></i>
        </a>
    </div>
</div>

<style>
    .share{
        background: var(--c-secondary);
        border-top: var(--border);
        border-bottom: var(--border);
        color: var(--c-text);
        display: grid;
        grid-area: share;
        padding: 20px 10px;
    }

    .share h4{
        font-family: var(--font-2);
        margin-bottom: 20px;
        padding: 0 10px;
        text-align: center;
    }

    .share div{
        display: grid;
        grid-auto-flow: column;
        text-align: center;
        justify-content: center;
    }

    .share div a{
        font-size: 40px;
        margin: 0 15px;
        padding: 10px;
        transition: 0.3s;
    }

    /* Adaptación a tabletas */
    @media (min-width: 766px) and (max-width: 1024px) { }

    /* Adaptación a movil */
    @media (min-width: 0px) and (max-width: 767px) {
        .share div{
            grid-template-columns: repeat(3, 1fr);
            grid-auto-flow: row;
        }

        .share div a{
            font-size: 30px;
        }
    }

    /* Formateamos los elementos para el formato de impresora */
    @media print
    {
        .share{
            display: none !important;
        }
    }

</style>