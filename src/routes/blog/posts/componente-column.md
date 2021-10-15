---
layout: article
id: 2
title: Componente Column
userName: Japp
img : https://ae01.alicdn.com/kf/HTB1AsdJl9tYBeNjSspkq6zU8VXaq/P-ster-de-tela-personalizado-de-paisajes-naturales-de-bosque-italiano-decoraci-n-de-pared-para.jpg_Q90.jpg_.webp
description: El componente Column permite clasificar contenido en columnas.
date: 2021/08/19
tags:
    - Columnas
    - Contenedor
    - Diseño
    - Maquetar
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Header from '$lib/Components/Framework/Headers/Header.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';

    let opciones= [
        'Personalizable por clases: col-2, col-3, col-4, col-5, col-6, align-items-center', 
        'Adaptable a la escala de pantalla de los dispositivos'
    ];
</script>

<Seo 
    title={title}
    description={description}
    type="website"
    img={img}
/>

<!-- Como usar el componente: -->
<Container class="medium padding">
    <Hn type="h2">Como usar el componente:</Hn>
    <Signage class="default" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Column.svelte"/>
    <Column class="col-2 text-justify">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/afkk0MO4NKXb5TgL1S8X" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplo:</Hn>
    <Column class="col-2">
        <p>Mi primer contenido</p>
        <p>Mi segundo contenido</p>
    </Column>
</Container>