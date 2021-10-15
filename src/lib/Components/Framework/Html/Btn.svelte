<!--
@component
Componente Btn:
Un componente para generar botones
-->

<script>
    export let href;
    export let btn = true;
</script>

{#if href}
    <a class:btn {href} {...$$restProps}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <slot/>
    </a>
{:else}
    <button class:btn {...$$restProps}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <slot/>
    </button>
{/if}

<style lang="postcss">

    .btn {
        background: var(--bg-btn);
        border: 1px solid var(--c-btn);
        border-radius: 5px;
        color: var(--c-btn);
        cursor: pointer;
        display: inline-block;
        font-family: var(--font-1);
        font-size: 15px;
        font-weight: bold;
        overflow: hidden;
        padding: 10px 20px;
        position: relative;
        text-decoration: none;
        text-align: center;
        transition: var(--transition);

        /*transition: background-color 0.5s ease-out;*/

        & span{
            display: block;
            position: absolute;
            transition: 1s;
        }

        & span:nth-child(1){
            background: linear-gradient(90deg, transparent, var(--c-btn));
            height: 2px;
            left: -100%;
            top: 0;
            width: 100%;
        }

        & span:nth-child(2){
            background: linear-gradient(180deg, transparent, var(--c-btn));
            height: 100%;
            right: 0;
            top: -100%;
            width: 2px;
        }
        
        & span:nth-child(3){
            background: linear-gradient(270deg, transparent, var(--c-btn));
            height: 2px;
            right: -100%;
            bottom: 0;
            width: 100%;
        }

        & span:nth-child(4){
            background: linear-gradient(360deg, transparent, var(--c-btn));
            height: 100%;
            left: 0;
            bottom: -100%;
            width: 2px;
        }
    }

    .btn:hover
    {
        background: var(--c-btn);
        color: var(--bg-btn);
        transition-delay: 1s;

        & span:nth-child(1){
            left: 100%;
            transition: 0.5s;
        }
        & span:nth-child(2){
            top: 100%;
            transition-delay: 0.25s;
        }
        & span:nth-child(3){
            right: 100%;
            transition-delay: 0.5s;
        }
        & span:nth-child(4){
            bottom: 100%;
            transition-delay: 0.75s;
        }
        
    }

    .btn:active { top:1px; }

    /* Warning */
    .warning{
        border: 1px solid var(--c-warning);
        color: var(--c-warning);

        & span:nth-child(1){
            background: linear-gradient(90deg, transparent, var(--c-warning));
        }

        & span:nth-child(2){
            background: linear-gradient(180deg, transparent, var(--c-warning));
        }
        
        & span:nth-child(3){
            background: linear-gradient(270deg, transparent, var(--c-warning));
        }

        & span:nth-child(4){
            background: linear-gradient(360deg, transparent, var(--c-warning));
        }
    }

    .warning:hover {
        background: var(--c-warning);
    }

    /* Error */
    .error{
        border: 1px solid var(--c-error);
        color: var(--c-error);

        & span:nth-child(1){
            background: linear-gradient(90deg, transparent, var(--c-error));
        }

        & span:nth-child(2){
            background: linear-gradient(180deg, transparent, var(--c-error));
        }
        
        & span:nth-child(3){
            background: linear-gradient(270deg, transparent, var(--c-error));
        }

        & span:nth-child(4){
            background: linear-gradient(360deg, transparent, var(--c-error));
        }
    }

    .error:hover {
        background: var(--c-error);
    }

    /* Positive */
    .positive{
        border: 1px solid var(--c-positive);
        color: var(--c-positive);

        & span:nth-child(1){
            background: linear-gradient(90deg, transparent, var(--c-positive));
        }

        & span:nth-child(2){
            background: linear-gradient(180deg, transparent, var(--c-positive));
        }
        
        & span:nth-child(3){
            background: linear-gradient(270deg, transparent, var(--c-positive));
        }

        & span:nth-child(4){
            background: linear-gradient(360deg, transparent, var(--c-positive));
        }
    }

    .positive:hover {
        background: var(--c-positive);
    }
</style>