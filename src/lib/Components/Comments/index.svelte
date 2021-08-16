<script>
    import Comment from '$lib/Components/Comments/Comment.svelte';
    import Form from '$lib/Components/Comments/Form.svelte';
</script>

<section class="comp-comments">
    <Form />

    <Comment 
        user="Pepito"
        comment="Un comentario cualquiera del componente comentario, "
    />
</section>

<style>
    section{
        display: grid;
        max-width: 900px;
        margin: 0 auto;
    }
    
</style>
