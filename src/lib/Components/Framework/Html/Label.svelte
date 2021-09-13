<script>
    export let 
        forr="",
        text,
        icon
    ;
</script>

<label {...$$restProps} for={forr}>
    {#if icon}
        <i class={icon}></i>
    {/if}
    {#if text}
        <span>{text}</span> 
    {/if}
</label>