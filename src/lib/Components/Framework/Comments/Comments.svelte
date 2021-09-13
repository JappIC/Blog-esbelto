<!--
    Componente Comentario:
    Un diseño general para mostrar los comentarios y el formulario .
-->

<script>
    import Comment from '$lib/Components/Framework/Comments/Comment.svelte';
    import Form from '$lib/Components/Framework/Comments/Form.svelte';
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
