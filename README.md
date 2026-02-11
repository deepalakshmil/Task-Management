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

## Technologies

- **React** + **TypeScript**
- **React Router v6**
- **Auth0 React SDK**
- **Context API** for state management
- **Custom hooks** for tasks
- **LocalStorage** persistence
- **CSS Modules / Global CSS** for styling

## License

MIT

