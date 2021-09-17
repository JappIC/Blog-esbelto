<!--
@component
Contenedor de un artículo:
Un contenedor global para los articulos individuales.
-->

<script>
    import { user } from '$lib/stores/user.js';
    import VisitingCard from '$lib/Components/Framework/VisitingCard.svelte';
    import Container from '$lib/Components/Framework/Container.svelte';
</script>

<slot />

<Container class="medium p-top p-bottom">
    <VisitingCard
        src={$user.avatar}
        name={$user.name}
        surname={$user.surname}
        lastname={$user.lastname}
        link="/profile/"
        description={$user.description}
    />
</Container>
