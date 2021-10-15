<!--
@component
Componente CardProject:
Una tarjeta para presentar proyectos.
-->

<script>
    export let 
        title ="Añade un título",
        description ="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus voluptates inventore hic quo quae provident distinctio, asperiores atque assumenda possimus expedita.",
        link ="www.google.es",
        web ="www.google.es",
        github ="www.google.es",
        tags = ["Etiqueta", "Etiqueta2", "Etiqueta3"],
        img ="/img/code.png",
        category ="SvelteKit"
    ;
</script>

<article {...$$restProps}>
    <div>
        <a class="category" href="www.google.es">{category}</a>
        <h3>
            <a href={link}>{title}</a>
        </h3>
        <p class="description">{description}</p>
        <ul>
            {#each tags as tag}
                <li><a href={link}> {tag} </a></li>
            {/each}
        </ul>
        <div>
            <a href={github}><i class="fab fa-github"></i></a>
            <a href={web}><i class="fas fa-desktop"></i></a>
        </div>
    </div>
    <div>
        <a href="www.google.com">
            <img src={img} alt={title}>
        </a>
    </div>
</article>

<style lang="postcss">
    article{
        position: relative;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(12, 1fr);
        -webkit-box-align: center;
        align-items: center;

        & div:nth-child(1){
            grid-area: 1 / 1 / -1 / 7;
            /*grid-column: 7 / -1;*/
            position: relative;
            z-index: 1;

            & h3{
                margin-top: 5px;
                font-size: clamp(24px, 5vw, 28px);
            }

            & .description{
                background: var(--c-company);
                border-radius: var(--radius);
                box-shadow: 0 10px 30px -15px var(--c-shadow);
                color: var(--c-company2);
                padding: var(--padding);
            }

            & ul{
                display: flex;
                flex-wrap: wrap;
                position: relative;
                z-index: 2;
                padding: 0px;
                list-style: none;

                & li{
                    padding: 2.5px 10px 2.5px 0;
                }
            }

            & div a{
                padding-right: 5px;
            }
        }

        & div:nth-child(2){
            /*grid-column: 1 / 8;*/
            background-color: var(--c-company);
            box-shadow: 0 10px 30px -15px var(--c-shadow);
            border-radius: var(--radius);
            grid-area: 1 / 6 / -1 / -1;
            overflow: hidden;

            & a{
                display: inline-block;
                height: 100%;
                width: 100%;

                & img{
                    max-width: 100%;
                    object-fit: cover;
                    vertical-align: middle;
                    opacity: 0.9;
                    transition: opacity 500ms linear 0s;
                }

                & img:hover{
                    opacity: 1;
                }
            }
        }
    }

    article.reverse{

        & div:nth-child(1){
            grid-column: 7 / -1;
            text-align: right;
        }

        & div:nth-child(2){grid-column: 1 / 8;}

        & ul{
            -webkit-box-pack: end;
            justify-content: flex-end;

            & li{
                padding: 2.5px 0 2.5px 10px;
            }
        }
    }
</style>