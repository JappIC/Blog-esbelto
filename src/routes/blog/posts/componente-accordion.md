---
layout: article
id: 10
title: Componente Accordion
userName: Japp
img : https://cflvdg.avoz.es/default/2018/10/10/00121539198100228948492/Foto/tailandia.jpg
description: El componente Accordion permite añadir un acordeon para ocultar o mostrar texto al pulsar sobre el título.
date: 2021/08/26
tags:
    - Acordeón
    - Desplegable
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';

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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Accordion/accordion.js"/>
    <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
    <List class="li-disc" list={opciones}/>
    <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/PjbuK4euiUKWrwDrDziL" />
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplos:</Hn>
    <Signage class="default" icon="fas fa-info-circle" text="Por como esta programado este complemento, por ahora no es posible usarlo en archivos Markdown, pero puede ver un ejemplo de este en la página principal de la web"/>
</Container>