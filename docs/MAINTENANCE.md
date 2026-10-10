# Maintenance guide

This guide explains how to edit and publish the portfolio. See the [README](../README.md) for an overview of the project.

## Documentation conventions

Write the README and all project documentation in English. The website remains bilingual, with English and Spanish content.

## Main files

| File | Responsibility |
| --- | --- |
| `index.html` | Structure and fallback English content. |
| `translations.js` | Text and attributes in English and Spanish. |
| `preference-init.js` | Initial preferences applied before styles load. |
| `app.js` | Language, theme, glow, and mobile menu controls. |
| `styles.css` | Responsive layout and colors for both themes. |
| `favicon.svg` | Site icon. |
| `.nojekyll` | Static publishing without Jekyll. |

## Content and languages

Update each key in the `en` and `es` maps of `window.portfolioTranslations`. Keep the fallback English text in `index.html` for visitors who do not use JavaScript.

`data-i18n` applies text. The attributes `data-i18n-aria-label`, `data-i18n-title`, `data-i18n-placeholder`, `data-i18n-value`, and `data-i18n-content` update their corresponding attributes.

`data-i18n-html` accepts only these exact tokens: `<br>`, `<span class="accent">`, `<span class="muted-heading">`, and `</span>`. Everything else is displayed as text. Do not add other tags, attributes, or classes.

To add a project, adapt a `repository-card` article, assign a unique ID, and preserve the `aria-labelledby` relationship with its heading. Include text in both languages and verifiable links to source code and documentation.

### Professional experience and confidentiality

The projects section contains only public samples and learning examples. Describe professional experience in general terms, without identifying employers, organizations, or internal systems. Do not add source code, data, screenshots, internal links, or infrastructure details from those developments.

Keep the website's confidentiality notice in English and Spanish, along with the fallback English text. Do not attribute public projects to an employer or mention specific agreements that have not been confirmed. Also review the README, metadata, commit messages, and pull request text before publishing.

## Preferences and design

The local storage keys are `portfolio-language`, `portfolio-theme`, and `portfolio-low-glow`. On a first visit, the site uses Spanish if the browser's primary language is Spanish; otherwise, it uses English. The initial theme is dark. Saved preferences take priority.

Edit the color variables and responsive rules in `styles.css`. Check both themes, keyboard navigation, zoom, and mobile, tablet, and desktop widths. Update the `?v=` parameter of the file linked in `index.html` whenever that file changes.

## Contact and spam protection

The form sends an HTTPS POST to Formspree. The recipient, reCAPTCHA, and Formshield are managed in the Formspree dashboard. The public form identifier is not a password; do not publish private keys, credentials, or reCAPTCHA secret keys.

The current HTML submission supports verification hosted by Formspree. Before switching to JavaScript submission or an embedded CAPTCHA, review the [Formspree documentation](https://formspree.io/blog/recaptcha-methods/) and the site's content security policy.

Domain restrictions require the browser to send the referring origin. The page therefore uses `strict-origin-when-cross-origin`. See the [domain restriction settings](https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain/).

## Content Security Policy

The CSP tag in the document head allows scripts, styles, images, and fonts from the same origin; blocks script-initiated connections, objects, and iframes; and restricts form submissions to the same origin and Formspree. It does not allow arbitrary inline code or styles, or a `base` element.

Keep the policy before the document's resources. If you add an external provider, allow only the origins and resource types it actually requires; avoid wildcards and permissions such as `unsafe-inline` or `unsafe-eval`.

Policies that require HTTP headers, such as `frame-ancestors`, do not apply through a meta tag. Do not add directives that the browser will ignore. See the [CSP documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP).

## Publishing and review

GitHub Pages publishes from the branch and folder configured in **Settings → Pages**. To publish from the repository root, the settings are `master` and `/ (root)`; verify that selection before changing it.

After publishing, review the site, links, translations, preferences, and mobile menu. Check that the console does not show resources blocked by CSP. To verify form delivery, run an authorized test and confirm receipt in Formspree and the recipient's inbox.

### Branch workflow

Merge completed changes after reviewing their pull requests. Automatic deletion of merged temporary branches is enabled for this repository; verify that the branch has been removed after merging. For discarded work, close the pull request and delete its temporary branch only after confirming that no work needs to be retained.

The previous history was backed up before it was restarted. Record new changes normally with the EI-Flores account, without rewriting history again.
