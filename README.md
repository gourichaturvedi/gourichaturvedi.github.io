# Gouri Chaturvedi — Portfolio

React portfolio built with Vite and deployed on GitHub Pages.

## Development

```sh
npm install
npm run dev
```

Build and prepare the root files used by the repository's GitHub Pages branch deployment:

```sh
npm run build
```

The build compiles the React app into `dist/` and syncs the generated site into the repository root. Commit the updated root `index.html`, `assets/`, `pfp.jpg`, and `FAVICON.png` when publishing changes.

## Project layout

- `app/src/` — React application and components
- `app/src/components/` — React Bits Profile Card, Waves, Logo Loop, and Spotlight Card
- `public/` — source images and favicon copied into the production site
- `scripts/publish-pages.mjs` — syncs Vite output for the existing GitHub Pages branch source

React Bits component source is from [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits), customized for this site, and used under the [MIT + Commons Clause license](REACT-BITS-LICENSE.md).
