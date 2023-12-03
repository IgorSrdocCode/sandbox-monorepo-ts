# AIMS Clients TS

Monorepo with React apps and frontend TypeScript packages. Uses Turborepo build system.

## Useful Commands

- `pnpm build` - Build all packages, including the Storybook site
- `pnpm dev` - Run all apps locally and preview with Storybook
- `pnpm lint` - Lint all packages
- `pnpm prettier` - Check Prettier formatting in all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Folder Structure

This repository includes the following packages and applications:

- `apps/docs`: Component documentation site with Storybook
- `apps`: Each subfolder is an app as a product or other deployable user interface
- `packages/config`: Shared configuration packages for TypeScript, ESLint, Tailwind, etc.
- `packages/features`: UI components, API functions, data types, state and other files grouped by feature/business domain
- `packages/ui`: Shared React UI components

## App and Feature Development

### App Routes and Layouts

Apps enable access to features via pages that organize UI elements into layouts. Routing is used to bring users to specific pages.

Each page is in charge of the layout, but does not contain any business logic (except routing), nor data fetching or state management. Apps are responsible for the layout of elements on the page, while features hold the actual implementation for each functionality.

### Feature Folder Structure

Features provide functionality related to a certain domain or business context. They group together all necessary code for displaying specific data or enabling user to preform certain actions.

Each feature is a folder in `packages/features` (e.g. `packages/features/authentication` or `packages/features/anomalies`). Their root folder contains a `package.json`, required config files and optionally these sub-folders (or files e.g. `state.ts`, `types.ts`, `utils.ts`):

- `__generated__`: Generated types for REST API requests and GraphQL queries
- `api`: React hooks with ReactQuery for getting/sending data from/to APIs
- `ui`: React UI components
- `state`: Zustand state stores
- `types`: Custom types (other than generated from APIs)
- `utils`: Custom utils

A complex feature may split code into sub-features which follow the same folder structure.

## Data Fetching and State Management

### Fetching data

- ReactQuery
- Axios
- [graphql-request](https://github.com/jasonkuhrt/graphql-request)
- [Generate types](https://github.com/dotansimha/graphql-code-generator/tree/master/examples/react/tanstack-react-query)
- [Validate API responses](https://zod.dev/)

### Global state

- [Zustand](https://github.com/pmndrs/zustand)

### Cached Data into UI Components vs. Global Persistent Data

There are typically two ways data is consumed by the frontend:

- Data from API hook used directly in UI components
- Data from API hook goes into global state. React component that uses the request sets the data into the global store

## CSS Styling

### Tailwind

#### Flowbite

#### DaisyUI

## Monorepo Tools

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler for packages powered by esbuild
- ⚡️ [Vite](https://vitejs.dev/) — Hot Module Replacement (HMR) dev server with native ES modules and a build tool using Rollup for apps
- 📖 [Storybook](https://storybook.js.org/) — UI component environment powered by Vite

As well as a few others tools pre-configured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing

### Turborepo

[Turborepo](https://turbo.build/repo) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale.

Using Turborepo simplifies managing your monorepo, as you can have a single lint, build, test, and release process for all packages. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

### Storybook

Storybook provides us with an interactive UI playground for our components. This allows us to preview our components in the browser and instantly see changes when developing locally. This example pre-configures Storybook to:

- Use Vite to bundle stories instantly (in milliseconds)
- Automatically find any stories inside the `stories/` folder
- Support using module path aliases like `@ui` for imports
- Write MDX for component documentation pages

## Versioning & Changesets

To generate your changelog, run `pnpm changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.
1. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.
