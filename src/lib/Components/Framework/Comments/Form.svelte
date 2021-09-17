<!--
@component
Componente Form:
Un formulario para el componente Comments
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