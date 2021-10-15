---
layout: article
id: 13
title: Componente CardProject
userName: Japp
img : https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled.jpg
description: El componente CardProject muestra una tarjeta preparada para presentar proyectos.
date: 2021/10/15
tags:
    - Tarjeta
    - Diseño
    - Cards
category: Componente
---

<script>
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import CardProject from '$lib/Components/Framework/Cards/CardProject.svelte';
    import { Iframe, Hn, List, Btn, Figure, Input, InputCheck, InputRadio, Label, Select, Textarea } from '$lib/Components/Framework/Html/html.js';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import { theme, selectedTheme } from '$lib/stores/theme.js'

</script>

<Seo 
    title={title}
    description={description}
    type="website"
    img={img}
/>

<!-- Como usar el componente: -->
<Container class="medium padding">
    <Hn type="h2" class="title">Como usar el componente:</Hn>
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/Cards/CardProject.js"/>
    <p class="text-justify">Importa los componentes. El código de ejemplo lo puedes ver en el código de este documento y en las diferentes partes de la web.</p>
</Container>
<Container class="medium padding" transition=true>
    <Hn type="h2" class="title">Ejemplos:</Hn>
    <CardProject class="reverse m-top"/>
    <CardProject class="m-top-2"/>
</Container>
