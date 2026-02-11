# Task Management App (React + TypeScript + Auth0)

A modern **Task Management Web App** built with **React**, **TypeScript**, **Hooks** **React Router v6**, and **Auth0 authentication**.  
No API or database — all data is stored in LocalStorage.
Features **CRUD operations**, persistent storage, and a clean, responsive UI.

## Features

- User authentication with **Auth0**
- Protected routes for tasks
- Task management:
  - Task Dashboard, Details, Create/Edit/Delete tasks
  - Task Status (completed/pending)
- Form Validation
- Persistent storage using localStorage
- Auth0 login/logout & protected routes
- Profile page showing Auth0 user information
- TypeScript types & hooks
- Responsive and clean UI

## Hooks Used

- useState: manage form fields
- useEffect: sync LocalStorage
- useContext: access global data
- Custom Hook: useLocalStorage

## Setup

1. Clone repo
2. `npm install`
3. Configure Auth0 domain/client ID in `Auth0ProviderWithNavigate.tsx`
4. `npm run dev` (Vite) or `npm start` (CRA)

## Folder Structure

- src/components → reusable UI
- src/pages → app pages
- src/context → TaskContext
- src/hooks → custom hooks
- src/types → TS interfaces
- src/utils → validation
- src/auth → Auth0 provider

## Auth0 Config

- Single Page App
- Copy Domain & Client ID
- Update provider

## 🛠 Technologies

- **React** + **TypeScript**
- **React Router v6**
- **Auth0 React SDK**
- **Context API** for state management
- **Custom hooks** for tasks
- **LocalStorage** persistence
- **CSS Modules / Global CSS** for styling

## License

MIT

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
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
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
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
