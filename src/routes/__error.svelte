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
    import Header from '$lib/Components/Framework/Headers/Header.svelte';
    export let error;
    export let status;
</script>

<section class="page pg-error">
    <Header 
        title="Un {error.name} {status}"
        text={error.message}
    />
</section>