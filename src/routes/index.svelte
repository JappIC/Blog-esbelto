<!--
@component
Página principal:
La página principal de la aplicación
-->

<script context="module">
	export const prerender = true;

    export const load = async ({page})=>{
        const url = page.path;

        return {
            props:{
                url
            },
        };
    };
</script>

<script>
    import { appData } from '$lib/stores/appData.js';
    import { user } from '$lib/stores/user.js';
    /* Componentes */
    import { Tabs, TabList, TabPanel, Tab } from '$lib/Components/Framework/Tabs/tabs.js';
    import { List } from '$lib/Components/Framework/Html/html.js';
    import Header from '$lib/Components/Framework/Headers/Header.svelte';
    import Accordion from '$lib/Components/Framework/Accordion/accordion.js'
    import Container from '$lib/Components/Framework/Container.svelte';
    import Seo from '$lib/Components/Framework/Seo.svelte';
    import Hn from '$lib/Components/Framework/Html/Hn.svelte';
    import Column from '$lib/Components/Framework/Column.svelte';
    import VisitingCard from '$lib/Components/Framework/VisitingCard.svelte';
    import SocialMedia from '$lib/Components/Framework/SocialMedia.svelte';
    import Loading from '$lib/Components/Framework/Loading.svelte';
    import Btn from '$lib/Components/Framework/Html/Btn.svelte';
    import Figure from '$lib/Components/Framework/Html/Figure.svelte';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import CardFlip from '$lib/Components/Framework/Cards/CardFlip.svelte';

    let componentes= [
        'Accordion', 'Articles', 'Comments', 'Headers', 'Accordion', 
        'Tabs', 'Column', 'Container', 'Loading', 'Seo',
        'Share', 'Signage', 'SocialMedia', 'VisitingCard'
    ];

    let componentesHtml= [
        'Btn', 'Figure', 'Hn', 'Iframe', 'Input', 
        'InputCheck', 'InputRadio', 'Label', 'List', 'Select',
        'Textarea'
    ];

    let activeTitle = "Header One";
    const handleAccordionChange = event => {
        activeTitle = event.detail;
    };

</script>

<Seo 
    title={$appData.name}
    description="Una web desarrollada con el FW Svelte Kit"
    type="website"
    img={$appData.logo}
/>

<section class="page pg-home">
    <Header title={$appData.name}>
        <p>Una web desarrollada con el FW Svelte Kit</p>
        <Btn class="warning" href="www.google.es">Botón neon</Btn>
        <Btn class="positive" href="www.google.es">Botón neon</Btn>
        <Btn class="error" href="www.google.es">Botón neon</Btn>
        <Btn href="www.google.es">Botón neon</Btn>
    </Header>

    <Container class="medium padding" transition=true>
        <p>
            <span class="bold">Esbelto</span> es una web desarrollada usando el Framework <a class="bold" href="https://kit.svelte.dev/" target="_blanck">SvelteKit</a> .
            Este proyecto se hace para afianzar conocimientos de Html, Css, JS y aprender el desarrollo de 
            aplicaciones usando un FW de JS como compilador.
        </p>
    </Container>

    <Container class="large" transition=true>
        <Column class="col-3">
            <Figure src="/img/esbelto-azul.png" alt="Azul"/>
            <Figure src="/img/esbelto-defecto.png" alt="defecto"/>
            <Figure src="/img/esbelto-oscuro.png" alt="oscuro"/>
        </Column>
    </Container>

    <Container class="medium padding" transition=true>
        <p>
            Esbelto está pensado para tener una base muy simple para comenzar a desarrollar una web.
            La misma web funciona como documentación. En el enlace "blog" del menú principal podrás ver que los 
            artículos hacen referencia a los componentes de Esbelto.
        </p>

        <Hn type="h2" class="m-top-2 title">Algunos componentes de esbelto:</Hn>
        <p>Esbelto contiene más de 20 componentes preparados para reutilizar en toda la web. A continuación te muestro 5 ejemplo</p>
        <Column class="col-2 m-top-2">
            <div>
                <Hn type="h3">Componente Accordion:</Hn>
                <p>El componente Accordion permite añadir un acordeon para ocultar o mostrar texto al pulsar sobre el título.</p>
                <Accordion on:change={handleAccordionChange} value={activeTitle}>
                    <Accordion.Section key={1} title={'1º Título'}>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    </Accordion.Section>
                    <Accordion.Section key={2} title={'2º Título'}>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.  
                    </Accordion.Section>
                </Accordion>
            </div>
            <div>
                <Hn type="h3">Componente Tabs:</Hn>
                <p>El componente Tabs permite generar contenido que es visible dependiendo de la pestaña seleccionada.</p>
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
            </div>
        </Column>

        <Column class="col-2 m-top-2">
            <div class="overflow-h">
                <Hn type="h3">Componente Loading:</Hn>
                <p>El componente Loading permite mostra una animación de carga cuando sea necesaria.</p>
                <Loading/>
            </div>
            <div>
                <Hn type="h3">Componente Social Media:</Hn>
                <p>El componente Social Media permite añadir un baner con las principales redes sociales.</p>
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
            </div>
        </Column>

        <div class="m-top-2">
            <Hn type="h3">Componente Visiting Card:</Hn>
            <p>El componente Visiting Card permite añadir una tarjeta de visita. Ideal para hacer una reseña del autor del artículo.</p>
            <VisitingCard
                src=        {$user.avatar}
                name=       {$user.name}
                surname=    {$user.surname}
                lastname=   {$user.lastname}
                link="/profile/"
                description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
            />
        </div>

        <Column class="col-2 m-top-2">
            <div>
                <Hn type="h2" class="title">Lista de componentes:</Hn>
                <p>
                    Aquí tienes una lista completa de todos los componentes que utiliza Esbelto.
                    Recuerda que puedes revisar cada uno desde la pestaña blog, en el menú principal.
                </p>
                <Btn sveltekit:prefetch href="/blog" class="m-top d-block">Ver blog</Btn>
            </div>
            <Column class="col-2">
                <div>
                    <Hn type="h3">Prediseñados:</Hn>
                    <List class="li-decimal" list={componentes}/>
                </div>
                <div>
                    <Hn type="h3">Html:</Hn>
                    <List class="li-decimal" list={componentesHtml}/>
                </div>
            </Column>
        </Column>

        <Hn type="h2" class="title m-top-2">Otras características de Esbelto:</Hn>
        <Hn type="h3">Soporte theme</Hn>
        <p>
            Permite escoger un tipo de tema para cambiar la web de color.
        </p>
        <Hn type="h3">Transiciones</Hn>
        <p>
            El Header y el footer principal siempre estarán fijos. Al navegar por la web, el contenedor principal hara 
            tranciciones agradables entre páginas.
        </p>
       

        <Hn type="h2" class="title m-top-2">Librerías:</Hn>
        <Hn type="h3">Mdsvex V0.9.7</Hn>
        <p>
            Esbelto usa <a class="bold" href="https://mdsvex.pngwn.io/">Mdsvex</a>. Un preprocesador de Markdown para Svelte.
        </p>
        <Hn type="h3">Font Awesome CDN V5.15.3</Hn>
        <p>
            Esbelto usa <a class="bold" href="https://fontawesome.com/">Font Awesome</a>. Una librería de iconos tipográficos.
        </p>
        <Hn type="h3">Google Fonts CDN</Hn>
        <p>
            Esbelto usa <a class="bold" href="https://fonts.google.com/">Google Fonts</a>. Una librería de fuentes tipográficas.
        </p>

        <Signage text="SvelteKit está en versión beta. No se recomienda el uso de Esbelto en producción" icon="fas fa-exclamation" class="warning"/>
    </Container>

</section>