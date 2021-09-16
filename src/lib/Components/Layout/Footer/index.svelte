<!--
    Componente Footer:
    Componente principal de pie de página.
-->

<script>
    import { appData } from '$lib/stores/appData.js';

    let year = new Date().getFullYear();
</script>

<footer>
	<h4>{$appData.name} &copy;{year}</h4>
</footer>

<style>
    footer {
        background: var(--c-primary);
        border-top: var(--border);
        box-shadow: var(--shadow);
		display: flex;
		flex-direction: column;
		justify-content: center;
        margin-top: 25px;
		align-items: center;
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 20px;
        z-index: 100;
	}

    footer h4{ 
        font-family: var(--font-2);
        font-weight: 400;
        margin: 0;
    }

    @media print
    {
        footer{
            display: none !important;
        }
    }
</style>