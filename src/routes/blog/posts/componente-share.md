---
layout: article
id: 6
title: Componente Share
userName: Japp
img : https://www.publicdomainpictures.net/pictures/30000/velka/evening-landscape-13530956185Aw.jpg
description: El componente Share permite añadir iconos de redes sociales para compartir publicaciones.
date: 2021/08/23
tags:
    - Redes Sociales
    - Compartir
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import Share from '$lib/Components/Framework/Share.svelte';

    let opciones= [
        'Añade iconos de las principales redes sociales',
        'Con opcion para imprimir, guardar en pdf o enviar por email',
        'Detecta automaticamente la url de la página a compartir'
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Share.svelte"/>
    <Column class="col-2 text-justify">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/Cfd0JzIfVlx3vNb4vhOU" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplo:</Hn>
    <Share/>
</Container>