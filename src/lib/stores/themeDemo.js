// https://www.youtube.com/watch?v=jOOrWeYfmlQ&t=604s
// https://www.youtube.com/watch?v=Tlxrotj_rlE
import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = JSON.parse( browser && localStorage.getItem("selectedTheme")) || [
	{ value: "default", name:"Normal" },
    { value: "blue", name:"Azul" },
    { value: "dark", name:"Oscuro" }
];

export const selectedTheme = writable( browser && theme );

selectedTheme.subscribe(
    (val) => browser && (localStorage.selectedTheme = JSON.stringify(val))
);