# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # React + TypeScript + Vite

    This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

    ## Monorepo Layout (suggested)

    ```
    ├── apps/
    │   ├── web/        # Web client application (React + Vite)
    │   │   ├── public/
    │   │   ├── src/
    │   │   │   ├── main.tsx
    │   │   │   ├── App.tsx
    │   │   │   └── components/
    │   │   ├── index.html
    │   │   └── package.json
    │   ├── mobile/     # Mobile client application (React Native / Expo)
    │   │   ├── src/
    │   │   │   ├── App.tsx
    │   │   │   └── screens/
    │   │   ├── android/
    │   │   ├── ios/
    │   │   └── package.json
    │   └── api/        # Backend API service (Node/Express or Fastify)
    │       ├── src/
    │       │   ├── index.ts
    │       │   ├── routes/
    │       │   └── controllers/
    │       ├── package.json
    │       └── tsconfig.json
    ├── packages/       # Shared packages/libs (UI, utils, types)
    │   ├── ui/
    │   │   └── src/
    │   └── utils/
    │       └── src/
    ├── scripts/        # repo-level scripts (build, deploy helpers)
    ├── .github/        # CI / PR workflows
    ├── package.json    # workspace root (workspaces: ["apps/*","packages/*"])
    ├── pnpm-workspace.yaml OR turbo.json / nx.json
    └── README.md
    ```

    This repository was scaffolded as a single-app Vite project. If you'd like, I can scaffold the `apps/` and `packages/` structure in this repo with minimal placeholders and add workspace config (`pnpm-workspace.yaml`) so you can convert this into a monorepo.

    ---

    ## React Compiler

    The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

    ## Expanding the ESLint configuration

    If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

    ```js
    export default defineConfig([
      globalIgnores(['dist']),
      {
        files: ['**/*.{ts,tsx}'],
        extends: [
          // Other configs...

          // Remove tseslint.configs.recommended and replace with this
          tseslint.configs.recommendedTypeChecked,
          // Alternatively, use this for stricter rules
          tseslint.configs.strictTypeChecked,
          // Optionally, add this for stylistic rules
          tseslint.configs.stylisticTypeChecked,

          // Other configs...
        ],
        languageOptions: {
          parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
          },
          // other options...
        },
      },
    ])
    ```

    You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

    ```js
    // eslint.config.js
    import reactX from 'eslint-plugin-react-x'
    import reactDom from 'eslint-plugin-react-dom'

    export default defineConfig([
      globalIgnores(['dist']),
      {
        files: ['**/*.{ts,tsx}'],
        extends: [
          // Other configs...
          // Enable lint rules for React
          reactX.configs['recommended-typescript'],
          // Enable lint rules for React DOM
          reactDom.configs.recommended,
        ],
        languageOptions: {
          parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
          },
          // other options...
        },
      },
    ])
    ```
