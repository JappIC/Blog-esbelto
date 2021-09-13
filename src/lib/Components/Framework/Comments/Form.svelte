<!--
    Formulario del componente comentario:
    Un simple formulario para añadir comentarios.
-->

<script>
    import { Btn, Textarea } from '$lib/Components/Framework/Html/html.js';
</script>

<form action="">
    <Textarea name="comment"/>
    <Btn><i class="far fa-comment-dots"></i> Enviar</Btn>
</form>

<style>
    form{
        display: grid;
        margin-bottom: 50px;
        grid-gap: 20px;
    }
</style>