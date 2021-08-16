<script>
    export let text;
    export let name;
    export let type;
    export let id;
    export let value;
</script>

<button {name} {type} {id} {value}> {text} </button>

<style>
    button {
        background: var(--bg-btn);
        border-radius:5px;
        border: var(--border);
        display:inline-block;
        cursor:pointer;
        color: var(--c-btn);
        font-size:15px;
        font-weight:bold;
        padding:10px 20px;
        text-decoration:none;
        transition: var(--transition);
    }

    button:hover {
        background: var(--c-btn);
        box-shadow: var(--shadow-hover);
        color: var(--bg-btn );
    }

    button:active {
        position:relative;
        top:1px;
    }
</style>

