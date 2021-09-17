<!--
@component
Página error:
Una página para mostrar los errores.
-->

<script context='module'>
    export const load = ({ error, status }) => {
        return{
            props:{
                error,
                status,
            },
        };
    };
</script>

<script>
    import Container from '$lib/Components/Framework/Container.svelte';
    import Header from '$lib/Components/Framework/Headers/Header.svelte';
    import Seo from '$lib/Components/Framework/Seo.svelte';

    export let error;
    export let status;
</script>

<Seo 
    title={error.name}
    description={error.name}
    type="website"
    img="https://mundowin.com/wp-content/uploads/2019/06/Error-message-1.jpg"
/>

<section class="page pg-error">
    <Header title="Un {error.name} {status}"/>
    <Container class="medium" transition=true>
        <p>{error.message}</p>
    </Container>
</section>