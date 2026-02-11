//src / routes.tsx;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * PrivateRoute component
 * - Wraps protected routes and redirects to /login when not authenticated.
 * - Shows a loading state while auth is initializing.
 * - routes.tsx (React Router v6 routes with a PrivateRoute wrapper that uses Auth0). Both are TypeScript + React and match the hooks/context structure we've been using.
 */
// Private route wrapper
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <p>Loading...</p>;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}; // If logged in, show the page    // If not logged in, redirect to home

/**
 * AppRoutes - exported default Routes component
 * - Public routes: /login, /
 * - Protected routes: /create, /edit/:id, /task/:id, /profile
 */
// Routes setup
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Default route now redirect to / → /dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/login" element={<Login />} />
      {/* Protected pages */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/create"
        element={
          <PrivateRoute>
            <CreateTask />
          </PrivateRoute>
        }
      />

      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        }
      />

      <Route
        path="/task/:id"
        element={
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      {/* Fallback: any unknown path -> dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
