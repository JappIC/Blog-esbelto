<!--
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
    /* Componentes */
    import { Tabs, TabList, TabPanel, Tab } from '$lib/Components/Framework/Tabs/tabs.js';
    import { List } from '$lib/Components/Framework/Html/html.js';
    import Headers from '$lib/Components/Framework/Headers/Header.svelte';
    import Accordion from '$lib/Components/Framework/Accordion/accordion.js'
    import Container from '$lib/Components/Framework/Container.svelte';
import Hn from '$lib/Components/Framework/Html/Hn.svelte';

    let names= [
        'Javier', 'Sara'
    ];

    let activeTitle = "Header One";
    const handleAccordionChange = event => {
        activeTitle = event.detail;
    };

</script>

<svelte:head>
	<title>Esbelto</title>
</svelte:head>

<section class="page pg-home">
    <Headers title="ESBELTO">
        <p>Una web desarrollada con el FW Svelte Kit</p>
    </Headers>
    <Hn>Pepito</Hn>

    <Container class="medium padding" transition=true>
        <Accordion on:change={handleAccordionChange} value={activeTitle}>
            <Accordion.Section key={1} title={'Header One'}>
                No matter what has happened to you in the past or what is going on in your
                life right now.
            </Accordion.Section>
            <Accordion.Section key={2} title={'Header Two'}>
                Infuse your life with action. Don't wait for it to happen. Make it happen.
                Make your own future. Make your own hope. Make your own love. And whatever
                your beliefs, honor your creator.
            </Accordion.Section>
            <Accordion.Section key={3} title={'Header Three'}>
                I believe that a trusting attitude and a patient attitude go hand in hand.
                You see, when you let go and learn to trust God, it releases joy in your
                life. And when you trust God, you're able to be.
            </Accordion.Section>
        </Accordion>

        <!-- Componente FW Lista -->
        <List class="li-none" list={names}/>

        <!-- Componente Tab -->
        <Tabs>
            <TabList>
                <Tab>one</Tab>
                <Tab>two</Tab>
            </TabList>
        
            <TabPanel>
                <h2>First panel</h2>
            </TabPanel>
        
            <TabPanel>
                <h2>Second panel</h2>
            </TabPanel>
        </Tabs>
        <!--{JSON.stringify(data)}-->
    </Container>

</section>