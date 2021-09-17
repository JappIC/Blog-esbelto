<!--
@component
Componente Article:
-->

<script>
    import { fly } from "svelte/transition";
    export let 
        id,
        title,
        description,
        userName,
        link,
        tags,
        img,
        date,
        category,
        bucle = false
    ;
    
    // Formatemos la fecha de la publicación
    date = new Date(date).toLocaleDateString();
</script>

<article id="art-{id}" class="article art-{id}" class:bucle in:fly={{ y:25, duration: 1500, delay: 500 }} out:fly={{ y:25, duration: 500 }}>
    <!-- Diseño para las tarjetas -->
    {#if bucle}
        <!-- Header -->
        <a sveltekit:prefetch href={link}>
            <header>
                <figure>
                    <img src={img} alt={title}>
                    <figcaption> {title} </figcaption>
                </figure>
                <h2 class="title">{title}</h2>
            </header>
        </a>
        <!-- Body -->
        <p class="description">{description}</p>
    <!-- Si no, diseño para el artículo -->
    {:else}
        <!-- Header -->
        <div>
            <header>
                <figure>
                    <img src={img} alt={title}>
                    <figcaption> {title} </figcaption>
                </figure>
                <h1 class="title">{title}</h1>
                <p class="description">{description}</p>
            </header>
        </div>
        <!-- Body -->
        <slot />
    {/if}

    <!-- Footer -->
    <footer>
        <!-- Usuario, Fecha -->
        <ul class="ul1">
            <li>
                <a href={`/profile`}> 
                    <img class="avatar-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTM_fffPGNoruJql5w0cAbriHyxAPLREFdA&usqp=CAU" alt="Avatar">
                    {userName}
                </a> 
            </li>
            <li>
                <i class="far fa-calendar" aria-hidden="true"></i> 
                {date}
            </li>
        </ul>
        <!-- Categoria, Visitas, Nº de Me gusta, Nº de comentarios -->
        <ul class="ul2">
            <li>
                <i class="fa fa-list" aria-hidden="true"></i> 
                <a href={`/blog/category/${category}`}>
                    {category}
                </a> 
            </li>
        </ul>
        <!-- Etiquetas -->
        <ul class="ul3">
            <i class="fa fa-tags" aria-hidden="true"></i>
            {#each tags as tag}
                <li><a href={`/blog/tags/${tag}`}> {tag} </a></li>
            {/each}
        </ul>
    </footer>
</article>

<style>
    article {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        transition: var(--transition);
    }

    a{
        color: var(--c-text);
    }

    header {
        font-size: 1.2rem;
        margin: 0;
    }

    header figure{
        height: 450px;
        overflow: hidden;
        padding: 0;
        margin: 0;
    }

    header figure img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: var(--transition);
    }

    header .title{
        margin: 0;
        padding: 1rem 1.8rem;
        text-align: center;
        font-size: 6vw;
        font-family: var(--font-1);
        font-weight: 400;
    }

    .description {
        padding: 1rem 1.8rem;
        margin: 0;
        border-bottom: var(--border);
        text-align: center;
        color: var(--c-company);
    }

    footer{
        padding: 1rem 1.8rem;
    }

    ul {
        display: grid;
        font-size: 0.9rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ul li{
        margin: 0 3px;
    }

    .ul1{
        grid-template-columns: 1fr auto;
    }

    .ul2{
        grid-template-columns: 1fr;
        margin-top: 10px;
    }

    .ul3{
        display: flex;
        flex-wrap: wrap;
        box-shadow: inset var(--shadow);
        border-radius: 10px;
        border: var(--border);
        padding: 1rem;
        margin-top: 10px;
        transition: var(--transition);
    }

    ul a:hover{
        color: var(--c-company);
    }

    .avatar-icon{
        max-width: 18px;
        margin-bottom: -2px;
    }

    /* SI ES EN BUCLE */
    .bucle{
        border: var(--border);
        box-shadow: var(--shadow);
        background: var(--c-secondary);
    }

    .bucle:hover{
        box-shadow: var(--shadow-hover);
    }

    .bucle:hover .ul3{
        box-shadow: inset var(--shadow-hover);
    }

    .bucle header figure{
        height: 350px;
    }

    .bucle header .title{
        font-size: 1.8rem;
        color: var(--c-company);
    }

    .bucle header figure img {
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
    }

    .bucle:hover img{
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
    }

    .bucle .description {
        border: var(--border);
        border-right: 0;
        border-left: 0;
        color: var(--c-text);
        text-align: justify;
    }
    
</style>