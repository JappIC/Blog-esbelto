<script>
    import Textarea from '$lib/Components/Fw/Textarea.svelte';
    import Button from '$lib/Components/Fw/Button.svelte';
</script>

<form action="">
    <Textarea
        rows=3
    />

    <Button
        text="Apretame"
        clase="floatR"
    />
</form>

<style>
    form{
        display: grid;
        margin-bottom: 50px;
    }
</style>