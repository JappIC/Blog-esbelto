import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = writable([
	{ value: "default", name:"Normal" },
    { value: "blue", name:"Azul" },
    { value: "dark", name:"Oscuro" }
]);

export const selectedTheme = writable();