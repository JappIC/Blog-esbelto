---
layout: article
id: 7
title: Componente Signage
userName: Autor
img : https://jakubpolomski.com/wp-content/gallery/argentina/Argentina-Landscape-Photo-El-Chalten-110200PAT0327f.jpg
description: El componente Signage permite añadir señalizaciones para notificaciones destacadas.
date: 2021/08/24
tags:
    - Señal
    - Aviso
    - Notificación
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';

    let opciones= [
        'Añade un iconos y texto de la señal',
        'Contiene un slot para añadir más contenido',
        'Contiene clases predefinidas para dar estilos a la señal: default, info, warning, error y positive'
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Signage.svelte"/>
    <Column class="col-2 text-justify">
        <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/nhQnht52yTj2zwfmVobk" />
        <div>
            <p class="text-justify">Importa el componente. Copia y pega el código de ejemplo que te muestro al lado de este mismo texto.</p>
            <List class="li-disc" list={opciones}/>
        </div>
    </Column>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplos:</Hn>
    <Signage class="default" icon="fas fa-sitemap" text="1º ejemplo de una señal usando la clase default"/>
    <Signage class="info m-top" icon="fas fa-sitemap" text="2º ejemplo de una señal usando la clase info"/>
    <Signage class="warning m-top" icon="fas fa-sitemap" text="3º ejemplo de una señal usando la clase warning"/>
    <Signage class="error m-top" icon="fas fa-sitemap" text="4º ejemplo de una señal usando la clase error"/>
    <Signage class="positive m-top" icon="fas fa-sitemap" text="5º ejemplo de una señal usando la clase positive"/>
</Container>