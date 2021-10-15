---
layout: article
id: 1
title: Componente Header
userName: Japp
img : https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg
description: El componente Header es el encargado de mostrar una cabesera en las páginas de tu app.
date: 2021/08/18
tags:
    - Título
    - Cabecera
    - Descripción
    - Framework
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
        'Contiene una animación predefinida', 
        'Un slot para añadir más contenido dentro de la etiqueta de componente'
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
    <Signage class="default" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Headers/Header.svelte"/>
    <Column class="col-2 text-justify">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/5d5wCWworlIScmdb22Zq" />
        <div>
            <p class="text-justify">Importa el componente, copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>

<Container class="medium padding">
    <Hn type="h2">Ejemplo: 1</Hn>
    <Header title="ESBELTO">
        <p>Una web desarrollada con el FW Svelte Kit</p>
    </Header>
    <Hn type="h2">Ejemplo: 2</Hn>
    <Header title="ESBELTO" src="/img/fondo-lienzo.jpg" />
</Container>
