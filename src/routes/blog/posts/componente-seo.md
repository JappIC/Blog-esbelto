---
layout: article
id: 5
title: Componente Seo
userName: Autor
img : https://iso.500px.com/wp-content/uploads/2014/06/W4A2827-1-3000x2000.jpg
description: El componente Seo contiene la etiqueta svelte:head que permite formatear el head de los documentos.
date: 2021/08/22
tags:
    - Seo
    - Redes Sociales
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';

    let opciones= [
        'Añade atributos como el título y la descripción',
        'Preparado para usar protocolo de OpenGraph'
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Seo.svelte"/>
    <Column class="col-2 text-justify">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/TkIrHVxZPxkiEUsGT9R4" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplo:</Hn>
    <Signage class="default" icon="fas fa-info-circle" text="No contiene un ejemplo, simplemente es un contenedor sin vista. Su funcion es formatear los datos del documento para el SEO."/>
</Container>