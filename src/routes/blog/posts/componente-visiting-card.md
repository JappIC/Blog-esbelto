---
layout: article
id: 9
title: Componente Visiting Card
userName: Japp
img : https://www.astrobitacora.com/wp-content/uploads/2017/09/milky-way.jpg
description: El componente Visiting Card permite añadir una tarjeta de visita. Ideal para hacer una reseña del autor del artículo.
date: 2021/08/26
tags:
    - Redes Sociales
    - Enlaces
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import VisitingCard from '$lib/Components/Framework/VisitingCard.svelte';

    let opciones= [
        'Añade una foto, título y descripción',
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/VisitingCard.svelte"/>
    <Column class="col-2 text-justify">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/L3mUuQehEr3BJLPDCYjS" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplos:</Hn>
    <VisitingCard
        src=        "https://s1.eestatic.com/2017/07/14/ciencia/medio-ambiente/medio_ambiente_231238002_39634878_854x640.jpg"
        name=       "Ni nombre"
        surname=    "1º Apellido"
        lastname=   "2º Apellido"
        link=       "https://www.miweb.com/miperfil"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
    />
</Container>