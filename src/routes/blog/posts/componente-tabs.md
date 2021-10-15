---
layout: article
id: 12
title: Componente Tabs
userName: Japp
img : https://fotografias.lasexta.com/clipping/cmsimages01/2019/06/04/3EC08BDA-7BE1-4413-A831-277039B478B9/default.jpg?crop=4279,2408,x0,y577&width=1900&height=1069&optimize=low
description: El componente Tabs permite generar contenido que es visible dependiendo de la pestaña seleccionada.
date: 2021/08/28
tags:
    - Tabs
    - Pestañas
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import { Tabs, TabList, TabPanel, Tab } from '$lib/Components/Framework/Tabs/tabs.js';

    let opciones= [
        'Puedes añadir cualquier contenido en el contenedor o títulos del componente',
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Tabs/tabs.js"/>
    <Column class="col-2">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/PKf4betZW96aRpIX8ZUR" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplo:</Hn>
    <Tabs>
        <TabList>
            <Tab>1º Pestaña</Tab>
            <Tab>2º Pestaña</Tab>
        </TabList>
        <TabPanel>
            <h2>Contenido de la 1º pestaña</h2>
        </TabPanel>
        <TabPanel>
            <h2>Contenido de la 2º pestaña</h2>
        </TabPanel>
    </Tabs>
</Container>