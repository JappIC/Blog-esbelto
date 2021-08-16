<script>
    /**
     * Layout principal de la app
    */

    /*Stores*/
    import { selectedTheme } from '$lib/stores/theme.js'
    /* Componentes */
	import Header from '$lib/components/Header/index.svelte';
    import Share from '$lib/Components/Share/index.svelte';
    import Footer from '$lib/Components/Footer/index.svelte';
	import '../app.css';

</script>
<!-- Contenedor principal de la plantilla -->
<div class="theme" data-theme="{$selectedTheme}">
    <!-- Componente Header -->
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


<style>
	
</style>
