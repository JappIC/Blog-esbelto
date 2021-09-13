import { writable } from 'svelte/store';

export const user = writable({
    name: "Nombre",
    surname: "Apellido",
    lastname: "Ape2",
    email: "miemail@gmail.com",
    phone: "666555444",
    birthday: "1980-05-25",
    gender: "men",
    web: "https://www.miweb.com",
    github: "https://www.github.com",
    linkedin: "https://www.linkedin.com",
    avatar: "https://img.europapress.es/fotoweb/fotonoticia_20180424164056_420.webp",
    description: `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido.`
});
