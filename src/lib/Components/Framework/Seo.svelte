<!--
    Componente SEO:
    Un componente para formatear el head por página.
    Recursos:
    https://ogp.me/
-->

<script>
    import { page } from '$app/stores';

    export let 
        title="Añade un título que no supere los 70 caracteres",
        description="Añade una descripción del contenido de la página que no supere los 155 caracteres",
        type="website",
        img="https://www.mdmarketingdigital.com/blog/wp-content/uploads/2012/11/SEO-1-1200x675.jpg"
    ;
    
    /**
     * Guardamos la url del host en una constante.
     * Creamos una variable reactiva con $: para que actualice el path dependiendo de la página donde se encuentra el componente.
     **/ 
    const host = $page.host
    $:url = $page.path;
</script>

<svelte:head>
	<title>{title.substring(0,70)}</title>
    <meta name="description" content="{description.substring(0,155)}">
    <meta property=”og:type” content="{type}" />
    <meta property=”og:title” content="{title}" />
    <meta property=”og:description” content="{description}" />
    <meta property=”og:image” content="{img}" />
    <meta property=”og:url” content="{host}{url}" />
</svelte:head>