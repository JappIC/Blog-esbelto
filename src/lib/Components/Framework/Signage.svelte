<!--
    Componente Signage:
    Un componente para fortrar información, avisos...
-->

<script>
    export let
        text = "Añade un texto de señalización",
        icon = "far fa-circle"
    ;
</script>

<div {...$$restProps}>
    <i class={icon}></i> {text} <slot/>
</div>

<style>
    div{
        align-items: center;
        display: flex;
        grid-gap: 25px;
        font-weight: bold;
        padding: var(--padding);
    }

    .default{
        border: var(--border);
        background-color: var(--c-tertiary);
        color: var(--c-text);
    }

    .info{
        border: 1px solid var(--c-company);
        background-color: var(--c-company2);
        color: var(--c-company);
    }

    .warning{
        border: var(--c-warning2);
        background-color: var(--c-warning);
        color: var(--c-warning2);
    }

    .error{
        border: var(--c-error2);
        background-color: var(--c-error);
        color: var(--c-error2);
    }

    .positive{
        border: var(--c-positive2);
        background-color: var(--c-positive);
        color: var(--c-positive2);
    }   

</style>