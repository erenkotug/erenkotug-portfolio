# Eren Kötüğ — Developer Portfolio

Responsive, Turkish-language personal portfolio built with plain HTML, CSS, and JavaScript. It includes project case-study routes, experience and skills sections, contact links, and Turkish/English CV downloads.

## Personalize content

Edit [`content.js`](content.js) to update the biography, email, location, GitHub and LinkedIn profiles, experience, skills, and project details. Project entries link to `/projects/<slug>/`. Add the relevant repository URL to each entry when available.

The PDF files in `public/` are the supplied CV versions. Replace them there to publish future revisions while keeping the same download URLs.

## GitHub Pages

This site has no build step or package dependencies. Push the repository to GitHub, then enable GitHub Pages for the repository's `main` branch and root directory. Add the purchased domain in the Pages custom-domain setting and configure the DNS records required by GitHub Pages at your domain registrar. The site uses domain-root paths, so its links assume it is served from the custom domain root.

The project pages explain each implementation and link to its source. Running the full Python model/API, .NET and SQL Server, or ESP32 applications requires their respective runtime and services; GitHub Pages only serves the static portfolio files.
