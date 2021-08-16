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
        const tag = page.params.tag;

        const filteredPosts = posts.filter((post) =>{
            return post.metadata.tags.includes(tag);
        });

        return{
            props:{
                filteredPosts,
                tag
            },
        };
    };

</script>

<script>
    import Headers from '$lib/Components/Headers/index.svelte';
    import Article from '$lib/Components/Article/index.svelte';

    export let filteredPosts;
    export let tag;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="page pg-tags">
    
    <Headers 
        titulo={`Articulos con la tag ${tag}`}
        parrafo="Muestra las publicaciones por tags"
    />

    <!--{JSON.stringify(posts)}-->
    
    <section class="bucle-posts">
        {#each filteredPosts as { path, metadata:{  id, title, description, userName, tags, img, date, category, visits, comments, likes }} }
            <Article 
                id={id}
                title={title.substring(0, 30)+`...`}
                description={description.substring(0, 130)+`...`}
                userName={userName}
                link={`/blog/${path.replace("./", "").replace(".md", "").replace(".svx", "")}`}
                tags={tags}
                img={img}
                date={date}
                category={category}
                visits={visits}
                likes={likes}
                comments={comments}
            />
        {:else}
            <div>No se encontraron datos</div>
        {/each}
    </section>
    
</section>

<style>
    section.pg-tags{
        display: grid;
    }

    .pg-tags .bucle-posts{
        display: grid;
        /*grid-template-columns: repeat(2, 1fr);*/
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        grid-row-gap:    2rem;
        grid-column-gap: 2rem;
        padding: 2rem;
    }

    /* Adaptación a movil */
    @media (max-width: 767px) {
        .pg-tags .bucle-posts{
            grid-template-columns: 1fr;
        }
    }
</style>