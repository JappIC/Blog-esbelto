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
    import Headers from '$lib/Components/Headers/index.svelte';
    export let error;
    export let status;
</script>

<section class="page pg-error">
    <Headers 
        titulo="Un {error.name} {status}"
        parrafo={error.message}
    />
</section>