---
layout: article
id: 11
title: Componente Article
userName: Japp
img : https://www.wkmradio.com/wp-content/uploads/2019/04/reyleon.jpg
description: El componente Article es el encargado de mostrar los artículos por buble como de forma individual.
date: 2021/08/27
tags:
    - Artículo
    - Bucle
    - Blog
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import Article from '$lib/Components/Framework/Articles/Article.svelte';

    let opciones= [
        'Si usas la opcion bucle como true, el artículo generara un enlace al artículo principal',
        'Completamente adaptativa a todos los dispositivos'
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Articles/Article.svelte"/>
    <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/lWLphgamOjB0S0n8A2o9" />
    <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
    <List class="li-disc" list={opciones}/>
        
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplo:</Hn>
    <Column class="col-2">
        <Article 
            id="256"
            title="Título del artículo"
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, "
            userName="Autor"
            link="https://www.miweb.com/titulo-del-artículo"
            tags="Etiqueta, Etiqueta2"
            img="https://s1.eestatic.com/2017/07/14/ciencia/medio-ambiente/medio_ambiente_231238002_39634878_854x640.jpg"
            date="2021-05-26"
            category="MiCategoria"
            bucle = true
        />
        <Article 
            id="256"
            title="Título del artículo2"
            description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, "
            userName="Autor"
            link="https://www.miweb.com/titulo-del-artículo"
            tags="Etiqueta3, Etiqueta4"
            img="https://s1.eestatic.com/2017/07/14/ciencia/medio-ambiente/medio_ambiente_231238002_39634878_854x640.jpg"
            date="2021-05-26"
            category="MiCategoria"
            bucle = true
        />
    </Column>
</Container>