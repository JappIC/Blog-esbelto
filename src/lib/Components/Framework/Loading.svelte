<!--
    Componente Loading:
    Un simple componente para usar una animación de espera
    Recurso: https://animista.net/
-->

<script>
    // No contiene JS por el momento
</script>

<div class="loading">
    <i class="fas fa-folder"></i>
    <div class="text">Cargando</div>
</div>

<style>
    .loading{
        margin: 0 auto;
        text-align: center;
        font-size: 50px;
    }

    .text{
        font-size: 1.8rem;
        font-weight: bold;
        text-align: center;

        -webkit-animation: focus-in-contract 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate both;
	            animation: focus-in-contract 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite alternate both;
    }

    i{
        -webkit-animation: slide-in-blurred-top 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite alternate both;
	        animation: slide-in-blurred-top 2s cubic-bezier(0.230, 1.000, 0.320, 1.000) infinite alternate both;
    }
    
    @-webkit-keyframes focus-in-contract {
        0% {
            letter-spacing: 1em;
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }
        80% { color: var(--c-text); }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
            color: var(--c-company);
        }
    }
    @keyframes focus-in-contract {
        0% {
            letter-spacing: 1em;
            -webkit-filter: blur(12px);
                    filter: blur(12px);
            opacity: 0;
        }80% { color: var(--c-text); }
        100% {
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
            color: var(--c-company);
        }
    }


    @-webkit-keyframes slide-in-blurred-top {
        0% {
            -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            -webkit-transform-origin: 50% 0%;
                    transform-origin: 50% 0%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
        }
        80% { color: var(--c-text);}
        100% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
                    transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
            color: var(--c-company);
        }
    }
    @keyframes slide-in-blurred-top {
        0% {
            -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
                    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            -webkit-transform-origin: 50% 0%;
                    transform-origin: 50% 0%;
            -webkit-filter: blur(40px);
                    filter: blur(40px);
            opacity: 0;
            
        }
        80% { color: var(--c-text);}
        100% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
                    transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 50%;
                    transform-origin: 50% 50%;
            -webkit-filter: blur(0);
                    filter: blur(0);
            opacity: 1;
            color: var(--c-company);
            
        }
    }


</style>