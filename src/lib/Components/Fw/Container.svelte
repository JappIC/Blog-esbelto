
<script>
    export let clas = 'medium';
</script>

<div class="container {clas}">
    <slot />
</div>

<style>
    .container{
        margin: 0 auto;
        padding: 0 25px;
        width: 100%;
        box-sizing: border-box;
    }

    .dwarf{
        max-width:480px;
    }

    .small{
        max-width:768px;
    }

    .medium{
        max-width:1024px;
    }

    .large{
        max-width:1200px;
    }

    .huge{
        max-width:1920px;
    }

    .full{
        max-width:100%;
    }
</style>