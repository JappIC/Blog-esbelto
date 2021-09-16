import { writable } from 'svelte/store';

export const appData = writable({
    name: "Esbelto",
    logo: "/static/img/svelte-logo.svg"
});
