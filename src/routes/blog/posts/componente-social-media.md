---
layout: article
id: 8
title: Componente Social Media
userName: Japp
img : https://cflvdg.avoz.es/default/2018/10/10/00121539198100228948492/Foto/tailandia.jpg
description: El componente Social Media permite añadir un baner con las principales redes sociales.
date: 2021/08/25
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
    import SocialMedia from '$lib/Components/Framework/SocialMedia.svelte';

    let opciones= [
        'Añade la url de tu red social y aparecera el icono automaticamente',
        'Soporte para las siguientes redes: Facebook, Twitter, Linkeding ,Twitch, Whatsapp, Discord, Telegram, Github y Web'
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
    <Signage class="default word-break" icon="fas fa-sitemap" text="Directorio: $lib/Components/Framework/SocialMedia.svelte"/>
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
    <SocialMedia 
        facebook="https://www.facebook.com" 
        twitter="https://www.twitch.tv" 
        twitch="https://twitter.com" 
        whatsapp="https://www.whatsapp.com" 
        discord="https://www.discord.com" 
        telegram="https://www.web.telegram.org" 
        linkedin="https://www.linkedin.com" 
        github="https://www.github.com" 
        web="https://www.miweb.com" 
    />
</Container>