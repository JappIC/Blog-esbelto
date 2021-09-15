---
layout: article
id: 13
title: Componentes Html
userName: Autor
img : https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg
description: Los componente Html son etiquetas html configuradas como componentes Svelte.
date: 2021/08/30
tags:
    - Html
    - Inputs
    - Media
    - Button
    - textarea
    - Label
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import { Iframe, Hn, List, Btn, Figure, Input, InputCheck, InputRadio, Label, Select, Textarea } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import { theme, selectedTheme } from '$lib/stores/theme.js'

    let opciones= [
        'Todos los componentes html están preparados para su uso directo',
        'Varios de estos componentes tienen sus propias clases de diseño que pueden ser llamadas desde la etiqueta del componente'
    ];

    let lista= [
        'Ejemplo 1',
        'Ejemplo 2',
        'Ejemplo 3',
        'Ejemplo 4',
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Html/html.js"/>
    <p class="text-justify">Importa los componentes. El código de ejemplo lo puedes ver en el código de este documento y en las diferentes partes de la web.</p>
    <List class="li-disc" list={opciones}/>
</Container>
<Container class="medium padding">
    <Hn type="h2" class="title">Ejemplos:</Hn>
    <Column class="col-4">
        <div>
            <Hn type="h3">Iframe</Hn>
            <Iframe title="Código del componente" class="code m-top" src="https://carbon.now.sh/embed/PKf4betZW96aRpIX8ZUR" />
        </div>
        <div>
            <Hn type="h3">Titulo</Hn>
            <Hn type="h2">Ejemplo</Hn>
        </div>
        <div>
            <Hn type="h3">Lista</Hn>
            <List list={lista} class="li-disc"/>
        </div>
        <div>
            <Hn type="h3">Botón</Hn>
            <Btn>Ejemplo</Btn>
        </div>
    </Column>
    <Column class="col-4">
        <div>
            <Hn type="h3">Figure</Hn>
            <Figure src="https://s1.eestatic.com/2017/07/14/ciencia/medio-ambiente/medio_ambiente_231238002_39634878_854x640.jpg"/>
        </div>
        <div>
            <Hn type="h3">Input</Hn>
            <Input type="text">Ejemplo</Input>
        </div>
        <div>
            <Hn type="h3">Input Check</Hn>
            <InputCheck />
        </div>
        <div>
            <Hn type="h3">Input Radio</Hn>
            <InputRadio id="woman" name="gender" value="primera"/>
            <InputRadio id="woman" name="gender" value="segunda"/>
            <InputRadio id="woman" name="gender" value="tercera"/>
        </div>
    </Column>
    <Column class="col-3">
        <div>
            <Hn type="h3">Label</Hn>
            <Label forr="name" icon="far fa-address-card" text="Nombre"/>
        </div>
        <div>
            <Hn type="h3">Select</Hn>
            <Select
                value={selectedTheme}
                options={theme}
            />
        </div>
        <div>
            <Hn type="h3">Textarea</Hn>
            <Textarea />
        </div>
    </Column>
</Container>