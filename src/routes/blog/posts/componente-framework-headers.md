---
layout: article
id: 1
title: Componente Headers
userName: Mi Nombre
img : https://ae01.alicdn.com/kf/HTB1AsdJl9tYBeNjSspkq6zU8VXaq/P-ster-de-tela-personalizado-de-paisajes-naturales-de-bosque-italiano-decoraci-n-de-pared-para.jpg_Q90.jpg_.webp
description: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
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
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, Figure } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import { Tabs, TabList, TabPanel, Tab } from '$lib/Components/Framework/Tabs/tabs.js';
</script>

<Seo 
    title={title}
    description={description}
    type="website"
    img={img}
/>
<Signage class="default" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Headers/index.svelte"/>
<!-- Como usar el componente: -->
<Container class="medium padding">
    <Hn type="h2">Un título hecho con el componente Hn</Hn>
    <Column class="col-2 text-justify">
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
    </Column>
</Container>

<Container class="medium padding">
    <Hn type="h2">Un título hecho con el componente Hn</Hn>
    <Column class="col-2 text-justify">
        <Figure src="https://ae01.alicdn.com/kf/HTB1AsdJl9tYBeNjSspkq6zU8VXaq/P-ster-de-tela-personalizado-de-paisajes-naturales-de-bosque-italiano-decoraci-n-de-pared-para.jpg_Q90.jpg_.webp" alt="Título de la foto" />
        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
    </Column>
</Container>
