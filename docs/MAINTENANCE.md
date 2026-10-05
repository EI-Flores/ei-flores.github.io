# Guía de mantenimiento

Esta guía describe cómo editar y publicar el portafolio. La presentación del proyecto está en el [README](../README.md).

## Archivos principales

| Archivo | Responsabilidad |
| --- | --- |
| `index.html` | Estructura y contenido inglés de respaldo. |
| `translations.js` | Textos y atributos en español e inglés. |
| `preference-init.js` | Preferencias iniciales antes de cargar los estilos. |
| `app.js` | Idioma, tema, brillo y menú móvil. |
| `styles.css` | Diseño responsivo y colores de ambos temas. |
| `favicon.svg` | Ícono del sitio. |
| `.nojekyll` | Publicación estática sin Jekyll. |

## Contenido e idiomas

Actualiza cada clave en los mapas `en` y `es` de `window.portfolioTranslations`. Conserva el texto inglés de respaldo de `index.html` para las visitas sin JavaScript.

`data-i18n` aplica texto. Los atributos `data-i18n-aria-label`, `data-i18n-title`, `data-i18n-placeholder`, `data-i18n-value` y `data-i18n-content` actualizan sus atributos correspondientes.

`data-i18n-html` admite sólo estos tokens exactos: `<br>`, `<span class="accent">`, `<span class="muted-heading">` y `</span>`. El resto se muestra como texto. No agregues etiquetas, atributos o clases adicionales.

Para agregar un proyecto, adapta un artículo `repository-card`, asigna un ID único y conserva la relación de `aria-labelledby` con su encabezado. Incluye los textos en ambos idiomas y enlaces a código y documentación verificables.

### Confidencialidad de la experiencia profesional

La sección de proyectos contiene únicamente muestras públicas y ejemplos de aprendizaje. Describe la experiencia profesional en términos generales, sin identificar empleadores, organizaciones ni sistemas internos. No agregues código, datos, capturas, enlaces internos o detalles de infraestructura de esos desarrollos.

Mantén la nota de confidencialidad en español e inglés y el texto inglés de respaldo. No atribuyas los proyectos públicos a un empleo ni menciones acuerdos específicos que no estén confirmados. Revisa también el README, los metadatos y los textos de commits y solicitudes de cambios antes de publicar.

## Preferencias y diseño

Las claves locales son `portfolio-language`, `portfolio-theme` y `portfolio-low-glow`. La primera visita usa español si el idioma principal del navegador es español; en los demás casos usa inglés. El tema inicial es oscuro. Las preferencias guardadas tienen prioridad.

Edita las variables de color y las reglas responsivas en `styles.css`. Comprueba ambos temas, el teclado, el zoom y los anchos de móvil, tableta y escritorio. Actualiza el parámetro `?v=` del archivo enlazado en `index.html` cuando cambie.

## Contacto y protección contra spam

El formulario utiliza un POST HTTPS a Formspree. El destinatario, reCAPTCHA y Formshield se administran en su panel. El identificador público del formulario no es una contraseña; no publiques claves privadas, credenciales ni claves secretas de reCAPTCHA.

El envío HTML actual admite la verificación alojada por Formspree. Si se cambia a un envío con JavaScript o a un CAPTCHA incrustado, revisa primero la [documentación de Formspree](https://formspree.io/blog/recaptcha-methods/) y la política de contenido del sitio.

Las restricciones por dominio requieren que el navegador envíe el origen de referencia. Por eso la página utiliza `strict-origin-when-cross-origin`. Consulta la [configuración por dominio](https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain/).

## Política de seguridad del contenido

La etiqueta CSP del encabezado permite scripts, estilos, imágenes y fuentes del mismo origen; bloquea conexiones iniciadas por scripts, objetos e iframes, y restringe los formularios al mismo origen y a Formspree. No permite código o estilos inline arbitrarios ni una etiqueta `base`.

Mantén la política antes de los recursos del documento. Si incorporas un proveedor externo, permite únicamente los orígenes y tipos de recursos que realmente requiere; evita comodines y permisos como `unsafe-inline` o `unsafe-eval`.

Las políticas que necesitan cabeceras HTTP, como `frame-ancestors`, no se aplican mediante una etiqueta meta. No agregues directivas que el navegador vaya a ignorar. Consulta la [documentación de CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP).

## Publicación y revisión

GitHub Pages publica desde la rama y carpeta configuradas en **Settings → Pages**. Para publicar desde la raíz, la configuración es `master` y `/ (root)`; verifica esa selección antes de modificarla.

Tras publicar, revisa el sitio, los enlaces, las traducciones, las preferencias y el menú móvil. Comprueba que la consola no muestre recursos bloqueados por CSP. Para verificar la entrega del formulario, realiza una prueba autorizada y confirma la recepción en Formspree y en el buzón.

El historial anterior fue respaldado antes de su reinicio. Los cambios nuevos pueden registrarse normalmente con la cuenta de EI-Flores, sin volver a reescribir el historial.
