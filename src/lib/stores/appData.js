import { writable } from 'svelte/store';

export const appData = writable({
    name: "ESBELTO",
    logo: "/img/svelte-logo.svg"
});
