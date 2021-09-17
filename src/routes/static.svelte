<!--
@component
Página estática:
Un ejemplo de como hacer una página estática en svelte.
-->

<script context="module">
	import { browser, dev } from '$app/env';
    
	// No necesitamos ningún JS en esta página, aunque cargaremos
    // en dev para que obtengamos un reemplazo de módulo en caliente
	export const hydrate = dev;

	// ... pero si el enrutador del lado del cliente ya está cargado
    // (es decir, vinimos aquí desde otra parte de la aplicación), utilícelo
	export const router = browser;

	// dado que no hay datos dinámicos aquí, podemos preprocesar
    // para que se sirva como un activo estático en prod
	export const prerender = true;
</script>

<script>
    import Headers from '$lib/Components/Framework/Headers/Header.svelte';
    import Container from "$lib/Components/Framework/Container.svelte";
    import Signage from "$lib/Components/Framework/Signage.svelte";
</script>

<svelte:head>
	<title>Estática</title>
</svelte:head>

<section class="page pg-static">
    
    <Headers title="Estática">
        <p>Ejemplo de una página estática en SvelteKit</p>
    </Headers>

    <Container class="medium padding" transition=true>
        <p>Importamos browser y dev</p>
        <Signage class="default" text="import browser, dev from '$app/env';" />
        <p>
            No necesitamos ningún JS en esta página, aunque cargaremos 
            en dev para que obtengamos un reemplazo de módulo en caliente...
        </p>
        <Signage class="default" text="export const hydrate = dev;" />
        
        <p>
            ... pero si el enrutador del lado del cliente ya está cargado 
            (es decir, vinimos aquí desde otra parte de la aplicación), utilízalo.
        </p>
        <Signage class="default" text="export const router = browser;" />
        <p>
            Dado que no hay datos dinámicos aquí, podemos preprocesar 
            para que se sirva como un activo estático en prod.
        </p>
        <Signage class="default" text="export const prerender = true;" />
    </Container>
</section>