<!--
@component
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
    import Seo from '$lib/Components/Framework/Seo.svelte';
</script>

<Seo 
    title="Registro"
    description="Registro de los cambios en Esbelto"
    type="website"
    img="/static/img/svelte-logo.svg"
/>

<section class="page pg-static">
    <Headers title="Registro">
        <p>Registro de los cambios en Esbelto</p>
    </Headers>

    <Container class="medium padding" transition=true>
        <Hn type="h2" class="title">V0.4.16</Hn>
        <p>Se añadió un nuevo componente Html Progress</p>
        <Hn type="h2" class="title">V0.3.15</Hn>
        <p>Se añadió un nuevo componente CardProject</p>
        <Hn type="h2" class="title">V0.2.14</Hn>
        <p>Se optimizó el css usando postcss-nested</p>
        <Hn type="h2" class="title">V0.2.13</Hn>
        <p>Se optimizó el css usando postcss-nested</p>
        <Hn type="h2" class="title">V0.2.12</Hn>
        <p>Se añadio el paquete de dependencias postcss</p>
        <Hn type="h2" class="title">V0.1.11</Hn>
        <p>Se actualizaron las dependencias de Sveltekit</p>
        <Hn type="h2" class="title">V0.0.10</Hn>
        <p>Se optimizó el SEO de las páginas con el componente Seo de Esbelto</p>
        <Hn type="h2" class="title">V0.0.9</Hn>
        <p>Se añadió la @component etiqueta de comentarios de código en la descripción del componente</p>
        <Hn type="h2" class="title">V0.0.8</Hn>
        <p>Se añadió una store para almacenar los datos globales de la app.</p>
        <Hn type="h2" class="title">V0.0.7</Hn>
        <p>Se añadió y actualizo los archivos readme y license.</p>
        <Hn type="h2" class="title">V0.0.6</Hn>
        <p>Se añadió una nueva página para mostrar un registro de versiones de Esbelto </p>
        <Hn type="h2" class="title">V0.0.5</Hn>
        <p>Se añadieron 2 nuevos temas para cambiar el formato de colores de la web y se optimizó el que está por defecto.</p>
        <Hn type="h2" class="title">V0.0.4</Hn>
        <p>Correcciones y depurado de código.</p>
        <Hn type="h2" class="title">V0.0.3</Hn>
        <p>Se actualizaron todos los componentes para que reciban parámetros desde la etiqueta del componente.</p>
        <p>Se añadieron las primeras clases css para reutilizar de forma global.</p>
        <Hn type="h2" class="title">V0.0.2</Hn>
        <p>Se actualizaron las dependencias Svelte y SvelteKit.</p>
        <Hn type="h2" class="title">V0.0.1</Hn>
        <p>Alojar repositorio de la app.</p>
    </Container>
</section>