<!--
    Componente Header:
    Componente principal de la cabecera de página.
-->

<script>
    import { theme, selectedTheme } from '$lib/stores/theme.js'
    import Select from "$lib/Components/Framework/Html/Select.svelte";
	import { page } from '$app/stores';
    import { fly } from "svelte/transition";

    let navActive = false;
    let navOptionActive = false;
    
    // Funcion para ocultar o mostrar el navegador de la app en fortato movil usando clases.
    const btnNavOption = ()=>{
        navOptionActive = !navOptionActive;
    }
    
    // Funcion para ocultar o mostrar el navegador de opciones usando condicionales.
    const btnNavActive = ()=>{
        navActive = !navActive;
    }

    import imgLogo from '/static/img/svelte-logo.svg';
</script>

<header>
    <!-- Marca de la web -->
	<a class="firma" class:active={$page.path === '/'} sveltekit:prefetch href="/" >
        <img src="{imgLogo}" alt="Blog" />
        <h1>Esbelto</h1>
    </a>

    <!-- Navegador principal -->
	<nav class="nav" class:navActive>
		<a class:active={$page.path === '/'} sveltekit:prefetch href="/">Portada</a>
        <a class:active={$page.path === '/blog'} sveltekit:prefetch href="/blog">Blog</a>
        <a class:active={$page.path === '/profile'} sveltekit:prefetch href="/profile"> Perfil</a>
        <a class:active={$page.path === '/static'} sveltekit:prefetch href="/static">Estática</a>
	</nav>

    <!-- Opciones -->
    <div class="option">
        <i on:click={btnNavOption} class="fas fa-cogs"></i>
        <i on:click={btnNavActive} class="fas fa-bars btn-movil"></i>
    </div>
</header>

<!-- Navegador de usuario -->
{#if navOptionActive}
<nav class="nav-options" in:fly={{  x:150, duration: 500 }} out:fly={{ x: 150, duration: 500 }}>
    <p>Color web:</p>
    <Select
        value={selectedTheme}
        options={theme}
    />
</nav>
{/if}

<style>
    /* General */
	header {
        background: var(--c-primary);
        border-bottom: var(--border);
        box-shadow:  var(--shadow);
        display: grid;
        grid-template-areas:
            "firma nav option"
        ;
        grid-template-columns: 100px 1fr 100px;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 100;
    }

    a.active {
        color: var(--c-link-active);
    }

    a:hover {
        color: var(--c-link-hover);
    }

    /* Firma */
    header .firma{
        display: grid;
        grid-area: firma;
        grid-template-columns: auto 1fr;
        align-items: center;
    }

    header .firma img{
        max-width: 25px;
        margin: 0 5px;
        border-radius: 50%;
    }

    header .firma h1{
        margin: 0;
        font-size: var(--font-size);
        padding: 10px 0px
    }

    /* Navegación de la app */
    .nav {
        grid-area: nav;
        display: flex;
        justify-content: center;
    }

    .nav a {
        display: grid;
        font-size: 1rem;
        align-items: center;
        justify-content: center;
        padding: 10px 20px;
        transition: color 0.2s linear;
    }

    /* Opciones */
    .option{ 
        grid-area: option;
        justify-content: end;
    }
    
    .option i{
        cursor: pointer;
        margin: 0 5px;
        float: right;
    }

    .option .btn-movil{ display: none; }

    .nav-options{
        background: var(--c-primary);
        border-left: var(--border);
        box-shadow:  var(--shadow);
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0;
        height: 100%;
        padding: 10px;
        width: 170px;
        z-index: 99;
    }

    /* Adaptación a tableta */
    @media (max-width: 768px) {
        
        header {
            grid-template-columns: 1fr auto;
            grid-template-areas:
                "firma option"
                "nav nav "
            ;
        }

        .option .btn-movil{ display: initial; }

        .nav {
            display: none;
        }

        .navActive{
            display: flex;
        }
    }

    /* Adaptación a movil */
    @media (max-width: 480px) {
        .nav {
            flex-direction: column;
        }
    }

    /* Opciones de impresión */
    @media print
    {
        header{
            display: none !important;
        }
    }

</style>
