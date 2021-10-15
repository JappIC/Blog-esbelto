---
layout: article
id: 4
title: Componente Loading
userName: Japp
img : https://chiledescentralizado.cl/wp-content/uploads/2016/03/landscape-04.jpg
description: El componente Loading permite mostra una animación de carga cuando sea necesaria.
date: 2021/08/21
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
    import Loading from '$lib/Components/Framework/Loading.svelte';

    let opciones= [
        'Animaciones con css',
        'En el archivo del componente encontraras un enlace a un generador de animaciones'
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
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/C8Kd1db3tbv7abfSoOG6" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplo:</Hn>
    <Loading />
</Container>