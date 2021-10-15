<!--
@component
Componente Progress:
Un componente para generar una barra de progreso.
-->

<progress {...$$restProps}> <slot/> </progress>

<style>
    progress[value] {
        /* Reset the default appearance */
        -webkit-appearance: none;
        appearance: none;
        border: var(--border);
        border-radius: var(--radius);
        height: 20px;
        outline: 0;
        transition: var(--transition);
        width: 100%;
    }

    progress[value]::-webkit-progress-bar {
        background-color: var(--c-secondary);
        border-radius: var(--radius);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }

    progress[value]::-webkit-progress-value {
        background-color: var(--c-company);
        border-radius: var(--radius);
    }
</style>