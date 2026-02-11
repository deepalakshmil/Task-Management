import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

/**
 * Auth0ProviderWithNavigate
 * ------------------------------------
 * This component wraps the Auth0Provider from @auth0/auth0-react
 * and integrates React Router's navigation so that
 * after login/logout, the app redirects properly.
 */

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();

  // Change these Auth0 settings for your own Auth0 app
  const domain = import.meta.env.VITE_AUTH0_DOMAIN!; // Environment Variables to hide the credentials
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID!;
  const redirectUri = "http://localhost:5173/dashboard"; // matches Auth0 dashboard

  /**
   * handleRedirectCallback
   * -----------------------
   * Runs after login — Auth0 returns to your app
   * and this function redirects the user to their original page.
   */

  if (!domain || !clientId || !redirectUri) {
    return <div>Missing Auth0 environment variables</div>;
  }

  const onRedirectCallback = (appState?: { returnTo?: string }) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
