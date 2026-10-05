# Juan Arturo Flores — Portfolio

Personal portfolio for Juan Arturo Flores, Electronics Engineer with a Master's in Applied Computing.

Site address: [ei-flores.github.io](https://ei-flores.github.io/).

The site is written in English and presents software development, field applications, automation, and selected public projects. Electronics is shown as a future direction.

## Files

- `index.html`: profile, selected projects, descriptions, contact links, and contact form.
- `styles.css`: responsive layout and dark visual design.
- `app.js`: mobile navigation and optional reduced decorative glow.
- `favicon.svg`: site icon.
- `.nojekyll`: tells GitHub Pages to serve these static files without a Jekyll build.

There is no build step and no external JavaScript dependency. The contact form uses Formspree to process messages. Open `index.html` in a browser to review changes locally.

## Update the content

On GitHub, open `index.html` and choose **Edit this file**. Find the text or link to update, make the change, and preview the differences before committing.

Selected projects live inside the `work` section. Each project has a descriptive title, its purpose, technology tags, an explanation of what it demonstrates, and direct links to the source and documentation. To add a project, copy one complete `repository-card` article, give its heading a unique ID, update the matching `aria-labelledby`, and replace all project-specific text and links.

Link to a live demo only when it exists and works. Label learning examples, experiments, and future directions accurately. A project can be useful to visitors through its source, screenshots, or documentation without having a hosted demo.

After changing CSS or JavaScript, update the corresponding `?v=` value in `index.html` to help browsers load the latest file.

## Contact form

The form in the `contact` section sends a standard HTML POST to `https://formspree.io/f/mnqyojqz`. It works without JavaScript; Formspree handles submission feedback and any configured verification. Name, email, and message are required, and the hidden `_gotcha` field helps filter spam.

The recipient email is configured in the Formspree dashboard and is not included in these website files. To change the recipient, update it inside Formspree. To replace the form, change its `action` URL in `index.html`.

Keep the recipient verified and review delivery settings, spam protection, domain restrictions, and the account's monthly allowance in Formspree. If using a domain restriction, allow `ei-flores.github.io`. The public form ID is intended to be visible; do not add account credentials or secret API keys to the repository.

To check delivery after publishing, submit a short test message and verify both the Formspree dashboard and the recipient inbox. The service accepting a submission does not itself confirm email delivery.

## Publish on GitHub Pages

Keep the runtime files together at the top level of the configured publishing folder. The repository's default branch is `master`; check **Settings > Pages** for the actual publishing branch and folder before changing deployment settings.

For branch-based publishing from the repository root, select **Deploy from a branch**, `master`, and **/ (root)**. If an existing workflow publishes the site, review that workflow before changing the publishing source.

Once the change is published, check the home page, project links, mobile menu, and reduced-glow control at the public site address. GitHub Pages can take up to ten minutes to publish changes.

See [GitHub's Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Repository history

This repository originally used a portfolio template. The current website replaces that template's application code and content. The repository retains the original license and Git history.
