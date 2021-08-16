<script>
    import { theme, selectedTheme } from '$lib/stores/theme.js'
    import Select from "$lib/Components/Fw/Select.svelte";
	import { page } from '$app/stores';
    import { fly } from "svelte/transition";

    /* Funcion para mostrar o ocultar el menú de usuario */
    let show = false;
    const btnNav = ()=>{
        show = !show;
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
	<nav class="nav">
		<a 
            class:active={$page.path === '/'} 
            sveltekit:prefetch href="/"
        >Home</a>
        <a 
            class:active={$page.path === '/blog'} 
            sveltekit:prefetch href="/blog"
        >Blog</a>
        <a 
            class:active={$page.path === '/about'} 
            sveltekit:prefetch href="/about"
        >About</a>
        <a 
            class:active={$page.path === '/contacto'} 
            sveltekit:prefetch href="/contacto"
        >Contacto</a>
	</nav>

    <!-- Navegador de usuario -->
    <div class="user" on:click={btnNav}>
        <h1>Usuario</h1>
        <img src="{imgLogo}" alt="SvelteKit" />
    </div>
</header>

<!-- Navegador de usuario -->
{#if show}
<nav class="nav-user" in:fly={{  x:150, duration: 500 }} out:fly={{ x: 150, duration: 500 }}>
    <a class:active={$page.path === '/profile'} sveltekit:prefetch href="/profile/my-profile"><i class="fas fa-user"></i> Perfil</a>
    <a href="/"><i class="far fa-envelope"></i> Mensajes</a>
    <a href="/"><i class="far fa-comments"></i> Comentarios</a>
    <a href="/"><i class="far fa-thumbs-up"></i> Gusta</a>
    <a href="/"><i class="fas fa-cog"></i> Configucacion</a>
    <Select
        value={selectedTheme}
        options={theme}
    />
</nav>
{/if}

<style>
	header {
        background: var(--c-primary);
        border-bottom: var(--border);
        box-shadow:  var(--shadow);
        display: grid;
        grid-template-columns: auto 1fr auto;
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

    /* FIRMA */
    header .firma{
        display: grid;
        font-size: 10px;
        grid-template-columns: auto auto;
        align-items: center;
        padding: 5px 0;
    }

    header .firma img{
        max-width: 30px;
        margin: 0 5px;
        border-radius: 50%;
    }

    /* NAVEGACIÓN */
    .nav {
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

    /* USUARIO */
    .user{
        cursor: pointer;
        display: grid;
        font-size: 10px;
        grid-template-columns: auto auto;
        align-items: center;
        padding: 5px 0;
    }

    .user img{
        max-width: 30px;
        margin: 0 5px;
        border-radius: 50%;
    }

    .nav-user{
        background: var(--c-primary);
        border-bottom: var(--border);
        box-shadow:  var(--shadow);
        display: flex;
        flex-direction: column;
        /* grid-template-columns: 1fr; */
        position: fixed;
        right: 0;
        height: 100%;
        width: 170px;
        z-index: 99;
    }

    .nav-user a{
        padding: 10px;
        font-size: 0.95rem;
    }

    /* Adaptación a tabletas */
    @media (max-width: 1024px) {
        
    }

    /* Adaptación a movil */
    @media (max-width: 768px) {
        header {
            grid-template-columns: 1fr;
        }

        .nav {
            display: grid;
        }
    }

</style>
