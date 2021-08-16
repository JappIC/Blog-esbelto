<script>
    export let name;
    export let id;
    export let cols;
    export let rows;
    export let placeholder;
    export let maxlength;
    export let minlength;
</script>

<textarea 
    {name} 
    {id} 
    {cols} 
    {rows} 
    {placeholder} 
    {maxlength} 
    {minlength}
></textarea>

<style>
    textarea{
        box-shadow: inset var(--shadow);
    }
</style>