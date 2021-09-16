# Esbelto

Esbelto es un blog web desarrollado usando el Framework SvelteKit . Este proyecto se hace para afianzar conocimientos de Html, Css, JS y aprender el desarrollo de aplicaciones usando un FW de JS como compilador.

- SvelteKit está en versión beta. No se recomienda el uso de Esbelto en producción

## Más de 20 componentes:

Esbelto contiene más de 20 componentes preparados para reutilizar en toda la web.

- Diseño: Accordion, Articles, Comments, Headers, Tabs, Column, Container, Loading, Seo, Share, Signage, SocialMedia, VisitingCard.
- Html: Btn, Hn, Iframe, Input, InputCheck, InputRadio, Label, Select, Textarea.

<img src="/static/img/esbelto-captura.png" alt="Esbelto"/>

## Otras características de Esbelto:

La aplicación funciona como una documentación. El apartado blog de la web muestra artículos que hacen referencia a los componentes con una descripción de este y como usarlos.

- Soporte theme: Permite escoger un tipo de tema para cambiar la web de color.
- Transiciones: El Header y el footer principal siempre estarán fijos. Al navegar por la web, el contenedor principal hara tranciciones agradables entre páginas.

## Librerias y dependencias adicionales a SvelteKit:

- Mdsvex V0.9.7
- Font Awesome CDN V5.15.3
- Google Fonts CDN

## Desarrollo

Una vez instaladas las dependencias con `npm install` (o `pnpm install` o `yarn`), inicia un servidor de desarrollo:

```bash
npm run dev
# o inicia el servidor y abre la aplicación en una nueva pestaña del navegador
npm run dev -- --open
```

## Producción

Antes de crear una versión de producción de tu aplicación, instala un [adaptador] (https://kit.svelte.dev/docs#adapters) para tu entorno de destino. Luego:

```bash
npm run build
```

> Puedes obtener una vista previa de la aplicación creada con `npm run preview`, independientemente de si instaló un adaptador. Esto _no_ debes usarlo para entregar tu aplicación en producción.

## Licencia

[MIT](LICENSE.md)
