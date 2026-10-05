# Juan Arturo Flores — Portafolio

Sitio personal de Juan Arturo Flores, Ingeniero en Electrónica con Maestría en Computación Aplicada.

**Sitio web:** [ei-flores.github.io](https://ei-flores.github.io/).

Presenta desarrollo de software, aplicaciones móviles, automatización y proyectos públicos. La electrónica se muestra como una línea de exploración futura.

## Funciones

- Contenido en español e inglés, con botones de banderas y etiquetas **ES / EN** para elegir el idioma.
- Temas claro y oscuro, con un control independiente para reducir el brillo decorativo.
- Preferencias de idioma, tema y brillo guardadas en el navegador cuando el almacenamiento está disponible.
- Diseño responsivo para teléfonos, tabletas y computadoras; navegación móvil y controles accesibles mediante teclado.
- Íconos SVG integrados para identificar secciones, proyectos y controles, sin bibliotecas externas de íconos.

La primera visita usa el español cuando el idioma principal del navegador es español; en los demás casos usa inglés. El tema inicial es oscuro. Las selecciones del visitante tienen prioridad en visitas posteriores.

El sitio usa HTML, CSS y JavaScript sin dependencias externas de JavaScript ni proceso de compilación. El formulario de contacto se procesa mediante Formspree.

## Archivos

| Archivo | Función |
| --- | --- |
| `index.html` | Estructura, navegación, proyectos, enlaces y formulario. |
| `translations.js` | Textos y atributos traducidos al español y al inglés. |
| `preference-init.js` | Aplica las preferencias iniciales antes de dibujar la página. |
| `app.js` | Selector de idioma, tema, brillo y menú móvil. |
| `styles.css` | Diseño responsivo, temas y estados de los controles. |
| `favicon.svg` | Ícono del sitio. |
| `.nojekyll` | Permite servir los archivos estáticos directamente con GitHub Pages. |
| `LICENSE` | Licencia MIT conservada del repositorio original. |

Se retiraron el código, estilos, bibliotecas, datos de perfil y logo de la plantilla anterior, además de sus plantillas de incidencias; las incidencias están deshabilitadas en este repositorio.

## Revisar localmente

Abre `index.html` en un navegador. Para una revisión equivalente a la publicación, sirve esta carpeta con un servidor HTTP local y abre su dirección en el navegador. No hace falta instalar dependencias del sitio.

Comprueba ambos idiomas y temas, el menú móvil, los enlaces de los proyectos y el formulario. Prueba también la navegación con teclado y el zoom del navegador. Si el navegador bloquea el almacenamiento local, los controles siguen funcionando durante la visita, aunque su selección puede no guardarse.

Las claves de preferencias son `portfolio-language`, `portfolio-theme` y `portfolio-low-glow`. Para repetir una primera visita, borra esas claves del almacenamiento del sitio o abre una sesión privada nueva.

## Actualizar contenido y traducciones

Los textos traducidos se mantienen en `window.portfolioTranslations` dentro de `translations.js`, con un mapa `en` y otro `es`. Al cambiar contenido, actualiza ambos valores de la misma clave; por ejemplo, `navigation.about` identifica el texto de la navegación hacia la sección personal.

En `index.html`, `data-i18n="clave"` traduce texto y `data-i18n-html="clave"` admite el marcado fijo de encabezados, como `<br>` y `<span>`. Los atributos `data-i18n-aria-label`, `data-i18n-title`, `data-i18n-placeholder`, `data-i18n-value` y `data-i18n-content` traducen sus respectivos atributos. Usa sólo el marcado definido por el sitio en las traducciones HTML.

Mantén el texto inglés de respaldo en `index.html` sincronizado con las traducciones para que el sitio siga siendo legible si JavaScript no está disponible. Los nombres de tecnologías y repositorios pueden mantenerse iguales en los dos idiomas.

Los proyectos están dentro de la sección `work`. Para agregar uno, copia un artículo `repository-card`, asigna un ID único a su encabezado, actualiza su `aria-labelledby`, reemplaza enlaces y etiquetas, y agrega sus textos en los dos idiomas. Publica un enlace a demostración sólo cuando exista y funcione.

En `styles.css`, las variables de color de cada tema controlan el fondo, los paneles, el texto, los bordes y los acentos. Después de modificar un archivo enlazado, actualiza su parámetro `?v=` en `index.html` para facilitar que los navegadores carguen la versión reciente.

## Formulario de contacto

El formulario envía una solicitud HTML POST a `https://formspree.io/f/mnqyojqz`. Nombre, correo y mensaje son obligatorios; el campo oculto `_gotcha` ayuda a filtrar spam. El envío funciona sin JavaScript y Formspree muestra su respuesta.

El destinatario se configura en el panel de Formspree. Para cambiarlo, actualiza esa configuración; para usar otro formulario, reemplaza `action` en `index.html`. El identificador público del formulario puede aparecer en el código. No agregues credenciales ni claves privadas al repositorio.

Después de publicar, envía un mensaje de prueba y confirma su llegada tanto en Formspree como en el buzón del destinatario.

## Publicar en GitHub Pages

La rama predeterminada del repositorio es `master`. Revisa **Settings > Pages** para confirmar la rama y carpeta de publicación. Para servir el sitio desde la raíz mediante una rama, usa **Deploy from a branch**, `master` y **/ (root)**. Mantén los archivos del sitio juntos en esa carpeta.

Una vez publicado, revisa el [sitio público](https://ei-flores.github.io/) en móvil y computadora. Consulta la [documentación de publicación de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) para la configuración del servicio.

## Mantenimiento e historial

El sitio actual lo mantiene [EI-Flores](https://github.com/EI-Flores). GitHub ya identifica este repositorio como independiente, pero conserva el historial de la antigua plantilla. El código actual y las preferencias del sitio son independientes de ese historial.

La lista **Contributors** de GitHub se obtiene de los autores de los commits de la rama predeterminada. Eliminar archivos antiguos o actualizar este README no elimina esas contribuciones históricas. Para iniciar un historial que sólo contenga cambios de EI-Flores habría que crear un historial nuevo; esa operación reemplaza el historial publicado y requiere una decisión separada y un respaldo. Esta actualización conserva el historial y la licencia existentes.

Consulta la [documentación de GitHub sobre Contributors](https://docs.github.com/es/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors).
