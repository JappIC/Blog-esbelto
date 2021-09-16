<!--
    Página Registration:
    Una página estática para tener un registro de la versiones de Esbelto.
-->

<script context="module">
	import { browser, dev } from '$app/env';
    
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<script>
    import Headers from '$lib/Components/Framework/Headers/Header.svelte';
    import Container from "$lib/Components/Framework/Container.svelte";
import Hn from '$lib/Components/Framework/Html/Hn.svelte';
</script>

<svelte:head>
	<title>Estática</title>
</svelte:head>

<section class="page pg-static">
    <Headers title="Registro">
        <p>Registro de versiones de Esbelto</p>
    </Headers>

    <Container class="medium padding" transition=true>
        <Hn type="h2" class="title">v0.0.7</Hn>
        <p>Se añadió y actualizo los archivos readme y license.</p>
        <Hn type="h2" class="title">v0.0.6</Hn>
        <p>Se añadió una nueva página para mostrar un registro de versiones de Esbelto </p>
        <Hn type="h2" class="title">v0.0.5</Hn>
        <p>Se añadieron 2 nuevos temas para cambiar el formato de colores de la web y se optimizó el que está por defecto.</p>
        <Hn type="h2" class="title">v0.0.4</Hn>
        <p>Correcciones y depurado de código.</p>
        <Hn type="h2" class="title">v0.0.3</Hn>
        <p>Se actualizaron todos los componentes para que reciban parámetros desde la etiqueta del componente.</p>
        <p>Se añadieron las primeras clases css para reutilizar de forma global.</p>
        <Hn type="h2" class="title">v0.0.2</Hn>
        <p>Se actualizaron las dependencias Svelte y SvelteKit.</p>
        <Hn type="h2" class="title">v0.0.1</Hn>
        <p>Alojar repositorio de la app.</p>
    </Container>
</section>