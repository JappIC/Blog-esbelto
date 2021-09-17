<!--
@component
Componente Comentgario:
Diseño de los comentarios:
Diseño para mostrar los comentarios ya publicados.
-->

<script>
    export let user;
    export let comment;
</script>

<div class="comment">
    <div class="comment-user">
        <figure>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTM_fffPGNoruJql5w0cAbriHyxAPLREFdA&usqp=CAU" alt="{user}">
            <span>{user}</span>
        </figure>
        <p>{comment}</p>
    </div>
    <div class="options">
        <div><i class="far fa-edit" title="Editar"></i></div>
        <div><i class="far fa-trash-alt" title="Eliminar"></i></div>
        <div><i class="far fa-comments" title="Responder"></i></div>
        <div><i class="far fa-thumbs-up" title="Me gusta"></i>0</div>
    </div>
</div>

<style>
    .comment{
        display: grid;
        grid-template-rows: auto auto;
        grid-gap: 0;
        font-size: 0.9rem;
    }

    .comment .comment-user{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0.5rem;
        align-items: center
    }

    /*Figure*/
    .comment figure{
        position: relative;
    }

    .comment figure img{
        max-width: 50px;
        border: var(--border);
        border-radius: 50%;
    }

    .comment figure span{
        text-align: center;
        font-size: 12px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    /*Comment*/
    .comment p{
        background: var(--c-secondary);
        border: var(--border);
        border-radius: 10px;
        padding: 10px;
        font-size: 1rem;
    }

    .comment .options{
        display: flex;
        justify-content: flex-end;
    }

    .comment .options > div{
        margin: 0 5px;
    }
</style>