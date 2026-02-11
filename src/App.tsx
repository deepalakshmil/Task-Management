import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import { TaskProvider } from "./context/TaskProvider";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        {/* keep your Auth0 wrapper */}
        <TaskProvider>
          {/* // for global tasks */}
          <Navbar />
          <AppRoutes />
        </TaskProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
};

export default App;

//BrowserRouter =>	Provides React Router context for routing (<Link> and <Routes> work)
//Auth0ProviderWithNavigate =>	Provides authentication context and handles login state + navigation
