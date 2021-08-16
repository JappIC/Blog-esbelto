import { writable } from 'svelte/store';

export const theme = writable([
	{ value: "default", name:"Normal" },
    { value: "blue", name:"Azul" },
    { value: "dark", name:"Oscuro" }
]);

export const selectedTheme = writable();


