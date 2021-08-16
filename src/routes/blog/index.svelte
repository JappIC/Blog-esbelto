<script context='module'>
    
    //export const prerender = true;
    const allPosts = import.meta.glob("./posts/*.{md,svx}");

    let body =[];

    for ( let path in allPosts ){
        body.push( 
            allPosts[path]().then(( {metadata} ) =>{
                return {path, metadata};
            })
        );
    }

    export const load = async ()=>{
        const posts = await Promise.all(body);
        return{
            props:{
                posts,
            },
        };
    };

</script>

<script>
    import Headers from '$lib/Components/Headers/index.svelte';
    import Article from '$lib/Components/Article/index.svelte';

    export let posts;

    // Funcion para ordedenar los artículos por fecha.
    const dateSortedPosts = posts.slice().sort((post1, post2)=>{
        return new Date(post2.metadata.date) - new Date(post1.metadata.date);
    });
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section class="page pg-blog">
    <Headers 
        titulo="Blog"
        parrafo="Muestra las publicaciones del blog"
    />

    <!--{JSON.stringify(posts)}-->
    
    <section class="bucle-posts">
        {#each dateSortedPosts as { path, metadata:{ id, title, description, userName, tags, img, date, category, visits, comments, likes }} }
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
    section.pg-blog{
        display: grid;
    }

    .pg-blog .bucle-posts{
        display: grid;
        /*grid-template-columns: repeat(2, 1fr);*/
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        grid-row-gap:    2rem;
        grid-column-gap: 2rem;
        padding: 2rem;
    }

    /* Adaptación a movil */
    @media (max-width: 767px) {
        .pg-blog .bucle-posts{
            grid-template-columns: 1fr;
        }
    }
</style>