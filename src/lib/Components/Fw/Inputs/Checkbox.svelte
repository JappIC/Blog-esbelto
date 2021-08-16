<script>
   export let value;
</script>

<input type="checkbox" value={value}>

<style>
    input[type="checkbox"] {
        position: relative;
        width: 1.5em;
        height: 1.5em;
        border: var(--border);
        border-radius: 4px;
        appearance: none;
        outline: 0;
        cursor: pointer;
        transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
    }

    input[type="checkbox"]::before {
        position: absolute;
        content: '';
        display: block;
        top: 4px;
        left: 10px;
        width: 8px;
        height: 14px;
        border-style: solid;
        border-color: white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
    }

    input[type="checkbox"]:checked {
        color: white;
        border-color: var(--border);
        background: var(--c-btn-active);
    }

    input[type="checkbox"]::before {
        opacity: 1;
    }

</style>