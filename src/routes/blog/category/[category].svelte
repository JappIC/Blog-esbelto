<!--
@component
Página Blog category:
Una página para mostrar todos los artículos por categorías.
-->

<script context='module'>
    
    //export const prerender = true;
    const allPosts = import.meta.glob("../posts/*.{md,svx}");

    let body =[];

    for ( let path in allPosts ){
        body.push( 
            allPosts[path]().then(( {metadata} ) =>{
                return {path, metadata};
            })
        );
    }

    export const load = async ({page})=>{
        const posts = await Promise.all(body);
        const category = page.params.category;

        const filteredPosts = posts.filter((post) =>{
            return post.metadata.category.includes(category);
        });

        return{
            props:{
                filteredPosts,
                category
            },
        };
    };

</script>

<script>
    import Header from '$lib/Components/Framework/Headers/Header.svelte';
    import Article from '$lib/Components/Framework/Articles/Article.svelte';
    import Loading from '$lib/Components/Framework/Loading.svelte';
    import Seo from '$lib/Components/Framework/Seo.svelte';

    export let filteredPosts;
    export let category;
</script>

<Seo 
    title={`Resultado de ${category}`}
    description={`Muestra los resultado de ${category}`}
    type="website"
    img="/static/img/svelte-logo.svg"
/>

<section class="pg-categories pagina">
    
    <Header title={`Articulos con la categoria ${category}`}>
        <p>Muestra las publicaciones por categoría</p>
    </Header>

    <!--{JSON.stringify(posts)}-->
    <section class="bucle-posts">
        {#each filteredPosts as { path, metadata:{  id, title, description, userName, tags, img, date, category }} }
            <Article 
                id={id}
                title={title.substring(0, 30)}
                description={description.substring(0, 130)+`...`}
                userName={userName}
                link={`/blog/${path.replace("./", "").replace(".md", "").replace(".svx", "")}`}
                tags={tags}
                img={img}
                date={date}
                category={category}
                bucle = true
            />
        {:else}
            <Loading />
        {/each}
    </section>
    
</section>

<style>
    section.pg-categories{
        display: grid;
    }

    .pg-categories .bucle-posts{
        display: grid;
        /*grid-template-columns: repeat(2, 1fr);*/
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        grid-row-gap:    2rem;
        grid-column-gap: 2rem;
        padding: 2rem;
    }

    /* Adaptación a movil */
    @media (max-width: 767px) {
        .pg-categories .bucle-posts{
            grid-template-columns: 1fr;
            padding: 0rem;
        }
    }
</style>