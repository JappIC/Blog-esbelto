<!--
@component
Página profile:
Una página para mostrar el perfil de usuario.
-->

<script context="module">
	export const prerender = true;

    export const load = async ({page})=>{
        const url = page.path;

        return {
            props:{
                url
            },
        };
    };
</script>

<script>
    import { user } from '$lib/stores/user.js';
    import Container from "$lib/Components/Framework/Container.svelte";
    import Headers from "$lib/Components/Framework/Headers/Header.svelte";
    import {Label, Input, InputCheck, InputRadio, Textarea } from "$lib/Components/Framework/Html/html.js";
    import Column from '$lib/Components/Framework/Column.svelte';
    import SocialMedia from '$lib/Components/Framework/SocialMedia.svelte';
    import Signage from '$lib/Components/Framework/Signage.svelte';
    import Seo from '$lib/Components/Framework/Seo.svelte';

    let edit = false;

    // Formatemos la fecha de nacimiento
    let date = new Date($user.birthday).toLocaleDateString("es-ES");
</script>

<Seo 
    title={$user.name}
    description={$user.description}
    type="website"
    img={$user.avatar}
/>

<Headers
    title={`${$user.name} ${$user.surname} ${$user.lastname}`}
>
    {#if edit}
        <Textarea bind:value={$user.description} class="text-justify m-top"/>
    {:else}
        <p class="text-justify m-top">{$user.description}</p>
    {/if}
    
    <SocialMedia github={$user.github} web={$user.web} linkedin={$user.linkedin}/>
</Headers>

<Container class="medium padding" transition=true>
    <Signage text="Puedes activar el editor y ver los cambios cada vez que modificas un parámetro:" class="info m-bottom">
        <Label forr="edit" icon="far fa-edit"/>
        <InputCheck id="edit" bind:checked={edit} />
    </Signage>
    
    <Column class="col-2">
        <div>
            <div class="info">
                {#if edit}
                    <Label forr="name" icon="far fa-address-card" text="Nombre"/>
                    <Input type="text" id="name" bind:value={$user.name} class="bold"/>
                {:else}
                    <span><i class="far fa-address-card"></i> Nombre</span>
                    <span>{$user.name}</span>
                {/if}
            </div>

            <div class="info">
                {#if edit}
                    <Label forr="surname" icon="far fa-address-card" text="1º Apellido"/>
                    <Input id="surname" type="text" bind:value={$user.surname} class="bold"/>
                {:else}
                    <span><i class="far fa-address-card"></i> 1º Apellido</span>
                    <span>{$user.surname}</span>
                {/if}
            </div>
            
            <div class="info">
                {#if edit}
                    <Label forr="lastname" icon="far fa-address-card" text="2º Apellido"/>
                    <Input id="lastname" type="text" bind:value={$user.lastname} class="bold"/>
                {:else}
                    <span><i class="far fa-address-card"></i> 2ª Apellido</span>
                    <span>{$user.lastname}</span>
                {/if}
            </div>
            
            <div class="info">
                {#if edit}
                    <Label forr="email" icon="fas fa-at" text="Email"/>
                    <Input id="email" type="email" bind:value={$user.email} class="bold"/>
                {:else}
                    <span><i class="fas fa-at"></i> Email</span>
                    <span>{$user.email}</span>
                {/if}
            </div>
            
            <div class="info">
                {#if edit}
                    <Label forr="phone" icon="fas fa-mobile-alt" text="Teléfono"/>
                    <Input id="phone" type="number" bind:value={$user.phone} class="bold"/>
                {:else}
                    <span><i class="fas fa-mobile-alt"></i> Teléfono</span>
                    <span>{$user.phone}</span>
                {/if}
            </div>  
        </div>

        <div>
            <!-- Da un error
            <div class="info">
                <Label forr="avatar" icon="fas fa-user-plus" text="Avatar"/>
                <Input id="avatar" type="file" bind:value={$user.avatar}/>
            </div>
            -->
               
            <div class="info">
                {#if edit}
                    <Label forr="birthday" icon="fas fa-birthday-cake" text="Cumpleaños"/>
                    <Input id="birthday" type="date" bind:value={$user.birthday} class="bold"/>
                {:else}
                    <span><i class="fas fa-birthday-cake"></i> Cumpleaños</span>
                    <span>{date}</span>
                {/if}
            </div>
            
            <div class="info">
                {#if edit}
                    <Label forr="gender" icon="fas fa-venus-mars" text="Género"/>
                    <div class="radio-option">
                        <Label forr="woman" icon="fas fa-venus" text="M"/>
                        <InputRadio id="woman" name="gender" bind:group={$user.gender} value="woman"/>
                        <Label forr="men" icon="fas fa-mars" text="H"/>
                        <InputRadio id="men" name="gender" bind:group={$user.gender} value="men"/>
                        <Label forr="other" icon="fas fa-mars" text="Otro/a"/>
                        <InputRadio id="other" name="gender" bind:group={$user.gender} value="other"/>
                    </div>
                {:else}
                    <span><i class="fas fa-venus-mars"></i> Género</span>
                    <span>{$user.gender}</span>
                {/if}
            </div>
            
            <div class="info">
                {#if edit}
                    <Label forr="web" icon="fas fa-link" text="Web"/>
                    <Input id="web" type="url" bind:value={$user.web} class="bold"/>
                {:else}
                    <span><i class="fas fa-link"></i> Web</span>
                    <span class="word-break">{$user.web}</span>
                {/if}
            </div>
            
            <div class="info">
                {#if edit}
                    <Label forr="github" icon="fab fa-github" text="Github"/>
                    <Input id="github" type="url" bind:value={$user.github} class="bold"/>
                {:else}
                    <span><i class="fab fa-github"></i> Github</span>
                    <span class="word-break">{$user.github}</span>
                {/if}
            </div>

            <div class="info">
                {#if edit}
                    <Label forr="linkedin" icon="fab fa-linkedin" text="linkedin"/>
                    <Input id="linkedin" type="url" bind:value={$user.linkedin} class="bold"/>
                {:else}
                    <span><i class="fab fa-linkedin s-nDdb4lYYbNxg"></i> linkedin</span>
                    <span class="word-break">{$user.linkedin}</span>
                {/if}
            </div>

        </div>
    </Column>
</Container>

<style>
    .info{
        display: grid;
        grid-template-columns: 140px auto;
        grid-gap: 20px;
        align-items: center;
        margin-bottom: 15px;
    }

    .info>*:nth-child(even){
        font-weight: bold;
    }

    span{
        margin: 0;
        padding: 7px 0px;
    }

    span:nth-child(even){
        padding: 6px 6px;
    }

    .radio-option{
        display: flex;
        align-items: center;
        grid-column-gap: 5px;
        font-weight: normal !important;
    }

    .edit{
        align-items: center;
        display: flex;
        grid-gap: 5px;
    }

    /* Adaptación a movil */
    @media (min-width: 0px) and (max-width: 767px) {

    }

</style>