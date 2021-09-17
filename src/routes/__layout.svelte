<!--
@component
Layout app:
Layout principal de la app 
-->

<script>
    /*Stores*/
    import { selectedTheme } from '$lib/stores/theme.js'
    /* Componentes */
	import Header from '$lib/Components/Layout/Header/index.svelte';
    import Share from '$lib/Components/Framework/Share.svelte';
    import Footer from '$lib/Components/Layout/Footer/index.svelte';
    /* Hoja de estilos principal */
	import '../app.css';
</script>

<!-- Contenedor principal de la plantilla -->
<div class="theme" data-theme="{$selectedTheme}">

    <!-- Componente Header principal-->
    <Header />

    <!-- Main - Contenido principal -->
    <main>
        <slot />
    </main>

    <!-- Aside - Contenido de poca relevancia -->
    <aside>
        <!-- Componente Share -->
        <Share/>
    </aside>
    
    <!-- Componente Footer -->
    <Footer />
</div>