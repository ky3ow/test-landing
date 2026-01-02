# Music Cultural Organization Website

This is a static site for a non-profit cultural organization focused on music. It is built with Astro and integrated with Sveltia CMS to allow editors to update content without developer intervention.

## Technologies Used

- **Astro**: Static site generator for fast, content-focused websites
- **Sveltia CMS**: Headless CMS for managing content via GitHub, enabling non-technical editors to update the site

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── admin/
│       └── config.yml  # Sveltia CMS configuration
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   ├── content/
│   │   ├── pages/
│   │   │   └── test.md
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   ├── admin.astro
│   │   ├── index.astro
│   │   └── test.astro
│   └── styles/
│       └── global.css
├── content.config.ts
├── astro.config.mjs
├── package.json
└── README.md
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Content is managed via Sveltia CMS, with configurations in `public/admin/config.yml`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

For Sveltia CMS documentation, visit [https://sveltia-cms.pages.dev/](https://sveltia-cms.pages.dev/).
