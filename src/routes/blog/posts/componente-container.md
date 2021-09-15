---
layout: article
id: 3
title: Componente Container
userName: Autor
img : https://images.indianexpress.com/2017/04/nature-tree_1200.jpg
description: El componente Container permite clasificar contenido en diferes tamaños.
date: 2021/08/20
tags:
    - Contenedor
    - Diseño
    - Maquetar
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';

    let opciones= [
        'Personalizable por clases: small, medium, large, huge, full',
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
    <Signage class="default" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Container.svelte"/>
    <Column class="col-2 text-justify">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/mrUKxbhPY5vjD3h5Speg" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplo:</Hn>
    <Signage class="default" icon="fas fa-info-circle" text="No contiene un ejemplo, simplemente es un contenedor sin diseño, centrado y con diferentes tamaños de personalización."/>
</Container>