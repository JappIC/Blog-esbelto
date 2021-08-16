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

    /**
     * Revisar tranciciones de rutas en un solo componente https://dev.to/evanwinter/page-transitions-with-svelte-kit-35o6
     */

    /* Componentes */
    import Headers from '$lib/Components/Headers/index.svelte';
    import Lista from '$lib/Components/Fw/Lista.svelte';
    import Figure from '$lib/Components/Fw/Figure.svelte';
    import SocialMedia from '$lib/Components/SocialMedia/index.svelte';
    import VisitingCard from '$lib/Components/VisitingCard/index.svelte';
    import { Tabs, TabList, TabPanel, Tab } from '$lib/Components/Fw/Tabs/tabs.js';
    import Comments from '$lib/Components/Comments/index.svelte';
    import Boton from '$lib/Components/Fw/Boton.svelte';
    import Container from '$lib/Components/Fw/Container.svelte';
    import Checkbox from '$lib/Components/Fw/Inputs/Checkbox.svelte';
    import Color from '$lib/Components/Fw/Inputs/Color.svelte';
import File from '$lib/Components/Fw/Inputs/File.svelte';

    let nombres= [
        'Javier', 'Sara'
    ];

</script>

<svelte:head>
	<title>Esbelto</title>
</svelte:head>

<section class="page pg-home">
    
    <!--Slot Headers-->
    <Headers 
        titulo="ESBELTO"
        parrafo="Una web desarrollada con el FW Svelte Kit"
    >
    </Headers>

    <Container clas="medium">
        <Checkbox />
        <Color />
        <File />
        <input type="date">
        <input type="email">
        <input type="image" src="" alt="">
        <input type="number">
        <input type="password">
        <input type="radio">
        <input type="range" min="0" max="100" value="" step="1">
        <input type="reset">
        <input type="search">
        <input type="submit">
        <input type="text">
        <input type="url">
    </Container>

    <Boton />
    
    <VisitingCard 
        avatar="./static/img/avatar.jpg"
        name="Pepito"
        surnames="Grillo Paredes"
        link="/profile/my-profile"
        description="Una descripción del usuario grillo paredes"
    />

    <SocialMedia 
        facebook="https://www.facebook.com"
        twitter="https://twitter.com/"
        linkedin="https://www.linkedin.com/"
        twitch="https://www.twitch.tv/"
        whatsapp="https://web.whatsapp.com/"
        discord="https://discord.com/"
        telegram="https://telerium.me/"
    />
    
    <!-- Componente FW Lista -->
    <Lista clas="li-none" lista={nombres}/>

    <!-- Componente Tab -->
    <Tabs>
        <TabList>
            <Tab>one</Tab>
            <Tab>two</Tab>
            <Tab>three</Tab>
            <Tab>pepito</Tab>
        </TabList>
    
        <TabPanel>
            <h2>First panel</h2>
        </TabPanel>
    
        <TabPanel>
            <h2>Second panel</h2>
        </TabPanel>
    
        <TabPanel>
            <h2>Third panel</h2>
        </TabPanel>

        <TabPanel>
            <h2>Pepito</h2>
        </TabPanel>
    </Tabs>
    <!--{JSON.stringify(data)}-->

    <Comments />

</section>

<style>
	
</style>
