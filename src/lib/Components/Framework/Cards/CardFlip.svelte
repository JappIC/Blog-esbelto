<!--
@component
Componente CardFlip:
Una tarjeta prediseñada con efecto flip.
-->

<script>
    //import { fly } from "svelte/transition";
    //export let transition = false;

import Btn from "../Html/Btn.svelte";
import Hn from "../Html/Hn.svelte";

</script>

<div class="container-card">

    <article class="card-flip">
        <div class="card">
            <div class="card-front" style="background-image: url(/img/fondo-lienzo.jpg);">
                <div class="body-card">
                    <Hn type="h2" class="text-center">Título principal</Hn>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab quas recusandae voluptatum aliquid tempore animi corporis voluptas. Tempore neque iure necessitatibus voluptas nesciunt animi dolores incidunt delectus sapiente illum.</p>
                </div>
            </div>
            <div class="card-back">
                <div class="body-card">
                    <Hn type="h2" class="text-center">Título secundario</Hn>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab quas recusandae voluptatum aliquid tempore animi corporis voluptas. Tempore neque iure necessitatibus voluptas nesciunt animi dolores incidunt delectus sapiente illum.</p>
                    <Btn href="www.google.es">Entrar</Btn>
                </div>
            </div>
        </div>
    </article>

</div>


<style lang="postcss">
    h1,h2{
        font-size: 18px;
    }

    .container-card{
        max-width: 1200px;
        margin: auto;
        margin-top: 100px;
        perspective: 1000px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .card-flip{
        margin: 20px;
        perspective: 1000px;
        -webkit-box-reflect: below 20px linear-gradient(transparent, transparent, rgba(0,0,0,0.2));

        & .card{
            width: 350px;
            height: 400px;
            position: relative;
            transform-style: preserve-3d;
            transition: all 600ms;

            & .card-front, .card-back{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                backface-visibility: hidden;
                transform-style: preserve-3d;
            }

            & .card-front{
                background-size: cover;
                background-position: center;

                & .body-card{
                    grid-template-rows: auto 1fr;
                }
            }

            & .card-back{
                transform: rotateY(180deg);
                background: white;

                & .body-card{
                    grid-template-rows: auto 1fr auto;
                }
            }

            & .body-card{
                transform: translateZ(60px);
                display: grid;
                grid-template-columns: 1fr;
                padding: 25px;

                & p{
                    text-align: justify;
                }
            }
        }
    }

    .card-flip:active .card,
    .card-flip:hover .card{
        transform: rotateY(180deg);
    }

</style>