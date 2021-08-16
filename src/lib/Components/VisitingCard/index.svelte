<script>
    import Figure from '$lib/Components/Fw/Figure.svelte'
    
    export let 
        avatar,
        name,
        surnames,
        description,
        link
    ;
</script>

<div class="visiting-card">
    <Figure
        src={avatar}
        alt="Avatar de {name} {surnames}"
    />
    <h1>
        <a sveltekit:prefetch href={link}>
            {name} {surnames}
        </a>
    </h1>
    <p>{description}</p>
</div>

<style>
    .visiting-card{
        background: var(--c-secondary);
        border: var(--border);
        box-shadow: var(--shadow);
        display: grid;
        grid-template-areas:   
            "figure title"
            "figure paragraph"
        ;
        grid-template-rows:    auto 1fr;
        grid-template-columns: 250px 1fr;
    }

    .visiting-card h1{
        grid-area: title;
        padding: var(--padding);
        border-bottom: var(--border);
    }

    .visiting-card p{
        padding: var(--padding);
        grid-area: paragraph;
        margin: 0;
    }
</style>