<!--
    Página estática:
    Un ejemplo de como hacer una página estática en svelte.
-->

<script context="module">
	import { browser, dev } from '$app/env';
    import Headers from '$lib/Components/Framework/Headers/Header.svelte';
	// no necesitamos ningún JS en esta página, aunque cargaremos
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
    import Container from "$lib/Components/Framework/Container.svelte";
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section class="page pg-about">
    
    <Headers title="About">
        <p>Una web desarrollada con el FW Svelte Kit</p>
    </Headers>

    <Container class="medium padding" transition=true>
        <p>
            This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
            following into your command line and following the prompts:
        </p>
    
        <!-- TODO lose the @next! -->
        <pre>npm init svelte@next</pre>
    
        <p>
            The page you're looking at is purely static HTML, with no client-side interactivity needed.
            Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
            the devtools network panel and reloading.
        </p>
    
        <p>
            The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
            it with JavaScript disabled!
        </p>
    </Container>
</section>