---
layout: article
id: 1
title: Componente global Header
userName: Pepito
img : https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg
description: El componente Header es el encargado de mostrar la cabecera principal de la Web.
date: 2021/07/27
tags:
    - Tag1
category: Cat1
visits: 154
likes: 23
comments: 6
---

<svelte:head>
	<title>{title}</title>
    <meta name="Description" CONTENT="Descripción y tag del artículo">
</svelte:head>

<script>
    import Pre from '$lib/Components/Fw/Pre.svelte';
    import Container from '$lib/Components/Fw/Container.svelte';
    import Headers from '$lib/Components/Headers/index.svelte';
</script>

<Container clas="full"> 
    <Headers />
    Esto esta en el body
    <pre><code class="languege-html"><h1>Hola!!</h1></code></pre>
</Container>