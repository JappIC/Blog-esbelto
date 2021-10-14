import { writable } from 'svelte/store';

export const appData = writable({
    name: "Esbelto",
    logo: "/img/svelte-logo.svg"
});
