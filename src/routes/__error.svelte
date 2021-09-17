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
    export let error;
    export let status;
</script>

<section class="page pg-error">
    <Header title="Un {error.name} {status}"/>
    <Container class="medium" transition=true>
        <p>{error.message}</p>
    </Container>
</section>